import { Values } from "./Components/Values";

interface Props {
  tipo: string;
  tipoDoc: string;
}

export const Right = ({ tipo, tipoDoc }: Props) => {
  return (
    <div className="factura-header-right flex flex-col justify-center items-center border rounded-xl p-3">
      <p className="">RUC: 20451488156</p>
      <h1 className="relative text-lg text-[#344767] font-semibold uppercase">
        {tipo} Electrónica
      </h1>
      <Values tipoDoc={tipoDoc} />
    </div>
  );
};
