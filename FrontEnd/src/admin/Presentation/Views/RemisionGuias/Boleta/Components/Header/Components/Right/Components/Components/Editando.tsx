export const Editando = ({
  correlativo,
  serie,
  handleSeriesChange,
  handleCorrelativosChange,
  saveChanges,
}: Props) => {
  return (
    <div className="flex flex-row items-center justify-center gap-1">
      <label htmlFor="serieBoleta" className="hidden">
        Serie
      </label>
      <input
        className="w-24 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        name="serieBoleta"
        id="serieBoleta"
        value={serie}
        onChange={handleSeriesChange}
      />
      <span className="">-</span>
      <label htmlFor="correlativoBoleta" className="hidden">
        Correlativo
      </label>
      <input
        className="w-24 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        name="correlativoBoleta"
        id="correlativoBoleta"
        value={correlativo}
        onChange={handleCorrelativosChange}
      />
      <div
        className="relative cursor-pointer underline text-blue-500"
        onClick={saveChanges}
      >
        Guardar
      </div>
    </div>
  );
};

interface Props {
  handleSeriesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCorrelativosChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveChanges: () => void;
  serie: string;
  correlativo: string;
}
