import { useAdministracion } from "../../../../../Hooks/useAdmin";

export const SPagination = () => {
  const { modalCantProvs, cambiarCantProvsPorPagina } = useAdministracion();

  return (
    <div
      className={`scroll absolute top-7 left-0 bg-gray-50 shadow-md z-10 ${
        modalCantProvs ? "visible" : "invisible"
      }`}
    >
      <div className="relative text-xs flex flex-col gap-3">
        <p
          className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => cambiarCantProvsPorPagina(5)}
        >
          5
        </p>
        <p
          className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => cambiarCantProvsPorPagina(10)}
        >
          10
        </p>
        <p
          className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => cambiarCantProvsPorPagina(15)}
        >
          15
        </p>
      </div>
    </div>
  );
};
