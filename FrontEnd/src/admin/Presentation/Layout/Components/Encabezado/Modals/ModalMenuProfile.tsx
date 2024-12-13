import { useNavigate } from "react-router-dom";
import * as Icon from "../../../../Components/Icons/Iconos";
import "../Styles/index.css";
import { useConfig } from "../../../../Hooks/useConfig";
import { AuthContext } from "../../../../Context/Auth/AuthContext";
import { useContext } from "react";

export const ModalMenuProfile = () => {
  // useNavigate
  const navigate = useNavigate();

  // useConfig
  const { handleShowConfiguration, showMenu } = useConfig();

  // AuthContext
  const { LogoutRequest } = useContext(AuthContext);

  return (
    <div
      className={`dropdown-menu-perfil flex-col text-left text-[#212529] absolute top-11 bottom-auto left-auto right-0 min-w-[12rem] bg-white py-2 rounded-lg cursor-pointer
      ${showMenu ? "flex" : "hidden"}`}
    >
      <div className="flex flex-col">
        <p
          className="relative flex items-center w-full py-2 px-4 hover:bg-slate-100"
          onClick={() => navigate("/profile")}
        >
          <span className="container-icon text-base  mr-4 transition-all duration-300">
            <Icon.IconUser />
          </span>
          <span className="container-text text-sm font-normal transition-all duration-300">
            Mi Perfil
          </span>
        </p>
        <p
          className="relative flex items-center w-full py-2 px-4 hover:bg-slate-100"
          onClick={handleShowConfiguration}
        >
          <span className="container-icon text-base  mr-4 transition-all duration-300">
            <Icon.IconConfiguracion />
          </span>
          <span className="container-text text-sm font-normal transition-all duration-300">
            Configuracion
          </span>
        </p>
        <div className="relative h-0 my-2 border border-solid border-[#e9ecef] opacity-50" />
        <p
          className="relative flex items-center w-full py-2 px-4 hover:bg-slate-100"
          onClick={LogoutRequest}
        >
          <span className="container-icon text-base  mr-4 transition-all duration-300">
            <Icon.IconLogOut />
          </span>
          <span className="container-text text-sm font-normal transition-all duration-300">
            Cerrar Sesión
          </span>
        </p>
      </div>
    </div>
  );
};
