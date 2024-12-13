import {
  Close,
  PDF,
  Sticker,
} from "../../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../../Hooks/useStock";
import { CardConsumo } from "./Components/CardConsumo";

export const OrdenConsumo = () => {
  const {
    refOrdenConsumo,
    modalOrdenConsumo,
    seleccionarOdenConsumo,
    handleModalOConsumo,
  } = useStock();

  return (
    <div
      className={`fixed left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-50 flex justify-center items-center transition-all duration-500 ${
        modalOrdenConsumo ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refOrdenConsumo}
        className={`absolute flex flex-col justify-between w-[45%] bg-white border border-solid border-[#e0e0e0] rounded-md overflow-hidden transition-transform duration-500 ${
          modalOrdenConsumo ? "translate-y-0" : "translate-y-[600%]"
        }`}
      >
        <div className="relative w-full h-full p-5 transition-all duration-300">
          <div className="w-full flex flex-col relative py-5 px-4 border border-solid border-[#ccc] gap-5 transition-all duration-300">
            <div className="header-modal-IGV relative w-full text-center">
              <h1 className="relative text-[#344767] text-xl font-semibold">
                Imprimir Orden de de Consumo
              </h1>
              <Close
                onClick={handleModalOConsumo}
                className="absolute right-0 top-0 text-xl cursor-pointer"
              />
            </div>
            <div className="igv-container w-full flex gap-10">
              <CardConsumo
                title="Imprimir Orden"
                chageTOrden={() => seleccionarOdenConsumo("Orden")}
                icon={<PDF />}
              />
              <CardConsumo
                title="Imprimir Label"
                chageTOrden={() => seleccionarOdenConsumo("Label")}
                icon={<Sticker />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
