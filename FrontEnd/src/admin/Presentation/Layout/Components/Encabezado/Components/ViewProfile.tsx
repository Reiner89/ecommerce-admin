import { useContext } from "react";
import { AuthContext } from "../../../../Context/Auth/AuthContext";
import { ModalMenuProfile } from "../Modals/ModalMenuProfile";
import ImgUser from "../../../../../assets/FotoUsuario.webp";
import { useConfig } from "../../../../Hooks/useConfig";

export const ViewProfile = () => {
  // AuthContext
  const { auth } = useContext(AuthContext);
  const { handleMenu, menuRef } = useConfig();

  return (
    <div
      ref={menuRef}
      className="container-perfil flex justify-center items-center cursor-pointer"
      onClick={handleMenu}
    >
      <span className="avatar-perfil w-9 h-w-9 flex justify-center items-center">
        <img
          src={ImgUser}
          alt="ImagePerfil"
          className="relative w-full rounded-full transition-all duration-300"
        />
      </span>
      <div className="nombre-perfil hidden lg:flex justify-center items-center ml-2 transition-all duration-300">
        <span className="nombre w-full text-base text-left text-[rgba(0,0,0,.6)] font-semibold">
          {auth.nombre_usuario}
        </span>
      </div>
      <ModalMenuProfile />
    </div>
  );
};
