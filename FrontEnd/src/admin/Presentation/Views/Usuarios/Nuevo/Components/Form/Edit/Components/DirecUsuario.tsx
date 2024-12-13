import { Down } from "../../../../../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../../../../../Hooks/useAdmin";
import * as Styles from "../../../../../../../Styles/Actions";
import * as Select from "../../../Select";

export const DirecUsuario = () => {
  const {
    formEditTrab,
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
  } = useAdministracion();

  return (
    <div className="relative flex flex-col w-full max-w-full">
      <div className="relative flex flex-col gap-y-4">
        <div className="relative w-full">
          <input
            required
            className={Styles.inputL}
            id="direccionUsuario"
            placeholder=""
            value={formEditTrab.direccionUsuario}
            onChange={handleInputChangeTrab}
          />
          <label className={Styles.labelL} htmlFor="direccionUsuario">
            Dirección 1
          </label>
        </div>
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
            value={formEditTrab.departamentoUsuario}
            onChange={handleInputChangeTrab}
          />
          <label className={Styles.labelL} htmlFor="departamentoUsuario">
            Departamento
          </label>
          <Down
            className={`absolute right-2 top-1/2 -translate-y-1/2 ${
              modalDpt && "rotate-180 text-[#09c]"
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
            value={formEditTrab.provinciaUsuario}
            onChange={handleInputChangeTrab}
            disabled={!deptUsuario}
          />
          <label className={Styles.labelL} htmlFor="provinciaUsuario">
            Provincia
          </label>
          <Down
            className={`absolute right-2 top-1/2 -translate-y-1/2 ${
              modalProv && "rotate-180 text-[#09c]"
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
            value={formEditTrab.distritoUsuario}
            onChange={handleInputChangeTrab}
            disabled={!provUsuario}
          />
          <label className={Styles.labelL} htmlFor="distritoUsuario">
            Distrito
          </label>
          <Down
            className={`absolute right-2 top-1/2 -translate-y-1/2 ${
              modalDist && "rotate-180 text-[#09c]"
            }`}
          />
          <Select.Distrito />
        </div>
        <div
          ref={refCargosUsuarios}
          onClick={handleModalCargos}
          className="relative w-full"
        >
          <input
            required
            className={Styles.inputL}
            id="cargoUsuario"
            placeholder=""
            value={formEditTrab.cargoUsuario}
            onChange={handleInputChangeTrab}
            disabled={!areaSeleccionada}
          />
          <label className={Styles.labelL} htmlFor="cargoUsuario">
            Cargo
          </label>
          <Down
            className={`absolute right-2 top-1/2 -translate-y-1/2 ${
              modalCargosUsuarios && "rotate-180 text-[#09c]"
            }`}
          />
          <Select.Cargo />
        </div>
        <div
          ref={refAreasUsuarios}
          onClick={handleModalAreas}
          className="relative w-full"
        >
          <input
            required
            className={Styles.inputL}
            id="areaUsuario"
            placeholder=""
            value={formEditTrab.areaUsuario}
            onChange={handleInputChangeTrab}
          />
          <label className={Styles.labelL} htmlFor="areaUsuario">
            Área
          </label>
          <Down
            className={`absolute right-2 top-1/2 -translate-y-1/2 ${
              modalAreasUsuarios && "rotate-180 text-[#09c]"
            }`}
          />
          <Select.Area />
        </div>
      </div>
    </div>
  );
};
