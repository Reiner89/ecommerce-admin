import { useStock } from "../../../../../../Hooks/useStock";
import * as Icon from "../../../../../../Components/Icons/Iconos";

export const Header = () => {
  const { formConsumo, showModalTipoConsumo, modalConsumo } = useStock();

  return (
    <div
      onClick={showModalTipoConsumo}
      className="selec-doc-recepcion w-52 text-sm text-[#666666] flex items-center cursor-pointer transition-all duration-300"
    >
      <p className="relative mr-3">
        {formConsumo.consumoTipo === ""
          ? "Elegir Tipo Consumo"
          : formConsumo.consumoTipo}
      </p>
      {modalConsumo ? <Icon.Up /> : <Icon.Down />}
    </div>
  );
};
