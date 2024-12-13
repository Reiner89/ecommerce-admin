import { FileCsv } from "../../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../../Hooks/useStock";
import * as Styles from "../../../../../../../Styles/Actions";

export const Actions = () => {
  const { exportMovsToExcel } = useStock();

  return (
    <div className="form-historial-actions flex justify-between items-center gap-3">
      <button className={Styles.buttonSubmit}>Buscar</button>
      <button
        onClick={exportMovsToExcel}
        className={Styles.buttonAction}
        type="button"
      >
        <FileCsv className="mr-2" />
        Exportar a CSV
      </button>
    </div>
  );
};
