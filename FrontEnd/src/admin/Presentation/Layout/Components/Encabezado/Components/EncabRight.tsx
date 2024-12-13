import * as icon from "../../../../Components/Icons/Iconos";
import { useConfig } from "../../../../Hooks/useConfig";
import { ViewProfile } from "./ViewProfile";
import { NotifyContext } from "../../../../Context/Notificaciones/NotifyContext";
import { useContext } from "react";

export const EncabRight = () => {
  // UseConfig
  const { handleAsideShow } = useConfig();

  // NotifyContext
  const { handleShowNoticaciones, notifyState } = useContext(NotifyContext);

  const unredNoti = notifyState.notificaciones.filter(
    (noti) => noti.visto_notificacion === "0"
  ).length;

  return (
    <div className="flex items-center justify-between xl:w-max">
      <div className="flex text-xl text-[rgb(123,128,154)] dark:text-[rgba(255,255,255,0.6)]">
        <div className="relative flex justify-center items-center gap-4 px-1.5 pl-4 py-1.5">
          <div className="notification-container relative">
            <icon.IconNotificaciones
              onClick={handleShowNoticaciones}
              className="cursor-pointer"
            />
            {unredNoti > 0 && (
              <div className="alert text-xs absolute right-0 -top-2 bg-red-500 text-white h-4 w-4 rounded-full flex justify-center items-center transition-all duration-500 cursor-pointer">
                {unredNoti}
              </div>
            )}
          </div>
          <ViewProfile />
        </div>
        <div
          className="px-1.5 py-1.5 block xl:hidden"
          onClick={handleAsideShow}
        >
          <icon.IconMenu />
        </div>
      </div>
    </div>
  );
};
