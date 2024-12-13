import * as Icon from "../../../../../Components/Icons/Iconos";
import { useProdServices } from "../../../ProductosServicios/Hooks/useProdServices";
import { Carrousel } from "../../../ProductosServicios/Product/Modal/Components";
import { Descripcion } from "./Components/Descripcion";
import { Estado } from "./Components/Estado";
import { FichaPack } from "./Components/FichaPack";
import { Precio } from "./Components/Precio";
import { ProductosPack } from "./Components/ProductosPack";

export const Ver = () => {
  const { selectedPack, modalVerPack, closeModalVerPack, refModalVerPack } =
    useProdServices();

  return (
    <div
      className={`modal-verProducto-container fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.6)] transition-all duration-300 ${
        modalVerPack ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refModalVerPack}
        className={`modal-verProducto block absolute top-0 right-0 bottom-0 w-96 h-full bg-white transition-all duration-300 ${
          modalVerPack ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <div className="productDetails-container w-full h-full p-6 overflow-y-auto">
          <div className="productDetails-header flex justify-between items-center text-xl text-[#344767] mb-6">
            <h2 className="relative font-semibold">Detalles del Pack</h2>
            <p className="container-icon cursor-pointer">
              <Icon.Close onClick={closeModalVerPack} />
            </p>
          </div>
          {selectedPack && (
            <div className="productDetails w-full flex flex-col">
              <div className="productoDetails-images w-full grid gap-4 px-3">
                <Carrousel images={selectedPack.packImages} />
              </div>
              <div className="productDetails-information w-full text-[#344767] px-3 mx-auto">
                <h3 className="relative text-2xl font-bold mt-6 mb-2">
                  {selectedPack.packNombre}
                </h3>
                <div className="details-container flex flex-col gap-y-2.5">
                  <Precio />
                  <Estado />
                  <FichaPack />
                  <ProductosPack />
                  <Descripcion />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
