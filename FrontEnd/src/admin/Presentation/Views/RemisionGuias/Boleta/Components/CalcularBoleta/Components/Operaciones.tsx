import * as Styles from "../../../../../../Styles/Actions";

export const Operaciones = () => {
  return (
    <div className="relative w-1/3 flex flex-col gap-5">
      <div className="BopGravada relative">
        <input
          type="text"
          id="BopGravada"
          name="BopGravada"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="BopGravada" className={Styles.labelL}>
          Operación Gravada:
        </label>
      </div>
      <div className="BopInafecta relative">
        <input
          type="text"
          id="BopInafecta"
          name="BopInafecta"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="BopInafecta" className={Styles.labelL}>
          Operación Inafecta:
        </label>
      </div>
      <div className="BopExonerada relative">
        <input
          type="text"
          id="BopExonerada"
          name="BopExonerada"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="BopExonerada" className={Styles.labelL}>
          Operación Exonerada:
        </label>
      </div>
      <div className="BopExportacion relative">
        <input
          type="text"
          id="BopExportacion"
          name="BopExportacion"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="BopExportacion" className={Styles.labelL}>
          Operación Exportación:
        </label>
      </div>
      <div className="BdescTotales relative">
        <input
          type="text"
          id="BdescTotales"
          name="BdescTotales"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="BdescTotales" className={Styles.labelL}>
          Descuentos Totales:
        </label>
      </div>
      <div className="Banticipos relative">
        <input
          type="text"
          id="Banticipos"
          name="Banticipos"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="Banticipos" className={Styles.labelL}>
          Anticipos:
        </label>
      </div>
      <div className="BtotalOpGratuitas relative">
        <input
          type="text"
          id="BtotalOpGratuitas"
          name="BtotalOpGratuitas"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="BtotalOpGratuitas" className={Styles.labelL}>
          Total de Op. Gratuitas:
        </label>
      </div>
    </div>
  );
};
