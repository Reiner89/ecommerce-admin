import { Delete, IconUserEdit } from "../../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../../Hooks/useAdmin";
import { usuario } from "../Data/Reportes";

export const TableReportes = ({ data }: Props) => {
  const { openFormUsuarios } = useAdministracion();

  return (
    <table className="w-full table-fixed whitespace-nowrap block">
      <thead className="">
        <tr className="relative text-left text-[.65rem] text-[#8392ab] font-bold uppercase opacity-70 border-solid border-b border-b-[#e9ecef]">
          <th className="py-3 px-6">Foto</th>
          <th className="py-3 px-6">DNI/RUC</th>
          <th className="py-3 px-6">Nombre</th>
          <th className="py-3 px-6">Apellido</th>
          <th className="py-3 px-6">Cargo</th>
          <th className="py-3 px-6">Área</th>
          <th className="py-3 px-6">Email Corporativo</th>
          <th className="py-3 px-6">fecha de creacion</th>
          <th className="py-3 px-6">Ubicación</th>
          <th className="py-3 px-6">Dirección</th>
          <th className="py-3 px-6">Acciones</th>
        </tr>
      </thead>
      <tbody className="">
        {data.map((user) => (
          <tr
            className="text-[.875rem] text-left leading-[1.5] font-normal border-b cursor-pointer hover:bg-gray-100"
            key={user.id}
          >
            <td className="py-3 pl-6">
              <div className="user-foto">
                <img
                  className="w-[36px] h-[36px] rounded-xl"
                  src={
                    user.fotoUsuario && user.fotoUsuario instanceof File
                      ? URL.createObjectURL(user.fotoUsuario)
                      : user.fotoUsuario || ""
                  }
                  alt="Foto de perfil de usuario"
                />
              </div>
            </td>
            <td className="py-3 px-6">{user.DNIUsuario}</td>
            <td className="py-3 px-6">
              <h6 className="relative text-sm text-[#344767] font-semibold">
                {user.nombreUsuario}
              </h6>
            </td>
            <td className="py-3 px-6">{user.apellidosUsuario}</td>
            <td className="py-3 px-6">{user.cargoUsuario}</td>
            <td className="py-3 px-6">{user.areaUsuario}</td>
            <td className="py-3 px-6">{user.emailUsuario}</td>
            <td className="py-3 px-6">{user.fechaUsuario}</td>
            <td className="py-3 px-6">
              {user.departamentoUsuario}-{user.provinciaUsuario}-
              {user.distritoUsuario}
            </td>
            <td className="py-3 px-6">{user.direccionUsuario}</td>
            <td className="py-3 px-6">
              <div className="acciones-container flex items-center justify-left text-lg gap-3">
                <div
                  onClick={openFormUsuarios(user)}
                  className="relative hover:text-[#09c] transition-colors cursor-pointer"
                >
                  <IconUserEdit />
                </div>
                <div
                  onClick={() => console.log(user.id)}
                  className="relative hover:text-red-500 transition-colors cursor-pointer"
                >
                  <Delete />
                </div>
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
