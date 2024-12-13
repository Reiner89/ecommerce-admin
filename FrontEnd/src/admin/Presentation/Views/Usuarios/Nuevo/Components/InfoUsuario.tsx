import { useAdministracion } from "../../../../Hooks/useAdmin";
import * as Styles from "../../../../Styles/Actions";

export const InfoUsuario = () => {
  const { formTrab, handleInputChangeTrab } = useAdministracion();

  return (
    <div className="relative flex flex-col w-full max-w-full">
      <div className="relative p-6 flex flex-col gap-y-4">
        <h5 className="relative text-xl text-[#344767] font-bold transition-all">
          Información del Usuario
        </h5>
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <div className="relative w-full sm:w-[49%]">
            <input
              required
              className={Styles.inputL}
              id="DNIUsuario"
              placeholder=""
              value={formTrab.DNIUsuario}
              onChange={handleInputChangeTrab}
            />
            <label className={Styles.labelL} htmlFor="DNIUsuario">
              DNI
            </label>
          </div>
          <div className="relative w-full sm:w-[49%]">
            <input
              required
              className={Styles.inputL}
              id="nombreUsuario"
              placeholder=""
            />
            <label className={Styles.labelL} htmlFor="nombreUsuario">
              Nombres
            </label>
          </div>
        </div>
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <div className="relative w-full sm:w-[49%]">
            <input
              required
              className={Styles.inputL}
              id="apellidosUsuario"
              placeholder=""
              value={formTrab.apellidosUsuario}
              onChange={handleInputChangeTrab}
            />
            <label className={Styles.labelL} htmlFor="apellidosUsuario">
              Apellidos
            </label>
          </div>
          <div className="relative w-full sm:w-[49%]">
            <input
              required
              type="email"
              className={Styles.inputL}
              id="emailUsuario"
              placeholder=""
              value={formTrab.emailUsuario}
              onChange={handleInputChangeTrab}
            />
            <label className={Styles.labelL} htmlFor="emailUsuario">
              Correo Electrónico Personal
            </label>
          </div>
        </div>
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <div className="relative w-full sm:w-[49%]">
            <input
              required
              type="password"
              className={Styles.inputL}
              id="claveUsuario"
              placeholder=""
              value={formTrab.claveUsuario}
              onChange={handleInputChangeTrab}
            />
            <label className={Styles.labelL} htmlFor="claveUsuario ">
              Contraseña
            </label>
          </div>
          <div className="relative w-full sm:w-[49%]">
            <input
              required
              type="password"
              className={Styles.inputL}
              id="repeatPasswordUser"
              placeholder=""
            />
            <label className={Styles.labelL} htmlFor="repeatPasswordUser">
              Repetir Contraseña
            </label>
          </div>
        </div>
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <div className="relative w-full">
            <input
              required
              className={Styles.inputL}
              id="telefonoUsuario"
              placeholder=""
              value={formTrab.telefonoUsuario}
              onChange={handleInputChangeTrab}
            />
            <label className={Styles.labelL} htmlFor="telefonoUsuario">
              Teléfono
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
