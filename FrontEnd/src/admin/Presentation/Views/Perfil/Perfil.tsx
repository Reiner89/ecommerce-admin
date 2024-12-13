import "./Styles/index.css";

import { Layout } from "../../Layout/Layout";
import { FondoHeader, PerfilHeader } from "./Components/Header";
import {
  ConfigPlatform,
  Conversaciones,
  ProfileInformation,
} from "./Components/Informacion";
import { NNotificacion } from "../../Layout/Components/Notificaciones/Components/NNotificacion/NNotificacion";

export const Perfil = () => {
  return (
    <Layout
      areaPadre="Información del Usuario"
      children={
        <div className="perfil-container px-2">
          <div className="header-perfil -mt-2">
            <FondoHeader />
            <PerfilHeader />
          </div>
          <div className="body-perfil py-6 w-full">
            <div className="container-informacion flex flex-col xl:flex-row w-full mt-4 text-[#67748e]">
              <div className="relative flex flex-col sm:flex-row w-full xl:w-2/3">
                <ConfigPlatform />
                <ProfileInformation />
              </div>
              <Conversaciones />
            </div>
          </div>
          <NNotificacion />
        </div>
      }
    />
  );
};
