import { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = (serverPath: string) => {
  // Estado del socket
  const [socket, setSocket] = useState<Socket | null>(null);

  // Estado del cliente
  const [online, setOnline] = useState<boolean>(false);

  // Conectar socket
  const conectarSocket = useCallback(() => {
    // Token storage
    const token = localStorage.getItem("token");

    const socketTemporal = io(serverPath, {
      transports: ["websocket"],
      autoConnect: true,
      forceNew: true,
      // Envio el token a traves del socket
      query: {
        "token-storage": token,
      },
    });

    setSocket(socketTemporal);
  }, [serverPath]);

  // Desconectar Socket
  const desconectarSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    setOnline(socket?.connected ?? false);
  }, [socket]);

  useEffect(() => {
    socket?.on("connect", () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket?.on("disconnect", () => setOnline(false));
  }, [socket]);

  return {
    socket,
    online,
    conectarSocket,
    desconectarSocket,
  };
};
