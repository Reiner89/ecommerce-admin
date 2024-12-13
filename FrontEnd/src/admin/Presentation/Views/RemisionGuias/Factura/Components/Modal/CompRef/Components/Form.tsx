import { useRemisionGuias } from "../../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../../Styles/Actions";
import { TipoComprobantes } from "../../../../Factura/Components/Select/TipoComprobantes";

export const Form = () => {
  const { formCompRef, handleCompRefChange, refComprobantes, handleTipoComp } =
    useRemisionGuias();

  return (
    <div className="relative flex items-center gap-12">
      <div
        ref={refComprobantes}
        onClick={handleTipoComp}
        className="tipoComrpbante relative"
      >
        <input
          type="text"
          id="tipoComprobante"
          name="tipoComprobante"
          className={Styles.inputS}
          placeholder=" "
          value={formCompRef.tipoComprobante}
          onChange={handleCompRefChange}
          readOnly
        />
        <label htmlFor="tipoComprobante" className={Styles.labelS}>
          Comprobante
        </label>
        <TipoComprobantes />
      </div>
      <div className="numeroComprobante relative">
        <input
          type="text"
          id="nroComprobante"
          name="nroComprobante"
          className={Styles.inputS}
          placeholder=" "
          value={formCompRef.nroComprobante}
          onChange={handleCompRefChange}
        />
        <label htmlFor="nroComprobante" className={Styles.labelS}>
          N° Comprobante
        </label>
      </div>
      <div className="fechaEmision relative">
        <input
          type="date"
          id="fechaEmision"
          name="fechaEmision"
          className={Styles.inputS}
          value={formCompRef.fechaEmisionComprobante}
          onChange={handleCompRefChange}
          placeholder=" "
        />
        <label htmlFor="fechaEmision" className={Styles.labelS}>
          Fecha Emisión
        </label>
      </div>
      <button className={Styles.buttonSubmit}>Buscar</button>
    </div>
  );
};
