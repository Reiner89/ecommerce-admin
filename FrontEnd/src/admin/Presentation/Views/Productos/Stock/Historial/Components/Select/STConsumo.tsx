import { useStock } from "../../../../../../Hooks/useStock";

export const STConsumo = () => {
  const { HMConsumoFilter, SeleccionarTipoConsumo, HEIdEstado } = useStock();

  return (
    <>
      {HMConsumoFilter.length > 0 && HEIdEstado === 2 && (
        <div className="scroll h-auto max-h-28 absolute top-11 left-0 right-0 border bg-gradient-to-br from-white dark:to-black shadow-[rgba(96,125,139,.1)] bg-[hsl(0_0%_100%)] shadow-lg p-3 rounded-md z-10 overflow-auto visible">
          <div className="relative text-xs flex flex-col gap-3">
            {HMConsumoFilter.map((con) => (
              <p
                key={con.id}
                onClick={() => SeleccionarTipoConsumo(con.nombreDocumeto)}
                className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {con.nombreDocumeto}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
