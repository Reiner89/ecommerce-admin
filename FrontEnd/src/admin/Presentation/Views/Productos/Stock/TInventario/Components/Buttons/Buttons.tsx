import { useStock } from "../../../../../../Hooks/useStock";
import { buttonSubmit } from "../../../../../../Styles/Actions";

export const Buttons = () => {
  const {
    inventarios,
    continuarMasTarde,
    handleOpenCancelar,
    guardarInventario,
    savingTInventario,
  } = useStock();

  return (
    <div className="button-group flex flex-col items-center">
      <button
        disabled={savingTInventario || inventarios.length === 0}
        onClick={guardarInventario}
        className={buttonSubmit}
      >
        Finalizar Inventario
      </button>
      <div className="w-full relative flex gap-4">
        <button
          onClick={continuarMasTarde}
          className={`button-cancel text-xs text-[#bebebe] font-medium capitalize mt-3 cursor-pointer hover:text-slate-500 transition-all duration-300 ${
            inventarios.length === 0 ? "hidden" : "block"
          }`}
        >
          Continuar más Tarde
        </button>
        <button
          onClick={handleOpenCancelar}
          className="button-cancel text-xs text-[#bebebe] font-medium capitalize mt-3 cursor-pointer hover:text-slate-500 transition-all duration-300"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
