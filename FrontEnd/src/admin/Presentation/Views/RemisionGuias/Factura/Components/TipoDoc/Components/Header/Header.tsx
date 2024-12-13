import { Left, Center, Right } from "./Components";

export const Header = ({ tipo, tipoDoc }: Props) => {
  return (
    <div className="factura-header-container grid grid-cols-[.6fr,1fr,1fr] gap-x-4 items-center justify-between">
      <Left />
      <Center />
      <Right tipo={tipo} tipoDoc={tipoDoc} />
    </div>
  );
};

interface Props {
  tipo: string;
  tipoDoc: string;
}
