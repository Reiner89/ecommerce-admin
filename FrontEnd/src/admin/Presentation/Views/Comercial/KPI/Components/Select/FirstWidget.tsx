import { Calendario } from "../../../../../Components/Icons/Iconos";
import { Año } from "./Año";

export const FirstWidget = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="">Filtros</h1>
      <Año />
      <Calendario />
    </div>
  );
};
