import * as Icon from "../../../../../Components/Icons/Iconos";
import { useProdServices } from "../../Hooks/useProdServices";
import { Carrousel, Descripcion, Ficha, Variantes } from "./Components";

export const Ver = () => {
  const { selectedProd, refModalVerProd, modalVerProd, CloseModalVerProd } =
    useProdServices();

  return (
    <div
      className={`modal-verProducto-container fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.6)] transition-all duration-300 ${
        modalVerProd ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refModalVerProd}
        className={`modal-verProducto block absolute top-0 right-0 bottom-0 w-96 h-full bg-white transition-all duration-300 ${
          modalVerProd ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <div className="productDetails-container w-full h-full p-6 overflow-y-auto">
          <div className="productDetails-header flex justify-between items-center text-xl text-[#344767] mb-6">
            <h2 className="relative font-semibold">Detalles del Producto</h2>
            <p className="container-icon cursor-pointer">
              <Icon.Close onClick={CloseModalVerProd} />
            </p>
          </div>
          {selectedProd && (
            <div className="productDetails w-full flex flex-col">
              <div className="productoDetails-images w-full grid gap-4 px-3">
                {selectedProd.imagenProducto.length > 0 && (
                  <Carrousel images={selectedProd.imagenProducto} />
                )}
              </div>
              <div className="productDetails-information w-full text-[#344767] flex flex-col gap-3 px-3 mx-auto">
                <h3 className="relative text-2xl font-bold mt-6">
                  {selectedProd.nombreProducto}
                </h3>
                <div className="container-precio">
                  <h6 className="relative text-base font-semibold">Precio</h6>
                  <p className="relative text-xl font-semibold">
                    S/
                    {/* {selectedProd.precioProducto} */}
                  </p>
                </div>
                <span
                  className={`w-28 relative text-xs text-center font-bold uppercase py-1.5 px-2.5 rounded-lg ${
                    selectedProd.estadoProducto
                      ? "text-[#43a047] bg-[#ddf8e0]"
                      : "text-[rgb(164,167,172)] bg-[#ebeced]"
                  }`}
                >
                  {selectedProd.estadoProducto ? "En Stock" : "Sin Stock"}
                </span>
                <Ficha selectedProd={selectedProd} />
                <Variantes selectedProd={selectedProd} />
                <Descripcion selectedProd={selectedProd} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
