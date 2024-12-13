import { Layout } from "../../../Layout/Layout";
import * as Components from "./Components";
import { useProdServices } from "./Hooks/useProdServices";
import * as Producto from "./Product";
import { Table } from "./Components/Tables/Table";
import { Toaster } from "sonner";
import { Pagination } from "./Components/Pagination/Pagination";
import { UbicacionProductos } from "./Product/Modal/ProductosAsoc/UbicacionProductos";

export const Productos = () => {
  // Uso mi Hook
  const { productsFiltered, estadoActivo } = useProdServices();

  return (
    <Layout
      areaPadre="Productos"
      areaPagina="Crear Producto"
      children={
        <>
          <Toaster richColors position="bottom-right" />
          <div className="relative flex justify-center gap-5 pb-4">
            <div className="relative w-full">
              <Components.MainHeader />
              <div className="relative flex flex-col rounded-[20px] border border-solid border-[#e0e0e0] bg-[#fff] mt-1 overflow-x-auto">
                <Components.TableHeader />
                <Table
                  estadoActivo={estadoActivo}
                  productsFiltered={productsFiltered}
                />
                <div className="cont-pagination p-4">
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
          <Producto.ProductForm />
          <Producto.Ver />
          <UbicacionProductos />
          {/* TODO: IMPLEMENTAR EL LOGIN CON LOS USUARIOS Y CON SOCKETS LOS CHATS CON CONVERSACIONES, SE PODRA CAMBIAR DE CONVERSACION A TRAVES DE LA FOTO (WEB SOCKETS CHAT Y NOTIFICACIONES) */}
          {/* TODO: SE PODRA CAMBIAR LA IMAGEN EN PERFIL CON UN TAMAÑO ESPECIFICO */}
          {/* TODO: LOS CAMPOS TENDRAN UN FOCO AL TERMINAR DE LLENAR */}
          {/* TODO: TIPO DE VENTA (AL POR MAYOR AL POR MENOR) */}
          {/* TODO: CAMBIAR EL FONDO DE LOS SELECT */}
          {/* TODO: CALENDARIOS NEXT UI */}
        </>
      }
    />
  );
};
