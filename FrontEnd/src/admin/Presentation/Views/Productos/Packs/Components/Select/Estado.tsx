import { useProdServices } from "../../../ProductosServicios/Hooks/useProdServices";

export const Estado = () => {
  const { modalEstadosPack, filterPacks } = useProdServices();

  return (
    <div
      className={`scroll h-auto max-h-28 absolute top-7 left-0 right-0 border bg-gradient-to-br from-white dark:to-black shadow-[rgba(96,125,139,.1)] bg-[hsl(0_0%_100%)] shadow-lg p-3 rounded-md z-10 overflow-auto ${
        modalEstadosPack ? "visible" : "invisible"
      }`}
    >
      <div className="relative text-xs flex flex-col gap-3">
        <p
          onClick={() => filterPacks("Todos")}
          className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
        >
          Todos
        </p>
        <p
          onClick={() => filterPacks("Destacados")}
          className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
        >
          Destacados
        </p>
        <p
          onClick={() => filterPacks("Activos")}
          className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
        >
          Activos
        </p>
        <p
          onClick={() => filterPacks("Inactivos")}
          className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
        >
          Inactivos
        </p>
      </div>
    </div>
  );
};
