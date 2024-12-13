import { useContext } from "react";
import { AuthContext } from "../../../../Context/Auth/AuthContext";
import ImgUser from "../../../../../assets/FotoUsuario.webp";

export const PerfilHeader = () => {
  // AuthContext
  const { auth } = useContext(AuthContext);

  return (
    <div className="perfil-header relative flex p-4 -mt-16 mx-6 rounded-2xl transition-all duration-300">
      <div className="avatar-container relative px-3">
        <div className="avatar relative flex justify-center items-center w-[74px] h-[74px]">
          <img
            src={ImgUser}
            alt="profilePhoto"
            className="relative w-full rounded-xl shadow-sm"
          />
        </div>
      </div>
      <div className="relative mt-auto mb-auto px-3">
        <div className="nombre-rol-container font-semibold">
          <h4 className="relative text-xl text-[#344767] mb-1">
            {auth.nombre_usuario}
          </h4>
          <p className="relative text-sm text-[#67748e]">{auth.nombre_cargo}</p>
        </div>
      </div>
    </div>
  );
};
