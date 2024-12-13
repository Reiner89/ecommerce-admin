import { createContext } from "react";
import { Socket } from "socket.io-client";

interface SocketProps {
  socket: Socket | null;
  online: boolean;
}

export const SocketContext = createContext<SocketProps>({} as SocketProps);
