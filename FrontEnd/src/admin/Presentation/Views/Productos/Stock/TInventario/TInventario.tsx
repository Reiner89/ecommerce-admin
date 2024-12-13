import { Toaster } from "sonner";
import { useStock } from "../../../../Hooks/useStock";
import { Layout } from "../../../../Layout/Layout";
import * as TI from "./Components/index";
import { ImpPlantilla } from "./Components/Footer/Modals/ImpPlantilla";
import { LoaderTables } from "../../../../Components";

export const TInventario = () => {
  const { verResumen, deatallesExist, loading } = useStock();

  return (
    <Layout
      areaPadre="Stock"
      areaPagina="Toma de Inventario"
      children={
        <>
          <Toaster richColors position="bottom-right" />
          <div className="recepcion-container flex flex-col gap-5">
            <div className="container-form-recepcion w-full relative flex flex-col bg-white p-6 gap-4 transition-all duration-300 rounded-xl">
              <div className="form-body w-[60%] flex flex-col gap-5">
                <TI.Form />
              </div>
              <TI.Footer />
            </div>
            <div className="table-recepcion-container w-full relative flex flex-col bg-white p-6 rounded-xl gap-5 transition-all duration-300">
              <div className="table-container w-full flex flex-col h-[200px] overflow-hidden gap-5">
                {loading ? (
                  <LoaderTables />
                ) : (
                  <>
                    {verResumen ? (
                      <TI.TDetalles />
                    ) : (
                      <TI.Table deatallesExist={deatallesExist} />
                    )}
                  </>
                )}
              </div>
              <div className="table-footer w-full flex flex-col justify-center items-end gap-3">
                <TI.Buttons />
              </div>
            </div>
          </div>
          <TI.MCancelar />
          <ImpPlantilla />
        </>
      }
    />
  );
};
