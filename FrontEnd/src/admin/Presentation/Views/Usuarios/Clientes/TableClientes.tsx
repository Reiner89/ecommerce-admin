import { Delete, IconUserEdit } from "../../../Components/Icons/Iconos";
import { usuario } from "../Reportes/Data/Reportes";

export const TableClientes = ({ data }: Props) => {
  return (
    <table className="table-clientes-comercial w-full table-fixed whitespace-nowrap block">
      <thead className="relative">
        <tr className="relative text-[.65rem] text-[#8392ab] text-left font-bold uppercase opacity-70 border-solid border-b border-b-[#e9ecef]">
          <th className="relative py-3 px-6 transition-all">Nombre Clientes</th>
          <th className="relative py-3 px-6 transition-all">DNI/RUC</th>
          <th className="relative py-3 px-6 transition-all">
            Correo Electróniconico
          </th>
          <th className="relative py-3 px-6 transition-all">Teléfono</th>
          <th className="relative py-3 px-6 transition-all">Contraseña</th>
          <th className="relative py-3 px-6 transition-all">
            Fecha de Nacimiento
          </th>
          <th className="relative py-3 px-6 transition-all">Ubicación</th>
          <th className="relative py-3 px-6 transition-all">Dirección</th>
          <th className="relative py-3 px-6 transition-all">Referencia</th>
          <th className="relative py-3 px-6 transition-all text-center">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody className="">
        {data.map((user) => (
          <tr
            className="relative border-solid border-b border-b-[#e9ecef] text-sm text-[#8392ab]"
            key={user.id}
          >
            <td className="relative py-3 px-6 text-sm text-[#344767] font-semibold">
              {user.nombreUsuario}
            </td>
            <td className="relative py-3 px-6">{user.DNIRUCProveedor}</td>
            <td className="relative py-3 px-6">{user.emailUsuario}</td>
            <td className="relative py-3 px-6">{user.telefonoUsuario}</td>
            <td className="relative py-3 px-6">{user.claveUsuario}</td>
            <td className="relative py-3 px-6">{user.fechaUsuario}</td>
            <td className="relative py-3 px-6">
              {user.departamentoUsuario}-{user.provinciaUsuario}-
              {user.distritoUsuario}
            </td>
            <td className="relative py-3 px-6">{user.direccionUsuario}</td>
            <td className="relative py-3 px-6">{user.referencias}</td>
            <td className="acciones-container py-3 px-6">
              <div className="acciones flex text-lg">
                <IconUserEdit className="mr-2 transition-all hover:text-[#09C] cursor-pointer" />
                <Delete className="transition-all hover:text-red-500 cursor-pointer" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export interface Props {
  data: usuario[];
}
