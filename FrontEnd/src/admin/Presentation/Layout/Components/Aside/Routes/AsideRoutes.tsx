import { MenuProps } from "../../../../../Interfaces/Menu/Menu";
import * as Icon from "../../../../Components/Icons/Iconos";

export const asideRoutes: MenuProps[] = [
  // DashBoard
  {
    nombre: "DashBoard",
    path: "/admin",
    icon: <Icon.HomeAside />,
  },
  // Perfil
  {
    nombre: "Perfil",
    path: "/admin/profile",
    icon: <Icon.UserAside />,
  },
  // Usuarios
  {
    nombre: "Administración",
    icon: <Icon.UsersAside />,
    children: [
      {
        nombre: "Nuevo Usuario",
        path: "/admin/administracion/nuevo-usuario",
        icon: "pi-angle-right",
      },
      {
        nombre: "Reportes",
        path: "/admin/administracion/reportes",
        icon: "pi-angle-right",
      },
      {
        nombre: "Nuevo Proveedor",
        path: "/admin/administracion/nuevo-proveedor",
        icon: "pi-angle-right",
      },
      {
        nombre: "Nuevo Vehiculo",
        path: "/admin/administracion/nuevo-vehiculo",
        icon: "pi-angle-right",
      },
    ],
  },
  // Productos
  {
    nombre: "Productos",
    icon: <Icon.ProductsAside />,
    children: [
      {
        nombre: "Crear Producto",
        path: "/admin/productos/crear-producto",
        icon: "pi-angle-right",
      },
      {
        nombre: "Lista de Precios",
        path: "/admin/productos/lista-precios",
        icon: "pi-angle-right",
      },
    ],
  },
  // Stock
  {
    nombre: "Stock",
    icon: <Icon.StockAside />,
    children: [
      {
        nombre: "Recepción",
        path: "/admin/stock/recepcion",
        icon: "pi-angle-right",
      },
      {
        nombre: "Consumo",
        path: "/admin/stock/consumo",
        icon: "pi-angle-right",
      },
      {
        nombre: "Toma de Inventario",
        path: "/admin/stock/toma-inventario",
        icon: "pi-angle-right",
      },
      {
        nombre: "Historial de Movimientos",
        path: "/admin/stock/historial-movimientos",
        icon: "pi-angle-right",
      },
      {
        nombre: "Matriz",
        path: "/admin/stock/matriz",
        icon: "pi-angle-right",
      },
      {
        nombre: "Lista de Ordenes",
        path: "/admin/stock/lista-ordenes",
        icon: "pi-angle-right",
      },
    ],
  },
  // Kits
  {
    nombre: "Packs",
    icon: <Icon.KitsAside />,
    children: [
      {
        nombre: "Crear Packs",
        path: "/admin/packs/crear-packs",
        icon: "pi-angle-right",
      },
      {
        nombre: "Lista de Packs",
        path: "/admin/packs/lista-packs",
        icon: "pi-angle-right",
      },
    ],
  },
  // Remision de Guias
  {
    nombre: "Remision de Guias",
    icon: <Icon.RemisionesAside />,
    children: [
      {
        nombre: "Boleta",
        path: "/admin/remision-guias/boleta",
        icon: "pi-angle-right",
      },
      {
        nombre: "Factura",
        path: "/admin/remision-guias/factura",
        icon: "pi-angle-right",
      },
      {
        nombre: "Guía de Remisión",
        path: "/admin/remision-guias/guia-remision",
        icon: "pi-angle-right",
      },
      {
        nombre: "Nota de Credito",
        path: "/admin/remision-guias/nota-credito",
        icon: "pi-angle-right",
      },
      {
        nombre: "Nota de Debito",
        path: "/admin/remision-guias/nota-debito",
        icon: "pi-angle-right",
      },
    ],
  },
  // Comercial
  {
    nombre: "Comercial",
    icon: <Icon.Commercial />,
    children: [
      {
        nombre: "Registro de Ventas",
        path: "/admin/comercial/registro-ventas",
        icon: "pi-angle-right",
      },
      {
        nombre: "KPI",
        path: "/admin/comercial/KPI",
        icon: "pi-angle-right",
      },
    ],
  },
  {
    nombre: "Contenido Web",
    icon: <Icon.ContenidoWeb />,
    path: "/admin/contenido-web",
  },
  // Configuracion General
  {
    nombre: "Configuracion General",
    icon: <Icon.ConfigGeneralAside />,
    path: "/admin/configuracion-general",
  },
];
