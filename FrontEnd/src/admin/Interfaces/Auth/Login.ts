export interface LoginResError {
  ok: boolean;
  message: string;
}

export interface LoginStateInterface {
  checking: boolean;
  logged: boolean;
  id_usuario: null | number;
  dni_usuario: string | null;
  nombre_usuario: string | null;
  apellido_usuario: string | null;
  direccion_uno_usuario: string | null;
  usuario_twitter: string | null;
  usuario_facebook: string | null;
  usuario_instagram: string | null;
  correo_corporativo_usuario: string | null;
  biografia_usuario: string | null;
  foto_usuario: string | null;
  conectado: string | null;
  estado: string | null;
  telefono_usuario: string | null;
  nombre_area: string | null;
  nombre_cargo: string | null;
  departamento_ubigeo: string | null;
  provincia_ubigeo: string | null;
  distrito_ubigeo: string | null;
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginResSucces {
  ok: boolean;
  msg: string;
  user: User;
  token: string;
}

export interface User {
  id_usuario: number;
  dni_usuario: string;
  nombre_usuario: string;
  apellido_usuario: string;
  direccion_uno_usuario: string;
  usuario_twitter: string;
  usuario_facebook: string;
  usuario_instagram: string;
  correo_corporativo_usuario: string;
  biografia_usuario: string;
  foto_usuario: string;
  conectado: string;
  estado: string;
  id_creador_usuario: null;
  telefono_usuario: string;
  nombre_area: string;
  nombre_cargo: string;
  departamento_ubigeo: string;
  provincia_ubigeo: string;
  distrito_ubigeo: string;
}
