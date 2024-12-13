export interface MenuProps {
  nombre: string;
  path?: string;
  element?: React.ReactNode;
  icon: React.ReactNode;
  children?: MenuItemsProps[];
}

export interface MenuItemsProps {
  nombre: string;
  path: string;
  elementChildren?: React.ReactNode;
  icon: React.ReactNode;
}
