import * as Styles from "../../../../../../../Styles/Actions";

export const Detalles = () => {
  return (
    <div className="relative w-1/3 flex flex-col gap-5">
      <div className="FsubTotal relative">
        <input
          type="text"
          id="FsubTotal"
          name="FsubTotal"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="FsubTotal" className={Styles.labelL}>
          Subtotal:
        </label>
      </div>
      <div className="FicbPer relative">
        <input
          type="text"
          id="FicbPer"
          name="FicbPer"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="FicbPer" className={Styles.labelL}>
          ICBPER:
        </label>
      </div>
      <div className="FiscTotal relative">
        <input
          type="text"
          id="FiscTotal"
          name="FiscTotal"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="FiscTotal" className={Styles.labelL}>
          ISC Total:
        </label>
      </div>
      <div className="FigvTotal relative">
        <input
          type="text"
          id="FigvTotal"
          name="FigvTotal"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="FigvTotal" className={Styles.labelL}>
          IGV Total:
        </label>
      </div>
      <div className="FprecTotal relative">
        <input
          type="text"
          id="FprecTotal"
          name="FprecTotal"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="FprecTotal" className={Styles.labelL}>
          PRECIO TOTAL:
        </label>
      </div>
    </div>
  );
};
