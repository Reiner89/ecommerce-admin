import * as Icon from "../../../../../Components/Icons/Iconos";
import { buttonSubmit } from "../../../../../Styles/Actions";
import { AgDetalle, AImpuestos } from "../../../ProductosServicios/Components";
import { useProdServices } from "../../../ProductosServicios/Hooks/useProdServices";
import { FormLeft } from "./Components/FomrLeft/FormLeft";
import { FormRight } from "./Components/FormRight/FormRight";

export const PackForm = () => {
  const {
    loadingPack,
    submitPack,
    modalPackForm,
    closeFormPack,
    typeFormPack,
  } = useProdServices();

  return (
    <>
      <div
        className={`modal-verProducto-container fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.6)] transition-all duration-300 ${
          modalPackForm ? "visible" : "invisible"
        }`}
      >
        <div
          className={`modal-verProducto block absolute top-0 right-0 bottom-0 w-[60%] h-full bg-gray-50 transition-all duration-300 ${
            modalPackForm ? "translate-x-[0%]" : "translate-x-[100%]"
          }`}
        >
          <form
            onSubmit={submitPack}
            autoComplete="off"
            className="w-full h-full flex flex-col gap-y-4 border-none bg-transparent p-6 overflow-y-auto transition-all duration-300"
          >
            <div className="form-header w-full flex justify-between items-center text-xl text-[#344767] font-semibold">
              <h1 className="">
                {typeFormPack === "edit" ? "Editar Pack" : "Crear Pack"}
              </h1>
              <p onClick={closeFormPack} className="cursor-pointer">
                <Icon.Close />
              </p>
            </div>
            <div className="cont-forms relative flex flex-col gap-5">
              <FormLeft id={typeFormPack} />
              <FormRight id={typeFormPack} />
            </div>
            <div className="cont-buttons w-full flex justify-end items-center">
              <div className="relative">
                <button className={buttonSubmit} disabled={loadingPack}>
                  {typeFormPack === "edit"
                    ? loadingPack
                      ? "Actualizando..."
                      : "Actualizar"
                    : loadingPack
                    ? "Guardando..."
                    : "Guardar"}
                </button>
              </div>
            </div>
          </form>
          <AgDetalle />
          <AImpuestos />
        </div>
      </div>
    </>
  );
};
