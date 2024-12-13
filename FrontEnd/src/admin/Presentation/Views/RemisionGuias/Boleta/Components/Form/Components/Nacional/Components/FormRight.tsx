import moment from "moment";
import * as RG from "../../../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../../../Styles/Actions";
import * as Select from "../../../../../../Factura/Components/Select";
import { Edit } from "../../../../../../../../Components/Icons/Iconos";

export const FormRight = ({ form, handleChangeN }: Props) => {
  const { refMonedas, handleModalMonedas, handleModalIGV, handleModalOrdServ } =
    RG.useRemisionGuias();

  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-full">
        <input
          type="date"
          id="BNFechaEmision"
          name="BNFechaEmision"
          value={form.BNFechaEmision}
          onChange={handleChangeN}
          min={moment().format("YYYY-MM-DD")}
          className={Styles.inputDate}
        />
        <label htmlFor="BNFechaEmision" className={Styles.labelDate}>
          Fecha de Emision *
        </label>
      </div>
      <div className="relative w-full">
        <input
          type="date"
          name={"BNFechaVencimiento"}
          id={"BNFechaVencimiento"}
          className={Styles.inputDate}
          placeholder=""
          value={form.BNFechaVencimiento}
          onChange={handleChangeN}
          min={moment().format("YYYY-MM-DD")}
        />
        <label htmlFor={"BNFechaVencimiento"} className={Styles.labelDate}>
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
            name="BNMoneda"
            id="BNMoneda"
            className={Styles.inputS}
            placeholder=" "
            value={form.BNMoneda}
            onChange={handleChangeN}
            readOnly
          />
          <label htmlFor="BNMoneda" className={Styles.labelS}>
            Moneda
          </label>
          <Select.Monedas tipoDoc="B" />
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name="BNIGV"
            id="BNIGV"
            className={Styles.inputS}
            placeholder=" "
            value={form.BNIGV}
            onChange={handleChangeN}
            readOnly
          />
          <label htmlFor="BNIGV" className={Styles.labelS}>
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
      <div className="vincularOrdenServicio w-full flex justify-end">
        <button onClick={handleModalOrdServ} className={Styles.buttonSubmit}>
          Vincular O. Servicio
        </button>
      </div>
    </div>
  );
};

interface Props {
  form: RG.BN;
  handleChangeN: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
