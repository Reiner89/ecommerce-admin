import { useAdministracion } from "../../../../../../Hooks/useAdmin";
import { PagItem } from "./PagItem";

export const RenderItems = () => {
  const {
    vehsPageNow,
    pageStarVehs,
    pageEndVehs,
    cambiarPaginaVehs,
    totalPagesVehs,
  } = useAdministracion();

  // Arreglo para almecenar los botones de la paginacion
  const itemsButtonsMov: JSX.Element[] = [];

  // Boton Anterior (solo si no estamos en la primera pagina)
  if (vehsPageNow > 1) {
    itemsButtonsMov.push(
      <PagItem
        key="anterior"
        page={"<"}
        isActiva={false}
        onPageChange={() => cambiarPaginaVehs(vehsPageNow - 1)}
      />
    );
  }

  // Si la pagina visible no es la pagina 1, agregamos un boton para ir a la primer pagina
  if (pageStarVehs > 1) {
    itemsButtonsMov.push(
      <PagItem
        key={1}
        page={1}
        isActiva={vehsPageNow === 1}
        onPageChange={() => cambiarPaginaVehs(1)}
      />
    );

    // Si hay mas de 2 paginas ocultar, agregamos puntos suspensivos
    if (pageStarVehs > 2) {
      itemsButtonsMov.push(<span key="ellipsis-start">...</span>);
    }
  }

  // Paginas
  for (let i = pageStarVehs; i <= pageEndVehs; i++) {
    itemsButtonsMov.push(
      <PagItem
        key={i}
        page={i}
        isActiva={vehsPageNow === i}
        onPageChange={() => cambiarPaginaVehs(i)}
      />
    );
  }

  // Puntos suspensivos
  if (pageEndVehs < totalPagesVehs) {
    if (pageEndVehs < totalPagesVehs - 1)
      itemsButtonsMov.push(<span key="ellipsis-end">...</span>);

    // Agregamos un botón para la última página
    itemsButtonsMov.push(
      <PagItem
        key={totalPagesVehs}
        page={totalPagesVehs}
        isActiva={vehsPageNow === totalPagesVehs}
        onPageChange={() => cambiarPaginaVehs(totalPagesVehs)}
      />
    );
  }

  // Botón Siguiente (solo aparece si no estamos en la última página)
  if (vehsPageNow < totalPagesVehs) {
    itemsButtonsMov.push(
      <PagItem
        key="siguiente"
        page={">"}
        isActiva={false}
        onPageChange={() => cambiarPaginaVehs(vehsPageNow + 1)}
      />
    );
  }

  return <>{itemsButtonsMov}</>;
};
