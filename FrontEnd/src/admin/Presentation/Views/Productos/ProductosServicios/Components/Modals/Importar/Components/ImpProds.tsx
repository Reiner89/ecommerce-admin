import * as Icon from "../../../../../../../Components/Icons/Iconos";
import { useProdServices } from "../../../../Hooks/useProdServices";

export const ImpProds = () => {
  const { importProducts, closeImportProducts, refImpProds } =
    useProdServices();

  return (
    <div
      className={`fixed left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-50 flex justify-center items-center transition-all duration-500 ${
        importProducts ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refImpProds}
        className={`absolute flex flex-col justify-between w-[85%] bg-white border border-solid border-[#e0e0e0] rounded-md overflow-hidden transition-transform duration-500 ${
          importProducts ? "translate-y-0" : "translate-y-[600%]"
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
                  onClick={closeImportProducts}
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
              <div className="deleteProducts-container inline-flex items-center gap-2 border border-solid border-transparent py-1.5 px-3.5 has-[:checked]:border-[#09c] rounded-md transition-all duration-300">
                <label
                  className="relative flex items-center rounded-full cursor-pointer"
                  htmlFor="deleteProducts"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#000000de] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#09c] checked:bg-[#09c] checked:before:bg-[#09c]"
                    id="deleteProducts"
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <Icon.Check />
                  </span>
                </label>
                <label
                  className="w-full mt-px font-light text-[#39404a] cursor-pointer select-none"
                  htmlFor="deleteProducts"
                >
                  <div>
                    <p className="block font-sans text-sm transition-all duration-300">
                      Eliminar productos creados antes de cargar
                    </p>
                  </div>
                </label>
              </div>
              <div className="cont-button w-full flex justify-end">
                <button
                  type="button"
                  className="relative bg-[#09c] text-white text-sm font-semibold py-2 px-3 rounded-lg hover:bg-[#04789e] shadow-md transition-all duration-300"
                >
                  Cargar Productos
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
