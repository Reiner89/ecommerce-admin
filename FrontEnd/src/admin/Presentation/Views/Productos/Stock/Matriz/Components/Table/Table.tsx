import { LoaderTables } from "../../../../../../Components";
import { Check } from "../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../Hooks/useStock";
import { inputCheck } from "../../../../../../Styles/Actions";

export const Table = () => {
  const {
    loading,
    matPaginated,
    matrizAllSelected,
    handleSelectAllMatrices,
    selectedMat,
    handleCheckboxChangeMatriz,
  } = useStock();

  return (
    <div className="relative min-h-[250px] flex justify-center">
      {loading ? (
        <LoaderTables />
      ) : (
        <div className="scroll table-matriz-container w-full relative flex flex-col overflow-y-hidden">
          <table className="relative w-full table-fixed block whitespace-nowrap text-[#67748e] mb-5 xl:mb-0">
            <thead>
              <tr className="text-[.65rem] text-[#8392ab] text-left uppercase opacity-70 border-b border-solid border-[#e9ecef]">
                <th className="">
                  <div className="checkbox-exportMasivo-container relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      className={inputCheck}
                      id="exportAllMatrices"
                      checked={matrizAllSelected}
                      onChange={handleSelectAllMatrices}
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <Check />
                    </span>
                  </div>
                </th>
                <th className="py-3 px-6">SKU</th>
                <th className="py-3 px-6">Almacenes</th>
                <th className="py-3 px-6">Zonas</th>
                <th className="py-3 px-6">Pasillos</th>
                <th className="py-3 px-6">Niveles</th>
                <th className="py-3 px-6">Sub-Niveles</th>
                <th className="py-3 px-6">Producto</th>
                <th className="py-3 px-6">Marca</th>
                <th className="py-3 px-6">Costo de Producto</th>
                <th className="py-3 px-6">Entradas</th>
                <th className="py-3 px-6">Salidas</th>
                <th className="py-3 px-6">Mermas</th>
                <th className="py-3 px-6">Destruidos</th>
                <th className="py-3 px-6">Separados</th>
                <th className="py-3 px-6">Stock Final</th>
                <th className="py-3 px-6">Stock Seguridad</th>
                <th className="py-3 px-6">Stock Inventario</th>
                <th className="py-3 px-6">Costo de Inventario</th>
              </tr>
            </thead>
            <tbody>
              {!matPaginated ? (
                <tr>
                  <td className="py-3 px-6 text-center">No hay datos</td>
                </tr>
              ) : (
                <>
                  {matPaginated.map((matriz) => (
                    <tr
                      key={matriz.HMId}
                      className="text-[.875rem] text-left leading-[1.5] font-normal border-b cursor-pointer hover:bg-gray-100"
                    >
                      <td className="py-3 px-6">
                        <div className="checkMatriz-container relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            name={`matriz-${matriz.HMId}`}
                            id={`matriz-${matriz.HMId}`}
                            className={inputCheck}
                            checked={selectedMat.includes(matriz.HMId)}
                            onChange={() =>
                              handleCheckboxChangeMatriz(matriz.HMId)
                            }
                          />
                          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <Check />
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6">{matriz.HMProdSKU}</td>
                      <td className="py-3 px-6">{matriz.HMProd}</td>
                      <td className="py-3 px-6">{matriz.HMProdMarca}</td>
                      <td className="py-3 px-6">{matriz.HMProdMonto}</td>
                      <td className="py-3 px-6">{matriz.HMCantEntradas}</td>
                      <td className="py-3 px-6">{matriz.HMCantSalidas}</td>
                      <td className="py-3 px-6">{matriz.HMCantMermas}</td>
                      <td className="py-3 px-6">{matriz.HMCantDestruidas}</td>
                      <td className="py-3 px-6">{matriz.HMCantSeparadas}</td>
                      <td className="py-3 px-6">{matriz.HMStockFinal}</td>
                      <td className="py-3 px-6">{matriz.HMStockSeguridad}</td>
                      <td className="py-3 px-6">{matriz.HMStockInventario}</td>
                      <td className="py-3 px-6">{matriz.HMProdMonto}</td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// TODO:Elimino el modal de variantes y el editar una variante se hara en la misma tabla campo de nombre y la opcion de eliminar, UBICACION DEL PRODUCTO AGREGAR ASI COMO INFORMACION DEL PRODUCTO DE LA MATRIZ, SI EL COLOR ES NUEVO SE CREARA UNA VARIANTE DE ESE PRODUCTOS, SI NO, NO SE CREARA YA QUE ES EL MISMO
