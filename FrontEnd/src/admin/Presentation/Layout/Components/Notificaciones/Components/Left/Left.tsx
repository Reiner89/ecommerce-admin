import { useContext } from "react";
import * as Icon from "../../../../../Components/Icons/Iconos";
import { NotifyContext } from "../../../../../Context/Notificaciones/NotifyContext";
import { LNotificaciones } from "../LNotificaciones/LNotificaciones";

export const Left = () => {
  const { handleShowNoticaciones } = useContext(NotifyContext);

  return (
    <div className="relative w-full">
      <div className="cont-titulo flex justify-between items-center px-3 py-5 w-full border-b border-gray-200">
        <div className="left flex items-center gap-3">
          <div className="relative text-2xl text-[#09c] cursor-pointer">
            <Icon.IconNotificaciones />
          </div>
          <h1 className="text-xl text-[#344767] font-semibold">
            Mis Notificaciones
          </h1>
        </div>
        <Icon.Close
          onClick={handleShowNoticaciones}
          className="relative text-2xl cursor-pointer"
        />
      </div>
      <LNotificaciones />
    </div>
  );
};
