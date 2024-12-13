import { useProdServices } from "../../../../Hooks/useProdServices";
import * as Icon from "../../../../../../../Components/Icons/Iconos";

export const ImpImg = () => {
  const { importImages, closeImportImages } = useProdServices();

  return (
    <div
      className={`fixed left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-50 flex justify-center items-center transition-all duration-500 ${
        importImages ? "visible" : "invisible"
      }`}
    >
      <div
        className={`absolute flex flex-col justify-between w-[85%] bg-white border border-solid border-[#e0e0e0] rounded-md overflow-hidden transition-all duration-500 ${
          importImages ? "translate-y-0" : "translate-y-[600%]"
        }`}
      >
        <div className="relative w-full h-full p-5 transition-all duration-300">
          <div className="block relative py-5 px-4 border border-solid border-[#ccc] transition-all duration-300">
            <form className="form relative flex flex-col m-0 p-0 gap-5">
              <div className="form-header w-full flex justify-between items-center text-[#999999]">
                <div className="txt-header flex gap-x-2">
                  <p className="relative text-sm transition-all duration-300">
                    Puedes definir la imagen principal de tu producto cambiando
                    el nombre del archivo a “default”. Ejemplo: default.jpg. El
                    tamaño no podrá ser superior a 5MB por imagen
                  </p>
                </div>
                <div
                  onClick={closeImportImages}
                  className="icon-header text-lg cursor-pointer"
                >
                  <Icon.Close />
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-[#09c] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 transition-all duration-300">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <p className="relative text-4xl text-[#09c]">
                      <Icon.Exportar />
                    </p>
                    <p className="mb-2 text-base text-[#09c] mt-4">
                      <span className="font-normal">
                        Arrastra aquí una carpeta de imágenes cuyo nombre sea el
                        SKU de tu producto
                      </span>
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </div>
              </div>
              <div className="imageToSku-container inline-flex items-center gap-2 border border-solid border-transparent py-1.5 px-3.5 has-[:checked]:border-[#09c] rounded-md transition-all duration-300">
                <label
                  className="relative flex items-center rounded-full cursor-pointer"
                  htmlFor="imageToSku"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#000000de] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#09c] checked:bg-[#09c] checked:before:bg-[#09c]"
                    id="imageToSku"
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <Icon.Check />
                  </span>
                </label>
                <label
                  className="w-full mt-px font-light text-[#39404a] cursor-pointer select-none"
                  htmlFor="imageToSku"
                >
                  <div>
                    <p className="block font-sans text-sm transition-all duration-300">
                      Asignar a imágenes a SKU
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
