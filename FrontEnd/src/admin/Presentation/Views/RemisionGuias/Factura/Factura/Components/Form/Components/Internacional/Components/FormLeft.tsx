import {
  FI,
  useRemisionGuias,
} from "../../../../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../../../../Styles/Actions";
import * as Select from "../../../../../../Components/Select";

export const FormLeft = ({ formFIInt, handleChangeI }: Props) => {
  const {
    refBienes,
    handleModalBienes,
    refPaises,
    handleModalPaises,
    refCiudades,
    handleModalCiudades,
  } = useRemisionGuias();

  return (
    <div className="flex flex-col gap-5">
      <div
        ref={refBienes}
        onClick={handleModalBienes}
        className="w-full relative"
      >
        <input
          type="text"
          name="FIExpBienes"
          id="FIExpBienes"
          className={Styles.inputS}
          placeholder=" "
          value={formFIInt.FIExpBienes}
          onChange={handleChangeI}
          readOnly
        />
        <label htmlFor="FIExpBienes" className={Styles.labelS}>
          Exportación de Bienes
        </label>
        <Select.Bienes tipoDoc="F" />
      </div>
      <div className="flex w-full gap-5">
        <div className="w-full relative">
          <input
            type="text"
            name="FINroIdAtr"
            id="FINroIdAtr"
            className={Styles.inputS}
            placeholder=" "
            value={formFIInt.FINroIdAtr}
            onChange={handleChangeI}
          />
          <label htmlFor="FINroIdAtr" className={Styles.labelS}>
            Nro ID Tributario
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name="FIRazonSocial"
            id="FIRazonSocial"
            className={Styles.inputS}
            placeholder=" "
            value={formFIInt.FIRazonSocial}
            onChange={handleChangeI}
          />
          <label htmlFor="FIRazonSocial" className={Styles.labelS}>
            Razón Social
          </label>
        </div>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          name="FIDireccion"
          id="FIDireccion"
          className={Styles.inputS}
          placeholder=" "
          value={formFIInt.FIDireccion}
          onChange={handleChangeI}
        />
        <label htmlFor="FIDireccion" className={Styles.labelS}>
          Dirección
        </label>
      </div>
      <div className="relative flex gap-5">
        <div
          ref={refPaises}
          onClick={handleModalPaises}
          className="w-full relative"
        >
          <input
            type="text"
            name="FIPais"
            id="FIPais"
            className={Styles.inputS}
            placeholder=" "
            value={formFIInt.FIPais}
            onChange={handleChangeI}
            readOnly
          />
          <label htmlFor="FIPais" className={Styles.labelS}>
            País
          </label>
          <Select.Paises tipoDoc="F" />
        </div>
        <div className="w-full relative">
          <input
            type="text"
            name="FICodPostal"
            id="FICodPostal"
            className={Styles.inputS}
            placeholder=" "
            value={formFIInt.FICodPostal}
            onChange={handleChangeI}
          />
          <label htmlFor="FICodPostal" className={Styles.labelS}>
            Código Postal
          </label>
        </div>
      </div>
      <div
        ref={refCiudades}
        onClick={handleModalCiudades}
        className="w-full relative"
      >
        <input
          type="text"
          name="FICiudad"
          id="FICiudad"
          className={Styles.inputS}
          placeholder=" "
          value={formFIInt.FICiudad}
          onChange={handleChangeI}
          readOnly
        />
        <label htmlFor="FICiudad" className={Styles.labelS}>
          Ciudad
        </label>
        <Select.Ciudad tipoDoc="F" />
      </div>
      <div className="relative w-full">
        <input
          type="email"
          name="FIEmail"
          id="FIEmail"
          className={Styles.inputS}
          placeholder=" "
          value={formFIInt.FIEmail}
          onChange={handleChangeI}
        />
        <label htmlFor="FIEmail" className={Styles.labelS}>
          Email
        </label>
      </div>
    </div>
  );
};

interface Props {
  formFIInt: FI;
  handleChangeI: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
