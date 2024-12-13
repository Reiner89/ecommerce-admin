import * as RG from "../../../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../../../Styles/Actions";
import * as Select from "../../../../../../Factura/Components/Select";

export const FormLeft = ({ form, handleChangeN }: Props) => {
  const {
    refDept,
    handleModalDpt,
    refProv,
    handleModalProv,
    refDist,
    handleModalDist,
    refDocs,
    handleModalDocs,
    refVentas,
    handleModalVentas,
  } = RG.useRemisionGuias();

  return (
    <div className="flex flex-col gap-5">
      <div
        ref={refVentas}
        onClick={handleModalVentas}
        className="w-full relative"
      >
        <input
          type="text"
          name="BNVentaInterna"
          id="BNVentaInterna"
          className={Styles.inputS}
          placeholder=" "
          value={form.BNVentaInterna}
          onChange={handleChangeN}
          readOnly
        />
        <label htmlFor="BNVentaInterna" className={Styles.labelS}>
          Venta Interna
        </label>
        <Select.Ventas tipoDoc="B" />
      </div>
      <div className="flex w-full gap-5">
        <div
          ref={refDocs}
          onClick={handleModalDocs}
          className="w-full relative"
        >
          <input
            type="text"
            name="BNTipoDoc"
            id="BNTipoDoc"
            className={Styles.inputS}
            placeholder=" "
            value={form.BNTipoDoc}
            onChange={handleChangeN}
            readOnly
          />
          <label htmlFor="BNTipoDoc" className={Styles.labelS}>
            Tipo Documento *
          </label>
          <Select.TipoDocumento tipoDoc="B" />
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name="BNNroDoc"
            id="BNNroDoc"
            className={Styles.inputS}
            placeholder=" "
            value={form.BNNroDoc}
            onChange={handleChangeN}
          />
          <label htmlFor="BNNroDoc" className={Styles.labelS}>
            Nro Documento *
          </label>
        </div>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          name="BNNombresApellidos"
          id="BNNombresApellidos"
          className={Styles.inputS}
          placeholder=" "
          value={form.BNNombresApellidos}
          onChange={handleChangeN}
        />
        <label htmlFor="BNNombresApellidos" className={Styles.labelS}>
          Nombres y Apellidos
        </label>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          name="BNDireccion"
          id="BNDireccion"
          className={Styles.inputS}
          placeholder=" "
          value={form.BNDireccion}
          onChange={handleChangeN}
        />
        <label htmlFor="BNDireccion" className={Styles.labelS}>
          Direccion
        </label>
      </div>
      <div className="relative flex gap-5">
        <div ref={refDept} onClick={handleModalDpt} className="w-full relative">
          <input
            type="text"
            name="BNDepartamento"
            id="BNDepartamento"
            className={Styles.inputS}
            placeholder=" "
            value={form.BNDepartamento}
            onChange={handleChangeN}
            readOnly
          />
          <label htmlFor="BNDepartamento" className={Styles.labelS}>
            Departamento
          </label>
          <Select.Departamento tipoDoc="B" />
        </div>
        <div
          ref={refProv}
          onClick={handleModalProv}
          className="w-full relative"
        >
          <input
            type="text"
            name="BNProvincia"
            id="BNProvincia"
            className={Styles.inputS}
            placeholder=" "
            value={form.BNProvincia}
            onChange={handleChangeN}
            readOnly
          />
          <label htmlFor="BNProvincia" className={Styles.labelS}>
            Provincia
          </label>
          <Select.Provincias tipoDoc="B" />
        </div>
      </div>
      <div ref={refDist} onClick={handleModalDist} className="w-full relative">
        <input
          type="text"
          name="BNDistrito"
          id="BNDistrito"
          className={Styles.inputS}
          placeholder=" "
          value={form.BNDistrito}
          onChange={handleChangeN}
          readOnly
        />
        <label htmlFor="BNDistrito" className={Styles.labelS}>
          Distrito
        </label>
        <Select.Distritos tipoDoc="B" />
      </div>
      <div className="relative w-full">
        <input
          type="email"
          name="BNEmail"
          id="BNEmail"
          className={Styles.inputS}
          placeholder=" "
          value={form.BNEmail}
          onChange={handleChangeN}
        />
        <label htmlFor="BNEmail" className={Styles.labelS}>
          Email
        </label>
      </div>
    </div>
  );
};

interface Props {
  form: RG.BN;
  handleChangeN: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
