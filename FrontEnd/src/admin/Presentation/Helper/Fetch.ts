import { ValuesProduct } from "../../Interfaces/Productos/Productos";

const baseURL = "http://localhost:3000/api/";

type TypesMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type TypesEndPoint =
  | "auth/login"
  | "auth/new"
  | "auth/refresh"
  | `notificaciones/${number}`
  | `mensajes/${number}`;

interface Login {
  email: string;
  password: string;
}

interface FethProps {
  method?: TypesMethod;
  endpoint: TypesEndPoint;
  data?: Login;
}

// Generaremos el token
export const fechSinToken = async ({
  endpoint,
  data,
  method = "GET",
}: FethProps) => {
  const url = `${baseURL}${endpoint}`;

  try {
    // Get
    if (method === "GET") {
      const response = await fetch(url);
      return await response.json();
    }

    // Others
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return null;
  }
};

export const fethConToken = async ({
  endpoint,
  data,
  method = "GET",
}: FethProps) => {
  // URl
  const url = `${baseURL}${endpoint}`;

  // Obtenemos el token
  const tokenStorage = localStorage.getItem("token") || "";

  try {
    // GET
    if (method === "GET") {
      const response = await fetch(url, {
        headers: {
          "x-token": tokenStorage,
        },
      });
      return await response.json();
    }

    // Others
    else {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "x-token": tokenStorage,
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    }
  } catch (error) {
    return null;
  }
};

export const getProducts = async () => {
  const url = `${baseURL}productos/`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-token": localStorage.getItem("token") || "",
      },
    });
    return await response.json();
  } catch (error) {
    return null;
  }
};

export const getCategorias = async () => {
  const url = `${baseURL}categorias/`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-token": localStorage.getItem("token") || "",
      },
    });
    return await response.json();
  } catch (error) {
    return null;
  }
};

export const getSubCategorias = async (id?: number) => {
  const url = id ? `${baseURL}subcategorias/${id}` : `${baseURL}subcategorias/`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-token": localStorage.getItem("token") || "",
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error al obtener subcategorías:", error);
    return null;
  }
};

export const getMarcas = async (id?: number) => {
  const url = id ? `${baseURL}marcas/${id}` : `${baseURL}marcas/`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-token": localStorage.getItem("token") || "",
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error al obtener marcas:", error);
    return null;
  }
};

export const getColors = async () => {
  const url = `${baseURL}colores/`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-token": localStorage.getItem("token") || "",
      },
    });
    return await response.json();
  } catch (error) {
    return null;
  }
};

export const createProduct = async (data: ValuesProduct) => {
  const url = `${baseURL}productos/new`;

  const formData = new FormData();

  formData.append("nombreProducto", data.nombreProducto);
  formData.append("varianteProducto", data.varianteProducto);
  formData.append("descripcionProducto", data.descripcionProducto);
  formData.append("skuProducto", data.skuProducto);
  formData.append("destacadoProducto", data.destacadoProducto.toString());
  formData.append("estadoProducto", data.estadoProducto.toString());
  formData.append("fechaCreado", data.fechaCreado.toString());
  formData.append("fechaActualizado", data.fechaActualizado);
  formData.append(
    "id_creador_producto",
    data.id_creador_producto ? data.id_creador_producto.toString() : ""
  );
  formData.append("id_color", data.id_color ? data.id_color.toString() : "");
  formData.append(
    "id_categoria",
    data.id_categoria ? data.id_categoria.toString() : ""
  );
  formData.append(
    "id_subcategoria",
    data.id_subcategoria ? data.id_subcategoria.toString() : ""
  );
  formData.append("id_marca", data.id_marca ? data.id_marca.toString() : "");
  data.imagenProducto.forEach((imagen) => {
    formData.append("imagenProducto", imagen);
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "x-token": localStorage.getItem("token") || "",
      },
      body: formData,
    });

    return await response.json();
  } catch (error) {
    return null;
  }
};
