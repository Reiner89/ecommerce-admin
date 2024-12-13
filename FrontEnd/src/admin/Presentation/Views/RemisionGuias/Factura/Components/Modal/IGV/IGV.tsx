import { useRemisionGuias } from "../../../../../../Hooks/useRemisionGuias";
import { Close } from "../../../../../../Components/Icons/Iconos";
import { CardIGV } from "./Components/CardIGV";

export const IGV = ({ tipoDoc }: Props) => {
  const { formFNac, refIGV, modalIGV, handleIGVChange, handleModalIGV } =
    useRemisionGuias();

  return (
    <div
      className={`fixed left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-50 flex justify-center items-center transition-all duration-500 ${
        modalIGV ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refIGV}
        className={`absolute flex flex-col justify-between w-[45%] bg-white border border-solid border-[#e0e0e0] rounded-md overflow-hidden transition-transform duration-500 ${
          modalIGV ? "translate-y-0" : "translate-y-[600%]"
        }`}
      >
        <div className="relative w-full h-full p-5 transition-all duration-300">
          <div className="w-full flex flex-col relative py-5 px-4 border border-solid border-[#ccc] gap-5 transition-all duration-300">
            <div className="header-modal-IGV relative w-full text-center">
              <h1 className="relative text-[#344767] text-xl font-semibold">
                Actualizar Tasa de IGV
              </h1>
              <Close
                onClick={handleModalIGV}
                className="absolute right-0 top-0 text-xl cursor-pointer"
              />
            </div>
            <div className="igv-container w-full flex gap-10">
              <CardIGV
                IGV="10.00"
                description="Tasa especial para MYPES que pertenezcan al rubro de:
                      restaurantes, hoteles, alojamientos turisticos, servicios
                      de catering y concesionairos de alimentos"
                active={formFNac.FNIGV === "10.00"}
                changeIGV={() => handleIGVChange("10.00", tipoDoc)}
              />
              <CardIGV
                IGV="18.00"
                description="Tasa general del IGV para otros rubros"
                active={formFNac.FNIGV === "18.00"}
                changeIGV={() => handleIGVChange("18.00", tipoDoc)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  tipoDoc: "F" | "B";
}
