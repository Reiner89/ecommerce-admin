import { useStock } from "../../../../../../Hooks/useStock";
import { RenderItems } from "./Components/RenderItems";

export const Pagination = () => {
  const { matPerPage, matData } = useStock();

  return (
    <div className="pagination-container w-full flex justify-between items-center">
      <div className="cantidad-movimientos-container text-[#8392ab] text-sm">
        Mostrando {matPerPage} de {matData ? matData.length : 0} movimientos
      </div>
      <div className="paginacion-movimientos-container flex gap-0.5">
        {RenderItems()}
      </div>
    </div>
  );
};
