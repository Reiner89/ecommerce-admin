import { useStock } from "../../../../../../Hooks/useStock";
import { buttonAction } from "../../../../../../Styles/Actions";
import { ModalImp } from "./Modals/ModalImp";

export const Footer = () => {
  const {
    refMImpTI,
    inventarios,
    fechaInicio,
    cargarDetalles,
    verResumenInv,
    handleImportar,
  } = useStock();

  return (
    <div className="container-footer w-full relative flex justify-between">
      <button className="relative text-xs text-[#999999] font-mono flex gap-2">
        Continuando inventario iniciado por David Reiner {fechaInicio}
        <span
          onClick={cargarDetalles}
          className="relative text-[#09c] font-semibold cursor-pointer hover:underline transition-all duration-300"
        >
          Cargar Detalle
        </span>
      </button>
      <div className="flex gap-5">
        <button
          onClick={verResumenInv}
          className={`button-verResumen text-xs text-[#bebebe] font-medium cursor-pointer hover:text-slate-500 transition-all duration-300 ${
            inventarios.length === 0 ? "hidden" : "block"
          }`}
        >
          Ver Resumen
        </button>
        <div ref={refMImpTI} className={buttonAction} onClick={handleImportar}>
          <p>Importar Detalles</p>
        </div>
        <ModalImp />
      </div>
    </div>
  );
};
