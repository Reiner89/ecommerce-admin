import * as RG from "../../../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../../../Styles/Actions";
import * as Select from "../../../../../../Factura/Components/Select";

export const FormLeft = ({ form, handleChangeI }: Props) => {
  const {
    refBienes,
    handleModalBienes,
    refPaises,
    handleModalPaises,
    refCiudades,
    handleModalCiudades,
  } = RG.useRemisionGuias();

  return (
    <div className="flex flex-col gap-5">
      <div
        ref={refBienes}
        onClick={handleModalBienes}
        className="w-full relative"
      >
        <input
          type="text"
          name="BIExpBienes"
          id="BIExpBienes"
          className={Styles.inputS}
          placeholder=" "
          value={form.BIExpBienes}
          onChange={handleChangeI}
          readOnly
        />
        <label htmlFor="BIExpBienes" className={Styles.labelS}>
          Exportación de Bienes
        </label>
        <Select.Bienes tipoDoc="B" />
      </div>
      <div className="flex w-full gap-5">
        <div className="w-full relative">
          <input
            type="text"
            name="BINroIdAtr"
            id="BINroIdAtr"
            className={Styles.inputS}
            placeholder=" "
            value={form.BINroIdAtr}
            onChange={handleChangeI}
          />
          <label htmlFor="BINroIdAtr" className={Styles.labelS}>
            Nro ID Tributario
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name="BIRazonSocial"
            id="BIRazonSocial"
            className={Styles.inputS}
            placeholder=" "
            value={form.BIRazonSocial}
            onChange={handleChangeI}
          />
          <label htmlFor="BIRazonSocial" className={Styles.labelS}>
            Razón Social
          </label>
        </div>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          name="BIDireccion"
          id="BIDireccion"
          className={Styles.inputS}
          placeholder=" "
          value={form.BIDireccion}
          onChange={handleChangeI}
        />
        <label htmlFor="BIDireccion" className={Styles.labelS}>
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
            name="BIPais"
            id="BIPais"
            className={Styles.inputS}
            placeholder=" "
            value={form.BIPais}
            onChange={handleChangeI}
            readOnly
          />
          <label htmlFor="BIPais" className={Styles.labelS}>
            País
          </label>
          <Select.Paises tipoDoc="B" />
        </div>
        <div className="w-full relative">
          <input
            type="text"
            name="BICodPostal"
            id="BICodPostal"
            className={Styles.inputS}
            placeholder=" "
            value={form.BICodPostal}
            onChange={handleChangeI}
          />
          <label htmlFor="BICodPostal" className={Styles.labelS}>
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
          name="BICiudad"
          id="BICiudad"
          className={Styles.inputS}
          placeholder=" "
          value={form.BICiudad}
          onChange={handleChangeI}
          readOnly
        />
        <label htmlFor="BICiudad" className={Styles.labelS}>
          Ciudad
        </label>
        <Select.Ciudad tipoDoc="B" />
      </div>
      <div className="relative w-full">
        <input
          type="email"
          name="BIEmail"
          id="BIEmail"
          className={Styles.inputS}
          placeholder=" "
          value={form.BIEmail}
          onChange={handleChangeI}
        />
        <label htmlFor="BIEmail" className={Styles.labelS}>
          Email
        </label>
      </div>
    </div>
  );
};

interface Props {
  form: RG.BI;
  handleChangeI: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
