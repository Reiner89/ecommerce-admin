import { useAdministracion } from "../../../../Hooks/useAdmin";
import * as Styles from "../../../../Styles/Actions";

export const SocialsUsuario = () => {
  const { formTrab, handleInputChangeTrab } = useAdministracion();

  return (
    <div className="relative flex flex-col w-full max-w-full">
      <div className="relative p-6 flex flex-col gap-y-4">
        <h5 className="relative text-xl text-[#344767] font-bold transition-all">
          Redes Sociales
        </h5>
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <div className="relative w-full">
            <input
              required
              className={Styles.inputL}
              id="twitterUsuario"
              placeholder=""
              value={formTrab.twitterUsuario}
              onChange={handleInputChangeTrab}
            />
            <label className={Styles.labelL} htmlFor="twitterUsuario">
              Usuario de Twitter
            </label>
          </div>
        </div>
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <div className="relative w-full">
            <input
              required
              className={Styles.inputL}
              id="facebookUsuario"
              placeholder=""
              value={formTrab.facebookUsuario}
              onChange={handleInputChangeTrab}
            />
            <label className={Styles.labelL} htmlFor="facebookUsuario">
              Usuario de Facebook
            </label>
          </div>
        </div>
        <div className="cont-first-column w-full flex flex-col gap-y-5 gap-x-0 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <div className="relative w-full">
            <input
              required
              className={Styles.inputL}
              id="instagramUsuario"
              placeholder=""
              value={formTrab.instagramUsuario}
              onChange={handleInputChangeTrab}
            />
            <label className={Styles.labelL} htmlFor="instagramUsuario">
              Usuario de Instagram
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
