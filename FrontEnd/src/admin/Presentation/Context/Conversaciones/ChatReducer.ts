import { ChatAction, ChatState } from "../../../Interfaces/Messages/Messages";

export const chatReducer = (
  state: ChatState,
  action: ChatAction
): ChatState => {
  switch (action.type) {
    case "Usuarios Cargados":
      return { ...state, usuarios: action.payload };

    case "Usuario al que se le quiere mandar el mensaje":
      if (state.chatActivo === action.payload) return state;

      return { ...state, chatActivo: action.payload, mensajes: [] };

    case "Mensajes de un chat":
      if (
        state.chatActivo === action.payload.id_mensaje_para ||
        state.chatActivo === action.payload.id_mensaje_desde
      ) {
        return {
          ...state,
          mensajes: [...state.mensajes, action.payload],
        };
      }
      return state;

    case "Cargar el historial de mensajes":
      return { ...state, mensajes: action.payload };

    case "Resetear los valores cuando el usuario salga":
      return {
        idUser: null,
        chatActivo: null,
        usuarios: [],
        mensajes: [],
      };

    default:
      return state;
  }
};
