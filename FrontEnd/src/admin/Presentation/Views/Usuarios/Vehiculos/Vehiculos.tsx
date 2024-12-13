import { Layout } from "../../../Layout/Layout";
// import { CantProvs } from "./Components/CantProvs/CantProvs";
// import { Buscador } from "./Components/Buscador/Buscador";
import { Toaster } from "sonner";
// import { Agregar } from "../../../Components/Icons/Iconos";
// import { Table } from "./Components/Table/Table";
// import { Pagination } from "./Components/Pagination/Pagination";
import { NuevoVehiculo } from "./Components/Modals/NuevoVehiculo";
// import { buttonSubmit } from "../../../Styles/Actions";
// import { useAdministracion } from "../../../Hooks/useAdmin";

export const Vehiculos = () => {
  // const { openFormVeh } = useAdministracion();

  return (
    <Layout
      areaPadre="Aministración"
      areaPagina="Vehiculos"
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
                    onClick={openFormVeh}
                    type="button"
                    className={buttonSubmit}
                  >
                    <Agregar className="relative text-lg" /> Crear
                  </button>
                </div>
              </div>
              <Table />
              <Pagination /> */}
              <NuevoVehiculo />
            </div>
          </div>
        </>
      }
    />
  );
};
