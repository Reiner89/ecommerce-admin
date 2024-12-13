import { Close } from "../../../../../../Components/Icons/Iconos";
import { useProdServices } from "../../../Hooks/useProdServices";
import { Form } from "./Components/Form/Form";

export const UbicacionProductos = () => {
  const { modalUbicaionProd, refModalUbicacionProd, closeModalUbicacionProd } =
    useProdServices();

  return (
    <div
      className={`fixed left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-50 flex justify-center items-center transition-all duration-500 ${
        modalUbicaionProd ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refModalUbicacionProd}
        className={`absolute flex flex-col justify-between w-[65%] bg-white border border-solid border-[#e0e0e0] rounded-md overflow-hidden transition-transform duration-500 ${
          modalUbicaionProd ? "translate-y-0" : "translate-y-[600%]"
        }`}
      >
        <div className="relative w-full h-full p-5 transition-all duration-300">
          <div className="w-full flex flex-col relative py-5 px-4 border border-solid border-[#ccc] gap-5 transition-all duration-300">
            <div className="header-modal-IGV relative w-full text-left">
              <h1 className="relative text-[#344767] text-xl font-bold">
                Ubicaciones
              </h1>
              <Close
                onClick={closeModalUbicacionProd}
                className="absolute right-0 top-0 text-xl cursor-pointer"
              />
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
