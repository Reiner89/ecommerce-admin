import { useContext } from "react";
import { AuthContext, ChatContext } from "../../../../Context";
import { ChatItem } from "./ChatItem";

export const Sidebar = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className="relative ScrollTable overflow-x-hidden overflow-y-auto">
      {chatState.usuarios
        .filter((usuario) => usuario.id_usuario !== auth.id_usuario)
        .map((usuario) => (
          <ChatItem key={usuario.id_usuario} usuario={usuario} />
        ))}
    </div>
  );
};
