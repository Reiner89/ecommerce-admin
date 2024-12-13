import {
  FN,
  useRemisionGuias,
} from "../../../../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../../../../Styles/Actions";
import * as Select from "../../../../../../Components/Select";

export const FormLeft = ({ formNac, handleChange }: Props) => {
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
  } = useRemisionGuias();

  return (
    <div className="flex flex-col gap-5">
      <div
        ref={refVentas}
        onClick={handleModalVentas}
        className="w-full relative"
      >
        <input
          type="text"
          name="FNVentaInterna"
          id="FNVentaInterna"
          className={Styles.inputS}
          placeholder=" "
          value={formNac.FNVentaInterna}
          onChange={handleChange}
          readOnly
        />
        <label htmlFor="FNVentaInterna" className={Styles.labelS}>
          Venta Interna
        </label>
        <Select.Ventas tipoDoc="F" />
      </div>
      <div className="flex w-full gap-5">
        <div
          ref={refDocs}
          onClick={handleModalDocs}
          className="w-full relative"
        >
          <input
            type="text"
            name="FNTipoDoc"
            id="FNTipoDoc"
            className={Styles.inputS}
            placeholder=" "
            value={formNac.FNTipoDoc}
            onChange={handleChange}
            readOnly
          />
          <label htmlFor="FNTipoDoc" className={Styles.labelS}>
            Tipo Documento *
          </label>
          <Select.TipoDocumento tipoDoc="F" />
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name="FNNroDoc"
            id="FNNroDoc"
            className={Styles.inputS}
            placeholder=" "
            value={formNac.FNNroDoc}
            onChange={handleChange}
          />
          <label htmlFor="FNNroDoc" className={Styles.labelS}>
            Nro Documento *
          </label>
        </div>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          name="FNRazonSocial"
          id="FNRazonSocial"
          className={Styles.inputS}
          placeholder=" "
          value={formNac.FNRazonSocial}
          onChange={handleChange}
        />
        <label htmlFor="FNRazonSocial" className={Styles.labelS}>
          Razon Social *
        </label>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          name="FNDireccion"
          id="FNDireccion"
          className={Styles.inputS}
          placeholder=" "
          value={formNac.FNDireccion}
          onChange={handleChange}
        />
        <label htmlFor="FNDireccion" className={Styles.labelS}>
          Direccion
        </label>
      </div>
      <div className="relative flex gap-5">
        <div ref={refDept} onClick={handleModalDpt} className="w-full relative">
          <input
            type="text"
            name="FNDepartamento"
            id="FNDepartamento"
            className={Styles.inputS}
            placeholder=" "
            value={formNac.FNDepartamento}
            onChange={handleChange}
            readOnly
          />
          <label htmlFor="FNDepartamento" className={Styles.labelS}>
            Departamento
          </label>
          <Select.Departamento tipoDoc="F" />
        </div>
        <div
          ref={refProv}
          onClick={handleModalProv}
          className="w-full relative"
        >
          <input
            type="text"
            name="FNProvincia"
            id="FNProvincia"
            className={Styles.inputS}
            placeholder=" "
            value={formNac.FNProvincia}
            onChange={handleChange}
            readOnly
          />
          <label htmlFor="FNProvincia" className={Styles.labelS}>
            Provincia
          </label>
          <Select.Provincias tipoDoc="F" />
        </div>
      </div>
      <div ref={refDist} onClick={handleModalDist} className="w-full relative">
        <input
          type="text"
          name="FNDistrito"
          id="FNDistrito"
          className={Styles.inputS}
          placeholder=" "
          value={formNac.FNDistrito}
          onChange={handleChange}
          readOnly
        />
        <label htmlFor="FNDistrito" className={Styles.labelS}>
          Distrito
        </label>
        <Select.Distritos tipoDoc="F" />
      </div>
      <div className="relative w-full">
        <input
          type="email"
          name="FNEmail"
          id="FNEmail"
          className={Styles.inputS}
          placeholder=" "
          value={formNac.FNEmail}
          onChange={handleChange}
        />
        <label htmlFor="FNEmail" className={Styles.labelS}>
          Email
        </label>
      </div>
    </div>
  );
};

interface Props {
  formNac: FN;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
