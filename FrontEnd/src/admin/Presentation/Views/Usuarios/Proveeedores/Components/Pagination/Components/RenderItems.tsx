import { useAdministracion } from "../../../../../../Hooks/useAdmin";
import { PagItem } from "./PagItem";

export const RenderItems = () => {
  const {
    provsPageNow,
    pageStarProvs,
    pageEndProvs,
    cambiarPagina,
    totalPagesProvs,
  } = useAdministracion();

  // Arreglo para almecenar los botones de la paginacion
  const itemsButtonsMov: JSX.Element[] = [];

  // Boton Anterior (solo si no estamos en la primera pagina)
  if (provsPageNow > 1) {
    itemsButtonsMov.push(
      <PagItem
        key="anterior"
        page={"<"}
        isActiva={false}
        onPageChange={() => cambiarPagina(provsPageNow - 1)}
      />
    );
  }

  // Si la pagina visible no es la pagina 1, agregamos un boton para ir a la primer pagina
  if (pageStarProvs > 1) {
    itemsButtonsMov.push(
      <PagItem
        key={1}
        page={1}
        isActiva={provsPageNow === 1}
        onPageChange={() => cambiarPagina(1)}
      />
    );

    // Si hay mas de 2 paginas ocultar, agregamos puntos suspensivos
    if (pageStarProvs > 2) {
      itemsButtonsMov.push(<span key="ellipsis-start">...</span>);
    }
  }

  // Paginas
  for (let i = pageStarProvs; i <= pageEndProvs; i++) {
    itemsButtonsMov.push(
      <PagItem
        key={i}
        page={i}
        isActiva={provsPageNow === i}
        onPageChange={() => cambiarPagina(i)}
      />
    );
  }

  // Puntos suspensivos
  if (pageEndProvs < totalPagesProvs) {
    if (pageEndProvs < totalPagesProvs - 1)
      itemsButtonsMov.push(<span key="ellipsis-end">...</span>);

    // Agregamos un botón para la última página
    itemsButtonsMov.push(
      <PagItem
        key={totalPagesProvs}
        page={totalPagesProvs}
        isActiva={provsPageNow === totalPagesProvs}
        onPageChange={() => cambiarPagina(totalPagesProvs)}
      />
    );
  }

  // Botón Siguiente (solo aparece si no estamos en la última página)
  if (provsPageNow < totalPagesProvs) {
    itemsButtonsMov.push(
      <PagItem
        key="siguiente"
        page={">"}
        isActiva={false}
        onPageChange={() => cambiarPagina(provsPageNow + 1)}
      />
    );
  }

  return <>{itemsButtonsMov}</>;
};
