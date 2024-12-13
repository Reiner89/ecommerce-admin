import * as Styles from "../../../../../../../Styles/Actions";

export const Operaciones = () => {
  return (
    <div className="relative w-1/3 flex flex-col gap-5">
      <div className="FopGravada relative">
        <input
          type="text"
          id="FopGravada"
          name="FopGravada"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="FopGravada" className={Styles.labelL}>
          Operación Gravada:
        </label>
      </div>
      <div className="FopInafecta relative">
        <input
          type="text"
          id="FopInafecta"
          name="FopInafecta"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="FopInafecta" className={Styles.labelL}>
          Operación Inafecta:
        </label>
      </div>
      <div className="FopExonerada relative">
        <input
          type="text"
          id="FopExonerada"
          name="FopExonerada"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="FopExonerada" className={Styles.labelL}>
          Operación Exonerada:
        </label>
      </div>
      <div className="FopExportacion relative">
        <input
          type="text"
          id="FopExportacion"
          name="FopExportacion"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="FopExportacion" className={Styles.labelL}>
          Operación Exportación:
        </label>
      </div>
      <div className="FdescTotales relative">
        <input
          type="text"
          id="FdescTotales"
          name="FdescTotales"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="FdescTotales" className={Styles.labelL}>
          Descuentos Totales:
        </label>
      </div>
      <div className="Fanticipos relative">
        <input
          type="text"
          id="Fanticipos"
          name="Fanticipos"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="Fanticipos" className={Styles.labelL}>
          Anticipos:
        </label>
      </div>
      <div className="FtotalOpGratuitas relative">
        <input
          type="text"
          id="FtotalOpGratuitas"
          name="FtotalOpGratuitas"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="FtotalOpGratuitas" className={Styles.labelL}>
          Total de Op. Gratuitas:
        </label>
      </div>
    </div>
  );
};
