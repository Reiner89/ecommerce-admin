import { Down } from "../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../Hooks/useStock";
import { SPagination } from "../Select/SPagination";

export const CantOrdenes = () => {
  const { refCantDesp, handleModalCantDesp, cantDespPag } = useStock();

  return (
    <div
      ref={refCantDesp}
      className="relative flex items-center text-xs text-[#8392ab] gap-2 cursor-pointer"
      onClick={handleModalCantDesp}
    >
      <div className="cantidad-vehiculos-pagindos relative flex items-center gap-3 border border-solid border-[#dadce0] rounded px-2 py-1">
        <span className="">{cantDespPag}</span>
        <Down />
        <SPagination />
      </div>
      <span className="">lista de ordenes por pagina</span>
    </div>
  );
};
