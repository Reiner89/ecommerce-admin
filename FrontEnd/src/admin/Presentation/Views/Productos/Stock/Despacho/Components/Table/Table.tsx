import { useStock } from "../../../../../../Hooks/useStock";
import { LoaderTables } from "../../../../../../Components";
import { inputCheck } from "../../../../../../Styles/Actions";
import { Check, PDF, Sticker } from "../../../../../../Components/Icons/Iconos";

export const Table = () => {
  const { loading, despPaginated } = useStock();

  return (
    <>
      {loading ? (
        <LoaderTables />
      ) : (
        <div className="scroll table-historial-movimientos-container w-full relative flex flex-col overflow-y-hidden">
          <table className="table-lista-ordenes relative w-full table-fixed block whitespace-nowrap text-[#67748e] mb-5 xl:mb-0">
            <thead>
              <tr className="text-[.65rem] text-[#8392ab] text-left uppercase border-b border-solid border-[#e9ecef]">
                <th className="w-[3%]">
                  <div className="checkMov-container relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      id="exportAllDespachos"
                      className={inputCheck}
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <Check />
                    </span>
                  </div>
                </th>
                <th className="py-3 px-6">N° de Orden</th>
                <th className="py-3 px-6">Cliente</th>
                <th className="py-3 px-6">Ubicación</th>
                <th className="py-3 px-6">Dirección</th>
                <th className="py-3 px-6">Estado</th>
                <th className="py-3 px-6">N° de Piezas</th>
                <th className="py-3 px-6">Peso Neto</th>
                <th className="py-3 px-6">Peso Volumen</th>
                <th className="py-3 px-6 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {despPaginated.map((desp) => (
                <tr
                  key={desp.LOId}
                  className="text-[.875rem] text-left leading-[1.5] font-normal border-b cursor-pointer hover:bg-gray-100"
                >
                  <td className="">
                    <div className="checkDespacho-container relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        className={inputCheck}
                        id={`checkDespacho-${desp.LOId}`}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <Check />
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6">{desp.LOId}</td>
                  <td className="py-3 px-6">{desp.LOCliente}</td>
                  <td className="py-3 px-6">
                    {desp.LODepartamento} - {desp.LOProvincia} -{" "}
                    {desp.LODistrito}
                  </td>
                  <td className="py-3 px-6">{desp.LODireccion}</td>
                  <td className="py-3 px-6">
                    <p
                      className={`relative font-semibold text-white py-1 px-2 rounded-lg text-center ${
                        desp.LOEstado === "Despachado"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {desp.LOEstado}
                    </p>
                  </td>
                  <td className="py-3 px-6">
                    <div className="input-margen-masivo relative w-[100px]">
                      <label
                        htmlFor={`nroPiezas${desp.LOId}`}
                        className="hidden"
                      >
                        N° de Piezas
                      </label>
                      <input
                        type="text"
                        id={`nroPiezas${desp.LOId}`}
                        className="bg-transparent border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                        placeholder="N° de Piezas"
                        required
                      />
                    </div>
                  </td>
                  <td className="py-3 px-6">
                    <div className="input-margen-masivo relative w-[100px]">
                      <label
                        htmlFor={`pesoNeto${desp.LOId}`}
                        className="hidden"
                      >
                        Peso Neto
                      </label>
                      <input
                        type="text"
                        id={`pesoNeto${desp.LOId}`}
                        className="bg-transparent border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                        placeholder="Peso Neto"
                        required
                      />
                    </div>
                  </td>
                  <td className="py-3 px-6">
                    <div className="input-margen-masivo relative w-[100px]">
                      <label
                        htmlFor={`pesoVolumen${desp.LOId}`}
                        className="hidden"
                      >
                        Peso Volumen
                      </label>
                      <input
                        type="text"
                        id={`pesoVolumen${desp.LOId}`}
                        className="bg-transparent border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                        placeholder="P. Volumen"
                        required
                      />
                    </div>
                  </td>
                  <td className="relative py-3 px-6">
                    <div className="container-acciones flex justify-center items-center gap-x-3 text-lg">
                      <button
                        className="text-[#67748e] hover:text-red-600 transition-colors"
                        onClick={() => console.log("Editar")}
                      >
                        <PDF />
                      </button>
                      <button
                        className="text-[#67748e] hover:text-[#09C] transition-colors"
                        onClick={() => console.log("Eliminar")}
                      >
                        <Sticker />
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
