import { Down } from "../../../../../../Components/Icons/Iconos";
import { useProdServices } from "../../../Hooks/useProdServices";
import { SelectProdsPag } from "../../Select/SelectProdsPag";

export const CantProductos = () => {
  const { refModalPageProds, showModalProdMov, prodsPerPage } =
    useProdServices();

  return (
    <div
      ref={refModalPageProds}
      className="relative flex items-center text-xs text-[#8392ab] gap-2 cursor-pointer"
      onClick={showModalProdMov}
    >
      <div className="cantidad-movimientos-pagindos relative flex items-center gap-3 border border-solid border-[#dadce0] rounded px-2 py-1">
        <span className="">{prodsPerPage}</span>
        <Down />
        <SelectProdsPag />
      </div>
      <span className="">productos por página</span>
    </div>
  );
};
