import { useContext } from "react";
import { ItemNotificacion } from "./Components/ItemNotificacion";
import { NotifyContext } from "../../../../../Context/Notificaciones/NotifyContext";

export const LNotificaciones = () => {
  const { notifyState } = useContext(NotifyContext);

  return (
    <div className="ScrollTable w-full h-full overflow-y-auto p-1.5 transition-all duration-500">
      {notifyState.notificaciones?.map((notification) => (
        <ItemNotificacion
          key={notification.id_notificacion}
          data={notification}
        />
      ))}
    </div>
  );
};
