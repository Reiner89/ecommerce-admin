import { Aside, Configuracion, Encabezado } from "./Components";
import { Chat } from "./Components/Chat/Chat";
import { Notificaciones } from "./Components/Notificaciones/Notificaciones";

interface Props {
  children: React.ReactNode;
  areaPadre: string;
  areaPagina?: string;
}

export const Layout = ({ children, areaPadre, areaPagina }: Props) => {
  return (
    <div className="relative xl:pl-[17.125rem] md:pt-6 md:pb-6 w-full bg-[rgb(240,242,245)] dark:bg-[rgb(26,32,53)] transition-all">
      <div className="absolute left-0 top-0 w-full h-[100vh] bg-[rgb(240,242,245)] dark:bg-[rgb(26,32,53)] transition-all" />
      <Aside />
      <Encabezado areaPadre={areaPadre} areaPagina={areaPagina} />
      <div className="relative">
        <Configuracion />
        <Notificaciones />
        <Chat />
        <div className="relative w-full py-4 px-4 mx-auto">{children}</div>
      </div>
    </div>
  );
};
