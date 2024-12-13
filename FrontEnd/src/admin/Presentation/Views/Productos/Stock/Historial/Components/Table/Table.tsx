import { LoaderTables } from "../../../../../../Components";
import { Check } from "../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../Hooks/useStock";
import { inputCheck } from "../../../../../../Styles/Actions";
import * as Modals from "../../Modal";

export const Table = () => {
  const {
    loading,
    movPaginated,
    modalSM,
    showModalSM,
    closeModalSM,
    modalSU,
    showModalSU,
    closeModalSU,
    handleCheckboxChange,
    isAllSelected,
    handleSelectAllMovimientos,
    selectedMovs,
  } = useStock();

  return (
    <>
      {loading ? (
        <LoaderTables />
      ) : (
        <div className="scroll table-historial-movimientos-container w-full relative flex flex-col overflow-y-hidden">
          <table className="relative w-[190%] text-[#67748e] mb-5 xl:mb-0">
            <thead>
              <tr className="text-[.65rem] text-[#8392ab] text-left uppercase opacity-70 border-b border-solid border-[#e9ecef]">
                <th className="">
                  <div className="checkbox-exportMasivo-container relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      className={inputCheck}
                      id="exportAll"
                      checked={isAllSelected}
                      onChange={handleSelectAllMovimientos}
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <Check />
                    </span>
                  </div>
                </th>
                <th className="w-[10%] py-3 px-6">SKU</th>
                <th className="py-3 px-6">Tipo</th>
                <th className="py-3 px-6">Marca</th>
                <th className="py-3 px-6">Lote</th>
                <th className="py-3 px-6">Fecha de Vigencia</th>
                <th className="py-3 px-6">Producto</th>
                <th className="py-3 px-6">Unidad Medida</th>
                <th className="py-3 px-6">Cantidad</th>
                <th className="py-3 px-6">Tipo Movimiento</th>
                <th className="py-3 px-6">Tipo de Consumo</th>
                <th className="py-3 px-6">Tipo Documento</th>
                <th className="py-3 px-6">N° Documento</th>
                <th className="py-3 px-6">Monto</th>
                <th className="py-3 px-6">Seriales</th>
              </tr>
            </thead>
            <tbody>
              {movPaginated.map((mov) => (
                <tr
                  key={mov.HMId}
                  className="text-[.875rem] text-left leading-[1.5] font-normal border-b cursor-pointer hover:bg-gray-100"
                >
                  <td className="py-2 px-2">
                    <div className="checkbox-exportItem-container relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        className={inputCheck}
                        id={`checkMov${mov.HMId}`}
                        onChange={() => handleCheckboxChange(mov.HMId)}
                        checked={selectedMovs.includes(mov.HMId)}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <Check />
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6">{mov.HMProdSKU}</td>
                  <td className="py-3 px-6">{mov.HMProdFam}</td>
                  <td className="py-3 px-6">{mov.HMProdMarca}</td>
                  <td className="py-3 px-6">0003</td>
                  <td className="py-3 px-6">12-01-2024</td>
                  <td className="py-3 px-6">{mov.HMProd}</td>
                  <td className="py-3 px-6">{mov.HMProdUnidad}</td>
                  <td className="py-3 px-6">{mov.HMProdCant}</td>
                  <td className="py-3 px-6">{mov.HMProdTipoMov}</td>
                  <td className="py-3 px-6">{mov.HMProdTipoConsumo}</td>
                  <td className="py-3 px-6">{mov.HMProdTipoDoc}</td>
                  <td className="py-3 px-6">{mov.HMProdNumDoc}</td>
                  <td className="py-3 px-6">S/ {mov.HMProdMonto.toFixed(2)}</td>
                  <td className="relative py-3 px-6 flex gap-3">
                    <div
                      onMouseEnter={() => showModalSU(mov.HMId)}
                      onMouseLeave={closeModalSU}
                      className="sereales-unitarios flex items-center justify-center font-semibold border border-solid border-[rgb(229,57,53)] text-[rgb(229,57,53)] rounded-full h-6 w-6"
                    >
                      U
                      <Modals.SUnit
                        seriales={mov.HMProdSeriales}
                        isOpen={modalSU === mov.HMId}
                      />
                    </div>
                    <div
                      onMouseEnter={() => showModalSM(mov.HMId)}
                      onMouseLeave={closeModalSM}
                      className="sereales-sistema relative flex items-center justify-center font-semibold border border-solid border-[rgb(26,115,232)] text-[rgb(26,115,232)] rounded-full h-6 w-6"
                    >
                      M
                      <Modals.SMas
                        seriales={mov.HMProdSeriales}
                        isOpen={modalSM === mov.HMId}
                      />
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
