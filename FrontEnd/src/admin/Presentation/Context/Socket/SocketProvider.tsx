import { useCallback, useContext, useEffect } from "react";
import { useSocket } from "../../Hooks/useSocket";
import { ChatContext } from "../Conversaciones/ChatContext";
import { AuthContext } from "../Auth/AuthContext";
import { NotifyContext } from "../Notificaciones/NotifyContext";
import {
  Mensaje,
  types,
  UserConnect,
} from "../../../Interfaces/Messages/Messages";
import { scrollToBottomWithAnimated } from "../../Helper/useScroll";
import { fethConToken } from "../../Helper/Fetch";
import { SocketContext } from "./SocketContext";

export const SocketProvider = ({ children }: React.PropsWithChildren) => {
  // UseSocket
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    "http://localhost:3000"
  );

  //  Auth Context
  const { responseToken, auth } = useContext(AuthContext);

  // Context Chat
  const { dispatch } = useContext(ChatContext);

  // Notificaciones context
  const { getNotificaciones } = useContext(NotifyContext);

  // Si se conecta un cliente
  useEffect(() => {
    if (responseToken) {
      conectarSocket();
      console.log("Administrador conectado");
      return;
    }
  }, [responseToken, conectarSocket]);

  // Si se desconecta un cliente
  useEffect(() => {
    if (!responseToken) {
      desconectarSocket();
      console.log("Administrador desconectado");
      return;
    }

    return () => {
      desconectarSocket();
    };
  }, [responseToken, desconectarSocket]);

  // Escuchamos los usuarios conectados que emite el socket
  useEffect(() => {
    socket?.on("usuarios-conectados", (users: UserConnect[]) => {
      console.log("Usuarios conectados:", users);

      dispatch({ type: types.usuariosCargados, payload: users });
    });

    return () => {
      socket?.off("usuarios-conectados");
    };
  }, [socket, dispatch]);

  // Escuchamos los mensajes personales
  useEffect(() => {
    socket?.on("mensaje-personal", (message: Mensaje) => {
      console.log("Mensaje personal:", message);

      dispatch({ type: types.mensajesChatActivo, payload: message });

      // Scroll animated
      setTimeout(() => scrollToBottomWithAnimated("historialMensajes"));
    });

    return () => {
      socket?.off("mensaje-personal");
    };
  }, [socket, dispatch]);

  const handleGetNotificaciones = useCallback(async () => {
    if (auth.id_usuario) {
      const res = await fethConToken({
        endpoint: `notificaciones/${auth.id_usuario}`,
      });

      console.log("Notificaciones desde SocketContext:", res);

      getNotificaciones(res.notificaciones);
    }
  }, [auth, getNotificaciones]);

  // Escuchamos las notificaciones leidas
  useEffect(() => {
    socket?.on("notificacion-cambiada", () => {
      console.log("Notificacion leida");

      handleGetNotificaciones();
    });

    return () => {
      socket?.off("notificacion-cambiada");
    };
  }, [socket, handleGetNotificaciones]);

  // Escuchamos las notificaciones enviadas
  useEffect(() => {
    socket?.on("nueva-notificacion", () => {
      console.log("Notificacion enviada");

      handleGetNotificaciones();
    });

    return () => {
      socket?.off("nueva-notificacion");
    };
  }, [socket, handleGetNotificaciones]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        online,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
