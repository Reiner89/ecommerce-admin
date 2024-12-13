import { Layout } from "../../../Layout/Layout";
import { shadowContainer } from "../Styles/UsuariosEstilos";
import { NuevoUsuario } from "./Components/Form/NuevoUsuario";

export const Usuarios = () => {
  return (
    <Layout
      areaPadre="Administración"
      areaPagina="Nuevo Usuario"
      children={
        <div
          className={`relative flex flex-col w-full max-w-full bg-white ${shadowContainer} rounded-2xl transition-all`}
        >
          <NuevoUsuario />
        </div>
      }
    />
  );
};
