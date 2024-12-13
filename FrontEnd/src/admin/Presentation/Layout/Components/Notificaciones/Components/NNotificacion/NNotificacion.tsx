import { useContext } from "react";
import { AgregarUsuarios, Close } from "../../../../../Components/Icons/Iconos";
import { NotifyContext } from "../../../../../Context/Notificaciones/NotifyContext";
import {
  buttonSubmit,
  inputL,
  inputTextAreaL,
  labelL,
  labelTextAreaL,
} from "../../../../../Styles/Actions";
import { Clientes } from "../Clientes/Clientes";
import { AuthContext, ChatContext } from "../../../../../Context";
import moment from "moment";
import { toast } from "sonner";
import { SocketContext } from "../../../../../Context/Socket/SocketContext";

export interface sendNotificacion {
  titNot: string;
  fechaNot: string;
  usuariosNot: number[];
  mensajeNot: string;
}

export const NNotificacion = () => {
  const {
    refNuevaNoti,
    modalNuevaNoti,
    closeModalNNoti,
    openModalClientes,
    // selectedUsers,
    notificacion,
    handleInputChange,
    agregarUsuarios,
  } = useContext(NotifyContext);

  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);

  // Filtramos el usuario autenticado
  const userActives = chatState.usuarios.filter(
    (user) => user.id_usuario !== auth.id_usuario
  );

  const handleSubmitNotificacion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(notificacion);

    // No permitimos vacios
    if (
      notificacion.titNot === "" ||
      notificacion.mensajeNot === "" ||
      notificacion.usuariosNot.length === 0 ||
      notificacion.fechaNot === ""
    ) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    socket?.emit("notificacion-multiple", {
      de: auth.id_usuario,
      destinatarios: notificacion.usuariosNot,
      titulo: notificacion.titNot,
      mensaje: notificacion.mensajeNot,
      fecha_vigencia: notificacion.fechaNot,
    });

    toast.success("Notificacion enviada con exito");

    closeModalNNoti();
  };

  return (
    <div
      className={`side-panel-container ${
        modalNuevaNoti ? "visible" : "invisible"
      } fixed pointer-events-auto left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-40 flex justify-center items-center transition-all duration-500`}
    >
      <div
        ref={refNuevaNoti}
        className={`side-panel-cont-container ${
          modalNuevaNoti ? "translate-y-[0%]" : "translate-y-[600%]"
        } w-[520px] block absolute transition-transform duration-500`}
      >
        <div className="side-panel bg-white w-full h-full rounded-md flex flex-col gap-5">
          <div className="side-cont-titulo rounded-t-md bg-[#09c] w-full flex justify-between items-center font-semibold text-white px-6 py-2.5">
            <h1 className="text-xl text-white font-semibold">
              Crear Notificacion
            </h1>
            <Close
              onClick={closeModalNNoti}
              className="relative text-2xl cursor-pointer"
            />
          </div>
          <div className="section-crm px-6 py-3">
            <form
              onSubmit={handleSubmitNotificacion}
              className="flex flex-col gap-5"
            >
              <div className="flex gap-5">
                <div className="relative w-full">
                  <input
                    type="text"
                    id="titNot"
                    name="titNot"
                    className={inputL}
                    value={notificacion.titNot}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="titNot" className={labelL}>
                    Título de Notificación
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type="date"
                    id="fechaNot"
                    name="fechaNot"
                    className={inputL}
                    value={notificacion.fechaNot}
                    onChange={handleInputChange}
                    min={moment().format("YYYY-MM-DD")}
                  />
                  <label htmlFor="fechaNot" className={labelL}>
                    Fecha Vigente
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-end relative text-2xl text-[#09c]">
                  <AgregarUsuarios
                    onClick={openModalClientes}
                    className={`cursor-pointer ${
                      agregarUsuarios ? "block" : "hidden"
                    }`}
                  />
                </div>
                <div className="relative w-full">
                  <input
                    readOnly
                    type="text"
                    id="usuariosNot"
                    name="usuariosNot"
                    className={inputTextAreaL}
                    value={userActives
                      .filter((user) =>
                        notificacion.usuariosNot.includes(user.id_usuario)
                      )
                      .map((user) => user.nombre_usuario)
                      .join(", ")}
                  />
                  <label htmlFor="usuariosNot" className={labelTextAreaL}>
                    Usuarios
                  </label>
                </div>
              </div>
              <div className="relative w-full">
                <textarea
                  id="mensajeNot"
                  name="mensajeNot"
                  className={inputTextAreaL}
                  value={notificacion.mensajeNot}
                  onChange={handleInputChange}
                />
                <label htmlFor="mensajeNot" className={labelTextAreaL}>
                  Mensaje
                </label>
              </div>
              <div className="flex items-center justify-end space-x-4 mt-1">
                <button type="submit" className={buttonSubmit}>
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
        <Clientes />
      </div>
    </div>
  );
};
