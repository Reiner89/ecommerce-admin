import { createContext, PropsWithChildren, useReducer } from "react";
import { ChatAction, ChatState } from "../../../Interfaces/Messages/Messages";
import { chatReducer } from "./ChatReducer";

interface ChatProps {
  chatState: ChatState;
  dispatch: React.Dispatch<ChatAction>;
}

const initialState: ChatState = {
  idUser: null,
  chatActivo: null,
  usuarios: [],
  mensajes: [],
};

export const ChatContext = createContext<ChatProps>({} as ChatProps);

export const ChatProvider = ({ children }: PropsWithChildren) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ chatState, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
