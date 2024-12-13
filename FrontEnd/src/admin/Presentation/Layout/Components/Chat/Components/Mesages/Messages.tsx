import { useContext } from "react";
import { AuthContext, ChatContext } from "../../../../../Context";
import { MessageRecibido } from "./Components/MessageRecibido";
import { MessageEnviado } from "./Components/MessageEnviado";
import { EnviarMensaje } from "./EnviarMensaje";

export const Messages = () => {
  // Extraigo el arreglo de mensajes de mi contexto
  const { chatState } = useContext(ChatContext);
  const { mensajes } = chatState;
  // console.log(mensajes);

  // Extraigo el id id del usuario de mi contexto
  const { auth } = useContext(AuthContext);
  const { id_usuario } = auth;

  return (
    <div className="relative h-full flex flex-col overflow-y-visible overflow-x-hidden transition-all duration-300 lg:flex-[0_0_55%] lg:max-w-[55%] xl:flex-[0_0_70%] xl:max-w-[70%] border-l border-[#d1d7db] dark:border-[rgba(134,150,160,.15)] bg-[#f7f8fa] dark:bg-[#101a20]">
      <div
        id="historialMensajes"
        className="relative w-full flex-[1_1_0px] order-1 transition-all duration-300"
      >
        {mensajes?.map((msg) =>
          msg.id_mensaje_para === id_usuario ? (
            <MessageRecibido
              txt={msg.mensaje_usuario}
              date={msg.mensaje_fecha}
              key={msg.id_mensaje_usuario}
            />
          ) : (
            <MessageEnviado
              date={msg.mensaje_fecha}
              txt={msg.mensaje_usuario}
              key={msg.id_mensaje_usuario}
            />
          )
        )}
      </div>
      <EnviarMensaje />
    </div>
  );
};
