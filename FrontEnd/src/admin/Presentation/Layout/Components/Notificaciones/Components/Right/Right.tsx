import { useContext } from "react";
import * as Icon from "../../../../../Components/Icons/Iconos";
import { NotifyContext } from "../../../../../Context/Notificaciones/NotifyContext";

export const Right = () => {
  const { handleShowNoticaciones } = useContext(NotifyContext);

  return (
    <div className="w-[55%] bg-white rounded-t-[10px] overflow-hidden">
      <div className="left-top flex justify-between px-3 py-6 border border-b transition-all duration-300">
        <div className="relative flex items-center gap-3">
          <Icon.IconNotificaciones className="relative text-2xl text-[#09c]" />
          <h1 className="text-xl text-[#344767] font-semibold">
            Notificaciones
          </h1>
        </div>
        <Icon.Close
          onClick={handleShowNoticaciones}
          className="relative text-2xl text-[#09c] cursor-pointer"
        />
      </div>
    </div>
  );
};
