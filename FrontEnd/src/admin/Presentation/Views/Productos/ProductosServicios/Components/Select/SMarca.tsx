import { useProdServices } from "../../Hooks/useProdServices";

export const SMarca = () => {
  const { modalMarcaProd, marcasProd, marcaProductoSeleccionada } =
    useProdServices();

  return (
    <div
      className={`scroll h-auto max-h-28 absolute top-11 left-0 right-0 border bg-gradient-to-br from-white dark:to-black shadow-[rgba(96,125,139,.1)] bg-[hsl(0_0%_100%)] shadow-lg p-3 rounded-md z-10 overflow-auto ${
        modalMarcaProd ? "visible" : "invisible"
      }`}
    >
      <div className="relative text-xs flex flex-col gap-3">
        {marcasProd.map((marca) => (
          <p
            key={marca.id}
            className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => marcaProductoSeleccionada(marca.name, marca.id)}
          >
            {marca.name}
          </p>
        ))}
      </div>
    </div>
  );
};
