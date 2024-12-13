import { useAdministracion } from "../../../../../../../Hooks/useAdmin";
import * as Styles from "../../../../../../../Styles/Actions";

export const PerfilUsuario = () => {
  const { formEditTrab, handleInputChangeTrab } = useAdministracion();

  return (
    <div className="relative flex flex-col w-full max-w-full">
      <div className="relative flex flex-col gap-y-4">
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <div className="relative w-full">
            <input
              required
              className={Styles.inputL}
              id="emailCorporativoUsuario"
              placeholder=""
              value={formEditTrab.emailCorporativoUsuario}
              onChange={handleInputChangeTrab}
            />
            <label className={Styles.labelL} htmlFor="emailCorporativoUsuario">
              Correo Eléctronico Corporativo
            </label>
          </div>
        </div>
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <div className="relative w-full">
            <textarea
              required
              id="biografiaUsuario"
              rows={4}
              className={Styles.inputTextAreaL}
              placeholder=""
              value={formEditTrab.biografiaUsuario}
              onChange={handleInputChangeTrab}
            />
            <label htmlFor="biografiaUsuario" className={Styles.labelTextAreaL}>
              Biografía
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
