import { useContext } from "react";
import { Left } from "./Components/Left/Left";
import { NotifyContext } from "../../../Context/Notificaciones/NotifyContext";
import { Toaster } from "sonner";

export const Notificaciones = () => {
  const { refNotificaciones, modalNotificaciones } = useContext(NotifyContext);

  return (
    <>
      <Toaster richColors position="bottom-right" />
      <div
        className={`${
          modalNotificaciones ? "visible" : "invisible"
        } fixed pointer-events-auto left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-[50] transition-all duration-500`}
      >
        <div
          ref={refNotificaciones}
          className={`notificaciones-container ${
            modalNotificaciones ? "translate-x-[0%]" : "translate-x-[100%]"
          } w-[30%] h-full block absolute top-0 right-0 bottom-0 bg-white transition-all duration-500`}
        >
          <div className="card-container h-full w-full">
            <div className="flex w-full h-full flex-row gap-5">
              <Left />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
