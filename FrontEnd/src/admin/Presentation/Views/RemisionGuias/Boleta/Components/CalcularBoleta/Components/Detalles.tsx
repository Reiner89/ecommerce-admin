import * as Styles from "../../../../../../Styles/Actions";

export const Detalles = () => {
  return (
    <div className="relative w-1/3 flex flex-col gap-5">
      <div className="BsubTotal relative">
        <input
          type="text"
          id="BsubTotal"
          name="BsubTotal"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="BsubTotal" className={Styles.labelL}>
          Subtotal:
        </label>
      </div>
      <div className="BicbPer relative">
        <input
          type="text"
          id="BicbPer"
          name="BicbPer"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="BicbPer" className={Styles.labelL}>
          ICBPER:
        </label>
      </div>
      <div className="BiscTotal relative">
        <input
          type="text"
          id="BiscTotal"
          name="BiscTotal"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="BiscTotal" className={Styles.labelL}>
          ISC Total:
        </label>
      </div>
      <div className="BigvTotal relative">
        <input
          type="text"
          id="BigvTotal"
          name="BigvTotal"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="BigvTotal" className={Styles.labelL}>
          IGV Total:
        </label>
      </div>
      <div className="BprecTotal relative">
        <input
          type="text"
          id="BprecTotal"
          name="BprecTotal"
          className={Styles.inputL}
          placeholder=" "
        />
        <label htmlFor="BprecTotal" className={Styles.labelL}>
          PRECIO TOTAL:
        </label>
      </div>
    </div>
  );
};
