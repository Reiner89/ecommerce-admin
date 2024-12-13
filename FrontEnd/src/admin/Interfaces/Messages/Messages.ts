export interface Mensaje {
  id_mensaje_usuario: number;
  id_mensaje_para: number;
  id_mensaje_desde: number;
  mensaje_usuario: string;
  mensaje_fecha: Date;
}

export interface Notificacion {
  fecha_creado: Date;
  fecha_vigencia_notificacion: Date;
  id_notificacion: number;
  id_usuario_emisor_notificacion: number;
  id_usuario_receptor_notificacion: number;
  mensaje_notificacion: string;
  titulo_notificacion: string;
  visto_notificacion: string;
}

export interface UserConnect {
  id_usuario: number;
  nombre_usuario: string;
  apellido_usuario: string;
  foto_usuario: string;
  conectado: string;
}

export type ChatAction =
  | { type: "Usuarios Cargados"; payload: UserConnect[] }
  | {
      type: "Usuario al que se le quiere mandar el mensaje";
      payload: number | null;
    }
  | { type: "Mensajes de un chat"; payload: Mensaje }
  | { type: "Cargar el historial de mensajes"; payload: Mensaje[] }
  | { type: "Resetear los valores cuando el usuario salga" };

export const types = {
  usuariosCargados: "Usuarios Cargados" as const,
  chatActivo: "Usuario al que se le quiere mandar el mensaje" as const,
  mensajesChatActivo: "Mensajes de un chat" as const,
  cargarMensajes: "Cargar el historial de mensajes" as const,
  resetValues: "Resetear los valores cuando el usuario salga" as const,
};

export type ChatState = {
  idUser: number | null; // id del usuario logeado
  chatActivo: number | null; // id del usuario al que se le quiere mandar el mensaje
  usuarios: UserConnect[]; // todos los usuarios
  mensajes: Mensaje[]; // todos los mensajes
};

export type NotificacionState = {
  notificaciones: Notificacion[];
  notificacionActivo: number | null;
};
