import { Down } from "../../../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../../../Hooks/useAdmin";
import { SPagination } from "../Select/SPagination";

export const CantProvs = () => {
  const { refCantProvs, handleModalCantProvs, cantProvsPag } =
    useAdministracion();

  return (
    <div
      ref={refCantProvs}
      className="relative flex items-center text-xs text-[#8392ab] gap-2 cursor-pointer"
      onClick={handleModalCantProvs}
    >
      <div className="cantidad-movimientos-pagindos relative flex items-center gap-3 border border-solid border-[#dadce0] rounded px-2 py-1">
        <span className="">{cantProvsPag}</span>
        <Down />
        <SPagination />
      </div>
      <span className="">proveedores por pagina</span>
    </div>
  );
};
