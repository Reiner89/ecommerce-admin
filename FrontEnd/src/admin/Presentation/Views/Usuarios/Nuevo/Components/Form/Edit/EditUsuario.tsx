import { Close } from "../../../../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../../../../Hooks/useAdmin";
import { buttonSubmit } from "../../../../../../Styles/Actions";
import { DirecUsuario } from "./Components/DirecUsuario";
import { InfoUsuario } from "./Components/InfoUsuario";
import { PerfilUsuario } from "./Components/PerfilUsuario";
import { SocialsUsuario } from "./Components/SocialsUsuario";

export const EditUsuario = () => {
  const {
    modalFormUsuarios,
    refModalFormUsuarios,
    handleSubmitTrab,
    closeFormUsuarios,
    posting,
  } = useAdministracion();

  return (
    <div
      className={`modal-edit-usuario-container fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.6)] transition-all duration-300 ${
        modalFormUsuarios ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refModalFormUsuarios}
        className={`modal-edit-usuario w-[35%] h-full block absolute top-0 right-0 bottom-0 bg-gray-50 transition-all duration-300 ${
          modalFormUsuarios ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <form
          onSubmit={handleSubmitTrab}
          autoComplete="off"
          className="cont-form w-full h-full relative flex flex-col gap-9 border-none overflow-y-auto transition-all duration-300 p-4"
        >
          <div className="form-header w-full flex justify-between items-center text-xl text-[#344767] font-semibold">
            <h1 className="">Editar Usuario</h1>
            <p onClick={closeFormUsuarios} className="cursor-pointer">
              <Close />
            </p>
          </div>
          <div className="form-container flex flex-col gap-5">
            <InfoUsuario />
            <DirecUsuario />
            <SocialsUsuario />
            <PerfilUsuario />
          </div>
          <div className="createUser-button w-full flex justify-end items-center pb-5">
            <button className={buttonSubmit}>
              {posting ? "Actualizando..." : "Actualizar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
