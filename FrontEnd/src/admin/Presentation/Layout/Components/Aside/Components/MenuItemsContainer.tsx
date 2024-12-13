import { MenuItemsProps } from "../../../../../Interfaces/Menu/Menu";
import { MenuItem } from "./MenuItem";

interface MenuItemsContainerProps {
  showChildrens: boolean;
  menuItems: MenuItemsProps[];
}

export const MenuItemsContainer = ({
  menuItems,
  showChildrens,
}: MenuItemsContainerProps) => {
  return (
    <div className={`${showChildrens ? "block" : "hidden"} overflow-hidden`}>
      <div className="block w-full py-1 font-sans antialiased font-light leading-normal">
        <nav className="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-[13px] font-normal">
          {menuItems?.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </nav>
      </div>
    </div>
  );
};
