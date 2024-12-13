import { Down } from "../../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../../Hooks/useAdmin";
import * as Styles from "../../../../Styles/Actions";
import * as Select from "./Select";

export const DirecUsuario = () => {
  const {
    formTrab,
    handleInputChangeTrab,
    refDptUsuario,
    modalDpt,
    handleModalDpt,
    refProvUsuario,
    modalProv,
    handleModalProv,
    refDistUsuario,
    modalDist,
    handleModalDist,
    refAreasUsuarios,
    modalAreasUsuarios,
    handleModalAreas,
    refCargosUsuarios,
    modalCargosUsuarios,
    handleModalCargos,
    deptUsuario,
    provUsuario,
    areaSeleccionada,
    usuarioAreaBlur,
    usuarioCargoBlur,
    usuarioDptBlur,
    usuarioDistBlur,
    usuarioProvBlur,
  } = useAdministracion();

  return (
    <div className="relative flex flex-col w-full max-w-full">
      <div className="relative p-6 flex flex-col gap-y-4">
        <h5 className="relative text-xl text-[#344767] font-bold transition-all">
          Información Adicional
        </h5>
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <div className="relative w-full">
            <input
              required
              className={Styles.inputL}
              id="direccionUsuario"
              placeholder=""
              value={formTrab.direccionUsuario}
              onChange={handleInputChangeTrab}
            />
            <label className={Styles.labelL} htmlFor="direccionUsuario">
              Dirección 1
            </label>
          </div>
        </div>
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-3 sm:gap-y-0">
          <div
            ref={refDptUsuario}
            onClick={handleModalDpt}
            className="relative w-full"
          >
            <input
              required
              className={Styles.inputL}
              id="departamentoUsuario"
              placeholder=""
              value={formTrab.departamentoUsuario}
              onChange={handleInputChangeTrab}
              onBlur={usuarioDptBlur}
            />
            <label className={Styles.labelL} htmlFor="departamentoUsuario">
              Departamento
            </label>
            <Down
              className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                modalDpt ? "rotate-180 text-[#09c]" : ""
              }`}
            />
            <Select.Departamento />
          </div>
          <div
            ref={refProvUsuario}
            onClick={handleModalProv}
            className="relative w-full"
          >
            <input
              required
              className={Styles.inputL}
              id="provinciaUsuario"
              placeholder=""
              value={formTrab.provinciaUsuario}
              onChange={handleInputChangeTrab}
              disabled={deptUsuario ? false : true}
              onBlur={usuarioProvBlur}
            />
            <label className={Styles.labelL} htmlFor="provinciaUsuario">
              Provincia
            </label>
            <Down
              className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                modalProv ? "rotate-180 text-[#09c]" : ""
              }`}
            />
            <Select.Provincia />
          </div>
          <div
            ref={refDistUsuario}
            onClick={handleModalDist}
            className="relative w-full"
          >
            <input
              required
              className={Styles.inputL}
              id="distritoUsuario"
              placeholder=""
              value={formTrab.distritoUsuario}
              onChange={handleInputChangeTrab}
              disabled={provUsuario ? false : true}
              onBlur={usuarioDistBlur}
            />
            <label className={Styles.labelL} htmlFor="distritoUsuario">
              Distrito
            </label>
            <Down
              className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                modalDist ? "rotate-180 text-[#09c]" : ""
              }`}
            />
            <Select.Distrito />
          </div>
        </div>
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <div
            ref={refCargosUsuarios}
            onClick={handleModalCargos}
            className="relative w-full sm:w-[49%]"
          >
            <input
              required
              className={Styles.inputL}
              id="cargoUsuario"
              placeholder=""
              value={formTrab.cargoUsuario}
              onChange={handleInputChangeTrab}
              disabled={areaSeleccionada ? false : true}
              onBlur={usuarioCargoBlur}
            />
            <label className={Styles.labelL} htmlFor="cargoUsuario">
              Cargo
            </label>
            <Down
              className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                modalCargosUsuarios ? "rotate-180 text-[#09c]" : ""
              }`}
            />
            <Select.Cargo />
          </div>
          <div
            ref={refAreasUsuarios}
            onClick={handleModalAreas}
            className="relative w-full sm:w-[49%]"
          >
            <input
              required
              className={Styles.inputL}
              id="areaUsuario"
              placeholder=""
              value={formTrab.areaUsuario}
              onChange={handleInputChangeTrab}
              onBlur={usuarioAreaBlur}
            />
            <label className={Styles.labelL} htmlFor="areaUsuario">
              Área
            </label>
            <Down
              className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                modalAreasUsuarios ? "rotate-180 text-[#09c]" : ""
              }`}
            />
            <Select.Area />
          </div>
        </div>
      </div>
    </div>
  );
};
