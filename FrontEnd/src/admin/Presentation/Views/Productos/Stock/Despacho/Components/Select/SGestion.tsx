import { useStock } from "../../../../../../Hooks/useStock";

export const SGestion = () => {
  const {
    handleGestionSeleccionada,
    seleccionarGestion,
    selectGestion,
    gestiones,
  } = useStock();

  return (
    <div
      className={`scroll h-auto max-h-28 absolute top-11 left-0 right-0 border bg-gradient-to-br from-white dark:to-black shadow-[rgba(96,125,139,.1)] bg-[hsl(0_0%_100%)] shadow-lg p-3 rounded-md z-10 overflow-auto ${
        selectGestion ? "visible" : "invisible"
      }`}
    >
      <div className="relative text-xs flex flex-col gap-3">
        <p
          onClick={handleGestionSeleccionada}
          className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
        >
          Seleccionar Gestión
        </p>
        {gestiones.map((dp) => (
          <p
            key={dp.id}
            className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
            onClick={() =>
              seleccionarGestion(
                dp.razonSocialProveedor,
                dp.tipoProveedor,
                dp.tipoServicioProveedor
              )
            }
          >
            {dp.razonSocialProveedor}
          </p>
        ))}
      </div>
    </div>
  );
};
