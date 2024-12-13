import * as Styles from "../../../../../../../Styles/Actions";
import { useStock } from "../../../../../../../Hooks/useStock";
import { STConsumo } from "../../Select/STConsumo";

export const Bottom = () => {
  const { formHM, changeFormHM, RefHMTConsumo, HEIdEstado } = useStock();

  return (
    <div className="form-historial-movimientos-bottom w-full flex flex-col sm:flex-row gap-10">
      <div
        ref={RefHMTConsumo}
        className="input-tipoConsumo w-full sm:w-[25%] relative"
      >
        <input
          className={Styles.inputS}
          name="HMTipoConsumo"
          id="HMTipoConsumo"
          placeholder=""
          value={formHM.HMTipoConsumo}
          onChange={changeFormHM}
          required
          disabled={HEIdEstado === 1}
        />
        <label htmlFor="HMTipoConsumo" className={Styles.labelS}>
          Tipo de Consumo
        </label>
        <STConsumo />
      </div>
      <div className="input-unidadMedida w-full sm:w-[25%] relative">
        <input
          className={Styles.inputS}
          name="HMUnidadMedida"
          id="HMUnidadMedida"
          placeholder=""
          value={formHM.HMUnidadMedida}
          onChange={changeFormHM}
          required
        />
        <label htmlFor="HMUnidadMedida" className={Styles.labelS}>
          {HEIdEstado === 2 ? "Número de Consumo" : "Número de Documento"}
        </label>
      </div>
      <div className="input-fecha-desde-consumo w-full sm:w-[25%] relative">
        <input
          type="date"
          className={Styles.inputS}
          name="HMConsumoDesde"
          id="HMConsumoDesde"
          value={formHM.HMConsumoDesde}
          onChange={changeFormHM}
          placeholder=""
          required
        />
        <label htmlFor="HMConsumoDesde" className={Styles.labelS}>
          Fecha de Consumo Desde
        </label>
      </div>
      <div className="input-fecha-hasta-consumo w-full sm:w-[25%] relative">
        <input
          type="date"
          className={Styles.inputS}
          name="HMConsumoHasta"
          id="HMConsumoHasta"
          placeholder=""
          value={formHM.HMConsumoHasta}
          onChange={changeFormHM}
          required
        />
        <label htmlFor="HMConsumoHasta" className={Styles.labelS}>
          Fecha de Consumo Hasta
        </label>
      </div>
    </div>
  );
};
