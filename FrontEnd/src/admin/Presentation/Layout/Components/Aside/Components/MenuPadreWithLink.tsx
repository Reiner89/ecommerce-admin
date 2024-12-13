import { Link } from "react-router-dom";
import { MenuProps } from "../../../../../Interfaces/Menu/Menu";
import { useConfig } from "../../../../Hooks/useConfig";

interface Props {
  route: MenuProps;
}

export const MenuPadreWithLink = ({ route }: Props) => {
  const { bgRouteActive } = useConfig();

  return (
    <Link to={route.path ? route.path : ""}>
      <div
        className={`flex items-center w-full p-0 leading-tight rounded-lg outline-none text-start bg-transparent ${bgRouteActive.hover}`}
      >
        <div className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left border-b-0 select-none border-b-gray-100">
          <div className="flex mr-4 justify-center items-center text-2xl">{route.icon}</div>
          <p
            className={`block mr-auto font-sans text-[13px] antialiased font-normal leading-relaxed`}
          >
            {route.nombre}
          </p>
        </div>
      </div>
    </Link>
  );
};
