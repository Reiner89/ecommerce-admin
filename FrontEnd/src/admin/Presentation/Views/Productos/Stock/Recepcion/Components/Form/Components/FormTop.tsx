import * as Icon from "../../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../../Hooks/useStock";
import { SelectDRecepcion } from "./Selects/SelectDRecepcion";

export const FormTop = () => {
  const { showModalDoc, formRecep, modalDoc, refButtonDoc } = useStock();
  return (
    <div className="form-top w-full relative flex justify-between">
      {/* Left */}
      <div
        ref={refButtonDoc}
        className="selec-doc-recepcion w-52 min-w-52 relative text-sm text-[#666666] flex items-center gap-3 cursor-pointer border border-gray-200 p-2.5 rounded-lg"
        onClick={showModalDoc}
      >
        <p className="relative w-[90%]">
          {formRecep.recepcionDocumento === ""
            ? "Tipo de Documento"
            : formRecep.recepcionDocumento}
        </p>
        {modalDoc ? <Icon.Up /> : <Icon.Down />}
        <SelectDRecepcion />
      </div>

      {/* Right */}
      <div className="relative cont-fecha" />
    </div>
  );
};
