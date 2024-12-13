import { useStock } from "../../../../../../../Hooks/useStock";
import { PagItem } from "./PagItem";

export const RenderItems = () => {
  const {
    curPageMat,
    pageStartMat,
    pageEndMat,
    changeCurPageMat,
    totalMatPages,
  } = useStock();

  // Arreglo para almecenar los botones de la paginacion
  const itemsButtonsMov: JSX.Element[] = [];

  // Boton Anterior (solo si no estamos en la primera pagina)
  if (curPageMat > 1) {
    itemsButtonsMov.push(
      <PagItem
        key="anterior"
        page={"<"}
        isActiva={false}
        onPageChange={() => changeCurPageMat(curPageMat - 1)}
      />
    );
  }

  // Si la pagina visible no es la pagina 1, agregamos un boton para ir a la primer pagina
  if (pageStartMat > 1) {
    itemsButtonsMov.push(
      <PagItem
        key={1}
        page={1}
        isActiva={curPageMat === 1}
        onPageChange={() => changeCurPageMat(1)}
      />
    );

    // Si hay mas de 2 paginas ocultar, agregamos puntos suspensivos
    if (pageStartMat > 2) {
      itemsButtonsMov.push(<span key="ellipsis-start">...</span>);
    }
  }

  // Paginas
  for (let i = pageStartMat; i <= pageEndMat; i++) {
    itemsButtonsMov.push(
      <PagItem
        key={i}
        page={i}
        isActiva={curPageMat === i}
        onPageChange={() => changeCurPageMat(i)}
      />
    );
  }

  // Puntos suspensivos
  if (pageEndMat < totalMatPages) {
    if (pageEndMat < totalMatPages - 1)
      itemsButtonsMov.push(<span key="ellipsis-end">...</span>);

    // Agregamos un botón para la última página
    itemsButtonsMov.push(
      <PagItem
        key={totalMatPages}
        page={totalMatPages}
        isActiva={curPageMat === totalMatPages}
        onPageChange={() => changeCurPageMat(totalMatPages)}
      />
    );
  }

  // Botón Siguiente (solo aparece si no estamos en la última página)
  if (curPageMat < totalMatPages) {
    itemsButtonsMov.push(
      <PagItem
        key="siguiente"
        page={">"}
        isActiva={false}
        onPageChange={() => changeCurPageMat(curPageMat + 1)}
      />
    );
  }

  return <>{itemsButtonsMov}</>;
};
