import * as Views from "../Views";

export const appConfig = [
  // Dashboard
  {
    path: "/admin",
    element: <Views.Home />,
  },
  // Perfil
  {
    path: "/admin/profile",
    element: <Views.Perfil />,
  },
  // Usuarios
  {
    path: "/admin/administracion/nuevo-usuario",
    element: <Views.Usuarios />,
  },
  {
    path: "/admin/administracion/reportes",
    element: <Views.Reportes />,
  },
  {
    path: "/admin/administracion/nuevo-vehiculo",
    element: <Views.Vehiculos />,
  },
  {
    path: "/admin/administracion/nuevo-proveedor",
    element: <Views.Proveedores />,
  },
  // Productos
  {
    path: "/admin/productos/crear-producto",
    element: <Views.Productos />,
  },
  {
    path: "/admin/productos/lista-precios",
    element: <Views.Descuentos />,
  },
  // Stock
  {
    path: "/admin/stock/recepcion",
    element: <Views.Recepcion />,
  },
  {
    path: "/admin/stock/consumo",
    element: <Views.Consumo />,
  },
  {
    path: "/admin/stock/toma-inventario",
    element: <Views.TInventario />,
  },
  {
    path: "/admin/stock/historial-movimientos",
    element: <Views.HMovimientos />,
  },
  {
    path: "/admin/stock/matriz",
    element: <Views.Matriz />,
  },
  {
    path: "/admin/stock/lista-ordenes",
    element: <Views.ListaOrdenes />,
  },
  // Kits
  {
    path: "/admin/packs/crear-packs",
    element: <Views.Packs />,
  },
  {
    path: "/admin/packs/lista-packs",
    element: <Views.ListaPacks />,
  },
  // Remision de Guias
  {
    path: "/admin/remision-guias/boleta",
    element: <Views.Boleta />,
  },
  {
    path: "/admin/remision-guias/factura",
    element: <Views.Factura />,
  },
  {
    path: "/admin/remision-guias/guia-remision",
    element: <Views.GuiaRemision />,
  },
  {
    path: "/admin/remision-guias/nota-credito",
    element: <Views.NotaCredito />,
  },
  {
    path: "/admin/remision-guias/nota-debito",
    element: <Views.NotaDebito />,
  },
  // Configuracion General
  {
    path: "/admin/configuracion-general",
    element: <Views.ConfiguracionGeneral />,
  },
  // Comercial
  {
    path: "/admin/comercial/registro-ventas",
    element: <Views.CReportes />,
  },
  {
    path: "/admin/comercial/KPI",
    element: <Views.KPI />,
  },
  {
    path: "/admin/contenido-web",
    element: <Views.ContenidoWeb />,
  },
];
