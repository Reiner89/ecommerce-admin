import { useContext } from "react";
import { NotifyContext } from "../../../../../Context/Notificaciones/NotifyContext";
import { AuthContext, ChatContext } from "../../../../../Context";
import { buttonSubmit } from "../../../../../Styles/Actions";
import imgPred from "../../../../../../assets/FotoUsuario.webp";
import { Close } from "../../../../../Components/Icons/Iconos";

export const Clientes = () => {
  const {
    modalClientes,
    refModalClientes,
    closeModalClientes,
    selectedUsers,
    handleUserSelect,
    selectAll,
    handleSelectAll,
    handleGuardar,
  } = useContext(NotifyContext);

  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  // Filtramos el usuario autenticado
  const userActives = chatState.usuarios.filter(
    (user) => user.id_usuario !== auth.id_usuario
  );

  return (
    <div
      className={`side-panel-container ${
        modalClientes ? "visible" : "invisible"
      } fixed pointer-events-auto left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-[99999999] flex justify-center items-center transition-all duration-500`}
    >
      <div
        ref={refModalClientes}
        className={`side-panel-cont-container ${
          modalClientes ? "translate-y-[00%]" : "translate-y-[200%]"
        } w-[750px] block absolute transition-transform duration-500`}
      >
        <div className="side-panel-content-container p-4 ">
          <div className="side-panel-iframe h-full   ">
            <div className="side-panel bg-white  h-full w-auto m-0 rounded-md  ">
              <div className="side-cont-titulo mb-4 text-[25px] px-5 py-2 rounded-t-md  bg-[#09c] w-full font-semibold text-white">
                <div className="side-titulo flex w-full items-center justify-between">
                  <h1 className="text-xl text-white font-semibold">
                    Seleccionar clientes
                  </h1>
                  <Close
                    onClick={closeModalClientes}
                    className="relative text-2xl text-white cursor-pointer"
                  />
                </div>
              </div>
              <div className="section-crm pb-4 px-6 ">
                <div className="mb-4 flex items-center justify-between">
                  <div className="cont-txt text-slate-800 text-xl font-light relative">
                    <input
                      className="text-sm text-slate-800 h-7 rounded-lg border items-center bg-white focus:bg-gray-50 outline-none px-2   w-[250%] "
                      type="text"
                      placeholder="Buscar Datos"
                    />
                  </div>
                  <div className="mr-[24px]">
                    <input
                      type="checkbox"
                      id="seleccionar-todos-usuarios"
                      className="mr-2 ms-2"
                      checked={selectAll}
                      onChange={() => handleSelectAll(userActives)}
                    />
                    <label
                      htmlFor="seleccionar-todos-usuarios"
                      className="text-black "
                    >
                      Seleccionar Todos
                    </label>
                  </div>
                </div>
                <form className="grid grid-cols-[1fr,1fr,1fr] justify-between gap-5 ScrollTable overflow-y-auto max-h-72 ">
                  {userActives.map((cliente) => (
                    <div
                      key={cliente.id_usuario}
                      className="mb-3 flex items-center"
                    >
                      <img
                        src={imgPred}
                        alt={cliente.nombre_usuario}
                        className="mr-2 rounded-full w-8 h-8"
                      />
                      <input
                        type="checkbox"
                        id={`cliente_checkbox_${cliente.id_usuario}`}
                        className="mr-2"
                        checked={selectedUsers.includes(cliente.id_usuario)}
                        onChange={() =>
                          handleUserSelect(cliente.id_usuario, userActives)
                        }
                      />
                      <label
                        htmlFor={`cliente_checkbox_${cliente.id_usuario}`}
                        className="text-black"
                      >
                        {cliente.nombre_usuario} {cliente.apellido_usuario}
                      </label>
                    </div>
                  ))}
                </form>

                <div className="flex items-center justify-end mt-6">
                  <button
                    onClick={handleGuardar}
                    type="button"
                    className={buttonSubmit}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
