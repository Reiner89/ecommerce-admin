import { useContext } from "react";
import { Notificacion } from "../../../../../../../Interfaces/Messages/Messages";
import { SocketContext } from "../../../../../../Context/Socket/SocketContext";

export const ItemNotificacion = ({ data }: Props) => {
  const { socket } = useContext(SocketContext);

  const changeVisto = (newData: Notificacion) => {
    // Si es nuevo
    if (newData.visto_notificacion === "0") {
      console.log("Enviando actualizacion");

      socket?.emit("notificacion-vista", {
        idNotificacion: newData.id_notificacion,
        nuevoEstado: "1",
      });
    }
  };

  return (
    <div
      onClick={() => changeVisto(data)}
      className="relative text-slate-800 flex gap-3 w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer"
    >
      <div className="w-[50px] grid place-items-center">
        <img
          alt="candice"
          src="https://docs.material-tailwind.com/img/face-1.jpg"
          className="relative inline-block h-full w-full !rounded-full  object-cover object-center"
        />
      </div>
      <div className="w-[calc(100%-50px)] overflow-ellipsis whitespace-nowrap overflow-hidden">
        <h6 className="text-slate-800 font-medium">
          {data.titulo_notificacion}
        </h6>
        <p className="text-slate-500 text-sm overflow-ellipsis whitespace-nowrap overflow-hidden">
          {data.mensaje_notificacion}
        </p>
      </div>
      <div
        className={`newNotification absolute top-0 right-0 m-2 px-2 py-1 bg-[#09c] text-white text-xs font-semibold rounded-full ${
          data.visto_notificacion === "0" ? "visible" : "invisible"
        }`}
      >
        New
      </div>
    </div>
  );
};

interface Props {
  data: Notificacion;
}
