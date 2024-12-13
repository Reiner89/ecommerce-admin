import { Close } from "../../../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../../../Hooks/useAdmin";
import * as Styles from "../../../../../Styles/Actions";

export const EditVehiculo = () => {
  const {
    formEditVehiculo,
    handleInputChangeVeh,
    handleSubmitVeh,
    posting,
    refFormVeh,
    modalFormVeh,
    closeFormVeh,
  } = useAdministracion();

  return (
    <div
      className={`modal-nuevo-vehiculo-container fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.6)] transition-all duration-300 ${
        modalFormVeh ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refFormVeh}
        className={`modal-nuevo-vehiculo w-[35%] h-full block absolute top-0 right-0 bottom-0 bg-gray-50 transition-all duration-300 ${
          modalFormVeh ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <form
          onSubmit={handleSubmitVeh}
          autoComplete="off"
          className="cont-form w-full h-full relative flex flex-col gap-9 border-none overflow-y-auto transition-all duration-300 p-4"
        >
          <div className="form-header w-full flex justify-between items-center text-xl text-[#344767] font-semibold">
            <h1 className="">Editar Vehiculo</h1>
            <p className="relative cursor-pointer">
              <Close onClick={closeFormVeh} />
            </p>
          </div>
          <div className="relative flex flex-col w-full gap-y-6">
            <div className="cont-placa w-full relative">
              <input
                type="text"
                id="placaVehiculo"
                className={Styles.inputL}
                placeholder=" "
                value={formEditVehiculo.placaVehiculo}
                onChange={handleInputChangeVeh}
                required
              />
              <label htmlFor="placaVehiculo" className={Styles.labelL}>
                Placa
              </label>
            </div>
            <div className="cont-tipo w-full relative">
              <input
                type="text"
                id="tipoVehiculo"
                className={Styles.inputL}
                value={formEditVehiculo.tipoVehiculo}
                onChange={handleInputChangeVeh}
                placeholder=" "
                required
              />
              <label htmlFor="tipoVehiculo" className={Styles.labelL}>
                Tipo
              </label>
            </div>
            <div className="cont-nroserie w-full relative">
              <input
                type="text"
                id="nSerieVehiculo"
                className={Styles.inputL}
                value={formEditVehiculo.nSerieVehiculo}
                onChange={handleInputChangeVeh}
                placeholder=" "
                required
              />
              <label htmlFor="nSerieVehiculo" className={Styles.labelL}>
                N° Serie
              </label>
            </div>
            <div className="cont-soat w-full relative">
              <input
                type="text"
                id="soatVehiculo"
                className={Styles.inputL}
                value={formEditVehiculo.soatVehiculo}
                onChange={handleInputChangeVeh}
                placeholder=" "
                required
              />
              <label htmlFor="soatVehiculo" className={Styles.labelL}>
                Soat
              </label>
            </div>
            <div className="cont-vigenciaDesde w-full relative">
              <input
                type="date"
                id="vigenciasDesdeVehiculo"
                className={Styles.inputL}
                value={formEditVehiculo.vigenciasDesdeVehiculo}
                onChange={handleInputChangeVeh}
                placeholder=" "
                required
              />
              <label htmlFor="vigenciasDesdeVehiculo" className={Styles.labelL}>
                Vigencia Desde
              </label>
            </div>
            <div className="cont-vigenciaHasta w-full relative">
              <input
                type="date"
                id="vigenciaHastaVehiculo"
                className={Styles.inputL}
                value={formEditVehiculo.vigenciaHastaVehiculo}
                onChange={handleInputChangeVeh}
                placeholder=" "
                required
              />
              <label htmlFor="vigenciaHastaVehiculo" className={Styles.labelL}>
                Vigencia Hasta
              </label>
            </div>
            <div className="cont-ultRevision w-full relative">
              <input
                type="date"
                id="ultRevisionVehiculo"
                className={Styles.inputL}
                value={formEditVehiculo.ultRevisionVehiculo}
                onChange={handleInputChangeVeh}
                placeholder=" "
                required
              />
              <label htmlFor="ultRevisionVehiculo" className={Styles.labelL}>
                Ultima Revision
              </label>
            </div>
            <div className="cont-vencimiento w-full relative">
              <input
                type="date"
                id="vencimientoSoatVehiculo"
                className={Styles.inputL}
                value={formEditVehiculo.vencimientoSoatVehiculo}
                onChange={handleInputChangeVeh}
                placeholder=" "
                required
              />
              <label
                htmlFor="vencimientoSoatVehiculo"
                className={Styles.labelL}
              >
                Vencimiento
              </label>
            </div>
            <div className="cont-tarjetaPropiedad w-full relative">
              <input
                type="text"
                id="tarjetaPropiedadVehiculo"
                className={Styles.inputL}
                value={formEditVehiculo.tarjetaPropiedadVehiculo}
                onChange={handleInputChangeVeh}
                placeholder=" "
                required
              />
              <label
                htmlFor="tarjetaPropiedadVehiculo"
                className={Styles.labelL}
              >
                Tarjeta Propiedad
              </label>
            </div>
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
