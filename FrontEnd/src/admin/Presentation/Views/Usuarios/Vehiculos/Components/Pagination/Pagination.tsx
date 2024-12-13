import { useAdministracion } from "../../../../../Hooks/useAdmin";
import { RenderItems } from "./Components/RenderItems";

export const Pagination = () => {
  const { cantVehsPag, vehiculos } = useAdministracion();

  return (
    <div className="pagination-container w-full flex justify-between items-center">
      <div className="cantidad-vehiculos-container text-[#8392ab] text-sm">
        Mostrando {cantVehsPag} de {vehiculos.length} vehiculos
      </div>
      <div className="paginacion-vehiculos-container flex gap-0.5">
        {RenderItems()}
      </div>
    </div>
  );
};
