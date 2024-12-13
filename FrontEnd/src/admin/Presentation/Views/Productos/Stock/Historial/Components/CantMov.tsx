import { useStock } from "../../../../../Hooks/useStock";
import { SelectPagination } from "./Select/SelectPagination";
import * as Icon from "../../../../../Components/Icons/Iconos";

export const CantMov = () => {
  const { RefModalPagMov, showModalPagMov, movPerPage } = useStock();

  return (
    <div className="flex justify-between">
      <div
        ref={RefModalPagMov}
        className="relative flex items-center text-xs text-[#8392ab] gap-2 cursor-pointer"
        onClick={showModalPagMov}
      >
        <div className="cantidad-movimientos-pagindos relative flex items-center gap-3 border border-solid border-[#dadce0] rounded px-2 py-1">
          <span className="">{movPerPage}</span>
          <Icon.Down />
          <SelectPagination />
        </div>
        <span className="">movimientos por pagina</span>
      </div>
    </div>
  );
};
