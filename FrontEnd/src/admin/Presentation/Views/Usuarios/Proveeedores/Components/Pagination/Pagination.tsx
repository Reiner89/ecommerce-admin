import { useAdministracion } from "../../../../../Hooks/useAdmin";
import { RenderItems } from "./Components/RenderItems";

export const Pagination = () => {
  const { cantProvsPag, proveedores } = useAdministracion();

  return (
    <div className="pagination-container w-full flex justify-between items-center">
      <div className="cantidad-proveedores-container text-[#8392ab] text-sm">
        Mostrando {cantProvsPag} de {proveedores.length} proveedores
      </div>
      <div className="paginacion-proveedores-container flex gap-0.5">
        {RenderItems()}
      </div>
    </div>
  );
};
