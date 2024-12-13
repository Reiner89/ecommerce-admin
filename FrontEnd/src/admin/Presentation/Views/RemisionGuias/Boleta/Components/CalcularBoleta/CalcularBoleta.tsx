import { useRemisionGuias } from "../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../Styles/Actions";
import * as Boleta from "./Components";

export const CalcularBoleta = () => {
  const { handleViewPDF } = useRemisionGuias();

  return (
    <div className="relative w-full flex flex-col">
      <div className="form-container relative w-full flex flex-row px-6 py-2 gap-10">
        <Boleta.Opciones />
        <Boleta.Operaciones />
        <Boleta.Detalles />
      </div>
      <div className="actions-container relative w-full flex justify-end gap-4">
        <button type="button" className={Styles.buttonAction}>
          Limpiar
        </button>
        <button
          onClick={handleViewPDF}
          type="button"
          className={Styles.buttonSubmit}
        >
          Previsualizar
        </button>
      </div>
    </div>
  );
};
