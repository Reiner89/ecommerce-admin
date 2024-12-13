export const VentasInts: VentaInt[] = [
  { id: 1, cod: "0101" },
  { id: 2, cod: "0102" },
  { id: 3, cod: "0103" },
];

export const Bienes: VentaInt[] = [
  { id: 1, cod: "0101" },
  { id: 2, cod: "0102" },
  { id: 3, cod: "0103" },
];

export const Monedas: Moneda[] = [
  { id: 1, moneda: "Soles" },
  { id: 2, moneda: "Dolares" },
  { id: 3, moneda: "Euros" },
];

export const TiposPagos: TipoPago[] = [
  { id: 1, tipopago: "Contado" },
  { id: 2, tipopago: "Credito" },
];

export const TiposDocs: TipoDoc[] = [
  { id: 1, tipodoc: "DNI" },
  { id: 2, tipodoc: "RUC" },
];

export interface VentaInt {
  id: number;
  cod: string;
}

export interface Moneda {
  id: number;
  moneda: string;
}

export interface TipoPago {
  id: number;
  tipopago: string;
}

export interface TipoDoc {
  id: number;
  tipodoc: string;
}

export const CompsRef = [
  {
    id: 1,
    cliente: "Reiner Alayo Llaury",
    NComp: "B001-00000036",
    fechaEmision: "2020-01-01",
    monto: 10000,
  },
  {
    id: 2,
    cliente: "Baruc Alayo Llaury",
    NComp: "B001-00000037",
    fechaEmision: "2020-09-14",
    monto: 2100,
  },
  {
    id: 3,
    cliente: "Abigail Alayo Llaury",
    NComp: "B001-00000038",
    fechaEmision: "2020-09-14",
    monto: 2100,
  },
  {
    id: 4,
    cliente: "Reiner Alayo Llaury",
    NComp: "B001-00000036",
    fechaEmision: "2020-01-01",
    monto: 10000,
  },
  {
    id: 5,
    cliente: "Baruc Alayo Llaury",
    NComp: "B001-00000037",
    fechaEmision: "2020-09-14",
    monto: 2100,
  },
  {
    id: 6,
    cliente: "Abigail Alayo Llaury",
    NComp: "B001-00000038",
    fechaEmision: "2020-09-14",
    monto: 2100,
  },
];

export interface pilar {
  id: number;
  cantidad: number;
  unidad: string;
  descripcion: string;
  vUnitario: number;
  dscuento: number;
  vVenta: number;
}

export const pilares: pilar[] = [
  {
    id: 1,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 2,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 3,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 4,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 5,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 6,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 7,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 8,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 9,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 10,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 11,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 12,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 13,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 14,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 15,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 16,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
  {
    id: 17,
    cantidad: 1,
    unidad: "Unidad",
    descripcion: "Papel",
    vUnitario: 1000,
    dscuento: 0,
    vVenta: 1000,
  },
];
