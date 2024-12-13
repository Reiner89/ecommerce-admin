import { Down } from "../../../../../Components/Icons/Iconos";
import { useProdServices } from "../../../ProductosServicios/Hooks/useProdServices";
import { SelectPacksPag } from "../Select/SelectPacksPag";

export const CantPacks = () => {
  const { refModalPagePacks, showModalPacksMov, packsPerPage } =
    useProdServices();

  return (
    <div
      ref={refModalPagePacks}
      className="relative flex items-center text-xs text-[#8392ab] gap-2 cursor-pointer"
      onClick={showModalPacksMov}
    >
      <div className="cantidad-movimientos-pagindos relative flex items-center gap-3 border border-solid border-[#dadce0] rounded px-2 py-1">
        <span className="">{packsPerPage}</span>
        <Down />
        <SelectPacksPag />
      </div>
      <span className="">packs por página</span>
    </div>
  );
};
