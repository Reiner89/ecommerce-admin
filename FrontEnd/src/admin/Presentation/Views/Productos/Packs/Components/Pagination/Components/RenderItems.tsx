import { useProdServices } from "../../../../ProductosServicios/Hooks/useProdServices";
import { PagItem } from "./PagItem";

export const RenderItems = () => {
  const {
    curPagePacks,
    pageStarPacks,
    pageEndPacks,
    changeCurPagePacks,
    totalPacksPages,
  } = useProdServices();

  // Arreglo para almecenar los botones de la paginacion
  const itemsButtonsMov: JSX.Element[] = [];

  // Boton Anterior (solo si no estamos en la primera pagina)
  if (curPagePacks > 1) {
    itemsButtonsMov.push(
      <PagItem
        key="anterior"
        page={"<"}
        isActiva={false}
        onPageChange={() => changeCurPagePacks(curPagePacks - 1)}
      />
    );
  }

  // Si la pagina visible no es la pagina 1, agregamos un boton para ir a la primer pagina
  if (pageStarPacks > 1) {
    itemsButtonsMov.push(
      <PagItem
        key={1}
        page={1}
        isActiva={curPagePacks === 1}
        onPageChange={() => changeCurPagePacks(1)}
      />
    );

    // Si hay mas de 2 paginas ocultar, agregamos puntos suspensivos
    if (pageStarPacks > 2) {
      itemsButtonsMov.push(<span key="ellipsis-start">...</span>);
    }
  }

  // Paginas
  for (let i = pageStarPacks; i <= pageEndPacks; i++) {
    itemsButtonsMov.push(
      <PagItem
        key={i}
        page={i}
        isActiva={curPagePacks === i}
        onPageChange={() => changeCurPagePacks(i)}
      />
    );
  }

  // Puntos suspensivos
  if (pageEndPacks < totalPacksPages) {
    if (pageEndPacks < totalPacksPages - 1)
      itemsButtonsMov.push(<span key="ellipsis-end">...</span>);

    // Agregamos un botón para la última página
    itemsButtonsMov.push(
      <PagItem
        key={totalPacksPages}
        page={totalPacksPages}
        isActiva={curPagePacks === totalPacksPages}
        onPageChange={() => changeCurPagePacks(totalPacksPages)}
      />
    );
  }

  // Botón Siguiente (solo aparece si no estamos en la última página)
  if (curPagePacks < totalPacksPages) {
    itemsButtonsMov.push(
      <PagItem
        key="siguiente"
        page={">"}
        isActiva={false}
        onPageChange={() => changeCurPagePacks(curPagePacks + 1)}
      />
    );
  }

  return <>{itemsButtonsMov}</>;
};
