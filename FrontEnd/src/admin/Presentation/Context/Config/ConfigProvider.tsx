import {
  createContext,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  bgLabelAside,
  bgAsideTransparent,
  bgItemAside,
} from "../../Data/bgAside";
import { useOutsideClick } from "../../Helper/useOutSideClick";

export interface PropsContext {
  tema: string;
  changeTheme: () => void;
  asideShow: boolean;
  handleAsideShow: () => void;
  configModalShow: boolean;
  handleShowConfiguration: () => void;
  isNavbarFixed: boolean;
  handleNavbarFixed: () => void;
  scroll: boolean;
  backgroundAside: string;
  changeBackgroundAside: (bgAside: string) => void;
  bgRouteActive: bgItemAside;
  changebgRouteActive: (newBgAside: bgItemAside) => void;
  openDropdown: string | null;
  handleDropdownToggle: (menuName: string) => void;
  menuRef: React.RefObject<HTMLDivElement>;
  showMenu: boolean;
  handleMenu: () => void;
}

export const ConfigContext = createContext<PropsContext | null>(null);

export const ConfigProvider = ({ children }: PropsWithChildren) => {
  // Menu debajo de foto de perfil
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useOutsideClick(menuRef, () => setShowMenu(false));

  // Mostrar/ocultar aside
  const [asideShow, setAsideShow] = useState(false);

  // Mostrar/ocultar modal de configuracion
  const [configModalShow, setConfigModalShow] = useState(false);

  // Poscicion sticky/static del navbar
  const [isNavbarFixed, setIsNavbarFixed] = useState(true);

  // Scroll
  const [scroll, setScroll] = useState(false);

  // Estado del tema
  const [tema, setTema] = useState("light");

  // Background del aside
  const [backgroundAside, setBackgroundAside] =
    useState<string>(bgAsideTransparent);

  // Background del index activo en el aside
  const [bgRouteActive, setBgRouteActive] = useState(bgLabelAside[2]);

  // Open Dropdown
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Abrir/cerrar dropwdown
  const handleDropdownToggle = (menuName: string) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
    // Guardamos el menuName
    localStorage.setItem("dropdownMenu", menuName);
  };

  // Aplicamos el tema del usuario
  useEffect(() => {
    if (tema === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [tema]);

  // Funcion para cambiar de tema
  const changeTheme = () => {
    // cambiar de light a dark y viceversa
    const nuevoTema = tema === "light" ? "dark" : "light";

    // Cambio el tema
    setTema(nuevoTema);

    // Guardo en el storage
    localStorage.setItem("tema", nuevoTema);
  };

  // Funcion para cambiar el background del aside
  const changeBackgroundAside = (bgAside: string) => {
    setBackgroundAside(bgAside);
  };

  // Funcion para cambiar el bg de la ruta del aside
  const changebgRouteActive = (newBgAside: bgItemAside) => {
    setBgRouteActive(newBgAside);
  };

  // Funcion mostrar/ocultar aside
  const handleAsideShow = () => setAsideShow(!asideShow);

  // Funcion mostrar/ocultar modal de configuracion
  const handleShowConfiguration = () => {
    setConfigModalShow(!configModalShow);
    handleMenu();
  };

  // Funcion para cambiar position del navbar
  const handleNavbarFixed = () => setIsNavbarFixed(!isNavbarFixed);

  // Funcion del scroll
  const handleScroll = () => {
    const scrollDown = window.scrollY > 0;
    setScroll(scrollDown);
  };

  // Aplicar Scroll
  useEffect(() => {
    // Evento del scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiamos el evento
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cargamos las configuraciones del local storage
  useEffect(() => {
    // Obtenemos el tema
    const savedTema = localStorage.getItem("tema");

    // Obtenemos el dropdown
    const savedDropdown = localStorage.getItem("dropdownMenu");

    // Si existe el tema guardado
    if (savedTema) {
      // Seteamos el tema
      setTema(savedTema);
    }

    // Si existe el dropdownmenu
    if (savedDropdown) {
      // Seteamos el dropdown
      setOpenDropdown(savedDropdown);
    }
  }, []);

  return (
    <ConfigContext.Provider
      value={{
        tema,
        changeTheme,
        asideShow,
        handleAsideShow,
        configModalShow,
        handleShowConfiguration,
        isNavbarFixed,
        handleNavbarFixed,
        scroll,
        backgroundAside,
        changeBackgroundAside,
        bgRouteActive,
        changebgRouteActive,
        openDropdown,
        handleDropdownToggle,
        menuRef,
        showMenu,
        handleMenu,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
