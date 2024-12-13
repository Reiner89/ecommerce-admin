import { Layout } from "../../../../Layout/Layout";
import * as R from "./Components";
import { useStock } from "../../../../Hooks/useStock";
import { Toaster } from "sonner";
import { AsignarSereales } from "./Components/Form/Components/AsignarSereales";
import { buttonSubmit } from "../../../../Styles/Actions";
import { SerialesMasivos } from "./Components/Form/Components/Sereales/SerialesMasivos";

export const Recepcion = () => {
  const {
    totalNeto,
    formatMoney,
    cancelarRecepcion,
    recepcionIsSaving,
    guardarRecepciones,
  } = useStock();

  return (
    <Layout
      areaPadre="Stok"
      areaPagina="Recepción"
      children={
        <>
          <Toaster richColors position="bottom-right" />
          <div className="recepcion-container flex flex-col gap-5">
            <div className="container-form-recepcion w-full relative flex flex-col bg-white p-6 transition-all duration-300 rounded-xl">
              <div className="form-recepcion flex flex-col gap-5">
                <R.Form />
              </div>
            </div>
            <div className="table-recepcion-container w-full relative flex flex-col bg-white p-6 rounded-xl gap-5 transition-all duration-300">
              <R.Table />
              <div className="table-footer w-full flex flex-col justify-center items-end gap-3">
                <div className="total-group flex text-base text-[#999999] gap-10">
                  <p>Total Neto:</p>
                  <div className="">S/{formatMoney(totalNeto)}</div>
                </div>
                <div className="button-group flex flex-col items-center">
                  <button
                    onClick={guardarRecepciones}
                    disabled={recepcionIsSaving}
                    className={buttonSubmit}
                  >
                    {recepcionIsSaving ? "Guardando..." : "Guardar"}
                  </button>
                  <button
                    className="button-cancel text-xs text-[#bebebe] font-medium capitalize mt-3 cursor-pointer hover:text-slate-500 transition-all duration-300"
                    onClick={cancelarRecepcion}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <AsignarSereales />
          <SerialesMasivos />
        </>
      }
    />
  );
};
