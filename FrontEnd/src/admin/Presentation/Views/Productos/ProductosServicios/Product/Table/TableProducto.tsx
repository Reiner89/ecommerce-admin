import { useState } from "react";
import * as Icon from "../../../../../Components/Icons/Iconos";
import { Opciones } from "./Components/Opciones";
import { ProductGet } from "../../../../../../Interfaces/Productos/Productos";
import { useProdServices } from "../../Hooks/useProdServices";

export const Table = ({ data }: Props) => {
  const { OpenModalVerProd, openModalUbicacionProd } = useProdServices();

  // Estado para manejar qué modal está abierto
  const [openModal, setOpenModal] = useState<number | null>(null);

  // Modal Opciones por id
  const toggleModal = (id: number | null) => {
    setOpenModal((prev) => (prev === id ? null : id));
  };

  return (
    <table className="relative w-[100%] text-[#67748e] mb-5 xl:mb-0">
      <thead>
        <tr className="text-[.65rem] text-[#8392ab] text-left uppercase opacity-70 border-b border-solid border-[#e9ecef]">
          <th className="py-3 px-6">Imagen</th>
          <th className="py-3 px-6">SKU</th>
          <th className="py-3 px-6">Nombre de Producto</th>
          <th className="py-3 px-6 text-center">Ubicaciones</th>
          <th className="py-3 px-6">Estados</th>
          <th className="py-3 px-6">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id_producto}
            className="text-[.875rem] text-left leading-[1.5] font-normal border-b cursor-pointer hover:bg-gray-100"
          >
            <th onClick={() => OpenModalVerProd(item)} className="py-3 px-6">
              <div className="cont-row flex items-center">
                <img
                  src={item.imagen1_producto}
                  alt={item.imagen1_producto}
                  className="relative w-[30px] h-[30px] ml-4 rounded-md"
                />
              </div>
            </th>
            {item.sku_producto ? (
              <td className="py-3 px-6">{item.sku_producto}</td>
            ) : (
              <td className="py-3 px-6">
                <span className="">Sin SKU</span>
              </td>
            )}
            <td className="py-3 px-6 text-base text-[#344767] font-bold ml-4">
              {item.nombre_producto}
            </td>
            <td className="py-3 px-6 flex justify-center">
              <button
                onClick={openModalUbicacionProd}
                type="button"
                className="bg-[#09c] rounded-full text-lg text-white p-1.5"
              >
                <Icon.RackProductos />
              </button>
            </td>
            <td className="py-3 px-6">
              <div
                className={`w-full h-[20px] flex justify-center items-center gap-x-2 px-3 rounded-lg ${
                  item.estado_producto === "1" ? "bg-[#ddf8e0]" : "bg-[#ebeced]"
                }`}
              >
                <span
                  className={`w-[13px] h-[13px] rounded-full ${
                    item.estado_producto === "1"
                      ? "bg-[#43a047] border border-solid border-[#43a047]"
                      : "bg-transparent border border-solid border-[#61666E]"
                  }`}
                />
                <p
                  className={`relative text-xs ${
                    item.estado_producto === "1"
                      ? "text-[#43a047]"
                      : "text-[rgb(164,167,172)]"
                  } font-bold`}
                >
                  {item.estado_producto === "1" ? "Activo" : "Inactivo"}
                </p>
              </div>
            </td>
            <td
              onMouseEnter={() => toggleModal(item.id_producto)}
              onMouseLeave={() => toggleModal(null)}
              className="relative flex justify-center items-center py-3 px-6"
            >
              <button className="relative text-base text-[#8392ab] transition-all duration-300">
                <Icon.Opciones />
              </button>
              {openModal === item.id_producto && (
                <Opciones
                  showModal={true}
                  onClose={() => setOpenModal(null)}
                  item={item}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface Props {
  data: ProductGet[];
}

// TODO: ETIQUETAS 2: HORIZONTALES (SALE Y NUEVO)
// TODO: ETIQUETAS 1 (CRUZADO, "OFF (10%, 15%, 20%, 30%, 50%, 70%)")
// TODO: ENTRE ESTADOS Y ACCIONES, IRA CALIFICACION
// TODO: EN PREVISUALIZAR IRA COLOR Y CATEGORIA ARRIBA EN CHIQUITO
// TODO: BANNER PROMOCIONAL SLIDER PRINCIPAL (4 IMAGENES SLIDER, POR CADA UNO SUBIR IMAGEN)
// TODO: ANUNCIO 1
// TODO: TERCER SLIDER SECUNDARIO 3 IMAGENES SLIDER
// TODO: ANUNCIO 2
// TODO: SECUENCIA DE WIDGETS
// TODO: CAPSULA CONTENIDO
// TODO: CAPSULA CARRITO
// TODO: WIDGET PRINCIPAL (SUBIR BANNER)
// TODO: UNIDAD DE MEDIDA SELECT EN NUEVO PRODUCTO (KILO)
// TODO:
