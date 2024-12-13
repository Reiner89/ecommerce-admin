import { createContext, PropsWithChildren, useCallback, useState } from "react";
import { fechSinToken, fethConToken } from "../../Helper/Fetch";
import { toast } from "sonner";
import {
  Login,
  LoginResSucces,
  LoginStateInterface,
} from "../../../Interfaces/Auth/Login";

// Crear el context
export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

// Crear el provider
export const AuthProvider = ({ children }: PropsWithChildren) => {
  // Estado del login
  const [auth, setAuth] = useState<LoginStateInterface>({
    id_usuario: null,
    checking: true,
    logged: false,
    dni_usuario: null,
    foto_usuario: null,
    nombre_usuario: null,
    apellido_usuario: null,
    direccion_uno_usuario: null,
    departamento_ubigeo: null,
    provincia_ubigeo: null,
    distrito_ubigeo: null,
    usuario_twitter: null,
    usuario_facebook: null,
    usuario_instagram: null,
    correo_corporativo_usuario: null,
    biografia_usuario: null,
    conectado: null,
    estado: null,
    telefono_usuario: null,
    nombre_cargo: null,
    nombre_area: null,
  });

  // Estado del token
  const [responseToken, setResponseToken] = useState<boolean>(false);

  // Login
  const LoginRequest = async (data: Login) => {
    // Hacemos la peticion
    const res = await fechSinToken({
      endpoint: "auth/login",
      method: "POST",
      data,
    });

    // Si la respuesta es null
    if (res === null) {
      // Seteamos el response token
      setResponseToken(false);

      // Error de conexion
      toast.warning("Comuníquese con el administrador");

      return false;
    } else if (!res.ok) {
      // Seteamos el response token
      setResponseToken(false);

      // Error credenciales
      toast.error("Credenciales Incorrectas");

      return res;
    } else {
      // Guardamos el token en el localStorage
      localStorage.setItem("token", res.token);

      // Seteamos los datos del Auth
      setAuth({
        id_usuario: res.user.id_usuario,
        checking: false,
        logged: true,
        dni_usuario: res.user.dni_usuario,
        foto_usuario: res.user.foto_usuario,
        nombre_usuario: res.user.nombre_usuario,
        correo_corporativo_usuario: res.user.correo_corporativo_usuario,
        apellido_usuario: res.user.apellido_usuario,
        direccion_uno_usuario: res.user.direccion_uno_usuario,
        departamento_ubigeo: res.user.departamento_ubigeo,
        provincia_ubigeo: res.user.provincia_ubigeo,
        distrito_ubigeo: res.user.distrito_ubigeo,
        usuario_twitter: res.user.usuario_twitter,
        usuario_facebook: res.user.usuario_facebook,
        usuario_instagram: res.user.usuario_instagram,
        biografia_usuario: res.user.biografia_usuario,
        conectado: res.user.conectado,
        estado: res.user.estado,
        telefono_usuario: res.user.telefono_usuario,
        nombre_cargo: res.user.nombre_cargo,
        nombre_area: res.user.nombre_area,
      });

      // Seteamos el response token
      setResponseToken(true);
      return res;
    }
  };

  // Log out
  const LogoutRequest = () => {
    // Removemos el token del storage
    localStorage.removeItem("token");

    // Limpio los valores del auth
    setAuth({
      id_usuario: null,
      checking: false,
      logged: false,
      nombre_usuario: null,
      apellido_usuario: null,
      departamento_ubigeo: null,
      provincia_ubigeo: null,
      distrito_ubigeo: null,
      usuario_twitter: null,
      usuario_facebook: null,
      usuario_instagram: null,
      correo_corporativo_usuario: null,
      biografia_usuario: null,
      conectado: null,
      estado: null,
      telefono_usuario: null,
      nombre_cargo: null,
      nombre_area: null,
      direccion_uno_usuario: null,
      foto_usuario: null,
      dni_usuario: null,
    });

    // Seteo el responde token
    setResponseToken(false);
  };

  // Verificar token
  const verifyTokenRequest = useCallback(async () => {
    // Verificamos token en el storage
    const token = localStorage.getItem("token");

    // Si no hay token
    if (!token) {
      // Seteamos el auth
      setAuth({
        id_usuario: null,
        checking: false,
        logged: false,
        nombre_usuario: null,
        apellido_usuario: null,
        departamento_ubigeo: null,
        provincia_ubigeo: null,
        distrito_ubigeo: null,
        usuario_twitter: null,
        usuario_facebook: null,
        usuario_instagram: null,
        correo_corporativo_usuario: null,
        biografia_usuario: null,
        conectado: null,
        estado: null,
        telefono_usuario: null,
        nombre_cargo: null,
        nombre_area: null,
        direccion_uno_usuario: null,
        foto_usuario: null,
        dni_usuario: null,
      });

      // Seteamos el response token
      return setResponseToken(false);
    }

    // Si hay token hacemos la peticion
    const res = await fethConToken({ endpoint: "auth/refresh" });

    // Si res es null
    if (res === null) {
      // Seteamos el auth
      setAuth({
        id_usuario: null,
        checking: false,
        logged: false,
        nombre_usuario: null,
        apellido_usuario: null,
        departamento_ubigeo: null,
        provincia_ubigeo: null,
        distrito_ubigeo: null,
        usuario_twitter: null,
        usuario_facebook: null,
        usuario_instagram: null,
        correo_corporativo_usuario: null,
        biografia_usuario: null,
        conectado: null,
        estado: null,
        telefono_usuario: null,
        nombre_cargo: null,
        nombre_area: null,
        direccion_uno_usuario: null,
        foto_usuario: null,
        dni_usuario: null,
      });

      // Seteamos el response token
      return setResponseToken(false);
    }
    // ok en true
    else if (res.ok) {
      // Guardamos el nuevo token
      localStorage.setItem("token", res.token);

      // Seteamos el auth
      setAuth({
        id_usuario: res.user.id_usuario,
        checking: false,
        logged: true,
        nombre_usuario: res.user.nombre_usuario,
        correo_corporativo_usuario: res.user.correo_corporativo_usuario,
        apellido_usuario: res.user.apellido_usuario,
        departamento_ubigeo: res.user.departamento_ubigeo,
        provincia_ubigeo: res.user.provincia_ubigeo,
        distrito_ubigeo: res.user.distrito_ubigeo,
        usuario_twitter: res.user.usuario_twitter,
        usuario_facebook: res.user.usuario_facebook,
        usuario_instagram: res.user.usuario_instagram,
        biografia_usuario: res.user.biografia_usuario,
        conectado: res.user.conectado,
        estado: res.user.estado,
        telefono_usuario: res.user.telefono_usuario,
        nombre_cargo: res.user.nombre_cargo,
        nombre_area: res.user.nombre_area,
        direccion_uno_usuario: res.user.direccion_uno_usuario,
        dni_usuario: res.user.dni_usuario,
        foto_usuario: res.user.foto_usuario,
      });

      // Botamos el response token
      return setResponseToken(true);
    }
    // Seteamos el auth
    setAuth({
      id_usuario: null,
      checking: false,
      logged: false,
      nombre_usuario: null,
      apellido_usuario: null,
      departamento_ubigeo: null,
      provincia_ubigeo: null,
      distrito_ubigeo: null,
      usuario_twitter: null,
      usuario_facebook: null,
      usuario_instagram: null,
      correo_corporativo_usuario: null,
      biografia_usuario: null,
      conectado: null,
      estado: null,
      telefono_usuario: null,
      nombre_cargo: null,
      nombre_area: null,
      direccion_uno_usuario: null,
      foto_usuario: null,
      dni_usuario: null,
    });

    // Botamos el response token
    return setResponseToken(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        responseToken,
        LoginRequest,
        LogoutRequest,
        verifyTokenRequest,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Interfaz del context
interface AuthContextProps {
  auth: LoginStateInterface;
  responseToken: boolean;
  LoginRequest: (data: Login) => Promise<LoginResSucces>;
  LogoutRequest: () => void;
  verifyTokenRequest: () => Promise<void>;
}
