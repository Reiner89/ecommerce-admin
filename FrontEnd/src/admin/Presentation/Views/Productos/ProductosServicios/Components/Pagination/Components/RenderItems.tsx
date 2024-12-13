import { useProdServices } from "../../../Hooks/useProdServices";
import { PagItem } from "./PagItem";

export const RenderItems = () => {
  const {
    curPageProds,
    pageStarProd,
    pageEndProd,
    changeCurPageProds,
    totalProdPages,
  } = useProdServices();

  // Arreglo para almecenar los botones de la paginacion
  const itemsButtonsMov: JSX.Element[] = [];

  // Boton Anterior (solo si no estamos en la primera pagina)
  if (curPageProds > 1) {
    itemsButtonsMov.push(
      <PagItem
        key="anterior"
        page={"<"}
        isActiva={false}
        onPageChange={() => changeCurPageProds(curPageProds - 1)}
      />
    );
  }

  // Si la pagina visible no es la pagina 1, agregamos un boton para ir a la primer pagina
  if (pageStarProd > 1) {
    itemsButtonsMov.push(
      <PagItem
        key={1}
        page={1}
        isActiva={curPageProds === 1}
        onPageChange={() => changeCurPageProds(1)}
      />
    );

    // Si hay mas de 2 paginas ocultar, agregamos puntos suspensivos
    if (pageStarProd > 2) {
      itemsButtonsMov.push(<span key="ellipsis-start">...</span>);
    }
  }

  // Paginas
  for (let i = pageStarProd; i <= pageEndProd; i++) {
    itemsButtonsMov.push(
      <PagItem
        key={i}
        page={i}
        isActiva={curPageProds === i}
        onPageChange={() => changeCurPageProds(i)}
      />
    );
  }

  // Puntos suspensivos
  if (pageEndProd < totalProdPages) {
    if (pageEndProd < totalProdPages - 1)
      itemsButtonsMov.push(<span key="ellipsis-end">...</span>);

    // Agregamos un botón para la última página
    itemsButtonsMov.push(
      <PagItem
        key={totalProdPages}
        page={totalProdPages}
        isActiva={curPageProds === totalProdPages}
        onPageChange={() => changeCurPageProds(totalProdPages)}
      />
    );
  }

  // Botón Siguiente (solo aparece si no estamos en la última página)
  if (curPageProds < totalProdPages) {
    itemsButtonsMov.push(
      <PagItem
        key="siguiente"
        page={">"}
        isActiva={false}
        onPageChange={() => changeCurPageProds(curPageProds + 1)}
      />
    );
  }

  return <>{itemsButtonsMov}</>;
};
