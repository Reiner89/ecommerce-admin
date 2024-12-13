import * as Icon from "../../../../../Components/Icons/Iconos";
import { Buscador } from "../../../../../Components";
import { ButtonFilter } from "../ButtonFilter";
import { useProdServices } from "../../Hooks/useProdServices";
import { FilterTable } from "./Components/FilterTable";
import { CantProductos } from "../Modals/CantProductos/CantProductos";
import { FilTipos, FitEstado } from "../Modals";

export const TableHeader = () => {
  // Hoock personalizado
  const {
    searchRef,
    searchActive,
    activeSearch,
    openFormProd,
    cantProds,
    estadoActivo,
    tipoActivo,
    modalFiltroEstados,
    handleFiltroEstados,
    modalFiltroTipos,
    handleFiltroTipos,
    refFiltroEstados,
    refFiltroTipo,
  } = useProdServices();
  return (
    <div className="relative py-5 px-4 flex flex-col gap-5">
      <div className="relative flex gap-10">
        <div className="cantidad-prods-pags">
          <CantProductos />
        </div>
        <div ref={refFiltroEstados} className="container-estados">
          <FilterTable
            txtBtn={estadoActivo}
            label="Estado:"
            modal={modalFiltroEstados}
            openModal={handleFiltroEstados}
          />
          <FitEstado showModal={modalFiltroEstados} />
        </div>
        <div ref={refFiltroTipo} className="container-tipos">
          <FilterTable
            txtBtn={tipoActivo}
            label="Tipo:"
            modal={modalFiltroTipos}
            openModal={handleFiltroTipos}
          />
          <FilTipos showModal={modalFiltroTipos} />
        </div>
      </div>
      <div className="relative w-full flex flex-col gap-y-4 sm:flex-row sm:justify-between sm:items-center">
        <div className="cont-izquierda flex items-end">
          <Buscador
            htmlRef={searchRef}
            active={searchActive}
            changeActive={activeSearch}
          />
          <div className="cont-filtro hidden border-b border-[#e0e0e0] w-fit h-[38px] ml-3 md:block">
            <div className="relative flex gap-4 w-full h-full">
              <ButtonFilter label={cantProds.txt} cantidad={cantProds.cant} />
            </div>
          </div>
        </div>
        <div className="cont-derecha relative">
          <div
            className="relative flex items-center text-[#fff] bg-[#09c] px-4 min-h-10 rounded-xl hover:bg-[#04789e] transition-all duration-300 cursor-pointer"
            onClick={openFormProd}
          >
            <span className="relative mr-2 text-[1.125rem]">
              <Icon.Agregar />
            </span>
            <span className="relative text-[.875rem] font-semibold ">
              Crear
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
