import { CardConversation } from "./CardConversation";
import { useContext } from "react";
import { AuthContext, ChatContext } from "../../../../Context";
import {
  Comment,
  IconNotificaciones,
} from "../../../../Components/Icons/Iconos";
import { NotifyContext } from "../../../../Context/Notificaciones/NotifyContext";

export const Conversaciones = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  const { mandarNotificacionMasiva, openModalChat } = useContext(NotifyContext);

  // Filtramos el usuario autenticado
  const userActives = chatState.usuarios.filter(
    (user) => user.id_usuario !== auth.id_usuario
  );

  return (
    <div className="container-conversaciones w-full xl:w-1/3 max-w-full px-3 mt-6 xl:mt-0">
      <div className="card relative flex flex-col h-full bg-white rounded-2xl">
        <div className="relative p-4 pb-0 flex justify-between items-center transition-all">
          <h6 className="relative text-base text-[#344767] font-semibold transition-all">
            Conversaciones
          </h6>
          <div className="container-acciones flex text-xl gap-2">
            <IconNotificaciones
              onClick={mandarNotificacionMasiva}
              className="relative cursor-pointer"
            />
            <Comment
              onClick={openModalChat}
              className="relative cursor-pointer"
            />
          </div>
        </div>
        <div className="relative p-4">
          {userActives.length === 0 ? (
            <p className="text-sm text-[#67748e]">
              No hay usuarios disponibles
            </p>
          ) : (
            userActives.map((user) => (
              <div
                key={user.id_usuario}
                className="relative flex justify-between items-center py-2 mb-2"
              >
                <CardConversation {...user} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
