import { useStock } from "../../../../../../Hooks/useStock";
import * as Icon from "../../../../../../Components/Icons/Iconos";

export const TDetalles = () => {
  const { inventarios } = useStock();

  return (
    <>
      <div className="table-body scroll w-full overflow-y-auto">
        <table className="w-[120%] relative text-sm">
          <thead className="relative w-full border-b border-solid border-[rgba(78,88,101,.3)]">
            <tr className="relative text-[#666666] text-left">
              <th className="w-[10%] relative font-semibold p-3">SKU</th>
              <th className="w-[40%] relative font-semibold p-3">Producto</th>
              <th className="w-[5%] relative font-semibold p-3">Unidad</th>
              <th className="w-[15%] relative font-semibold p-3">
                Stock Sistema
              </th>
              <th className="w-[15%] relative font-semibold p-3">Stock Real</th>
              <th className="w-[35%] relative font-semibold p-3">
                Stock Diferencial
              </th>
              <th className="p-3"></th>
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
                  {stock.inventSReal}
                </td>
                <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                  {stock.inventSSistema}
                </td>
                <td className="relative px-3 py-2 border-r border-solid border-[rgba(78,88,101,.3)]">
                  {stock.inventSReal - stock.inventSSistema}
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
  );
};
