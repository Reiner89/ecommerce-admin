import * as RG from "../../../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../../../Styles/Actions";
import * as Select from "../../../../../../Factura/Components/Select";
import moment from "moment";

export const FormRight = ({ form, handleChangeI }: Props) => {
  const { refMonedas, handleModalMonedas, handleModalOrdServ } =
    RG.useRemisionGuias();

  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-full">
        <input
          type="date"
          id="BIFechaEmision"
          name="BIFechaEmision"
          value={form.BIFechaEmision}
          onChange={handleChangeI}
          min={moment().format("YYYY-MM-DD")}
          className={Styles.inputDate}
        />
        <label htmlFor="BIFechaEmision" className={Styles.labelDate}>
          Fecha de Emision *
        </label>
      </div>
      <div className="relative w-full">
        <input
          type="date"
          name="BIFechaVencimiento"
          id="BIFechaVencimiento"
          className={Styles.inputDate}
          placeholder=""
          value={form.BIFechaVencimiento}
          onChange={handleChangeI}
          min={moment().format("YYYY-MM-DD")}
        />
        <label htmlFor={"BIFechaVencimiento"} className={Styles.labelDate}>
          Fecha de Vencimiento *
        </label>
      </div>
      <div className="flex gap-x-10">
        <div
          ref={refMonedas}
          onClick={handleModalMonedas}
          className="relative w-full"
        >
          <input
            name="BIMoneda"
            id="BIMoneda"
            className={Styles.inputS}
            placeholder=" "
            value={form.BIMoneda}
            onChange={handleChangeI}
            readOnly
          />
          <label htmlFor="BIMoneda" className={Styles.labelS}>
            Moneda
          </label>
          <Select.Monedas tipoDoc="B" />
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name="BIIGV"
            id="BIIGV"
            className={Styles.inputS}
            placeholder=" "
            value={form.BIIGV}
            onChange={handleChangeI}
          />
          <label htmlFor="BIIGV" className={Styles.labelS}>
            IGV % *
          </label>
        </div>
      </div>
      <div className="vincularOrdenServicio w-full flex justify-end">
        <button onClick={handleModalOrdServ} className={Styles.buttonSubmit}>
          Vincular O. Servicio
        </button>
      </div>
    </div>
  );
};

interface Props {
  form: RG.BI;
  handleChangeI: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
