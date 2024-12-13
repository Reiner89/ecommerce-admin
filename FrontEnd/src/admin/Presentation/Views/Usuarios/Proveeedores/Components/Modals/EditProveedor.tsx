import { Close, Down } from "../../../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../../../Hooks/useAdmin";
import * as Styles from "../../../../../Styles/Actions";
import * as Select from "../Select";

export const EditProveedor = () => {
  const {
    modalFormProv,
    refModalFormProv,
    closeFormProveedor,
    formEditProvs,
    handleInputChangeProv,
    submitFormProv,
    posting,
    refSelectDpt,
    selectDpt,
    handleSelectDpt,
    DptBlur,
    refSelectProv,
    selectProv,
    handleSelectProv,
    ProvBlur,
    refSelectDist,
    selectDist,
    handleSelectDist,
    DistBlur,
    refSelectTProv,
    selectTProv,
    handleSelectTProv,
    TProvsBlur,
    refSelectTServ,
    selectTServ,
    handleSelectTServ,
    TServBlur,
    deptProveedor,
    provProveedor,
  } = useAdministracion();

  return (
    <div
      className={`modal-nuevo-proveedor-container fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.6)] transition-all duration-300 ${
        modalFormProv ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refModalFormProv}
        className={`modal-nuevo-proveedor w-[35%] h-full block absolute top-0 right-0 bottom-0 bg-gray-50 transition-all duration-300 ${
          modalFormProv ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <form
          onSubmit={submitFormProv}
          autoComplete="off"
          className="cont-form w-full h-full relative flex flex-col gap-9 border-none overflow-y-auto transition-all duration-300 p-4"
        >
          <div className="form-header w-full flex justify-between items-center text-xl text-[#344767] font-semibold">
            <h1 className="">Editar Proveedor</h1>
            <p onClick={closeFormProveedor} className="cursor-pointer">
              <Close />
            </p>
          </div>
          <div className="relative flex flex-col w-full gap-y-6">
            <div className="cont-DNI w-full relative">
              <input
                type="text"
                id="DNIRUCProveedor"
                className={Styles.inputL}
                placeholder=" "
                value={formEditProvs.DNIRUCProveedor}
                onChange={handleInputChangeProv}
                required
              />
              <label htmlFor="DNIRUCProveedor" className={Styles.labelL}>
                DNI
              </label>
            </div>
            <div className="cont-RazonSocial w-full relative">
              <input
                type="text"
                id="razonSocialProveedor"
                className={Styles.inputL}
                value={formEditProvs.razonSocialProveedor}
                onChange={handleInputChangeProv}
                placeholder=" "
                required
              />
              <label htmlFor="razonSocialProveedor" className={Styles.labelL}>
                Razón Social
              </label>
            </div>
            <div className="cont-representante w-full relative">
              <input
                type="text"
                id="representanteProveedor"
                className={Styles.inputL}
                value={formEditProvs.representanteProveedor}
                onChange={handleInputChangeProv}
                placeholder=" "
                required
              />
              <label htmlFor="representanteProveedor" className={Styles.labelL}>
                Representante
              </label>
            </div>
            <div
              ref={refSelectTProv}
              onClick={handleSelectTProv}
              className="cont-Tproveedor w-full relative"
            >
              <input
                type="text"
                id="tipoProveedor"
                className={Styles.inputL}
                value={formEditProvs.tipoProveedor}
                onChange={handleInputChangeProv}
                onBlur={TProvsBlur}
                placeholder=" "
                required
              />
              <label htmlFor="tipoProveedor" className={Styles.labelL}>
                Tipo Proveedoredor
              </label>
              <Down
                className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                  selectTProv ? "rotate-180 text-[#09c]" : ""
                }`}
              />
              <Select.STProveedor />
            </div>
            <div
              ref={refSelectTServ}
              onClick={handleSelectTServ}
              className="cont-Tservicio w-full relative"
            >
              <input
                type="text"
                id="tipoServicioProveedor"
                className={Styles.inputL}
                value={formEditProvs.tipoServicioProveedor}
                onChange={handleInputChangeProv}
                onBlur={TServBlur}
                placeholder=" "
                required
              />
              <label htmlFor="tipoServicioProveedor" className={Styles.labelL}>
                Tipo Servicio
              </label>
              <Down
                className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                  selectTServ ? "rotate-180 text-[#09c]" : ""
                }`}
              />
              <Select.STServicio />
            </div>
            <div
              ref={refSelectDpt}
              onClick={handleSelectDpt}
              className="cont-departamento w-full relative"
            >
              <input
                type="text"
                id="departamentoProveedor"
                className={Styles.inputL}
                value={formEditProvs.departamentoProveedor}
                onChange={handleInputChangeProv}
                onBlur={DptBlur}
                placeholder=" "
                required
              />
              <label htmlFor="departamentoProveedor" className={Styles.labelL}>
                Departamento
              </label>
              <Down
                className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                  selectDpt ? "rotate-180 text-[#09c]" : ""
                }`}
              />
              <Select.SDepartamento />
            </div>
            <div
              ref={refSelectProv}
              onClick={handleSelectProv}
              className="cont-provincia w-full relative"
            >
              <input
                type="text"
                id="provinciaProveedor"
                className={Styles.inputL}
                value={formEditProvs.provinciaProveedor}
                onChange={handleInputChangeProv}
                onBlur={ProvBlur}
                placeholder=" "
                required
                disabled={deptProveedor === null}
              />
              <label htmlFor="provinciaProveedor" className={Styles.labelL}>
                Provincia
              </label>
              <Down
                className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                  selectProv ? "rotate-180 text-[#09c]" : ""
                }`}
              />
              <Select.SProvincia />
            </div>
            <div
              ref={refSelectDist}
              onClick={handleSelectDist}
              className="cont-distrito w-full relative"
            >
              <input
                type="text"
                id="distritoProveedor"
                className={Styles.inputL}
                value={formEditProvs.distritoProveedor}
                onChange={handleInputChangeProv}
                onBlur={DistBlur}
                placeholder=" "
                required
                disabled={provProveedor === null}
              />
              <label htmlFor="distritoProveedor" className={Styles.labelL}>
                Distrito
              </label>
              <Down
                className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                  selectDist ? "rotate-180 text-[#09c]" : ""
                }`}
              />
              <Select.SDistrito />
            </div>
            <div className="cont-direccion w-full relative">
              <input
                type="text"
                id="direccionProveedor"
                className={Styles.inputL}
                value={formEditProvs.direccionProveedor}
                onChange={handleInputChangeProv}
                placeholder=" "
                required
              />
              <label htmlFor="direccionProveedor" className={Styles.labelL}>
                Dirección
              </label>
            </div>
            <div className="cont-referencias w-full relative">
              <input
                type="text"
                id="referenciasProveedor"
                className={Styles.inputL}
                value={formEditProvs.referenciasProveedor}
                onChange={handleInputChangeProv}
                placeholder=" "
                required
              />
              <label htmlFor="referenciasProveedor" className={Styles.labelL}>
                Referencias
              </label>
            </div>
            <div className="cont-contacto w-full relative">
              <input
                type="text"
                id="contactoProveedor"
                className={Styles.inputL}
                value={formEditProvs.contactoProveedor}
                onChange={handleInputChangeProv}
                placeholder=" "
                required
              />
              <label htmlFor="contactoProveedor" className={Styles.labelL}>
                Contacto
              </label>
            </div>
            <div className="cont-telefono w-full relative">
              <input
                type="text"
                id="telefonoProveedor"
                className={Styles.inputL}
                value={formEditProvs.telefonoProveedor}
                onChange={handleInputChangeProv}
                placeholder=" "
                required
              />
              <label htmlFor="telefonoProveedor" className={Styles.labelL}>
                Teléfono
              </label>
            </div>
          </div>
          <div className="cont-email w-full relative">
            <input
              type="email"
              id="emailProveedor"
              className={Styles.inputL}
              value={formEditProvs.emailProveedor}
              onChange={handleInputChangeProv}
              placeholder=" "
              required
            />
            <label htmlFor="emailProveedor" className={Styles.labelL}>
              Email
            </label>
          </div>
          <div className="container-sendForm flex justify-end">
            <button disabled={posting} className={Styles.buttonSubmit}>
              {posting ? "Actualizando..." : "Actualizar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
