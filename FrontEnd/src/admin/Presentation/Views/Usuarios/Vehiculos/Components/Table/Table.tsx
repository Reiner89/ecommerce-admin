import { LoaderTables } from "../../../../../Components";
import { Delete, IconUserEdit } from "../../../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../../../Hooks/useAdmin";

export const Table = () => {
  const { loading, vehPaginated, openFormVeh } = useAdministracion();

  return (
    <>
      {loading ? (
        <LoaderTables />
      ) : (
        <div className="scroll container-table-vehiculos w-full relative flex flex-col overflow-y-hidden">
          <table className="table-vehiculos relative w-full table-fixed min-[1660px]:inline-table whitespace-nowrap block text-[#67748e] mb-0">
            <thead>
              <tr className="text-[.65rem] text-[#8392ab] text-left uppercase border-b border-solid border-[#e9ecef]">
                <th className="py-3 px-6">Placa</th>
                <th className="py-3 px-6">Tipo</th>
                <th className="py-3 px-6">N° Serie</th>
                <th className="py-3 px-6">Soat</th>
                <th className="py-3 px-6">Vigencia Desde</th>
                <th className="py-3 px-6">Vigencia Hasta</th>
                <th className="py-3 px-6">Ultima Revision</th>
                <th className="py-3 px-6">Vencimiento</th>
                <th className="py-3 px-6">Tarjeta Propiedad</th>
                <th className="py-3 px-6">Valido</th>
                <th className="py-3 px-6">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {vehPaginated.map((veh) => (
                <tr
                  key={veh.id}
                  className="text-[.875rem] text-left leading-[1.5] font-normal border-b cursor-pointer hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{veh.placaVehiculo}</td>
                  <td className="py-3 px-6">{veh.tipoVehiculo}</td>
                  <td className="py-3 px-6">{veh.nSerieVehiculo}</td>
                  <td className="py-3 px-6">{veh.soatVehiculo}</td>
                  <td className="py-3 px-6">{veh.vigenciasDesdeVehiculo}</td>
                  <td className="py-3 px-6">{veh.vigenciaHastaVehiculo}</td>
                  <td className="py-3 px-6">{veh.ultRevisionVehiculo}</td>
                  <td className="py-3 px-6">{veh.vencimientoSoatVehiculo}</td>
                  <td className="py-3 px-6">{veh.tarjetaPropiedadVehiculo}</td>
                  <td className="py-3 px-6">
                    <div
                      className={`w-full h-[20px] flex justify-center items-center gap-x-2 px-3 rounded-lg ${
                        veh.validoVehiculo ? "bg-[#ddf8e0]" : "bg-[#ebeced]"
                      }`}
                    >
                      <span
                        className={`w-[13px] h-[13px] rounded-full border border-solid ${
                          veh.validoVehiculo ? "bg-[#43a047]" : "bg-transparent"
                        } ${
                          veh.validoVehiculo
                            ? "border-[#43a047]"
                            : "border-[#61666E]"
                        }`}
                      />
                      <p
                        className={`relative text-xs font-bold ${
                          veh.validoVehiculo
                            ? "text-[#43a047]"
                            : "text-[rgb(164,167,172)]"
                        }`}
                      >
                        {veh.validoVehiculo ? "Valido" : "No Valido"}
                      </p>
                    </div>
                  </td>
                  <td className="relative py-3 px-6">
                    <div className="container-acciones flex justify-center items-center gap-x-3 text-lg">
                      <div
                        className="relative hover:text-[#09c] transition-colors cursor-pointer"
                        onClick={() => openFormVeh(veh)}
                      >
                        <IconUserEdit />
                      </div>
                      <div
                        className="relative hover:text-red-500 transition-colors cursor-pointer"
                        onClick={() =>
                          console.log(`Eliminando el vehiculo ${veh.id}`)
                        }
                      >
                        <Delete />
                      </div>
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
