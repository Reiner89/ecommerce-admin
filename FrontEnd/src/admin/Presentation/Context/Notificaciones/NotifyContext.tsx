import { createContext } from "react";
import {
  Notificacion,
  NotificacionState,
  UserConnect,
} from "../../../Interfaces/Messages/Messages";
import { sendNotificacion } from "../../Layout/Components/Notificaciones/Components/NNotificacion/NNotificacion";

interface NotifyProps {
  notifyState: NotificacionState;
  getNotificaciones: (data: Notificacion[]) => void;
  refNotificaciones: React.RefObject<HTMLDivElement>;
  modalNotificaciones: boolean;
  handleShowNoticaciones: () => void;
  refNuevaNoti: React.RefObject<HTMLDivElement>;
  modalNuevaNoti: boolean;
  closeModalNNoti: () => void;
  refModalClientes: React.RefObject<HTMLDivElement>;
  modalClientes: boolean;
  openModalClientes: () => void;
  closeModalClientes: () => void;
  selectAll: boolean;
  selectedUsers: number[];
  handleSelectAll: (userActives: UserConnect[]) => void;
  handleUserSelect: (userId: number, userActives: UserConnect[]) => void;
  notificacion: sendNotificacion;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  seleccionarMandarNotificacion: (newId: number) => void;
  agregarUsuarios: boolean;
  mandarNotificacionMasiva: () => void;
  handleGuardar: () => void;
  refModalChat: React.RefObject<HTMLDivElement>;
  modalChat: boolean;
  openModalChat: () => void;
  openModalChatUser: (id: number) => void;
  closeModalChat: () => void;
}

export const NotifyContext = createContext<NotifyProps>({} as NotifyProps);
