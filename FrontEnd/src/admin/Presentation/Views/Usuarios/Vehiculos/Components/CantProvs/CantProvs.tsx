import { Down } from "../../../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../../../Hooks/useAdmin";
import { SPagination } from "../Select/SPagination";

export const CantProvs = () => {
  const { refCantVehs, handleModalCantVehs, cantVehsPag } = useAdministracion();

  return (
    <div
      ref={refCantVehs}
      className="relative flex items-center text-xs text-[#8392ab] gap-2 cursor-pointer"
      onClick={handleModalCantVehs}
    >
      <div className="cantidad-vehiculos-pagindos relative flex items-center gap-3 border border-solid border-[#dadce0] rounded px-2 py-1">
        <span className="">{cantVehsPag}</span>
        <Down />
        <SPagination />
      </div>
      <span className="">vehículos por pagina</span>
    </div>
  );
};
