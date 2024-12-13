import * as Select from "../../Select";
import * as Styles from "../../../../../../../Styles/Actions";
import { useStock } from "../../../../../../../Hooks/useStock";

export const Top = () => {
  const { formHM, changeFormHM, RefHMEstado, RefHMTDoc } = useStock();

  return (
    <div className="form-historial-movimientos-header w-full flex flex-col sm:flex-row gap-10">
      <div className="input-producto w-full sm:w-[50%] relative">
        <input
          className={Styles.inputS}
          name="HMProducto"
          id="HMProducto"
          placeholder=""
          value={formHM.HMProducto}
          onChange={changeFormHM}
          required
        />
        <label htmlFor="HMProducto" className={Styles.labelS}>
          Nombre del Producto
        </label>
      </div>
      <div
        ref={RefHMEstado}
        className="input-estado w-full sm:w-[25%] relative"
      >
        <input
          className={Styles.inputS}
          name="HMEstado"
          id="HMEstado"
          placeholder=""
          value={formHM.HMEstado}
          onChange={changeFormHM}
          required
        />
        <label htmlFor="HMEstado" className={Styles.labelS}>
          Tipo de Movimiento
        </label>
        <Select.SEstado />
      </div>
      <div
        ref={RefHMTDoc}
        className="input-tipo-documento w-full sm:w-[25%] relative"
      >
        <input
          className={Styles.inputS}
          name="HMTipoDocumento"
          id="HMTipoDocumento"
          placeholder=""
          value={formHM.HMTipoDocumento}
          onChange={changeFormHM}
          required
        />
        <label htmlFor="HMTipoDocumento" className={Styles.labelS}>
          Tipo de Documento
        </label>
        <Select.STDocumento />
      </div>
    </div>
  );
};
