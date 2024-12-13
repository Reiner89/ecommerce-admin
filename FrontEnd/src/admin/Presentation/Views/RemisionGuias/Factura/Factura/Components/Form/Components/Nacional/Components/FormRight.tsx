import moment from "moment";
import {
  FN,
  useRemisionGuias,
} from "../../../../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../../../../Styles/Actions";
import { Edit } from "../../../../../../../../../Components/Icons/Iconos";
import * as Select from "../../../../../../Components/Select";

export const FormRight = ({ formNac, handleChangeN }: Props) => {
  const {
    refMonedas,
    handleModalMonedas,
    refTiposPago,
    handleModalTiposPago,
    handleModalIGV,
    handleModalOrdServ,
  } = useRemisionGuias();

  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-full">
        <input
          type="date"
          id="FNFechaEmision"
          name="FNFechaEmision"
          value={formNac.FNFechaEmision}
          onChange={handleChangeN}
          min={moment().format("YYYY-MM-DD")}
          className={Styles.inputDate}
        />
        <label htmlFor="FNFechaEmision" className={Styles.labelDate}>
          Fecha de Emision *
        </label>
      </div>
      <div className="relative w-full">
        <input
          type="date"
          name={"FNFechaVencimiento"}
          id={"FNFechaVencimiento"}
          className={Styles.inputDate}
          placeholder=""
          value={formNac.FNFechaVencimiento}
          onChange={handleChangeN}
          min={moment().format("YYYY-MM-DD")}
        />
        <label htmlFor={"FNFechaVencimiento"} className={Styles.labelDate}>
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
            name="FNMoneda"
            id="FNMoneda"
            className={Styles.inputS}
            placeholder=" "
            value={formNac.FNMoneda}
            onChange={handleChangeN}
            readOnly
          />
          <label htmlFor="FNMoneda" className={Styles.labelS}>
            Moneda
          </label>
          <Select.Monedas tipoDoc="F" />
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name="FNIGV"
            id="FNIGV"
            className={Styles.inputS}
            placeholder=" "
            value={formNac.FNIGV}
            onChange={handleChangeN}
            readOnly
          />
          <label htmlFor="FNIGV" className={Styles.labelS}>
            IGV % *
          </label>
          <button
            onClick={handleModalIGV}
            className="absolute bottom-2 right-0 hover:text-[#09c] text-gray-500"
          >
            <Edit className="text-sm" />
          </button>
        </div>
      </div>
      <div className="flex gap-x-10">
        <div
          ref={refTiposPago}
          onClick={handleModalTiposPago}
          className="relative z-0 w-full group"
        >
          <input
            name="FNTipoPago"
            id="FNTipoPago"
            className={Styles.inputS}
            placeholder=" "
            value={formNac.FNTipoPago}
            onChange={handleChangeN}
            readOnly
          />
          <label htmlFor="FNTipoPago" className={Styles.labelS}>
            Tipo de Pago
          </label>
          <Select.TipoPago />
        </div>
        <div className="relative z-0 w-full group">
          <input
            name="FNNroCuotas"
            id="FNNroCuotas"
            className={Styles.inputS}
            placeholder=" "
            value={formNac.FNNroCuotas}
            onChange={handleChangeN}
          />
          <label htmlFor="FNNroCuotas" className={Styles.labelS}>
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
  formNac: FN;
  handleChangeN: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
