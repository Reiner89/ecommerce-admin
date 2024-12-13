import { Toaster } from "sonner";
import { useStock } from "../../../../Hooks/useStock";
import { Layout } from "../../../../Layout/Layout";
import * as C from "./Components";
import { buttonSubmit } from "../../../../Styles/Actions";
import { OrdenConsumo } from "./Components/Modals/OrdenConsumo/OrdenConsumo";
import { SerialesUnitarios } from "./Components/Modals/Seriales/SerealesUnit";
import { SerialesMasivos } from "./Components/Modals/Seriales/SerialesMasivos";

export const Consumo = () => {
  const { cancelarConsumo, consumos, guardarConsumo, consumoSaved } =
    useStock();

  return (
    <Layout
      areaPadre="Stock"
      areaPagina="Consumo"
      children={
        <>
          <Toaster richColors position="bottom-right" />
          <div className="consumo-container flex flex-col gap-5">
            <div className="container-form-consumo w-full relative flex flex-col bg-white p-6 transition-all duration-300 rounded-xl">
              <div className="form-consumo w-full flex flex-col gap-5">
                <C.Form />
              </div>
            </div>
            <div className="table-consumo-container w-full relative flex flex-col bg-white p-6 rounded-xl gap-5 transition-all duration-300">
              <C.Table />
              <div className="table-footer w-full flex flex-col justify-center items-end gap-3">
                <div className="button-group flex flex-col items-center">
                  <button
                    onClick={guardarConsumo}
                    disabled={consumos.length === 0 || consumoSaved}
                    className={buttonSubmit}
                  >
                    {consumoSaved ? "Guardado" : "Guardar"}
                  </button>
                  <button
                    className="button-cancel text-xs text-[#bebebe] font-medium capitalize mt-3 cursor-pointer hover:text-slate-500 transition-all duration-300"
                    onClick={cancelarConsumo}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <OrdenConsumo />
          <SerialesUnitarios />
          <SerialesMasivos />
        </>
      }
    />
  );
};
