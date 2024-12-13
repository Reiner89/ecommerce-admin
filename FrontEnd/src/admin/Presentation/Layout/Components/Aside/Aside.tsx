import { useConfig } from "../../../Hooks/useConfig";
import { Close } from "../../../Components/Icons/Iconos";
import { MenuItemsContainer } from "./Components/MenuItemsContainer";
import { MenuPadre } from "./Components/MenuPadre";
import { MenuPadreWithLink } from "./Components/MenuPadreWithLink";
import { asideRoutes } from "./Routes/AsideRoutes";

export const Aside = () => {
  // Uso mi hook personalizado
  const {
    asideShow,
    backgroundAside,
    handleAsideShow,
    openDropdown,
    handleDropdownToggle,
    tema,
  } = useConfig();

  return (
    <aside
      className={`${backgroundAside} scroll fixed top-0 left-0 z-40 w-full max-w-[15.625rem] h-[calc(100vh-2rem)] rounded-[0.75rem] translate-x-[-110%] xl:translate-x-0 ml-4 my-4 overflow-y-auto transition-all ${
        backgroundAside === "bg-[rgb(240,242,245)] dark:bg-transparent"
          ? "text-gray-900 dark:text-white"
          : ""
      } ${asideShow ? "translate-x-[0%]" : "translate-x-[-110%]"}`}
    >
      <div className="relative flex justify-between items-center px-5 pt-5 mb-2 cursor-pointer">
        <div
          className={`relative w-full min-h-16 ${
            backgroundAside === "bg-[rgb(240,242,245)] dark:bg-transparent" &&
            tema === "dark"
              ? "logo-image-fondo-negro"
              : "logo-image"
          }`}
        />
        <button
          className="relative flex justify-center items-center xl:hidden"
          onClick={handleAsideShow}
        >
          <Close />
        </button>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal">
        {asideRoutes.map((menu) => (
          <div key={menu.nombre} className="relative block w-full">
            {menu.path ? (
              <MenuPadreWithLink route={menu} />
            ) : (
              <>
                <MenuPadre
                  nombre={menu.nombre}
                  iconoMenu={menu.icon}
                  show={openDropdown === menu.nombre}
                  handleShowChildrens={() => handleDropdownToggle(menu.nombre)}
                />
                {menu.children && (
                  <MenuItemsContainer
                    menuItems={menu.children}
                    showChildrens={openDropdown === menu.nombre}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};
