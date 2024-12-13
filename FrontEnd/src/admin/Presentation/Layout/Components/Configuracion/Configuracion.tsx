import { Close } from "../../../Components/Icons/Iconos";
import {
  backgroundAsideBlanco,
  bgAsideTransparent,
  bgLabelAside,
} from "../../../Data/bgAside";
import { useConfig } from "../../../Hooks/useConfig";

export const Configuracion = () => {
  // Estraigo los estados de mi hook
  const {
    configModalShow,
    isNavbarFixed,
    tema,
    backgroundAside,
    handleNavbarFixed,
    changeTheme,
    handleShowConfiguration,
    changeBackgroundAside,
    changebgRouteActive,
    bgRouteActive,
  } = useConfig();

  return (
    <div
      className={`sombra flex flex-col fixed border-none ${
        configModalShow ? "translate-x-[0%]" : "translate-x-[100%]"
      } w-[360px] h-full top-0 right-0 bottom-0 p-[0px_0.625rem] bg-[rgb(255,255,255)] dark:bg-[rgb(31,40,62)] transition-transform duration-300 z-40`}
    >
      <div className="flex justify-between items-baseline p-[32px_24px_4px] opacity-[1] bg-transparent text-[rgb(52,71,103)]">
        <div className="opacity-[1] bg-transparent text-[rgb(52,71,103)]">
          <h5 className="text-[1.25rem] leading-[1.375] font-bold dark:text-white">
            Configuración del Dashboard
          </h5>
          <p className="text-[1rem] leading-[1.6] font-light text-[rgb(123,128,154)] dark:text-[rgba(255,255,255,0.8)]">
            Vea las opciones del Dashboard.
          </p>
        </div>
        <button
          className="w-[1em] h-[1em] overflow-hidden inline-block text-center text-[rgb(52,71,103)] cursor-pointer dark:text-white"
          onClick={handleShowConfiguration}
        >
          <Close />
        </button>
      </div>
      <hr className="my-4 h-[0.0625rem] bg-transparent" />
      <div className="p-[4px_24px_24px] bg-transparent opacity-[1]">
        <div className="opacity-[1] bg-transparent">
          <h6 className="text-[1rem] text-[rgb(52,71,103)] leading-relaxed font-bold tracking-[0.0075em] dark:text-white">
            SideNav Colors
          </h6>
          <div className="flex my-2 bg-transparent">
            {bgLabelAside.map((bg) => (
              <button
                key={bg.id}
                type="button"
                onClick={() => changebgRouteActive(bg)}
                className={`flex items-center justify-center content-center cursor-pointer w-[24px] h-[24px] mr-2 rounded-[50%] ${
                  bg.background
                } ${
                  bg.id === bgRouteActive.id
                    ? "relative border-[0.0625rem] border-solid border-[rgb(52,71,103)] dark:border-[rgb(255,255,255)]"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>
        <div className="mt-6 leading-none bg-transparent text-[rgb(52,71,103)]">
          <h6 className="m-0 text-[1rem] leading-relaxed font-bold tracking-[0.0075em] dark:text-white">
            Background de los Aside
          </h6>
          <span className="text-[0.875rem] font-light leading-6 tracking-[0.02857em] text-[rgb(123,128,154)] dark:text-[rgba(255,255,255,0.8)]">
            Escoge el background del Aside
          </span>
          <div className="flex justify-around bg-transparent mt-4 mx-auto">
            <div className="mr-1 relative">
              <button
                onClick={() => {
                  changeBackgroundAside(bgAsideTransparent);
                }}
                className={`${
                  backgroundAside === bgAsideTransparent
                    ? "text-[rgb(255,255,255)] bg-[rgb(25,25,25)] shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem] dark:text-[rgb(31,40,62)] dark:bg-[rgb(255,255,255)]"
                    : "dark:bg-[rgb(31,40,62)] dark:text-white"
                } shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem] border-[0.0625rem] border-solid border-[rgb(52,71,103)] z-0 relative inline-flex w-full min-w-[64px] h-[2.4375rem] min-h-[2.5rem] p-[0.625rem_1.1rem] justify-center items-center cursor-pointer rounded-[0.5rem] text-[0.75rem] text-center uppercase font-bold leading-[1.4] tracking-[0.02857em] motion-safe:hover:scale-110 dark:shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem] transition-all duration-300`}
              >
                Transparente
              </button>
            </div>
            <div className="mr-1 relative">
              <button
                onClick={() => {
                  changeBackgroundAside(backgroundAsideBlanco);
                }}
                className={`${
                  backgroundAside === backgroundAsideBlanco
                    ? "text-[rgb(255,255,255)] bg-[rgb(25,25,25)] shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem] dark:text-[rgb(31,40,62)] dark:bg-[rgb(255,255,255)]"
                    : "dark:bg-[rgb(31,40,62)] dark:text-white"
                } shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem] border-[0.0625rem] border-solid border-[rgb(52,71,103)] z-0 relative inline-flex w-full min-w-[64px] h-[2.4375rem] min-h-[2.5rem] p-[0.625rem_1.1rem] justify-center items-center cursor-pointer rounded-[0.5rem] text-[0.75rem] text-center uppercase font-bold leading-[1.4] tracking-[0.02857em] motion-safe:hover:scale-110 dark:shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem] transition-all duration-300`}
              >
                Blanco
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 bg-transparent">
          <h6 className="text-[1rem] leading-[1.625] font-bold tracking-[0.0075em] text-[rgb(52,71,103)] dark:text-white">
            Navbar Fijo
          </h6>
          <label
            htmlFor="navbar"
            className="relative inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="navbar"
              value=""
              className="sr-only peer"
              checked={isNavbarFixed}
              onChange={handleNavbarFixed}
            />
            <div
              className={`w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-[rgb(66,66,74)]`}
            />
          </label>
        </div>
        <hr className="my-4 h-[0.0625rem] bg-transparent" />
        <div className="flex justify-between items-center mt-6 bg-transparent">
          <h6 className="text-[1rem] leading-[1.625] font-bold tracking-[0.0075em] text-[rgb(52,71,103)] dark:text-white">
            Claro / Oscuro
          </h6>
          <label
            htmlFor="tema"
            className="relative inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="tema"
              value=""
              className="sr-only peer"
              checked={tema === "dark"}
              onChange={changeTheme}
            />
            <div
              className={`w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-[rgb(66,66,74)]`}
            />
          </label>
        </div>
        <hr className="my-4 h-[0.0625rem] bg-transparent" />
      </div>
    </div>
  );
};
