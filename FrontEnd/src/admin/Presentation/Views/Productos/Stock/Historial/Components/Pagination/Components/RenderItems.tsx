import { useStock } from "../../../../../../../Hooks/useStock";
import { PagItem } from "./PagItem";

export const RenderItems = () => {
  const { curPageM, pageStarMov, pageEndMov, changeCurPageM, totalMovPages } =
    useStock();

  // Arreglo para almecenar los botones de la paginacion
  const itemsButtonsMov: JSX.Element[] = [];

  // Boton Anterior (solo si no estamos en la primera pagina)
  if (curPageM > 1) {
    itemsButtonsMov.push(
      <PagItem
        key="anterior"
        page={"<"}
        isActiva={false}
        onPageChange={() => changeCurPageM(curPageM - 1)}
      />
    );
  }

  // Si la pagina visible no es la pagina 1, agregamos un boton para ir a la primer pagina
  if (pageStarMov > 1) {
    itemsButtonsMov.push(
      <PagItem
        key={1}
        page={1}
        isActiva={curPageM === 1}
        onPageChange={() => changeCurPageM(1)}
      />
    );

    // Si hay mas de 2 paginas ocultar, agregamos puntos suspensivos
    if (pageStarMov > 2) {
      itemsButtonsMov.push(<span key="ellipsis-start">...</span>);
    }
  }

  // Paginas
  for (let i = pageStarMov; i <= pageEndMov; i++) {
    itemsButtonsMov.push(
      <PagItem
        key={i}
        page={i}
        isActiva={curPageM === i}
        onPageChange={() => changeCurPageM(i)}
      />
    );
  }

  // Puntos suspensivos
  if (pageEndMov < totalMovPages) {
    if (pageEndMov < totalMovPages - 1)
      itemsButtonsMov.push(<span key="ellipsis-end">...</span>);

    // Agregamos un botón para la última página
    itemsButtonsMov.push(
      <PagItem
        key={totalMovPages}
        page={totalMovPages}
        isActiva={curPageM === totalMovPages}
        onPageChange={() => changeCurPageM(totalMovPages)}
      />
    );
  }

  // Botón Siguiente (solo aparece si no estamos en la última página)
  if (curPageM < totalMovPages) {
    itemsButtonsMov.push(
      <PagItem
        key="siguiente"
        page={">"}
        isActiva={false}
        onPageChange={() => changeCurPageM(curPageM + 1)}
      />
    );
  }

  return <>{itemsButtonsMov}</>;
};
