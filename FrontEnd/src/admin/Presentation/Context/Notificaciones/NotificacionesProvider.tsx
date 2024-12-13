import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  NotificacionState,
  types,
  UserConnect,
} from "../../../Interfaces/Messages/Messages";
import { useOutsideClick } from "../../Helper/useOutSideClick";
import { NotifyContext } from "./NotifyContext";
import { fethConToken } from "../../Helper/Fetch";
import { AuthContext } from "../Auth/AuthContext";
import { toast } from "sonner";
import { sendNotificacion } from "../../Layout/Components/Notificaciones/Components/NNotificacion/NNotificacion";
import { ChatContext } from "../Conversaciones/ChatContext";
import { scrollToBottomWithOutAnimated } from "../../Helper/useScroll";

const initialState = {
  notificaciones: [],
  notificacionActivo: null,
};

const initNotify: sendNotificacion = {
  titNot: "",
  fechaNot: "",
  usuariosNot: [],
  mensajeNot: "",
};

export const NotifyProvider = ({ children }: PropsWithChildren) => {
  // ChatContext
  const { dispatch } = useContext(ChatContext);

  const [notificacion, setNotificacion] = useState(initNotify);
  const [agregarUsuarios, setAgregarUsuarios] = useState(false);

  const refModalChat = useRef<HTMLDivElement>(null);
  const [modalChat, setModalChat] = useState(false);

  const closeModalChat = () => {
    setModalChat(false);
  };

  const openModalChat = () => setModalChat(true);

  const openModalChatUser = async (id: number) => {
    setModalChat(true);

    dispatch({ type: types.chatActivo, payload: id });

    // Cargar los mensajes
    const response = await fethConToken({ endpoint: `mensajes/${id}` });
    console.log("NotificacionesProvider dice:", response);

    if (response?.mensajes) {
      dispatch({ type: types.cargarMensajes, payload: response.mensajes });

      setTimeout(() => {
        scrollToBottomWithOutAnimated("historialMensajes");
      }, 1000);
    } else {
      toast.error("Error al cargar los mensajes");
    }
  };

  useOutsideClick(refModalChat, () => {
    setModalChat(false);
    // Limpio el id activo de mi chat context
    dispatch({ type: types.chatActivo, payload: null });
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setNotificacion((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const seleccionarMandarNotificacion = (newId: number) => {
    setAgregarUsuarios(false);
    setModalNuevaNoti(true);
    setNotificacion((prev) => ({
      ...prev,
      usuariosNot: [newId],
    }));
  };

  const mandarNotificacionMasiva = () => {
    setModalNuevaNoti(true);
    setAgregarUsuarios(true);
  };

  // AuthContext
  const { auth } = useContext(AuthContext);

  // Estado para los usuarios seleccionados
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Manejar cambio en "Seleccionar Todos"
  const handleSelectAll = (userActives: UserConnect[]) => {
    if (selectAll) {
      // Desmarcar todos
      setSelectedUsers([]);
    } else {
      // Seleccionar todos
      const allUsers = userActives.map((user) => user.id_usuario);
      setSelectedUsers(allUsers);
    }
    setSelectAll(!selectAll);
  };

  // Manejar cambio en un checkbox individual
  const handleUserSelect = (userId: number, userActives: UserConnect[]) => {
    setSelectedUsers((prev) => {
      let updatedSelection;

      if (prev.includes(userId)) {
        // Deseleccionar usuario
        updatedSelection = prev.filter((id) => id !== userId);
      } else {
        // Seleccionar usuario
        updatedSelection = [...prev, userId];
      }

      // Actualizar estado de "Seleccionar Todos" dinámicamente
      setSelectAll(updatedSelection.length === userActives.length);

      return updatedSelection;
    });
  };

  const [notifyState, setNotifyState] =
    useState<NotificacionState>(initialState);

  const refNotificaciones = useRef<HTMLDivElement>(null);
  const [modalNotificaciones, setModalNotificaciones] = useState(false);

  const refNuevaNoti = useRef<HTMLDivElement>(null);
  const [modalNuevaNoti, setModalNuevaNoti] = useState(false);

  const refModalClientes = useRef<HTMLDivElement>(null);
  const [modalClientes, setModalClientes] = useState(false);

  const openModalClientes = () => {
    setModalClientes(true);
  };

  const closeModalClientes = () => {
    setModalClientes(false);
    setSelectedUsers([]);
    setSelectAll(false);
  };

  useOutsideClick(refModalClientes, closeModalClientes);

  // Guardar en el form los usuarios
  const handleGuardar = () => {
    setNotificacion((prev) => ({
      ...prev,
      usuariosNot: selectedUsers,
    }));

    closeModalClientes();
  };

  const closeModalNNoti = () => {
    setNotificacion(initNotify);
    setModalNuevaNoti(false);
  };

  useOutsideClick(refNuevaNoti, () => {
    setModalNuevaNoti(false);
    setNotificacion(initNotify);
  });

  const handleShowNoticaciones = () =>
    setModalNotificaciones(!modalNotificaciones);

  useOutsideClick(refNotificaciones, () => setModalNotificaciones(false));

  const getNotificaciones = useCallback(async () => {
    if (auth.id_usuario) {
      const res = await fethConToken({
        endpoint: `notificaciones/${auth.id_usuario}`,
      });

      if (res?.notificaciones) {
        console.log("Notificaciones recibidas:", res.notificaciones);
        setNotifyState((prevState) => ({
          ...prevState,
          notificaciones: res.notificaciones,
        }));
      } else {
        toast.error("Error al cargar notificaciones.");
      }
    }
  }, [auth.id_usuario]);

  useEffect(() => {
    getNotificaciones();
  }, [getNotificaciones]);

  return (
    <NotifyContext.Provider
      value={{
        notifyState,
        getNotificaciones,
        refNotificaciones,
        modalNotificaciones,
        handleShowNoticaciones,
        refNuevaNoti,
        modalNuevaNoti,
        closeModalNNoti,
        refModalClientes,
        modalClientes,
        openModalClientes,
        closeModalClientes,
        selectAll,
        selectedUsers,
        handleSelectAll,
        handleUserSelect,
        seleccionarMandarNotificacion,
        notificacion,
        handleInputChange,
        agregarUsuarios,
        mandarNotificacionMasiva,
        handleGuardar,
        refModalChat,
        modalChat,
        openModalChat,
        closeModalChat,
        openModalChatUser,
      }}
    >
      {children}
    </NotifyContext.Provider>
  );
};
