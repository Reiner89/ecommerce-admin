import { useProdServices } from "../../../../Hooks/useProdServices";
import * as Icon from "../../../../../../../Components/Icons/Iconos";
import * as Styles from "../../../../Styles/StylesFormProd";

export const ImpDesc = () => {
  const { importDescriptions, closeImportDescriptions } = useProdServices();

  return (
    <div
      className={`fixed left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-50 flex justify-center items-center transition-all duration-500 ${
        importDescriptions ? "visible" : "invisible"
      }`}
    >
      <div
        className={`absolute w-[85%] flex flex-col justify-between bg-white border border-solid border-[#e0e0e0] rounded-md overflow-hidden transition-all duration-500 ${
          importDescriptions ? "translate-y-0" : "translate-y-[600%]"
        }`}
      >
        <div className="relative w-full h-full p-5 transition-all duration-300">
          <div className="block relative py-5 px-4 border border-solid border-[#ccc] transition-all duration-300">
            <form className="form relative flex flex-col m-0 p-0 gap-5">
              <div className="form-header w-full flex justify-between items-center text-[#999999]">
                <div className="txt-header flex gap-x-2">
                  <p className="relative text-sm transition-all duration-300">
                    Selecciona el archivo CSV o de texto plano separado por
                    tabulaciones que deseas cargar.
                  </p>
                  <p className="relative text-sm text-center font-medium text-[#33add6] transition-all duration-300">
                    No utilices un archivo de Excel
                  </p>
                </div>
                <div
                  onClick={closeImportDescriptions}
                  className="icon-header text-lg cursor-pointer"
                >
                  <Icon.Close />
                </div>
              </div>
              <div className="form-input-file">
                <label htmlFor="file-products" />
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file-products"
                  type="file"
                />
              </div>
              <div
                className={`hideVariants-container ${Styles.checkboxContainer}`}
              >
                <label
                  className="relative flex items-center rounded-full cursor-pointer"
                  htmlFor="hideVariants"
                >
                  <input
                    type="checkbox"
                    className={Styles.checkboxInput}
                    id="hideVariants"
                  />
                  <span className={Styles.checkboxSpan}>
                    <Icon.Check />
                  </span>
                </label>
                <label
                  className="w-full mt-px font-light text-[#39404a] cursor-pointer select-none"
                  htmlFor="hideVariants"
                >
                  <div>
                    <p className="block font-sans text-sm transition-all duration-300">
                      Mostrar en la tienda únicamente la variante por defecto
                      (Solo para las descripciones web nuevas)
                    </p>
                  </div>
                </label>
              </div>
              <div className="cont-button w-full flex justify-end">
                <button
                  type="button"
                  className="relative bg-[#09c] text-white text-sm font-semibold py-2 px-3 rounded-lg hover:bg-[#04789e] shadow-md transition-all duration-300"
                >
                  Cargar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
