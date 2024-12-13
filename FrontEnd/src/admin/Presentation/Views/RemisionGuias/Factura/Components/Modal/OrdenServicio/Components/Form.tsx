import { useRemisionGuias } from "../../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../../Styles/Actions";

export const Form = () => {
  const { formOrdenServ, handleInputChangeOrdenServ } = useRemisionGuias();

  return (
    <div className="relative flex items-center gap-12">
      <div className="nroOServicio relative">
        <input
          type="text"
          id="nroOServicio"
          name="nroOServicio"
          className={Styles.inputS}
          placeholder=" "
          value={formOrdenServ.nroOServicio}
          onChange={handleInputChangeOrdenServ}
        />
        <label htmlFor="nroOServicio" className={Styles.labelS}>
          N° O. Servicio
        </label>
      </div>
      <div className="fechaEmision relative">
        <input
          type="date"
          id="fechaEmisionOServicio"
          name="fechaEmisionOServicio"
          className={Styles.inputS}
          value={formOrdenServ.fechaEmisionOServicio}
          onChange={handleInputChangeOrdenServ}
          placeholder=" "
        />
        <label htmlFor="fechaEmisionOServicio" className={Styles.labelS}>
          Fecha Emisión
        </label>
      </div>
      <button className={Styles.buttonSubmit}>Buscar</button>
    </div>
  );
};
