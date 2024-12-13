import { Agregar, IconBuscador } from "../../../../../Components/Icons/Iconos";
import { ButtonFilter } from "../../../ProductosServicios/Components";
import { FilterTable } from "../../../ProductosServicios/Components/Header/Components/FilterTable";
import { useProdServices } from "../../../ProductosServicios/Hooks/useProdServices";
import { CantPacks } from "../Modal/CantPacks";
import { Estado, Tipo } from "../Select";

export const TableHeader = () => {
  const {
    openFormPack,
    cantPacks,
    inputRefPack,
    activeInputPack,
    openInputPack,
    tipoPack,
    estadoPack,
    handleTiposPack,
    handleEstadosPack,
    modalEstadosPack,
    modalTiposPack,
    refEstadoPack,
    refTipoPack,
  } = useProdServices();

  return (
    <div className="relative w-full flex flex-col gap-5 p-4">
      <div className="top-iman-header flex gap-10">
        <div className="cantidad-prods-pags">
          <CantPacks />
        </div>
        <div ref={refEstadoPack} className="container-estados relative">
          <FilterTable
            txtBtn={estadoPack}
            label="Estado"
            modal={modalEstadosPack}
            openModal={handleEstadosPack}
          />
          <Estado />
        </div>
        <div ref={refTipoPack} className="container-tipos relative">
          <FilterTable
            txtBtn={tipoPack}
            label="Tipo"
            modal={modalTiposPack}
            openModal={handleTiposPack}
          />
          <Tipo />
        </div>
      </div>
      <div className="bottom-main-header flex justify-between items-center">
        <div className="cont-izquierda flex items-end">
          <div
            ref={inputRefPack}
            className={`cont-buscador relative transition-all duration-300 h-[37px] ${
              activeInputPack ? "w-[240px]" : "w-[180px]"
            }`}
            onClick={openInputPack}
          >
            <label
              htmlFor="buscador"
              className="inline-flex h-full w-full pl-3 pr-4 bg-[#e5e9ed] rounded-[12px]"
            >
              <i className="relative flex items-center text-[1.15rem] text-[#666] mr-3">
                <IconBuscador />
              </i>
              <input
                type="text"
                id="buscador"
                placeholder="Buscar..."
                className="w-full h-full text-[.875rem] text-[#000000de] bg-transparent outline-none"
              />
            </label>
          </div>
          <div className="cont-filtro hidden border-b border-[#e0e0e0] w-fit h-[38px] ml-3 md:block">
            <div className="relative flex gap-4 w-full h-full">
              <ButtonFilter label={cantPacks.txt} cantidad={cantPacks.cant} />
            </div>
          </div>
        </div>
        <div className="cont-derecha relative">
          <div
            className="relative flex items-center text-[#fff] bg-[#09c] px-4 min-h-10 rounded-xl hover:bg-[#04789e] transition-all duration-300 cursor-pointer"
            onClick={openFormPack}
          >
            <span className="relative mr-2 text-[1.125rem]">
              <Agregar />
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
