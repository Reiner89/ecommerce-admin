import {
  IconoRegistroEnvio,
  FileCsv,
  IconBuscador,
} from "../../../../Components/Icons/Iconos";
import { Table } from "./Components/Table/Table";
import { Layout } from "../../../../Layout/Layout";
import { AsignarDespacho } from "./Components/Modals/AsignarDespacho";
import { useStock } from "../../../../Hooks/useStock";
import { Toaster } from "sonner";
import { Pagination } from "./Components/Pagination/Pagination";
import { buttonAction } from "../../../../Styles/Actions";
import { CantOrdenes } from "./Components/CantOrdenes/CantOrdenes";

export const ListaOrdenes = () => {
  const { handleAsignarDespacho, searchDesp, capturarDespacho } = useStock();

  return (
    <Layout
      areaPadre="Stock"
      areaPagina="Lista de Ordenes"
      children={
        <>
          <Toaster richColors position="bottom-right" />
          <div className="historial-movimientos-container flex flex-col gap-5">
            <div className="relative flex flex-col gap-5 bg-white rounded-lg p-5">
              <div className="w-full flex justify-between">
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
                        className="w-full h-full text-[.875rem] text-[#000000de] bg-transparent outline-none"
                        type="text"
                        id="buscador_listaPrecios"
                        placeholder="Buscar..."
                        value={searchDesp}
                        onChange={capturarDespacho}
                      />
                    </label>
                  </div>
                  <button className={buttonAction} type="button">
                    <FileCsv className="mr-2" />
                    Exportar a CSV
                  </button>
                </div>
                <div className="cont-acciones flex items-center gap-5 text-lg text-[#8392ab]">
                  <CantOrdenes />
                  <div
                    onClick={handleAsignarDespacho}
                    className="container-excel px-[10px] mx-3 p-3 text-lg text-[#67748e] bg-[#e5e9ed] rounded-xl cursor-pointer"
                  >
                    <IconoRegistroEnvio />
                  </div>
                </div>
              </div>
              <Table />
              <Pagination />
            </div>
          </div>
          <AsignarDespacho />
        </>
      }
    />
  );
};
