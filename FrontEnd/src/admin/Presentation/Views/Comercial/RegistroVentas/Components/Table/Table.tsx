import { LoaderTables } from "../../../../../Components";
import {
  Check,
  Delete,
  Edit,
  View,
} from "../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../Hooks/useStock";
import { inputCheck } from "../../../../../Styles/Actions";

export const Table = () => {
  const { loading, movPaginated, handleCheckboxChange } = useStock();

  return (
    <>
      {loading ? (
        <LoaderTables />
      ) : (
        <div className="scroll table-historial-movimientos-container w-full relative flex flex-col overflow-y-hidden">
          TODO:BUSCADOR EXPORTAR A EXCEL MASIVO DESDE HASTA PAGINACION
          <table className="table-registro-ventas relative block w-full table-fixed whitespace-nowrap text-[#67748e] mb-5 xl:mb-0">
            <thead>
              <tr className="text-[.65rem] text-[#8392ab] text-left uppercase opacity-70 border-b border-solid border-[#e9ecef]">
                <th className="py-3">
                  <div className="checkMov-container relative flex items-center justify-center">
                    <input type="checkbox" className={inputCheck} />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <Check />
                    </span>
                  </div>
                </th>
                <th className="py-3 px-6">N° de Orden</th>
                <th className="py-3 px-6">Fecha</th>
                <th className="py-3 px-6">Cliente</th>
                <th className="py-3 px-6">Tipo</th>
                <th className="py-3 px-6">Productos/Packs</th>
                <th className="py-3 px-6">Precio</th>
                <th className="py-3 px-6">Cantidad</th>
                <th className="py-3 px-6">Costo</th>
                <th className="py-3 px-6">Utilidad</th>
                <th className="py-3 px-6">Canal de Venta</th>
                <th className="py-3 px-6">Medio de Pago</th>
                <th className="py-3 px-6">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {movPaginated.map((mov) => (
                <tr
                  key={mov.HMId}
                  className="text-[.875rem] text-left leading-[1.5] font-normal border-b cursor-pointer hover:bg-gray-100"
                >
                  <td className="">
                    <div className="checkMov-container relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        className={inputCheck}
                        id={`checkMov${mov.HMId}`}
                        onChange={() => handleCheckboxChange(mov.HMId)}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <Check />
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6">{mov.HMId}</td>
                  <td className="py-3 px-6">{mov.HMProdSKU}</td>
                  <td className="py-3 px-6">{mov.HMProdFam}</td>
                  <td className="py-3 px-6">{mov.HMProdFam}</td>
                  <td className="py-3 px-6">{mov.HMProdMarca}</td>
                  <td className="py-3 px-6">{mov.HMProd}</td>
                  <td className="py-3 px-6">{mov.HMProdUnidad}</td>
                  <td className="py-3 px-6">{mov.HMProdCant}</td>
                  <td className="py-3 px-6">{mov.HMProdTipoMov}</td>
                  <td className="py-3 px-6">{mov.HMProdNumDoc}</td>
                  <td className="py-3 px-6">S/ {mov.HMProdMonto.toFixed(2)}</td>
                  <td className="py-3 px-6">
                    <div className="container-acciones flex items-center justify-center text-lg gap-3">
                      <button
                        onClick={() => console.log("Mirar Informe")}
                        type="button"
                        className="relative transition-colors hover:text-[#09c]"
                      >
                        <View />
                      </button>
                      <button
                        onClick={() => console.log("Editar")}
                        type="button"
                        className="relative transition-colors hover:text-red-500"
                      >
                        <Delete />
                      </button>
                      <button
                        onClick={() => console.log("Editar")}
                        type="button"
                        className="relative transition-colors hover:text-[#09c]"
                      >
                        <Edit />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
