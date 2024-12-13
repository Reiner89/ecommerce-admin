import { useContext } from "react";
import {
  IconFB,
  IconInstagram,
  IconTwitter,
  IconUserEdit,
} from "../../../../Components/Icons/Iconos";
import { AuthContext } from "../../../../Context/Auth/AuthContext";

export const ProfileInformation = () => {
  // AuthContext
  const { auth } = useContext(AuthContext);

  return (
    <div className="container-informacion-perfil w-full sm:w-[54%] max-w-full px-3">
      <div className="informacion card relative flex flex-col h-full bg-white rounded-2xl">
        <div className="header-informacion relative flex justify-between p-4 pb-0 transition-all">
          <h6 className="relative text-base text-[#344767] font-semibold transition-all">
            Información del Usuario
          </h6>
          <IconUserEdit className="relative cursor-pointer" />
        </div>
        <div className="body-informacion relative p-4 flex flex-col">
          <div className="body-informacion-top h-36">
            <p className="descripcion text-sm leading-6 font-normal mb-4">
              {auth.biografia_usuario}
            </p>
          </div>
          <hr className="bg-[linear-gradient(90deg,transparent,rgba(0,0,0,.1),transparent)] opacity-25" />
          <ul className="container-informacion-usuario flex flex-col">
            <li className="full-name relative block text-sm leading-6 py-1.5">
              <strong className="relative text-[#344767] text-sm leading-6 mr-2 transition-all">
                Área:
              </strong>
              {auth.nombre_area}
            </li>
            <li className="mobile relative block text-sm leading-6 py-1.5">
              <strong className="relative text-[#344767] text-sm leading-6 mr-2 transition-all">
                Celular:
              </strong>
              +51 922 267 932
            </li>
            <li className="email relative block text-sm leading-6 py-1.5">
              <strong className="relative text-[#344767] text-sm leading-6 mr-2 transition-all">
                Email Corporativo:
              </strong>
              {auth.correo_corporativo_usuario}
            </li>
            <li className="location relative block text-sm leading-6 py-1.5">
              <strong className="relative text-[#344767] text-sm leading-6 mr-2 transition-all">
                Ubicación:
              </strong>
              {auth.departamento_ubigeo} - {auth.provincia_ubigeo} -
              {auth.distrito_ubigeo}
            </li>
            <li className="social relative flex items-center text-sm leading-6 py-1.5">
              <strong className="relative text-[#344767] text-sm leading-6 mr-2 transition-all">
                Redes Sociales:
              </strong>
              <div className="socials flex gap-x-2">
                <IconFB className="relative cursor-pointer" />
                <IconTwitter className="relative cursor-pointer" />
                <IconInstagram className="relative cursor-pointer" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
