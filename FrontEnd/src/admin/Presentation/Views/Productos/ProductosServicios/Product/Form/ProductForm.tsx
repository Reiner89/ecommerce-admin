import * as Icon from "../../../../../Components/Icons/Iconos";
import { FormRight } from "./Components/FormRight/FormRight";
import { FormLeft } from "./Components/FormLeft/FormLeft";
import { useProdServices } from "../../Hooks/useProdServices";
import { buttonSubmit } from "../../../../../Styles/Actions";
import { AImpuestos } from "../../Components";

export const ProductForm = () => {
  // Uso de mi Hook
  const {
    loading,
    handleSubmit,
    refModalProdForm,
    modalProdForm,
    closeFormProd,
    typeFormProd,
  } = useProdServices();

  return (
    <>
      <div
        className={`modal-CrrearProducto-container fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.6)] transition-all duration-300 ${
          modalProdForm ? "visible" : "invisible"
        }`}
      >
        <div
          ref={refModalProdForm}
          className={`modal-CrrearProducto w-[60%] h-full block absolute top-0 right-0 bottom-0 bg-gray-50 transition-all duration-300 ${
            modalProdForm ? "translate-x-[0%]" : "translate-x-[100%]"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="cont-form w-full h-full relative flex flex-col gap-5 border-none p-6 overflow-y-auto transition-all duration-300"
          >
            <div className="form-header w-full flex justify-between items-center text-xl text-[#344767] font-semibold">
              <h1 className="">
                {typeFormProd === "edit" ? "Editar Producto" : "Crear Producto"}
              </h1>
              <p onClick={closeFormProd} className="cursor-pointer">
                <Icon.Close />
              </p>
            </div>
            <div className="cont-forms relative flex flex-col gap-5">
              <FormLeft id={typeFormProd} />
              <FormRight id={typeFormProd} />
            </div>
            <div className="cont-buttons w-full flex justify-end items-center">
              <div className="relative">
                <button className={buttonSubmit} disabled={loading}>
                  {typeFormProd === "edit"
                    ? loading
                      ? "Actualizando..."
                      : "Actualizar"
                    : loading
                    ? "Guardando"
                    : "Guardar"}
                </button>
              </div>
            </div>
          </form>
          <AImpuestos />
        </div>
      </div>
    </>
  );
};
