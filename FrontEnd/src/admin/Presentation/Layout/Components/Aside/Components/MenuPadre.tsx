import * as Icon from "../../../../Components/Icons/Iconos";
import { useConfig } from "../../../../Hooks/useConfig";

interface MenuPadreProps {
  iconoMenu: React.ReactNode;
  nombre: string;
  show: boolean;
  handleShowChildrens: () => void;
}

export const MenuPadre = ({
  nombre,
  iconoMenu,
  show,
  handleShowChildrens,
}: MenuPadreProps) => {
  const { bgRouteActive } = useConfig();

  return (
    <div
      className={`flex items-center w-full p-0 leading-tight rounded-lg outline-none bg-transparent text-start ${bgRouteActive.hover} cursor-pointer`}
      onClick={handleShowChildrens}
    >
      <div className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left border-b-0 select-none border-b-gray-100">
        <div className="flex mr-4 items-center justify-center text-2xl">{iconoMenu}</div>
        <p
          className={`block mr-auto font-sans text-[13px] antialiased font-normal leading-relaxed`}
        >
          {nombre}
        </p>
        <span className="ml-4 text-sm">
          {show ? <Icon.Up /> : <Icon.Down />}
        </span>
      </div>
    </div>
  );
};
