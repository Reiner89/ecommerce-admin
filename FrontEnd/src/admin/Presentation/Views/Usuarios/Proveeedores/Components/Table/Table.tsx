import { LoaderTables } from "../../../../../Components";
import { IconUserEdit, Delete } from "../../../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../../../Hooks/useAdmin";

export const Table = () => {
  const { loading, provsPaginated, openFormProveedor } = useAdministracion();

  return (
    <>
      {loading ? (
        <LoaderTables />
      ) : (
        <div className="scroll container-table-proveedores w-full relative flex flex-col overflow-y-hidden">
          <table className="table-proveedores relative w-full table-fixed whitespace-nowrap block text-[#67748e] mb-0">
            <thead>
              <tr className="text-[.65rem] text-[#8392ab] text-left uppercase border-b border-solid border-[#e9ecef]">
                <th className="py-3 px-6">DNI/RUC</th>
                <th className="py-3 px-6">Razon Social</th>
                <th className="py-3 px-6">Representante</th>
                <th className="py-3 px-6">Clave</th>
                <th className="py-3 px-6">Tipo Proveedor</th>
                <th className="py-3 px-6">Tipo Servicio</th>
                <th className="py-3 px-6">Departamento</th>
                <th className="py-3 px-6">Provincia</th>
                <th className="py-3 px-6">Distrito</th>
                <th className="py-3 px-6">Referencias</th>
                <th className="py-3 px-6">Contacto</th>
                <th className="py-3 px-6">Telefono</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {provsPaginated.map((prov) => (
                <tr
                  key={prov.id}
                  className="text-[.875rem] text-left leading-[1.5] font-normal border-b cursor-pointer hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{prov.DNIRUCProveedor}</td>
                  <td className="py-3 px-6">{prov.razonSocialProveedor}</td>
                  <td className="py-3 px-6">{prov.representanteProveedor}</td>
                  <td className="py-3 px-6">{prov.claveProveedor}</td>
                  <td className="py-3 px-6">{prov.tipoProveedor}</td>
                  <td className="py-3 px-6">{prov.tipoServicioProveedor}</td>
                  <td className="py-3 px-6">{prov.departamentoProveedor}</td>
                  <td className="py-3 px-6">{prov.provinciaProveedor}</td>
                  <td className="py-3 px-6">{prov.distritoProveedor}</td>
                  <td className="py-3 px-6">{prov.referenciasProveedor}</td>
                  <td className="py-3 px-6">{prov.contactoProveedor}</td>
                  <td className="py-3 px-6">{prov.telefonoProveedor}</td>
                  <td className="py-3 px-6">{prov.emailProveedor}</td>
                  <td className="relative py-3 px-6">
                    <div className="container-acciones flex justify-center items-center gap-x-3 text-lg">
                      <div
                        className="relative hover:text-[#09c] transition-colors cursor-pointer"
                        onClick={() => openFormProveedor(prov)}
                      >
                        <IconUserEdit />
                      </div>
                      <div
                        className="relative hover:text-red-500 transition-colors cursor-pointer"
                        onClick={() => console.log("Eliminar")}
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
