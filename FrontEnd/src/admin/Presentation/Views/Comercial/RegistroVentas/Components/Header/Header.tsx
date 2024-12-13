import { FileCsv, IconBuscador } from "../../../../../Components/Icons/Iconos";
import { inputDate, labelDate } from "../../../../../Styles/Actions";

export const Header = () => {
  return (
    <div className="top-registro-ventas flex justify-between">
      <div className="left-container flex gap-5 items-center">
        <div className="cont-buscador relative transition-all duration-300 h-full w-[240px]">
          <label
            htmlFor="buscador_listaPrecios"
            className="inline-flex h-full w-full pl-3 pr-4 bg-[#e5e9ed] rounded-[12px]"
          >
            <i className="relative flex items-center text-[1.15rem] text-[#666] mr-3">
              <IconBuscador />
            </i>
            <input
              type="text"
              id="buscador_listaPrecios"
              placeholder="Buscar..."
              className="w-full h-full text-[.875rem] text-[#000000de] bg-transparent outline-none"
            />
          </label>
        </div>
      </div>
      <div className="right-container flex items-center gap-5 text-lg text-[#8392ab]">
        <div className="relative w-full">
          <input
            type="date"
            id="RVentasDesde"
            className={inputDate}
            placeholder=""
          />
          <label htmlFor="RVentasDesde" className={labelDate}>
            Desde:
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="date"
            id="RVentasHasta"
            className={inputDate}
            placeholder=""
          />
          <label htmlFor="RVentasHasta" className={labelDate}>
            Hasta:
          </label>
        </div>
        <div className="container-excel px-[10px] mx-3 p-3 text-lg bg-[#e5e9ed] rounded-xl cursor-pointer transition-colors">
          <FileCsv />
        </div>
      </div>
    </div>
  );
};
