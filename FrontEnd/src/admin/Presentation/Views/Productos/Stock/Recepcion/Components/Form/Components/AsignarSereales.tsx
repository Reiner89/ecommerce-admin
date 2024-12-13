import * as Icon from "../../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../../Hooks/useStock";
import { buttonSubmit } from "../../../../../../../Styles/Actions";
import { Sereales } from "./Sereales/Sereales";

export const AsignarSereales = () => {
  const {
    refModalSerealesR,
    modalSerealesR,
    closeModalSerealesR,
    submitRecepcion,
    recepcionIsPosting,
  } = useStock();

  return (
    <div
      ref={refModalSerealesR}
      className={`dialog-asignar-sereales-container fixed top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.5)] transition-all duration-300 ${
        modalSerealesR ? "visible" : "invisible"
      }`}
    >
      <div
        className={`dialog-asignar-sereales-content w-[27%] absolute top-0 bottom-0 right-0 bg-gray-50 transition-all duration-300 ${
          modalSerealesR ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <form
          onSubmit={submitRecepcion}
          className="dialog-asignar-cereales-form w-full h-full relative flex flex-col gap-5 p-6 overflow-y-auto"
          autoComplete="off"
        >
          <div className="dialog-sereales-header w-full h-[5%] flex justify-between items-center text-[#344767]">
            <h2 className="relative text-xl font-semibold">Asignar Sereales</h2>
            <p
              onClick={closeModalSerealesR}
              className="relative text-xl cursor-pointer"
            >
              <Icon.Close />
            </p>
          </div>
          <div className="dialog-asignar-sereales-body w-full h-[92%] flex flex-col justify-between gap-5">
            <Sereales />
            <button disabled={recepcionIsPosting} className={buttonSubmit}>
              {recepcionIsPosting ? "Guardando..." : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
