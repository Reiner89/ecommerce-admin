import { useContext } from "react";
import { NotifyContext } from "../../../Context/Notificaciones/NotifyContext";
import { ChatContext } from "../../../Context";
import { InboxPeople } from "./Components/InboxPeople";
import { Messages } from "./Components/Mesages/Messages";
import { ChatSelect } from "./Components/ChatSelect";

export const Chat = () => {
  const { refModalChat, modalChat } = useContext(NotifyContext);
  const { chatState } = useContext(ChatContext);

  return (
    <div
      className={`${
        modalChat ? "visible" : "invisible"
      } fixed pointer-events-auto left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-[50] transition-all duration-500`}
    >
      <div
        ref={refModalChat}
        className={`notificaciones-container ${
          modalChat ? "translate-x-[0%]" : "translate-x-[100%]"
        } w-[75%] h-full block absolute top-0 right-0 bottom-0 bg-white dark:bg-[#111b21] transition-all duration-500`}
      >
        <div className="chat-container relative flex w-full h-full">
          <InboxPeople />
          {chatState.chatActivo ? <Messages /> : <ChatSelect />}
        </div>
      </div>
    </div>
  );
};
