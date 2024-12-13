import { useAdministracion } from "../../../../../../../Hooks/useAdmin";
import * as Styles from "../../../../../../../Styles/Actions";

export const InfoUsuario = () => {
  const {
    formEditTrab,
    handleInputChangeTrab,
    handleFileChangeTrab,
    refFotoUsuario,
  } = useAdministracion();

  return (
    <div className="relative flex flex-col w-full max-w-full">
      <div className="relative flex flex-col gap-y-4">
        <div className="relative w-full">
          <input
            type="file"
            required
            className={Styles.inputL}
            id="fotoUsuario"
            placeholder=""
            onChange={handleFileChangeTrab}
            accept="image/*"
            ref={refFotoUsuario}
          />
          <label className={Styles.labelL} htmlFor="fotoUsuario">
            Foto del Usuario
          </label>
        </div>
        <div className="relative w-full">
          <input
            required
            className={Styles.inputL}
            id="DNIUsuario"
            placeholder=""
            value={formEditTrab.DNIUsuario}
            onChange={handleInputChangeTrab}
          />
          <label className={Styles.labelL} htmlFor="DNIUsuario">
            DNI
          </label>
        </div>
        <div className="relative w-full">
          <input
            required
            className={Styles.inputL}
            id="nombreUsuario"
            placeholder=""
            value={formEditTrab.nombreUsuario}
            onChange={handleInputChangeTrab}
          />
          <label className={Styles.labelL} htmlFor="nombreUsuario">
            Nombres
          </label>
        </div>
        <div className="relative w-full">
          <input
            required
            className={Styles.inputL}
            id="apellidosUsuario"
            placeholder=""
            value={formEditTrab.apellidosUsuario}
            onChange={handleInputChangeTrab}
          />
          <label className={Styles.labelL} htmlFor="apellidosUsuario">
            Apellidos
          </label>
        </div>
        <div className="relative w-full">
          <input
            required
            type="email"
            className={Styles.inputL}
            id="emailUsuario"
            placeholder=""
            value={formEditTrab.emailUsuario}
            onChange={handleInputChangeTrab}
          />
          <label className={Styles.labelL} htmlFor="emailUsuario">
            Correo Electrónico Personal
          </label>
        </div>
        <div className="relative w-full">
          <input
            required
            type="text"
            className={Styles.inputL}
            id="claveUsuario "
            placeholder=""
            value={formEditTrab.claveUsuario}
            onChange={handleInputChangeTrab}
          />
          <label className={Styles.labelL} htmlFor="claveUsuario ">
            Contraseña
          </label>
        </div>
        <div className="relative w-full">
          <input
            required
            className={Styles.inputL}
            id="telefonoUsuario"
            placeholder=""
            value={formEditTrab.telefonoUsuario}
            onChange={handleInputChangeTrab}
          />
          <label className={Styles.labelL} htmlFor="telefonoUsuario">
            Teléfono
          </label>
        </div>
      </div>
    </div>
  );
};
