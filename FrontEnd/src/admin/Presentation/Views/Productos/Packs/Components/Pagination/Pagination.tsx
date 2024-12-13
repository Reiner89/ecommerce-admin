import { useProdServices } from "../../../ProductosServicios/Hooks/useProdServices";
import { RenderItems } from "./Components/RenderItems";

export const Pagination = () => {
  const { packsPerPage, tablePacks } = useProdServices();

  return (
    <div className="pagination-container w-full flex justify-between items-center">
      <div className="cantidad-products-container text-[#8392ab] text-sm">
        Mostrando {packsPerPage} de {tablePacks.length} packs
      </div>
      <div className="paginacion-products-container flex gap-0.5">
        {RenderItems()}
      </div>
    </div>
  );
};
