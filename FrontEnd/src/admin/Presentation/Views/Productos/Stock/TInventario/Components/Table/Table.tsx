import * as Icon from "../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../Hooks/useStock";
import { TableHeader } from "./Components/TableHeader";

export const Table = ({ deatallesExist }: Props) => {
  const { inventarios, totales } = useStock();

  return (
    <>
      {inventarios.length > 0 ? (
        <>
          <TableHeader
            inventarios={inventarios}
            deatallesExist={deatallesExist}
          />
          <div className="table-body scroll w-full overflow-y-auto">
            <table className="w-full relative text-sm">
              <thead className="relative w-full border-b border-solid border-[rgba(78,88,101,.3)]">
                <tr className="relative text-[#3da2c4] text-left">
                  <th className="w-[15%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                    SKU
                  </th>
                  <th className="w-[50%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                    Producto
                  </th>
                  <th className="w-[10%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                    Unidad
                  </th>
                  <th className="w-[10%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                    Cantidad
                  </th>
                  <th className="w-[10%] relative font-semibold p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]">
                    Total
                  </th>
                  <th className="p-3 border-t border-r border-solid border-[rgba(78,88,101,.3)]"></th>
                </tr>
              </thead>
              <tbody>
                {inventarios.map((stock) => (
                  <tr
                    key={stock.inventId}
                    className="relative text-[#999999] font-semibold border-b border-solid border-[rgba(78,88,101,.3)]"
                  >
                    <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                      {stock.inventId}
                    </td>
                    <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                      {stock.inventProd}
                    </td>
                    <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                      {stock.inventUMedida}
                    </td>
                    <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                      {stock.inventSSistema}
                    </td>
                    <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                      {totales[stock.inventProd]}
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
          No hay registros de inventario para el domicilio fiscal
        </p>
      )}
    </>
  );
};

interface Props {
  deatallesExist: number;
}
