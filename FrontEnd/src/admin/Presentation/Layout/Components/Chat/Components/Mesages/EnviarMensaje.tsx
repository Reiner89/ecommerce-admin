import { useContext, useState } from "react";
import { SocketContext } from "../../../../../Context/Socket/SocketContext";
import { AuthContext, ChatContext } from "../../../../../Context";

export const EnviarMensaje = () => {
  const [message, setMessage] = useState("");

  // Uso el socket de mi context
  const { socket } = useContext(SocketContext);

  // Uso el id del usuario al que le quiero enviar el mensaje de mi contexto
  const { chatState } = useContext(ChatContext);
  const { chatActivo } = chatState;

  // Uso el id del usuario logeado de mi contexto
  const { auth } = useContext(AuthContext);
  const { id_usuario } = auth;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.length === 0) {
      return;
    }

    console.log("Enviar :", message);

    setMessage("");

    // Evento de socket para enviar mensaje
    socket?.emit("mensaje-personal", {
      de: id_usuario,
      para: chatActivo,
      mensaje: message,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full min-h-16 flex items-end pb-1 px-4 bg-[#f0f2f5] order-2 transition-all duration-300"
    >
      <div className="input-container w-full my-1 mx-2 border border-white min-h-5 px-3 py-2 rounded-lg text-sm bg-white transition-all duration-300">
        <input
          className="w-full text-black text-xs font-normal focus:outline-none"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <button className="items-center flex px-3 py-2 bg-indigo-600 rounded-full shadow ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g id="Send 01">
              <path
                id="icon"
                d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </g>
          </svg>
          <h3 className="text-white text-xs font-semibold leading-4 px-2">
            Enviar
          </h3>
        </button>
      </div>
    </form>
  );
};
