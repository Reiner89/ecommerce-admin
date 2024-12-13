import { useRemisionGuias } from "../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../Styles/Actions";
import * as Factura from "../../Factura/Components/CalcularFactura/Components";

export const CalcularFactura = () => {
  const { handleViewPDF } = useRemisionGuias();

  return (
    <div className="relative w-full flex flex-col">
      <div className="form-container relative w-full flex flex-row px-6 py-2 gap-10">
        <Factura.Opciones />
        <Factura.Operaciones />
        <Factura.Detalles />
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
