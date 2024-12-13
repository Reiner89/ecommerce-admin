import { LoaderTables } from "../../../../../../Components";
import * as Icon from "../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../Hooks/useStock";

export const Table = () => {
  const { consumos, loading } = useStock();

  return (
    <div className="table-container w-full flex flex-col h-[200px] overflow-hidden gap-5">
      {loading ? (
        <LoaderTables />
      ) : (
        <>
          {consumos.length > 0 ? (
            <>
              <div className="table-header w-full flex gap-1 border-b border-[#ccc] text-sm text-[#999999] mb-3 pb-3">
                Llevas ingresado
                <p className="relative font-bold">{consumos.length}</p>
                registros de consumo obtenido de la sucursal
                <p className="relative font-bold">Domicilio Fiscal</p>
              </div>
              <div className="table-body scroll w-full overflow-y-auto">
                <table className="w-full relative text-sm">
                  <thead className="relative w-full border-b border-solid border-[rgba(78,88,101,.3)]">
                    <tr className="relative text-[#09c] text-left">
                      <th className="w-[15%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                        SKU
                      </th>
                      <th className="w-[50%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                        Producto
                      </th>
                      <th className="w-[10%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                        Cantidad
                      </th>
                      <th className="w-[10%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {consumos.map((stock) => (
                      <tr
                        key={stock.idConsumido}
                        className="relative text-[#999999] font-semibold border-b border-solid border-[rgba(78,88,101,.3)]"
                      >
                        <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                          {stock.idConsumido}
                        </td>
                        <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                          {stock.consumoProd}
                        </td>
                        <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                          {stock.consumoCant}
                        </td>
                        <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                          <Icon.Close className="relative text-[#999] border border-[#999] rounded-full cursor-pointer" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <p className="border-b border-[#ccc] text-sm text-[#999999] font-bold mb-3 pb-3">
              No hay registrtos en consumos actualmente.
            </p>
          )}
        </>
      )}
    </div>
  );
};
