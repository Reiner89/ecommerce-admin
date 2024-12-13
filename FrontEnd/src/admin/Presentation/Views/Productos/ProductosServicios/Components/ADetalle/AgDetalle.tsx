import { SwitchInput } from "../../../../../Components";
import { Close } from "../../../../../Components/Icons/Iconos";
import { Asociado, VarianteD } from "../../../../../Data/DataSelectProductos";
import { useState } from "react";
import { useProdServices } from "../../Hooks/useProdServices";
import * as Styles from "../../../../../Styles/Actions";

export const AgDetalle = () => {
  const { modalDetalle, closeModalDetalle } = useProdServices();

  // Formulario de agregar detalle
  const [agDetalleForm, setAgDetalleForm] = useState({
    asociado: null as Asociado | null,
    variante: null as VarianteD | null,
    cantidadPack: "",
    combinarVariante: false,
  });

  return (
    <div
      className={`fixed pointer-events-auto left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-[101] transition-all duration-300 ${
        modalDetalle ? "visible" : "invisible"
      }`}
    >
      <div
        className={`flex flex-col fixed border-none w-[450px] h-full top-0 right-0 bottom-0 p-[15px_10px] bg-[#f7f7f7] dark:bg-[rgb(31,40,62)] transition-all duration-300 z-[101] ${
          modalDetalle ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <div className="flex flex-row justify-between items-center pt-8 px-6 pb-1">
          <h1 className="relative text-xl text-[#4e5865] font-semibold">
            Agregar Detalle de Pack
          </h1>
          <button
            type="button"
            className="w-[1em] h-[1em] text-center"
            onClick={closeModalDetalle}
          >
            <Close />
          </button>
        </div>
        <div className="cont-form w-full flex flex-col gap-y-4 px-6 mt-8">
          <div className="cont-cantidad relative flex flex-col w-full">
            <div className="cont-input w-full relative">
              <input
                id="cantidadPack"
                className={Styles.inputL}
                placeholder=" "
                value={agDetalleForm.cantidadPack}
                onChange={(e) =>
                  setAgDetalleForm({
                    ...agDetalleForm,
                    cantidadPack: e.target.value,
                  })
                }
                type="number"
              />
              <label htmlFor="cantidadPack" className={Styles.labelL}>
                Cantidad
              </label>
            </div>
            <div className="info flex px-1 pt-2 w-full">
              <p className="relative text-[.70rem] text-[rgba(0,0,0,.6)]">
                No se permiten decimales
              </p>
            </div>
          </div>
          {Number(agDetalleForm.cantidadPack) > 1 && (
            <div className="cont-switch relative w-full flex items-center gap-4">
              <p className="relative text-[#4e5865] text-[15px] font-light">
                ¿Combinar Variantes?
              </p>
              <SwitchInput
                checkedStatus={agDetalleForm.combinarVariante}
                handleChange={() =>
                  setAgDetalleForm({
                    ...agDetalleForm,
                    combinarVariante: !agDetalleForm.combinarVariante,
                  })
                }
              />
            </div>
          )}
        </div>
        <div className="cont-button h-full flex justify-end items-end">
          <div className="agregar w-full px-6 pb-4">
            <button
              type="button"
              className="w-full align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#09c] text-white shadow-md shadow-[#09c]/10 hover:shadow-lg hover:shadow-[#09c]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
