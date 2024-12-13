import {
  Activar,
  Desactivar,
  FileCsv,
  IconBuscador,
  Refresh,
} from "../../../Components/Icons/Iconos";
import { Layout } from "../../../Layout/Layout";
import { Table } from "./Table/Table";
import moment from "moment";

export const Descuentos = () => {
  return (
    <Layout
      areaPadre="Productos"
      areaPagina="Lista de Precios"
      children={
        <>
          <div className="flex flex-col gap-5">
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
                        type="text"
                        id="buscador_listaPrecios"
                        placeholder="Buscar..."
                        className="w-full h-full text-[.875rem] text-[#000000de] bg-transparent outline-none"
                      />
                    </label>
                  </div>
                  <div className="container-excel px-[10px] mx-3 p-3 text-lg bg-[#e5e9ed] rounded-xl cursor-pointer text-green-600 transition-colors">
                    <FileCsv />
                  </div>
                </div>
                <div className="cont-acciones flex items-center gap-5 text-lg text-[#8392ab]">
                  <div className="input-margen-masivo relative w-[85px]">
                    <label htmlFor="margen_masivo" className="hidden">
                      Margen %
                    </label>
                    <input
                      type="text"
                      id="margen_masivo"
                      className="bg-transparent border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                      placeholder="Margen %"
                      required
                    />
                  </div>
                  <div className="input-margen-masivo relative w-[105px]">
                    <label htmlFor="descuento_masivo" className="hidden">
                      Descuento
                    </label>
                    <input
                      type="text"
                      id="descuento_masivo"
                      className="bg-transparent border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                      placeholder="Descuento %"
                      required
                    />
                  </div>
                  <div className="input-margen-masivo relative w-[130px]">
                    <label htmlFor="vigencia_masivo" className="hidden">
                      Vigencia
                    </label>
                    <input
                      type="date"
                      id="vigencia_masivo"
                      className="bg-transparent border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                      required
                      min={moment().format("YYYY-MM-DD")}
                    />
                  </div>
                  <div className="container-acciones flex items-center justify-center gap-5 text-lg">
                    <button
                      onClick={() => {
                        console.log("Activar");
                      }}
                      type="button"
                      className="transition-colors hover:text-green-500"
                    >
                      <Activar />
                    </button>
                    <button
                      onClick={() => {
                        console.log("Desactivar");
                      }}
                      type="button"
                      className="transition-colors hover:text-red-500"
                    >
                      <Desactivar />
                    </button>
                    <button
                      onClick={() => {
                        console.log("Editar");
                      }}
                      type="button"
                      className="transition-colors hover:text-[#09c]"
                    >
                      <Refresh />
                    </button>
                  </div>
                </div>
              </div>
              <Table />
            </div>
          </div>
        </>
      }
    />
  );
};
