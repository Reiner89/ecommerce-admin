export interface TDocumento {
  id: number;
  nombreTDoc: string;
}

export const TDocumentos: TDocumento[] = [
  { id: 1, nombreTDoc: "Recepción" },
  { id: 2, nombreTDoc: "Consumo" },
];

export interface Documento {
  id: number;
  idTDoc: number;
  nombreDocumeto: string;
}

export const Documentos: Documento[] = [
  {
    id: 1,
    nombreDocumeto: "Sin Documento",
    idTDoc: 1,
  },
  { id: 2, nombreDocumeto: "Factura", idTDoc: 1 },
  {
    id: 3,
    nombreDocumeto: "Guía de Remisión",
    idTDoc: 1,
  },
  {
    id: 4,
    nombreDocumeto: "Guía de Transportista",
    idTDoc: 1,
  },
  { id: 5, nombreDocumeto: "Retiro por Venta", idTDoc: 2 },
  { id: 6, nombreDocumeto: "Mermas", idTDoc: 2 },
  { id: 7, nombreDocumeto: "Destrucción por Baja", idTDoc: 2 },
  { id: 8, nombreDocumeto: "Traslado", idTDoc: 2 },
];

export const TVentas = [
  { id: 1, nombre: "Producto" },
  { id: 2, nombre: "Pack" },
];

export interface ConsumoData {
  id: number;
  nombreProducto: string;
  skuVariante: string;
  nroDocumento: string;
  precioProducto: number;
  costoNetoUnitario: number;
  estado: boolean;
  cantidad: number;
  color: string;
  permitirRepetir: boolean;
  ventaSinStock: boolean;
  controlarSeries: boolean;
  unidadMedida: string;
  idDocumento: number;
  marca: string;
}

export const Consumos: ConsumoData[] = [
  {
    id: 1,
    nombreProducto: "Zapatillas Talla 42 - Color Negro",
    skuVariante: "NIKE-42-BLK",
    nroDocumento: "1234567890123",
    precioProducto: 80.0,
    costoNetoUnitario: 80.0,
    estado: true,
    cantidad: 0,
    color: "Negro",
    permitirRepetir: false,
    ventaSinStock: false,
    controlarSeries: false,
    unidadMedida: "Unidad",
    idDocumento: 1,
    marca: "Samsung",
  },
  {
    id: 2,
    nombreProducto: "Reloj Fossil Hombre",
    skuVariante: "FOS-42-BLK",
    nroDocumento: "1234567890123",
    precioProducto: 80.0,
    costoNetoUnitario: 80.0,
    estado: true,
    cantidad: 0,
    color: "Negro",
    permitirRepetir: false,
    ventaSinStock: false,
    controlarSeries: false,
    unidadMedida: "Unidad",
    idDocumento: 2,
    marca: "Samsung",
  },
  {
    id: 3,
    nombreProducto: "Zapatillas Talla 42 - Color Negro",
    skuVariante: "NIKE-42-BLK",
    nroDocumento: "1234567890123",
    precioProducto: 80.0,
    costoNetoUnitario: 80.0,
    estado: true,
    cantidad: 0,
    color: "Negro",
    permitirRepetir: false,
    ventaSinStock: false,
    controlarSeries: false,
    unidadMedida: "Unidad",
    idDocumento: 3,
    marca: "Samsung",
  },
  {
    id: 4,
    nombreProducto: "Zapatillas Talla 42 - Color Negro",
    skuVariante: "NIKE-42-BLK",
    nroDocumento: "1234567890123",
    precioProducto: 80.0,
    costoNetoUnitario: 80.0,
    estado: true,
    cantidad: 0,
    color: "Negro",
    permitirRepetir: false,
    ventaSinStock: false,
    controlarSeries: false,
    unidadMedida: "Unidad",
    idDocumento: 1,
    marca: "Samsung",
  },
  {
    id: 5,
    nombreProducto: "Reloj Fossil Hombre",
    skuVariante: "FOS-42-BLK",
    nroDocumento: "1234567890123",
    precioProducto: 80.0,
    costoNetoUnitario: 80.0,
    estado: true,
    cantidad: 0,
    color: "Negro",
    permitirRepetir: false,
    ventaSinStock: false,
    controlarSeries: false,
    unidadMedida: "Unidad",
    idDocumento: 2,
    marca: "Samsung",
  },
  {
    id: 6,
    nombreProducto: "Zapatillas Talla 42 - Color Negro",
    skuVariante: "NIKE-42-BLK",
    nroDocumento: "1234567890123",
    precioProducto: 80.0,
    costoNetoUnitario: 80.0,
    estado: true,
    cantidad: 0,
    color: "Negro",
    permitirRepetir: false,
    ventaSinStock: false,
    controlarSeries: false,
    unidadMedida: "Unidad",
    idDocumento: 3,
    marca: "Samsung",
  },
  {
    id: 7,
    nombreProducto: "Zapatillas Talla 42 - Color Negro",
    skuVariante: "NIKE-42-BLK",
    nroDocumento: "1234567890123",
    precioProducto: 80.0,
    costoNetoUnitario: 80.0,
    estado: true,
    cantidad: 0,
    color: "Negro",
    permitirRepetir: false,
    ventaSinStock: false,
    controlarSeries: false,
    unidadMedida: "Unidad",
    idDocumento: 1,
    marca: "Samsung",
  },
  {
    id: 8,
    nombreProducto: "Reloj Fossil Hombre",
    skuVariante: "FOS-42-BLK",
    nroDocumento: "1234567890123",
    precioProducto: 80.0,
    costoNetoUnitario: 80.0,
    estado: true,
    cantidad: 0,
    color: "Negro",
    permitirRepetir: false,
    ventaSinStock: false,
    controlarSeries: false,
    unidadMedida: "Unidad",
    idDocumento: 2,
    marca: "Samsung",
  },
  {
    id: 9,
    nombreProducto: "Zapatillas Talla 42 - Color Negro",
    skuVariante: "NIKE-42-BLK",
    nroDocumento: "1234567890123",
    precioProducto: 80.0,
    costoNetoUnitario: 80.0,
    estado: true,
    cantidad: 0,
    color: "Negro",
    permitirRepetir: false,
    ventaSinStock: false,
    controlarSeries: false,
    unidadMedida: "Unidad",
    idDocumento: 3,
    marca: "Samsung",
  },
  {
    id: 10,
    nombreProducto: "Zapatillas Talla 42 - Color Negro",
    skuVariante: "NIKE-42-BLK",
    nroDocumento: "1234567890123",
    precioProducto: 80.0,
    costoNetoUnitario: 80.0,
    estado: true,
    cantidad: 0,
    color: "Negro",
    permitirRepetir: false,
    ventaSinStock: false,
    controlarSeries: false,
    unidadMedida: "Unidad",
    idDocumento: 1,
    marca: "Samsung",
  },
  {
    id: 11,
    nombreProducto: "Reloj Fossil Hombre",
    skuVariante: "FOS-42-BLK",
    nroDocumento: "1234567890123",
    precioProducto: 80.0,
    costoNetoUnitario: 80.0,
    estado: true,
    cantidad: 0,
    color: "Negro",
    permitirRepetir: false,
    ventaSinStock: false,
    controlarSeries: false,
    unidadMedida: "Unidad",
    idDocumento: 2,
    marca: "Samsung",
  },
  {
    id: 12,
    nombreProducto: "Zapatillas Talla 42 - Color Negro",
    skuVariante: "NIKE-42-BLK",
    nroDocumento: "1234567890123",
    precioProducto: 80.0,
    costoNetoUnitario: 80.0,
    estado: true,
    cantidad: 0,
    color: "Negro",
    permitirRepetir: false,
    ventaSinStock: false,
    controlarSeries: false,
    unidadMedida: "Unidad",
    idDocumento: 3,
    marca: "Samsung",
  },
];
