import { useContext } from "react";
import { UserConnect } from "../../../../../Interfaces/Messages/Messages";
import ImgUser from "../../../../../assets/FotoUsuario.webp";
import {
  Comment,
  IconNotificaciones,
} from "../../../../Components/Icons/Iconos";
import { NotifyContext } from "../../../../Context/Notificaciones/NotifyContext";

export const CardConversation = ({
  nombre_usuario,
  apellido_usuario,
  // foto_usuario,
  conectado,
  id_usuario,
}: UserConnect) => {
  const { seleccionarMandarNotificacion, openModalChatUser } =
    useContext(NotifyContext);

  return (
    <>
      <div className="container-mssg flex relative">
        <div className="avatar-container inline-flex items-center justify-center rounded-xl w-[48px] h-[48px] mr-4">
          <img
            src={ImgUser}
            alt="profilePhoto"
            className="relative w-full rounded-xl shadow-sm"
          />
        </div>
        <div className="message-container flex flex-col justify-center items-start">
          <h6 className="relative text-sm text-[#344767] leading-normal font-semibold">
            {nombre_usuario}
          </h6>
          <p className="text-xs leading-tight font-normal">
            {apellido_usuario}
          </p>
        </div>
      </div>
      <p
        className={`absolute right-0 p-1.5 rounded-full transition-all duration-300 ${
          conectado === "1" ? "bg-green-500" : "bg-slate-500"
        }`}
      />
      <IconNotificaciones
        onClick={() => seleccionarMandarNotificacion(id_usuario)}
        className="absolute right-5 cursor-pointer text-lg"
      />
      <Comment
        onClick={() => openModalChatUser(id_usuario)}
        className="absolute right-12 cursor-pointer text-lg"
      />
    </>
  );
};
