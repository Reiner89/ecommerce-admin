export const TipoFactura = ({
  tipoFactura,
  handleTipoFacturaChange,
}: Props) => {
  return (
    <div className="factura-container-tipo-factura flex gap-6 items-center">
      <h2 className="relative text-[#344767] text-xl font-semibold">
        Tipo de Factura:
      </h2>
      <div className="container-radios-tipo-factura flex gap-4 items-center">
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center cursor-pointer"
            htmlFor="nacional"
          >
            <input
              name="tipoFactura"
              type="radio"
              value="nacional"
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-blue-400 transition-all"
              id="nacional"
              checked={tipoFactura === "nacional"}
              onChange={handleTipoFacturaChange}
            />
            <span className="absolute bg-blue-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
          </label>
          <label className="ml-2 cursor-pointer text-sm" htmlFor="nacional">
            Nacional
          </label>
        </div>
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center cursor-pointer"
            htmlFor="internacional"
          >
            <input
              name="tipoFactura"
              type="radio"
              value="internacional"
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-blue-400 transition-all"
              id="internacional"
              checked={tipoFactura === "internacional"}
              onChange={handleTipoFacturaChange}
            />
            <span className="absolute bg-blue-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
          </label>
          <label
            className="ml-2 cursor-pointer text-sm"
            htmlFor="internacional"
          >
            Iternacional
          </label>
        </div>
      </div>
    </div>
  );
};

interface Props {
  tipoFactura: string;
  handleTipoFacturaChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
