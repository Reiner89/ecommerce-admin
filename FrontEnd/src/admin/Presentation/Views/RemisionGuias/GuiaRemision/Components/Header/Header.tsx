import { Center, Left, Right } from "./Components";

export const Header = () => {
  return (
    <div className="factura-header-container grid grid-cols-[.6fr,1fr,1fr] gap-x-4 items-center justify-between">
      <Left />
      <Center />
      <Right tipo="Guia de Remision Electronica" tipoDoc="T" />
    </div>
  );
};
