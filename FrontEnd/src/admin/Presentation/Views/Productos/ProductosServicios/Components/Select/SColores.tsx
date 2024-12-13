import { useProdServices } from "../../Hooks/useProdServices";

export const SColores = () => {
  const { modalColorProd, coloresProd, colorProductoSeleccionada } =
    useProdServices();

  return (
    <div
      className={`scroll h-auto max-h-28 absolute top-11 left-0 right-0 border bg-gradient-to-br from-white dark:to-black shadow-[rgba(96,125,139,.1)] bg-[hsl(0_0%_100%)] shadow-lg p-3 rounded-md z-10 overflow-auto ${
        modalColorProd ? "visible" : "invisible"
      }`}
    >
      <div className="relative text-xs flex flex-col gap-3">
        {coloresProd.map((color) => (
          <p
            key={color.id_color}
            className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
            onClick={() =>
              colorProductoSeleccionada(color.nombre_color, color.id_color)
            }
          >
            {color.nombre_color}
          </p>
        ))}
      </div>
    </div>
  );
};
