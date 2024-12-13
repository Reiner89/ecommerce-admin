import { useStock } from "../../../../../../../Hooks/useStock";
import { PagItem } from "./PagItem";

export const RenderItems = () => {
  const {
    despPageNow,
    pageStartDesp,
    pageEndDesp,
    cambiarPaginaDespacho,
    totalPagesDesp,
  } = useStock();

  // Arreglo para almecenar los botones de la paginacion
  const itemsButtonsMov: JSX.Element[] = [];

  // Boton Anterior (solo si no estamos en la primera pagina)
  if (despPageNow > 1) {
    itemsButtonsMov.push(
      <PagItem
        key="anterior"
        page={"<"}
        isActiva={false}
        onPageChange={() => cambiarPaginaDespacho(despPageNow - 1)}
      />
    );
  }

  // Si la pagina visible no es la pagina 1, agregamos un boton para ir a la primer pagina
  if (pageStartDesp > 1) {
    itemsButtonsMov.push(
      <PagItem
        key={1}
        page={1}
        isActiva={despPageNow === 1}
        onPageChange={() => cambiarPaginaDespacho(1)}
      />
    );

    // Si hay mas de 2 paginas ocultar, agregamos puntos suspensivos
    if (pageStartDesp > 2) {
      itemsButtonsMov.push(<span key="ellipsis-start">...</span>);
    }
  }

  // Paginas
  for (let i = pageStartDesp; i <= pageEndDesp; i++) {
    itemsButtonsMov.push(
      <PagItem
        key={i}
        page={i}
        isActiva={despPageNow === i}
        onPageChange={() => cambiarPaginaDespacho(i)}
      />
    );
  }

  // Puntos suspensivos
  if (pageEndDesp < totalPagesDesp) {
    if (pageEndDesp < totalPagesDesp - 1)
      itemsButtonsMov.push(<span key="ellipsis-end">...</span>);

    // Agregamos un botón para la última página
    itemsButtonsMov.push(
      <PagItem
        key={totalPagesDesp}
        page={totalPagesDesp}
        isActiva={despPageNow === totalPagesDesp}
        onPageChange={() => cambiarPaginaDespacho(totalPagesDesp)}
      />
    );
  }

  // Botón Siguiente (solo aparece si no estamos en la última página)
  if (despPageNow < totalPagesDesp) {
    itemsButtonsMov.push(
      <PagItem
        key="siguiente"
        page={">"}
        isActiva={false}
        onPageChange={() => cambiarPaginaDespacho(despPageNow + 1)}
      />
    );
  }

  return <>{itemsButtonsMov}</>;
};
