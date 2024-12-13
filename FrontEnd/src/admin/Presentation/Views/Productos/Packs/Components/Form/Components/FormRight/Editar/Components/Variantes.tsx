export const Variantes = () => {
  return (
    <div className="variantes-container relative w-full h-auto py-3 transition-all duration-300">
      <div className="variantes sombra w-full relative bg-white p-5 rounded-xl transition-all duration-300">
        <div className="variantes-header w-full flex justify-between mb-4">
          <h2 className="flex items-center text-xl text-[#4e5865] font-semibold">
            Variantes
          </h2>
          <button
            type="button"
            className="flex items-center text-sm text-[#09c] font-medium border border-[#09c] py-2 px-4 rounded hover:bg-[#09c] hover:bg-opacity-5 transition-all duration-300"
          >
            Crear Variante
          </button>
        </div>
        <table className="relative w-full text-left text-sm">
          <thead className="w-full table table-fixed border-b border-solid border-[rgba(78,88,101,.3)]">
            <tr className="relative my-1.5">
              <th className="text-left text-sm text-[#09c] font-normal">
                Activa
              </th>
              <th className="text-left text-sm text-[#09c] font-normal">
                Nombre
              </th>
              <th className="text-left text-sm text-[#09c] font-normal">SKU</th>
              <th className="text-left text-sm text-[#09c] font-normal">
                Código de Barras
              </th>
              <th className="text-left text-sm text-[#09c] font-normal">
                Sucursales
              </th>
              <th className="text-left text-sm text-[#09c] font-normal">
                Acciones
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};
