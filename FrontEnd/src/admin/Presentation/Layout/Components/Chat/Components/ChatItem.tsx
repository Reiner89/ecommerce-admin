import { useContext } from "react";
import {
  types,
  UserConnect,
} from "../../../../../Interfaces/Messages/Messages";
import ImageDefault from "../../../../../assets/FotoUsuario.webp";
import { ChatContext } from "../../../../Context";
import { fethConToken } from "../../../../Helper/Fetch";
import { scrollToBottomWithOutAnimated } from "../../../../Helper/useScroll";
import { toast } from "sonner";

export const ChatItem = ({ usuario }: Props) => {
  const { id_usuario, nombre_usuario, apellido_usuario } = usuario;

  const { dispatch, chatState } = useContext(ChatContext);

  const activarChat = async () => {
    console.log("Mandar mensaje a ", id_usuario);

    dispatch({ type: types.chatActivo, payload: id_usuario });

    const res = await fethConToken({ endpoint: `mensajes/${id_usuario}` });
    console.log("ChatItem dice", res);

    if (res?.mensajes) {
      toast.success("Mensajes cargados correctamente");
      dispatch({ type: types.cargarMensajes, payload: res.mensajes });

      setTimeout(() => {
        scrollToBottomWithOutAnimated("historialMensajes");
      }, 1000);
    } else {
      toast.error("Error al cargar los mensajes");
    }
  };

  return (
    <div
      onClick={activarChat}
      className={`relative flex flex-row w-full h-[72px] ${
        chatState.idUser === id_usuario ? "active-chat" : ""
      } border-t border-solid border-[#e9edef] dark:border-[rgba(134,150,160,.15)] transition-all duration-300 cursor-pointer hover:bg-[#e9edef] dark:hover:bg-slate-600`}
    >
      <div className="image-user relative flex items-center px-3 py-0">
        <div className="image-container relative h-12 w-12 ">
          <img
            src={ImageDefault}
            alt="ImagePerfil"
            className="relative block visible w-full h-full overflow-y-hidden overflow-x-hidden rounded-full object-cover object-center"
          />
        </div>
      </div>
      <div className="info-user-container w-full flex flex-col justify-center pr-3.5">
        <div className="relative flex center text-left">
          <span className="relative text-base text-[#111b21] dark:text-[#e9edef] break-words inline-block text-ellipsis overflow-hidden">
            {nombre_usuario} {apellido_usuario}
          </span>
        </div>
      </div>
    </div>
  );
};

interface Props {
  usuario: UserConnect;
}
