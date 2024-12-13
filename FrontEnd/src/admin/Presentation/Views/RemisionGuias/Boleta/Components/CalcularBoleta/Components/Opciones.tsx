import * as Icon from "../../../../../../Components/Icons/Iconos";
import * as Styles from "../../../../../../Styles/Actions";

export const Opciones = () => {
  return (
    <div className="relative w-1/3 flex flex-col gap-5">
      <div className="relative flex items-center gap-2">
        <label
          className="relative flex items-center rounded-full cursor-pointer"
          htmlFor="BdescGlobalFactura"
        >
          <input
            type="checkbox"
            className={Styles.inputCheck}
            id="BdescGlobalFactura"
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <Icon.Check />
          </span>
        </label>
        <label
          className="w-full mt-px font-light text-[#39404a] cursor-pointer select-none"
          htmlFor="BdescGlobalFactura"
        >
          <div>
            <p className="block font-sans text-sm transition-all duration-300">
              Descuento Global:
            </p>
          </div>
        </label>
      </div>
      <div className="relative flex items-center gap-2">
        <label
          className="relative flex items-center rounded-full cursor-pointer"
          htmlFor="BdetracionFactura"
        >
          <input
            type="checkbox"
            className={Styles.inputCheck}
            id="BdetracionFactura"
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <Icon.Check />
          </span>
        </label>
        <label
          className="w-full mt-px font-light text-[#39404a] cursor-pointer select-none"
          htmlFor="BdetracionFactura"
        >
          <div>
            <p className="block font-sans text-sm transition-all duration-300">
              Detracción:
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};
