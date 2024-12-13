import { Close, Down } from "../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../Hooks/useStock";
import * as Styles from "../../../../../../Styles/Actions";
import * as Select from "../Select";

export const AsignarDespacho = () => {
  const {
    refVerDespacho,
    verDespacho,
    handleAsignarDespacho,
    formDesp,
    changeFormDesp,
    refSelectGestion,
    selectGestion,
    handleSelectGestion,
    GestionBlur,
    refSelectConductor,
    selectConductor,
    handleSelectConductor,
    ConductorBlur,
    refSelectAuxiliar,
    selectAux,
    handleSelectAuxiliar,
    AuxiliarBlur,
    // refSelectDpt,
    // handleSelectDpt,
    // DptBlur,
    // refSelectProv,
    // handleSelectProv,
    // ProvBlur,
    // refSelectDist,
    // handleSelectDist,
    // DistBlur,
    refSelectPlaca,
    selectPlaca,
    handleSelectPlaca,
    PlacaBlur,
    gestSelect,
    refSelectProve,
    // selectProve,
    handleSelectProve,
    ProveedoresBlur,
    refTipoProveedor,
    // selectTipoProv,
    handleSelectTProvs,
    TProvsBlur,
    submitFormDesp,
  } = useStock();

  return (
    <div
      className={`modal-asignarDespacho-container fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.6)] transition-all duration-300 ${
        verDespacho ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refVerDespacho}
        className={`modal-asignarDespacho w-[35%] h-full block absolute top-0 right-0 bottom-0 bg-gray-50 transition-all duration-300 ${
          verDespacho ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <form
          onSubmit={submitFormDesp}
          autoComplete="off"
          className="cont-form w-full h-full relative flex flex-col gap-5 border-none p-6 overflow-y-auto transition-all duration-300"
        >
          <div className="form-header w-full flex justify-between items-center text-xl text-[#344767] font-semibold">
            <h1 className="">Asignar Despacho</h1>
            <p onClick={handleAsignarDespacho} className="cursor-pointer">
              <Close />
            </p>
          </div>
          <div className="cont-form-derecho w-full flex flex-col gap-5">
            <div className="sombra relative w-full bg-white p-[15px] rounded-xl">
              <h2 className="relative text-[18px] text-[#4e5865] font-semibold">
                Datos de Manifiesto
              </h2>
              <div className="relative flex flex-col w-full my-6 gap-y-6">
                <div
                  ref={refSelectGestion}
                  onClick={handleSelectGestion}
                  className="cont-input w-full relative"
                >
                  <input
                    type="text"
                    id="gestionDespacho"
                    className={Styles.inputL}
                    placeholder=" "
                    value={formDesp.gestionDespacho}
                    onChange={changeFormDesp}
                    onBlur={GestionBlur}
                    required
                  />
                  <label htmlFor="gestionDespacho" className={Styles.labelL}>
                    Seleccionar proveedor
                  </label>
                  <Down
                    className={`absolute right-3 top-3 ${
                      selectGestion ? "text-[#09c]" : ""
                    }`}
                  />
                  <Select.SGestion />
                </div>
                {gestSelect && (
                  <div
                    ref={refSelectProve}
                    onClick={handleSelectProve}
                    className={`cont-input w-full relative `}
                  >
                    <input
                      type="text"
                      id="proveedoresDespacho"
                      className={Styles.inputL}
                      placeholder=" "
                      value={formDesp.proveedoresDespacho}
                      onChange={changeFormDesp}
                      onBlur={ProveedoresBlur}
                      required
                      readOnly
                    />
                    <label
                      htmlFor="proveedoresDespacho"
                      className={Styles.labelL}
                    >
                      Tipo de Proveedor
                    </label>
                  </div>
                )}
                {gestSelect && (
                  <div
                    ref={refTipoProveedor}
                    onClick={handleSelectTProvs}
                    className="cont-input w-full relative"
                  >
                    <input
                      type="text"
                      id="tipoProveedorDespacho"
                      className={Styles.inputL}
                      placeholder=" "
                      value={formDesp.tipoProveedorDespacho}
                      onChange={changeFormDesp}
                      onBlur={TProvsBlur}
                      required
                      readOnly
                    />
                    <label
                      htmlFor="tipoProveedorDespacho"
                      className={Styles.labelL}
                    >
                      Tipo de Servicio
                    </label>
                  </div>
                )}
                <div
                  ref={refSelectConductor}
                  onClick={handleSelectConductor}
                  className="cont-input w-full relative"
                >
                  <input
                    type="text"
                    id="conductorDespacho"
                    className={Styles.inputL}
                    placeholder=" "
                    value={formDesp.conductorDespacho}
                    onChange={changeFormDesp}
                    onBlur={!gestSelect ? ConductorBlur : undefined}
                    required
                  />
                  <label htmlFor="conductorDespacho" className={Styles.labelL}>
                    {gestSelect ? "Conductor" : "Elegir Conductor"}
                  </label>
                  <Down
                    className={`absolute right-3 top-3 ${
                      selectConductor ? "text-[#09c]" : ""
                    } ${gestSelect ? "hidden" : ""}`}
                  />
                  <Select.SConductor />
                </div>
                <div
                  ref={refSelectAuxiliar}
                  onClick={handleSelectAuxiliar}
                  className="cont-input w-full relative"
                >
                  <input
                    type="text"
                    className={Styles.inputL}
                    placeholder=" "
                    id="auxiliarDespacho"
                    value={formDesp.auxiliarDespacho}
                    onChange={changeFormDesp}
                    onBlur={!gestSelect ? AuxiliarBlur : undefined}
                    required
                  />
                  <label htmlFor="auxiliarDespacho" className={Styles.labelL}>
                    {gestSelect ? "Auxiliar" : "Elegir Auxiliar"}
                  </label>
                  <Down
                    className={`absolute right-3 top-3 ${
                      selectAux ? "text-[#09c]" : ""
                    } ${gestSelect ? "hidden" : ""}`}
                  />
                  <Select.SAuxiliar />
                </div>
                <div
                  ref={refSelectPlaca}
                  onClick={handleSelectPlaca}
                  className="cont-input w-full relative"
                >
                  <input
                    type="text"
                    className={Styles.inputL}
                    placeholder=" "
                    id="placaDespacho"
                    value={formDesp.placaDespacho}
                    onChange={changeFormDesp}
                    onBlur={!gestSelect ? PlacaBlur : undefined}
                    required
                  />
                  <label htmlFor="placaDespacho" className={Styles.labelL}>
                    {gestSelect ? "Placa" : "Elegir Placa"}
                  </label>
                  <Down
                    className={`absolute right-3 top-3 ${
                      selectPlaca ? "text-[#09C]" : ""
                    } ${gestSelect ? "hidden" : ""}`}
                  />
                  <Select.SPlaca />
                </div>
                <div className="cont-input w-full relative">
                  <input
                    type="text"
                    className={Styles.inputL}
                    placeholder=" "
                    id="TVehiculo"
                    value={formDesp.TVehiculo}
                    onChange={changeFormDesp}
                    readOnly={!gestSelect}
                    required
                  />
                  <label htmlFor="TVehiculo" className={Styles.labelL}>
                    T. Vehículo
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container-sendForm flex justify-end">
            <button className={Styles.buttonSubmit}>Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
