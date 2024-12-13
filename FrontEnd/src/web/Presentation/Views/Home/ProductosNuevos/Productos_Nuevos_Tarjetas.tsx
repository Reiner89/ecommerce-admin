import { useState, useEffect } from "react";

import { io } from "socket.io-client";

interface ProductoBackend {
  tipo_producto: string;
  marca_producto: string;
  nombre_producto: string;
  precio_producto: number;
  destacar_producto: number;
  imagen1_producto?: string;
}

interface ProductoFrontend {
  categoria: string;
  marca: string;
  nombre: string;
  precio: string | number;
  tipo: string;
  imagen?: string;
}

export const ProductosNuevosTarjetas = () => {
  const [productosSocket, setProductosSocket] = useState<ProductoFrontend[]>(
    []
  );

  const serverPath = "http://localhost:3000";

  useEffect(() => {
    const socket = io(serverPath, {
      transports: ["websocket", "polling"],
      autoConnect: true,
      forceNew: true,
    });

    socket.emit("obtenerProductos");

    socket.on("productos", (data: ProductoBackend[]) => {
      console.log("Datos recibidos del servidor:", data);
      const productosTransformados = data.map((producto) => ({
        categoria: producto.tipo_producto,
        marca: producto.marca_producto,
        nombre: producto.nombre_producto,
        precio: producto.precio_producto || "N/A",
        tipo: producto.destacar_producto === 1 ? "exclusivo" : "nuevo",
        imagen: `http://localhost:3500/${producto.imagen1_producto}`,
      }));
      setProductosSocket(productosTransformados);
    });

    socket.on("error", (message) => {
      console.error("Error desde el servidor:", message);
    });

    return () => {
      socket.disconnect();
    };
  }, [serverPath]);

  if (productosSocket.length === 0) {
    return <p className="text-center">Cargando productos...</p>;
  }

  return (
    <div className="flex gap-4 h-[500px] items-center justify-center">
      {productosSocket.map((producto, index) => (
        <div key={index} className="producto">
          <img src={producto.imagen} alt={producto.nombre} />
          <p>{producto.nombre}</p>
          <span>{producto.precio}</span>
        </div>
      ))}
    </div>
  );
};
