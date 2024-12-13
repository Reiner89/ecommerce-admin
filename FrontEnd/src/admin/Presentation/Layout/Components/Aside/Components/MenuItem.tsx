import { Link } from "react-router-dom";
import { MenuItemsProps } from "../../../../../Interfaces/Menu/Menu";
import { useConfig } from "../../../../Hooks/useConfig";
import * as Icon from "../../../../Components/Icons/Iconos";

export const MenuItem = ({ item }: Props) => {
  const { bgRouteActive } = useConfig();

  return (
    <Link to={item.path}>
      <div
        className={`flex items-center w-full p-3 leading-tight rounded-lg outline-none text-start bg-transparent ${bgRouteActive.hover}`}
      >
        <div className="grid mr-4 place-items-center">
          <Icon.Right />
        </div>
        {item.nombre}
      </div>
    </Link>
  );
};

interface Props {
  item: MenuItemsProps;
}
