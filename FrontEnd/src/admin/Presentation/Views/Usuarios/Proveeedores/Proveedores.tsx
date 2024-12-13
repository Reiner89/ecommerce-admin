// import { Agregar } from "../../../Components/Icons/Iconos";
import { Layout } from "../../../Layout/Layout";
// import { buttonSubmit } from "../../../Styles/Actions";
// import { Table } from "./Components/Table/Table";
// import { Pagination } from "./Components/Pagination/Pagination";
// import { CantProvs } from "./Components/CantProvs/CantProvs";
// import { Buscador } from "./Components/Buscador/Buscador";
import { NuevoProveedor } from "./Components/Modals/NuevoProveedor";
// import { useAdministracion } from "../../../Hooks/useAdmin";
import { Toaster } from "sonner";

export const Proveedores = () => {
  // const { openFormProveedor } = useAdministracion();

  return (
    <Layout
      areaPadre="Aministración"
      areaPagina="Proveedores"
      children={
        <>
          <Toaster position="bottom-right" richColors />
          <div className="proveedores-container flex flex-col gap-5">
            <div className="relative flex flex-col gap-5 bg-white rounded-lg p-5">
              {/* <CantProvs />
              <div className="w-full flex justify-between">
                <div className="cont-buscador relative">
                  <Buscador />
                </div>
                <div className="cont-acciones">
                  <button
                    onClick={openFormProveedor}
                    type="button"
                    className={buttonSubmit}
                  >
                    <Agregar className="relative text-lg" /> Crear
                  </button>
                </div>
              </div>
              <Table />
              <Pagination /> */}
              <NuevoProveedor />
            </div>
          </div>
          {/* <NuevoProveedor /> */}
        </>
      }
    />
  );
};
