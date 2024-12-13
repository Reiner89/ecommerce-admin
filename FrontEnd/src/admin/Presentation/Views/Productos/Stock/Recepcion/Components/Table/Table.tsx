import { LoaderTables } from "../../../../../../Components";
import * as Icon from "../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../Hooks/useStock";

export const Table = () => {
  const { recepciones, formatMoney, loading } = useStock();

  return (
    <div className="table-container w-full flex flex-col h-[200px] overflow-hidden gap-5">
      {loading ? (
        <LoaderTables />
      ) : (
        <>
          {recepciones.length > 0 ? (
            <>
              <div className="table-header w-full flex gap-1 border-b border-[#ccc] text-sm text-[#999999] mb-3 pb-3">
                Llevas ingresado
                <p className="relative font-bold">{recepciones.length}</p>
                registro de la recepción destinada a la sucursal
                <p className="relative font-bold">Domicilio Fiscal</p>
              </div>
              <div className="table-body scroll w-full overflow-y-auto">
                <table className="w-full relative text-sm">
                  <thead className="relative w-full border-b border-solid border-[rgba(78,88,101,.3)]">
                    <tr className="relative text-[#09c] text-left">
                      <th className="w-[11%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                        SKU
                      </th>
                      <th className="w-[40%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                        Producto
                      </th>
                      <th className="w-[10%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                        Cantidad
                      </th>
                      <th className="w-[10%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                        S/ Unidad
                      </th>
                      <th className="w-[14%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                        Subtotal Neto
                      </th>
                      <th className="p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recepciones.map((stock) => (
                      <tr
                        key={stock.recepId}
                        className="relative text-[#999999] font-semibold"
                      >
                        <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                          {stock.recepId}
                        </td>
                        <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                          {stock.recepProd}
                        </td>
                        <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                          {stock.recepCantIng}
                        </td>
                        <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                          S/ {formatMoney(stock.recepCostUnit)}
                        </td>
                        <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                          S/{" "}
                          {formatMoney(
                            stock.recepCantIng * stock.recepCostUnit
                          )}
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
              No hay registros en la recepción actualmente.
            </p>
          )}
        </>
      )}
    </div>
  );
};
