export interface Venta {
  id: number;
  comNOrden: string;
  comFecha: string;
  comCliente: string;
  comTipo: string;
  comProductosPacks: Productos;
  comPrecio: number;
  comCantidad: number;
  comCosto: number;
  comUtilidad: number;
  comCanalVenta: CanalVenta;
  comMedioPago: MedioPago;
}

type Productos =
  | "Producto 1"
  | "Producto 2"
  | "Producto 3"
  | "Producto 4"
  | "Producto 5"
  | "Producto 6"
  | "Producto 7";

type MedioPago =
  | "Débito"
  | "Tarjeta de Crédito"
  | "Mercado Pago"
  | "Efectivo"
  | "Transferencia Bancaria";

type CanalVenta = "Online" | "Tienda";

export const Ventas: Venta[] = [
  {
    id: 1,
    comNOrden: "A001",
    comFecha: "01/11/2024",
    comCliente: "Carlos López",
    comTipo: "Venta Directa",
    comProductosPacks: "Producto 1",
    comPrecio: 150.0,
    comCantidad: 2,
    comCosto: 100.0,
    comUtilidad: 100.0,
    comCanalVenta: "Online",
    comMedioPago: "Tarjeta de Crédito",
  },
  {
    id: 2,
    comNOrden: "A002",
    comFecha: "02/11/2024",
    comCliente: "Ana María",
    comTipo: "Venta Promocional",
    comProductosPacks: "Producto 3",
    comPrecio: 200.0,
    comCantidad: 1,
    comCosto: 120.0,
    comUtilidad: 80.0,
    comCanalVenta: "Tienda",
    comMedioPago: "Efectivo",
  },
  {
    id: 3,
    comNOrden: "A003",
    comFecha: "03/11/2024",
    comCliente: "Luis Paredes",
    comTipo: "Venta Mayorista",
    comProductosPacks: "Producto 2",
    comPrecio: 500.0,
    comCantidad: 5,
    comCosto: 300.0,
    comUtilidad: 200.0,
    comCanalVenta: "Online",
    comMedioPago: "Transferencia Bancaria",
  },
  {
    id: 4,
    comNOrden: "A004",
    comFecha: "04/11/2024",
    comCliente: "Gabriela Silva",
    comTipo: "Venta Directa",
    comProductosPacks: "Producto 5",
    comPrecio: 90.0,
    comCantidad: 3,
    comCosto: 60.0,
    comUtilidad: 30.0,
    comCanalVenta: "Online",
    comMedioPago: "Débito",
  },
  {
    id: 5,
    comNOrden: "A005",
    comFecha: "05/11/2024",
    comCliente: "Ricardo Perez",
    comTipo: "Venta Promocional",
    comProductosPacks: "Producto 6",
    comPrecio: 300.0,
    comCantidad: 1,
    comCosto: 180.0,
    comUtilidad: 120.0,
    comCanalVenta: "Online",
    comMedioPago: "Mercado Pago",
  },
  {
    id: 6,
    comNOrden: "A006",
    comFecha: "06/11/2024",
    comCliente: "Esteban González",
    comTipo: "Venta Mayorista",
    comProductosPacks: "Producto 4",
    comPrecio: 700.0,
    comCantidad: 6,
    comCosto: 420.0,
    comUtilidad: 280.0,
    comCanalVenta: "Online",
    comMedioPago: "Tarjeta de Crédito",
  },
  {
    id: 7,
    comNOrden: "A007",
    comFecha: "07/11/2024",
    comCliente: "Andrea Torres",
    comTipo: "Venta Directa",
    comProductosPacks: "Producto 1",
    comPrecio: 120.0,
    comCantidad: 2,
    comCosto: 80.0,
    comUtilidad: 40.0,
    comCanalVenta: "Online",
    comMedioPago: "Efectivo",
  },
  {
    id: 8,
    comNOrden: "A008",
    comFecha: "08/11/2024",
    comCliente: "Juan Morales",
    comTipo: "Venta Mayorista",
    comProductosPacks: "Producto 7",
    comPrecio: 650.0,
    comCantidad: 5,
    comCosto: 500.0,
    comUtilidad: 150.0,
    comCanalVenta: "Tienda",
    comMedioPago: "Débito",
  },
  {
    id: 9,
    comNOrden: "A009",
    comFecha: "09/11/2024",
    comCliente: "Isabel Navas",
    comTipo: "Venta Directa",
    comProductosPacks: "Producto 3",
    comPrecio: 110.0,
    comCantidad: 2,
    comCosto: 70.0,
    comUtilidad: 40.0,
    comCanalVenta: "Online",
    comMedioPago: "Transferencia Bancaria",
  },
  {
    id: 10,
    comNOrden: "A010",
    comFecha: "10/11/2024",
    comCliente: "Marcos Rojas",
    comTipo: "Venta Promocional",
    comProductosPacks: "Producto 5",
    comPrecio: 250.0,
    comCantidad: 3,
    comCosto: 150.0,
    comUtilidad: 100.0,
    comCanalVenta: "Tienda",
    comMedioPago: "Mercado Pago",
  },
  {
    id: 11,
    comNOrden: "A011",
    comFecha: "11/11/2024",
    comCliente: "Natalia Castillo",
    comTipo: "Venta Directa",
    comProductosPacks: "Producto 6",
    comPrecio: 220.0,
    comCantidad: 1,
    comCosto: 130.0,
    comUtilidad: 90.0,
    comCanalVenta: "Online",
    comMedioPago: "Efectivo",
  },
  {
    id: 12,
    comNOrden: "A012",
    comFecha: "12/11/2024",
    comCliente: "Pedro Vargas",
    comTipo: "Venta Mayorista",
    comProductosPacks: "Producto 4",
    comPrecio: 500.0,
    comCantidad: 4,
    comCosto: 300.0,
    comUtilidad: 200.0,
    comCanalVenta: "Tienda",
    comMedioPago: "Tarjeta de Crédito",
  },
  {
    id: 13,
    comNOrden: "A013",
    comFecha: "13/11/2024",
    comCliente: "Lucía Guzmán",
    comTipo: "Venta Promocional",
    comProductosPacks: "Producto 1",
    comPrecio: 180.0,
    comCantidad: 2,
    comCosto: 100.0,
    comUtilidad: 80.0,
    comCanalVenta: "Online",
    comMedioPago: "Débito",
  },
  {
    id: 14,
    comNOrden: "A014",
    comFecha: "14/11/2024",
    comCliente: "Fernando Herrera",
    comTipo: "Venta Directa",
    comProductosPacks: "Producto 2",
    comPrecio: 130.0,
    comCantidad: 3,
    comCosto: 90.0,
    comUtilidad: 40.0,
    comCanalVenta: "Tienda",
    comMedioPago: "Transferencia Bancaria",
  },
  {
    id: 15,
    comNOrden: "A015",
    comFecha: "15/11/2024",
    comCliente: "Mónica Quispe",
    comTipo: "Venta Mayorista",
    comProductosPacks: "Producto 7",
    comPrecio: 600.0,
    comCantidad: 5,
    comCosto: 400.0,
    comUtilidad: 200.0,
    comCanalVenta: "Online",
    comMedioPago: "Mercado Pago",
  },
];
