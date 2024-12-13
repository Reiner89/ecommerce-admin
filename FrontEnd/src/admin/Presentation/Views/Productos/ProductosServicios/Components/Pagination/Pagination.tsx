import { useProdServices } from "../../Hooks/useProdServices";
import { RenderItems } from "./Components/RenderItems";

export const Pagination = () => {
  const { prodsPerPage, tableProductos } = useProdServices();

  return (
    <div className="pagination-container w-full flex justify-between items-center">
      <div className="cantidad-products-container text-[#8392ab] text-sm">
        Mostrando {prodsPerPage} de {tableProductos.length} productos
      </div>
      <div className="paginacion-products-container flex gap-0.5">
        {RenderItems()}
      </div>
    </div>
  );
};
