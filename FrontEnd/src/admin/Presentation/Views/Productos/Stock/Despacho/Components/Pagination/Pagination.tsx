import { useStock } from "../../../../../../Hooks/useStock";
import { RenderItems } from "./Components/RenderItems";

export const Pagination = () => {
  const { cantDespPag, despachos } = useStock();

  return (
    <div className="pagination-container w-full flex justify-between items-center">
      <div className="cantidad-ordenes-container text-[#8392ab] text-sm">
        Mostrando {cantDespPag} de {despachos.length} ordenes
      </div>
      <div className="paginacion-ordenes-container flex gap-0.5">
        {RenderItems()}
      </div>
    </div>
  );
};
