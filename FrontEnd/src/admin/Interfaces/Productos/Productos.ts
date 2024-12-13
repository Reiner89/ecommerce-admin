import RelojImg1 from "../../assets/Products/Reloj1.webp";
import RelojImg2 from "../../assets/Products/Reloj2.webp";
import RelojImg3 from "../../assets/Products/Reloj3.webp";

export const Seriales = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

export interface tablesCant {
  txt: string;
  cant: number;
}

// Interfaz de las variantes de un producto
export interface Variante {
  nombreVariante: string;
  skuVariante: string;
  codBarrasVariante: string;
  precioProducto: number;
  costoNetoUnitario: number;
  cantidad: number;
  color: string;
  controlarSeries: boolean;
  ventaSinStock: boolean;
  permitirRepetir: boolean;
  estado: boolean;
  unidadMedida: string;
  fechaCreacion?: string;
}

export interface Product {
  id: number;
  nombreProducto: string;
  descripcion: string;
  tipoProducto: string;
  marcaProducto: string;
  controlStock: boolean;
  ventaConDecimales: boolean;
  imagenProducto: string[];
  variantes: Variante[];
  estado: boolean;
  destacado: boolean;
  cereales: string;
  color: string;
}

export interface Table {
  txt: string;
  cantidad: number;
}

export interface Color {
  id: number;
  name: string;
}

export interface CatProd {
  id_categoria: number;
  nombre_categoria: string;
}

export interface SubCatProd {
  id_subcategoria: number;
  nombre_subcategoria: string;
}

export interface MarcasProd {
  id_marca: number;
  nombre_marca: string;
}

export interface ColoresProd {
  id_color: number;
  nombre_color: string;
}

export interface ValuesProduct {
  nombreProducto: string;
  varianteProducto: string;
  descripcionProducto: string;
  skuProducto: string;
  destacadoProducto: string;
  estadoProducto: string;
  fechaCreado: number;
  fechaActualizado: string;
  id_creador_producto: number | null;
  id_color: null | number;
  id_categoria: null | number;
  id_subcategoria: null | number;
  id_marca: null | number;
  imagenProducto: File[];
  cantSerialesProducto: string;
}

export interface ProductGet {
  id_producto: number;
  nombre_producto: string;
  nombre_variante_producto: string;
  descripcion_producto: string;
  imagen1_producto: string;
  imagen2_producto: string;
  imagen3_producto: string;
  imagen4_producto: string;
  destacar_producto: string;
  estado_producto: string;
  fecha_creado: Date;
  fecha_actualizado: Date;
  id_creador_producto: number;
  id_color: number;
  id_categoria: number;
  id_subcategoria: number;
  id_marca: number;
  cantidad_seriales: number;
  sku_producto: string;
}

export interface Producto {
  id: number;
  imagenProducto: string[];
  nombreProducto: string;
  varianteProducto: string;
  categoriaProducto: string;
  marcaProducto: string;
  colorProducto: string;
  descripcionProducto: string;
  estadoProducto: boolean;
  destacadoProducto: boolean;
  skuProducto: string;
  unidadMedidaProducto: string;
  cantSerialesProducto: string;
  precioProducto: number;
}

export const Productos: Producto[] = [
  {
    id: 1,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Zapatillas Urbanas",
    varianteProducto: "XXL",
    categoriaProducto: "Calzado",
    marcaProducto: "UrbanStyle",
    colorProducto: "Negro",
    descripcionProducto: "Zapatillas cómodas y resistentes para uso diario.",
    estadoProducto: true,
    destacadoProducto: true,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "1",
    precioProducto: 100.5,
  },
  {
    id: 2,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Camisa Casual",
    varianteProducto: "M",
    categoriaProducto: "Ropa",
    marcaProducto: "CasualWear",
    colorProducto: "Blanco",
    descripcionProducto: "Camisa cómoda para ocasiones casuales.",
    estadoProducto: true,
    destacadoProducto: false,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "2",
    precioProducto: 50.0,
  },
  {
    id: 3,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Pantalones Jeans",
    varianteProducto: "L",
    categoriaProducto: "Ropa",
    marcaProducto: "DenimCo",
    colorProducto: "Azul",
    descripcionProducto: "Pantalones de mezclilla de corte moderno.",
    estadoProducto: true,
    destacadoProducto: false,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "3",
    precioProducto: 80.3,
  },
  {
    id: 4,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Reloj Deportivo",
    varianteProducto: "Único",
    categoriaProducto: "Accesorios",
    marcaProducto: "TimeSport",
    colorProducto: "Negro",
    descripcionProducto:
      "Reloj resistente al agua para actividades al aire libre.",
    estadoProducto: true,
    destacadoProducto: true,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "2",
    precioProducto: 150.95,
  },
  {
    id: 5,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Sudadera Hoodie",
    varianteProducto: "XL",
    categoriaProducto: "Ropa",
    marcaProducto: "HoodedLife",
    colorProducto: "Gris",
    descripcionProducto: "Sudadera cómoda con capucha para el frío.",
    estadoProducto: false,
    destacadoProducto: false,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "3",
    precioProducto: 90.0,
  },
  {
    id: 6,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Gorra Estilo Urbano",
    varianteProducto: "Único",
    categoriaProducto: "Accesorios",
    marcaProducto: "StreetCap",
    colorProducto: "Rojo",
    descripcionProducto: "Gorra ajustable ideal para un estilo urbano.",
    estadoProducto: true,
    destacadoProducto: true,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "1",
    precioProducto: 35.5,
  },
  {
    id: 7,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Mochila Escolar",
    varianteProducto: "Estándar",
    categoriaProducto: "Accesorios",
    marcaProducto: "EduPack",
    colorProducto: "Azul",
    descripcionProducto: "Mochila resistente con múltiples compartimentos.",
    estadoProducto: true,
    destacadoProducto: false,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "2",
    precioProducto: 35.5,
  },
  {
    id: 8,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Polo Básico",
    varianteProducto: "L",
    categoriaProducto: "Ropa",
    marcaProducto: "BasicsCo",
    colorProducto: "Verde",
    descripcionProducto: "Polo básico de algodón para uso diario.",
    estadoProducto: true,
    destacadoProducto: false,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "3",
    precioProducto: 50.0,
  },
  {
    id: 9,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Chaqueta de Cuero",
    varianteProducto: "M",
    categoriaProducto: "Ropa",
    marcaProducto: "LeatherWear",
    colorProducto: "Negro",
    descripcionProducto: "Chaqueta de cuero auténtico para un estilo elegante.",
    estadoProducto: true,
    destacadoProducto: true,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "2",
    precioProducto: 35.5,
  },
  {
    id: 10,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Pantalones de Vestir",
    varianteProducto: "S",
    categoriaProducto: "Ropa",
    marcaProducto: "FormalLine",
    colorProducto: "Gris",
    descripcionProducto:
      "Pantalones de vestir con un ajuste cómodo y elegante.",
    estadoProducto: false,
    destacadoProducto: false,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "3",
    precioProducto: 35.5,
  },
  {
    id: 11,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Zapatos de Cuero",
    varianteProducto: "43",
    categoriaProducto: "Calzado",
    marcaProducto: "Elegance",
    colorProducto: "Marrón",
    descripcionProducto: "Zapatos formales de cuero para ocasiones especiales.",
    estadoProducto: true,
    destacadoProducto: true,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "2",
    precioProducto: 35.5,
  },
  {
    id: 12,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Bufanda de Lana",
    varianteProducto: "Único",
    categoriaProducto: "Accesorios",
    marcaProducto: "WinterWarm",
    colorProducto: "Blanco",
    descripcionProducto: "Bufanda de lana suave para el invierno.",
    estadoProducto: true,
    destacadoProducto: false,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "1",
    precioProducto: 35.5,
  },
  {
    id: 13,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Chaleco Reflectante",
    varianteProducto: "XL",
    categoriaProducto: "Ropa",
    marcaProducto: "SafetyFirst",
    colorProducto: "Amarillo",
    descripcionProducto: "Chaleco reflectante para mayor visibilidad.",
    estadoProducto: true,
    destacadoProducto: false,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "2",
    precioProducto: 35.5,
  },
  {
    id: 14,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Billetera de Cuero",
    varianteProducto: "Único",
    categoriaProducto: "Accesorios",
    marcaProducto: "WalletCo",
    colorProducto: "Marrón Oscuro",
    descripcionProducto: "Billetera elegante de cuero auténtico.",
    estadoProducto: true,
    destacadoProducto: true,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "1",
    precioProducto: 35.5,
  },
  {
    id: 15,
    imagenProducto: [RelojImg1, RelojImg2, RelojImg3],
    nombreProducto: "Camisa Formal",
    varianteProducto: "M",
    categoriaProducto: "Ropa",
    marcaProducto: "FormalStyle",
    colorProducto: "Celeste",
    descripcionProducto: "Camisa de vestir formal para reuniones y eventos.",
    estadoProducto: false,
    destacadoProducto: false,
    skuProducto: "ZP001",
    unidadMedidaProducto: "Unidad",
    cantSerialesProducto: "2",
    precioProducto: 35.5,
  },
];

export const Almacenes: Color[] = [
  { id: 1, name: "Almacen 1" },
  { id: 2, name: "Almacen 2" },
  { id: 3, name: "Almacen 3" },
];

export const Zonas: Color[] = [
  { id: 1, name: "Zona 1" },
  { id: 2, name: "Zona 2" },
  { id: 3, name: "Zona 3" },
  { id: 4, name: "Zona 4" },
  { id: 5, name: "Zona 5" },
  { id: 6, name: "Zona 6" },
  { id: 7, name: "Zona 7" },
  { id: 8, name: "Zona 8" },
  { id: 9, name: "Zona 9" },
  { id: 10, name: "Zona 10" },
  { id: 11, name: "Zona 11" },
  { id: 12, name: "Zona 12" },
  { id: 13, name: "Zona 13" },
  { id: 14, name: "Zona 14" },
  { id: 15, name: "Zona 15" },
  { id: 16, name: "Zona 16" },
  { id: 17, name: "Zona 17" },
  { id: 18, name: "Zona 18" },
  { id: 19, name: "Zona 19" },
  { id: 20, name: "Zona 20" },
  { id: 21, name: "Zona 21" },
  { id: 22, name: "Zona 22" },
  { id: 23, name: "Zona 23" },
  { id: 24, name: "Zona 24" },
  { id: 25, name: "Zona 25" },
];

export const Niveles: Color[] = [
  { id: 1, name: "Nivel 1" },
  { id: 2, name: "Nivel 2" },
  { id: 3, name: "Nivel 3" },
  { id: 4, name: "Nivel 4" },
  { id: 5, name: "Nivel 5" },
  { id: 6, name: "Nivel 6" },
  { id: 7, name: "Nivel 7" },
  { id: 8, name: "Nivel 8" },
  { id: 9, name: "Nivel 9" },
  { id: 10, name: "Nivel 10" },
  { id: 11, name: "Nivel 11" },
  { id: 12, name: "Nivel 12" },
  { id: 13, name: "Nivel 13" },
  { id: 14, name: "Nivel 14" },
  { id: 15, name: "Nivel 15" },
];

export const SubNiveles: Color[] = [
  { id: 1, name: "SubNivel 1" },
  { id: 2, name: "SubNivel 2" },
  { id: 3, name: "SubNivel 3" },
  { id: 4, name: "SubNivel 4" },
  { id: 5, name: "SubNivel 5" },
  { id: 6, name: "SubNivel 6" },
  { id: 7, name: "SubNivel 7" },
  { id: 8, name: "SubNivel 8" },
  { id: 9, name: "SubNivel 9" },
  { id: 10, name: "SubNivel 10" },
  { id: 11, name: "SubNivel 11" },
  { id: 12, name: "SubNivel 12" },
  { id: 13, name: "SubNivel 13" },
  { id: 14, name: "SubNivel 14" },
  { id: 15, name: "SubNivel 15" },
];

// A - Z
export const Pasillos: Color[] = [
  { id: 1, name: "Pasillo A" },
  { id: 2, name: "Pasillo B" },
  { id: 3, name: "Pasillo C" },
  { id: 4, name: "Pasillo D" },
  { id: 5, name: "Pasillo E" },
  { id: 6, name: "Pasillo F" },
  { id: 7, name: "Pasillo G" },
  { id: 8, name: "Pasillo H" },
  { id: 9, name: "Pasillo I" },
  { id: 10, name: "Pasillo J" },
  { id: 11, name: "Pasillo K" },
  { id: 12, name: "Pasillo L" },
  { id: 13, name: "Pasillo M" },
  { id: 14, name: "Pasillo N" },
  { id: 15, name: "Pasillo O" },
  { id: 16, name: "Pasillo P" },
  { id: 17, name: "Pasillo Q" },
  { id: 18, name: "Pasillo R" },
  { id: 19, name: "Pasillo S" },
  { id: 20, name: "Pasillo T" },
  { id: 21, name: "Pasillo U" },
  { id: 22, name: "Pasillo V" },
  { id: 23, name: "Pasillo W" },
  { id: 24, name: "Pasillo X" },
  { id: 25, name: "Pasillo Y" },
  { id: 26, name: "Pasillo Z" },
];

export const EstadosArray = ["Todos", "Destacados", "Activos", "Inactivos"];

export const TiposArray = ["Demo", "Sin tipo"];

export const Products: Product[] = [
  {
    id: 1,
    nombreProducto: "Zapatillas Running Hombre adidas Duramo RC",
    descripcion:
      "Zapatillas deportivas para correr, disponibles en varios colores y tallas.",
    tipoProducto: "3",
    marcaProducto: "9",
    estado: true,
    destacado: false,
    controlStock: true,
    ventaConDecimales: false,
    cereales: "4",
    imagenProducto: [RelojImg3, RelojImg2, RelojImg1],
    variantes: [
      {
        nombreVariante: "Zapatillas Running Hombre Adidas Duramo RC Negro",
        skuVariante: "ADIDAS-42-BLK",
        codBarrasVariante: "1234567890123",
        precioProducto: 80.0,
        costoNetoUnitario: 80.0,
        estado: true,
        cantidad: 200,
        color: "Negro",
        permitirRepetir: false,
        ventaSinStock: false,
        controlarSeries: false,
        unidadMedida: "Unidad",
        fechaCreacion: "2024/10/27 21:48:18 ",
      },
      {
        nombreVariante: "Zapatillas Running Hombre Adidas Duramo RC Blanco",
        skuVariante: "ADIDAS-42-WHT",
        codBarrasVariante: "9876543210987",
        estado: true,
        precioProducto: 85.0,
        costoNetoUnitario: 50.0,
        cantidad: 150,
        color: "Verde",
        ventaSinStock: true,
        controlarSeries: true,
        permitirRepetir: false,
        unidadMedida: "Unidad",
        fechaCreacion: "2024/10/27 21:48:18 ",
      },
    ],
    color: "Negro",
  },
  {
    id: 2,
    nombreProducto: "Nike Air Max SYSTM DM9537-101",
    descripcion:
      "Zapatillas deportivas para correr, disponibles en varios colores y tallas.",
    tipoProducto: "3",
    marcaProducto: "8",
    estado: false,
    destacado: true,
    controlStock: true,
    ventaConDecimales: false,
    cereales: "1",
    imagenProducto: [RelojImg3, RelojImg2, RelojImg1],
    variantes: [
      {
        nombreVariante:
          "Zapatillas Running Hombre Nike Air Max SYSTM DM9537 Blanco",
        skuVariante: "NIKE-42-BLK",
        codBarrasVariante: "1234567890123",
        precioProducto: 80.0,
        costoNetoUnitario: 80.0,
        estado: true,
        cantidad: 25,
        color: "Negro",
        permitirRepetir: false,
        ventaSinStock: false,
        controlarSeries: false,
        unidadMedida: "Unidad",
      },
      {
        nombreVariante:
          "Zapatillas Running Hombre Nike Air Max SYSTM DM9537 Negro",
        skuVariante: "NIKE-42-BLK",
        codBarrasVariante: "9876543210987",
        estado: true,
        precioProducto: 85.0,
        costoNetoUnitario: 50.0,
        cantidad: 600,
        color: "Verde",
        ventaSinStock: true,
        controlarSeries: true,
        permitirRepetir: false,
        unidadMedida: "Unidad",
      },
    ],
    color: "Amarillo",
  },
  {
    id: 3,
    nombreProducto: "Reloj Cuero Hombre",
    descripcion:
      "Reloj de cuero para hombre, con correa de cuero y cristal de vidrio",
    tipoProducto: "4",
    marcaProducto: "11",
    estado: true,
    destacado: true,
    controlStock: false,
    ventaConDecimales: false,
    cereales: "5",
    imagenProducto: [RelojImg3, RelojImg2, RelojImg1],
    variantes: [
      {
        nombreVariante: "Reloj Cuero Hombre - Color Negro",
        skuVariante: "FOSSIL-1-BLK",
        codBarrasVariante: "1234567890123",
        precioProducto: 80.0,
        costoNetoUnitario: 80.0,
        estado: true,
        cantidad: 273,
        color: "Negro",
        permitirRepetir: false,
        ventaSinStock: false,
        controlarSeries: false,
        unidadMedida: "Unidad",
      },
      {
        nombreVariante: "Reloj Cuero Hombre - Color Blanco",
        skuVariante: "FOSSIL-2-WHT",
        codBarrasVariante: "9876543210987",
        estado: false,
        precioProducto: 85.0,
        costoNetoUnitario: 50.0,
        cantidad: 196,
        color: "Blanco",
        ventaSinStock: true,
        controlarSeries: true,
        permitirRepetir: false,
        unidadMedida: "Unidad",
      },
    ],
    color: "Verde",
  },
];
