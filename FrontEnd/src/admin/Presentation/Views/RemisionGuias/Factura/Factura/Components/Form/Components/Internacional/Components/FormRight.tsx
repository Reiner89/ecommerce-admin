import {
  FI,
  useRemisionGuias,
} from "../../../../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../../../../Styles/Actions";
import * as Select from "../../../../../../Components/Select";
import moment from "moment";

export const FormRight = ({ formFIInt, handleChangeI }: Props) => {
  const {
    refMonedas,
    handleModalMonedas,
    refTiposPago,
    handleModalTiposPago,
    handleModalOrdServ,
  } = useRemisionGuias();

  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-full">
        <input
          type="date"
          id="FIFechaEmision"
          name="FIFechaEmision"
          value={formFIInt.FIFechaEmision}
          onChange={handleChangeI}
          min={moment().format("YYYY-MM-DD")}
          className={Styles.inputDate}
        />
        <label htmlFor="FIFechaEmision" className={Styles.labelDate}>
          Fecha de Emision *
        </label>
      </div>
      <div className="relative w-full">
        <input
          type="date"
          name="FIFechaVencimiento"
          id="FIFechaVencimiento"
          className={Styles.inputDate}
          placeholder=""
          value={formFIInt.FIFechaVencimiento}
          onChange={handleChangeI}
          min={moment().format("YYYY-MM-DD")}
        />
        <label htmlFor={"FIFechaVencimiento"} className={Styles.labelDate}>
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
            name="FIMoneda"
            id="FIMoneda"
            className={Styles.inputS}
            placeholder=" "
            value={formFIInt.FIMoneda}
            onChange={handleChangeI}
            readOnly
          />
          <label htmlFor="FIMoneda" className={Styles.labelS}>
            Moneda
          </label>
          <Select.Monedas tipoDoc="F" />
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name="FIIGV"
            id="FIIGV"
            className={Styles.inputS}
            placeholder=" "
            value={formFIInt.FIIGV}
            onChange={handleChangeI}
          />
          <label htmlFor="FIIGV" className={Styles.labelS}>
            IGV % *
          </label>
        </div>
      </div>
      <div className="flex gap-x-10">
        <div
          ref={refTiposPago}
          onClick={handleModalTiposPago}
          className="relative z-0 w-full group"
        >
          <input
            name="FIPago"
            id="FIPago"
            className={Styles.inputS}
            placeholder=" "
            value={formFIInt.FIPago}
            onChange={handleChangeI}
            readOnly
          />
          <label htmlFor="FIPago" className={Styles.labelS}>
            Tipo de Pago
          </label>
          <Select.TipoPago />
        </div>
        <div className="relative z-0 w-full group">
          <input
            name="FINroCuotas"
            id="FINroCuotas"
            className={Styles.inputS}
            placeholder=" "
            value={formFIInt.FINroCuotas}
            onChange={handleChangeI}
          />
          <label htmlFor="FINroCuotas" className={Styles.labelS}>
            Nro. Cuotas
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
  formFIInt: FI;
  handleChangeI: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
