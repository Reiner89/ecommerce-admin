import { useAdministracion } from "../../../../Hooks/useAdmin";
import * as Styles from "../../../../Styles/Actions";

export const PerfilUsuario = () => {
  const { formTrab, handleInputChangeTrab } = useAdministracion();

  return (
    <div className="relative flex flex-col w-full max-w-full">
      <div className="relative p-6 flex flex-col gap-y-4">
        <h5 className="relative text-xl text-[#344767] font-bold transition-all">
          Perfil de Usuario
        </h5>
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <div className="relative w-full">
            <input
              required
              className={Styles.inputL}
              id="emailCorporativoUsuario"
              placeholder=""
              value={formTrab.emailCorporativoUsuario}
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
              value={formTrab.biografiaUsuario}
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
