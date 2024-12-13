import * as Icon from "../../../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../../../Hooks/useStock";
import { SelectTConsumo } from "../Select/SelectTConsumo";

export const TConsumo = () => {
  const { refTConsumo, formConsumo, modalConsumo, showModalTipoConsumo } =
    useStock();

  return (
    <div
      className="select-tipo-consumo w-48 min-w-48 relative text-sm text-[#666666] flex justify-between items-center gap-3 cursor-pointer border border-gray-200 p-2.5 rounded-lg"
      onClick={showModalTipoConsumo}
      ref={refTConsumo}
    >
      <p className="relative mr-3">
        {formConsumo.consumoTipo === ""
          ? "Tipo de Consumo"
          : formConsumo.consumoTipo}
      </p>
      {modalConsumo ? <Icon.Up /> : <Icon.Down />}
      <SelectTConsumo />
    </div>
  );
};
