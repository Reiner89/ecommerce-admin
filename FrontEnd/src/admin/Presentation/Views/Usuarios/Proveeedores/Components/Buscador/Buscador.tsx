import { IconBuscador } from "../../../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../../../Hooks/useAdmin";

export const Buscador = () => {
  const { searchProv, capturarBusqueda } = useAdministracion();

  return (
    <label
      htmlFor="buscarProveedores"
      className="inline-flex h-full w-full pl-3 pr-4 bg-[#e5e9ed] rounded-[12px]"
    >
      <i className="relative flex items-center text-[1.15rem] text-[#666] mr-3">
        <IconBuscador />
      </i>
      <input
        type="text"
        id="buscarProveedores"
        placeholder="Buscar..."
        onChange={capturarBusqueda}
        value={searchProv}
        className="w-full h-full text-[.875rem] text-[#000000de] bg-transparent outline-none"
      />
    </label>
  );
};
