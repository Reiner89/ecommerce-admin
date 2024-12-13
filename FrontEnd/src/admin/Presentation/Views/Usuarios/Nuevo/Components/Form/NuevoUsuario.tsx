import { Toaster } from "sonner";
import { IconUser } from "../../../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../../../Hooks/useAdmin";
import { buttonSubmit } from "../../../../../Styles/Actions";
import { DirecUsuario } from "../DirecUsuario";
import { InfoUsuario } from "../InfoUsuario";
import { PerfilUsuario } from "../PerfilUsuario";
import { SocialsUsuario } from "../SocialsUsuario";

export const NuevoUsuario = () => {
  const { handleSubmitTrab } = useAdministracion();

  return (
    <>
      <Toaster position="bottom-right" richColors />
      <div className="w-48 h-48 bg-[#f0faff] mx-auto rounded-full shadow-2xl absolute inset-x-0 top-28 -mt-24 flex items-center justify-center text-[#0099cc]">
        <IconUser className="w-24 h-24" />
      </div>
      <form
        autoComplete="off"
        onSubmit={handleSubmitTrab}
        className="relative pt-48"
      >
        <div className="relative flex flex-col lg:flex-row w-full">
          <div className="relative flex w-full max-w-full px-3">
            <InfoUsuario />
          </div>
          <div className="relative flex w-full max-w-full px-3 mt-6 lg:mt-0">
            <DirecUsuario />
          </div>
        </div>
        <div className="relative flex flex-col lg:flex-row w-full">
          <div className="relative flex w-full max-w-full px-3">
            <SocialsUsuario />
          </div>
          <div className="relative flex w-full px-3 mt-6 lg:mt-0">
            <PerfilUsuario />
          </div>
        </div>
        <div className="createUser-button w-full flex justify-end items-center px-9 pb-5">
          <button className={buttonSubmit}>Crear Usuario</button>
        </div>
      </form>
    </>
  );
};
