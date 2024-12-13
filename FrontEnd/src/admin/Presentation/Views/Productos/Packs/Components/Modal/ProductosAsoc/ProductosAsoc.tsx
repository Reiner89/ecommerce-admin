import { Close } from "../../../../../../Components/Icons/Iconos";
import { buttonSubmit } from "../../../../../../Styles/Actions";
import { useProdServices } from "../../../../ProductosServicios/Hooks/useProdServices";
import * as C from "./Components";

export const ProductosAsociados = () => {
  const {
    modalProductosPack,
    refModalProductosPack,
    closeProductsAsoc,
    typeFormPack,
    addSelectedProdsPack,
  } = useProdServices();

  return (
    <div
      className={`fixed left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-50 flex justify-center items-center transition-all duration-500 ${
        modalProductosPack ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refModalProductosPack}
        className={`absolute flex flex-col justify-between w-[50%] bg-white border border-solid border-[#e0e0e0] rounded-md overflow-hidden transition-transform duration-500 ${
          modalProductosPack ? "translate-y-0" : "translate-y-[600%]"
        }`}
      >
        <div className="relative w-full h-full p-5 transition-all duration-300">
          <div className="w-full flex flex-col relative py-5 px-4 border border-solid border-[#ccc] gap-5 transition-all duration-300">
            <div className="header-modal-IGV relative w-full text-left">
              <h1 className="relative text-[#344767] text-xl font-bold">
                {typeFormPack === "new"
                  ? "Asociar Productos"
                  : "Productos Asociados"}
              </h1>
              <Close
                onClick={closeProductsAsoc}
                className="absolute right-0 top-0 text-xl cursor-pointer"
              />
            </div>
            <C.Table />
            <div className="container-acciones flex flex-row w-full justify-between">
              <C.Pagination />
              {typeFormPack === "new" && (
                <button
                  onClick={addSelectedProdsPack}
                  type="button"
                  className={buttonSubmit}
                >
                  Agregar Productos
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
