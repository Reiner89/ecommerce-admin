import { useAdministracion } from "../../../../../Hooks/useAdmin";
import * as Styles from "../../../../../Styles/Actions";

export const NuevoVehiculo = () => {
  const { formVeh, handleInputChangeVeh, handleSubmitVeh, posting } =
    useAdministracion();

  return (
    <form
      onSubmit={handleSubmitVeh}
      autoComplete="off"
      className="cont-form w-full h-full relative flex flex-col gap-9 border-none overflow-y-auto transition-all duration-300"
    >
      <div className="form-header w-full flex justify-between items-center text-xl text-[#344767] font-semibold">
        <h1 className="">Nuevo Vehiculo</h1>
      </div>
      <div className="relative flex flex-col w-full gap-y-6">
        <div className="first-row w-full flex flex-row gap-5">
          <div className="cont-placa w-full relative">
            <input
              type="text"
              id="placaVehiculo"
              className={Styles.inputL}
              placeholder=" "
              value={formVeh.placaVehiculo}
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
              value={formVeh.tipoVehiculo}
              onChange={handleInputChangeVeh}
              placeholder=" "
              required
            />
            <label htmlFor="tipoVehiculo" className={Styles.labelL}>
              Modelo
            </label>
          </div>
        </div>
        <div className="first-row w-full flex flex-row gap-5">
          <div className="cont-nroserie w-full relative">
            <input
              type="text"
              id="nSerieVehiculo"
              className={Styles.inputL}
              value={formVeh.nSerieVehiculo}
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
              value={formVeh.soatVehiculo}
              onChange={handleInputChangeVeh}
              placeholder=" "
              required
            />
            <label htmlFor="soatVehiculo" className={Styles.labelL}>
              Soat
            </label>
          </div>
        </div>
        <div className="first-row w-full flex flex-row gap-5">
          <div className="cont-vigenciaDesde w-full relative">
            <input
              type="date"
              id="vigenciasDesdeVehiculo"
              className={Styles.inputL}
              value={formVeh.vigenciasDesdeVehiculo}
              onChange={handleInputChangeVeh}
              placeholder=" "
              required
            />
            <label htmlFor="vigenciasDesdeVehiculo" className={Styles.labelL}>
              Vigencia SOAT Desde
            </label>
          </div>
          <div className="cont-vigenciaHasta w-full relative">
            <input
              type="date"
              id="vigenciaHastaVehiculo"
              className={Styles.inputL}
              value={formVeh.vigenciaHastaVehiculo}
              onChange={handleInputChangeVeh}
              placeholder=" "
              required
            />
            <label htmlFor="vigenciaHastaVehiculo" className={Styles.labelL}>
              Vigencia SOAT Hasta
            </label>
          </div>
        </div>
        <div className="first-row w-full flex flex-row gap-5">
          <div className="cont-ultRevision w-full relative">
            <input
              type="date"
              id="ultRevisionVehiculo"
              className={Styles.inputL}
              value={formVeh.ultRevisionVehiculo}
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
              value={formVeh.vencimientoSoatVehiculo}
              onChange={handleInputChangeVeh}
              placeholder=" "
              required
            />
            <label htmlFor="vencimientoSoatVehiculo" className={Styles.labelL}>
              Vencimiento de Revisión
            </label>
          </div>
        </div>
        <div className="cont-tarjetaPropiedad w-full relative">
          <input
            type="text"
            id="tarjetaPropiedadVehiculo"
            className={Styles.inputL}
            value={formVeh.tarjetaPropiedadVehiculo}
            onChange={handleInputChangeVeh}
            placeholder=" "
            required
          />
          <label htmlFor="tarjetaPropiedadVehiculo" className={Styles.labelL}>
            Tarjeta Propiedad
          </label>
        </div>
      </div>
      <div className="container-sendForm flex justify-end">
        <button disabled={posting} className={Styles.buttonSubmit}>
          {posting ? "Guardando..." : "Guardar"}
        </button>
      </div>
    </form>
  );
};
