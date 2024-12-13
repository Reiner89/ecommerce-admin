import { Seriales } from "../../../../../../../../../Interfaces/Productos/Productos";
import { Down } from "../../../../../../../../Components/Icons/Iconos";
import * as Styles from "../../../../../../../../Styles/Actions";
import { SCategoria } from "../../../../../Components/Select/SCategoria";
import { SColores } from "../../../../../Components/Select/SColores";
import { SMarca } from "../../../../../Components/Select/SMarca";
import { SSubCategoria } from "../../../../../Components/Select/SSubCategoria";
import { useProdServices } from "../../../../../Hooks/useProdServices";

export const RightNuevo = () => {
  // Uso mi hook
  const {
    formProd,
    changeProducto,
    refColorProd,
    modalColorProd,
    handleModalColorProd,
    colorProductoBlur,
    refCatProd,
    modalCatProd,
    handleModalCatProd,
    catProductoBlur,
    refMarcaProd,
    modalMarcaProd,
    handleModalMarcaProd,
    marcaProductoBlur,
    categoriaProducto,
    setCategoriaProducto,
    catProductoFiltrado,
    colorProducto,
    setColorProducto,
    colorProductoFiltrado,
    marcaProducto,
    setMarcaProducto,
    marcaProductoFiltrado,
    subcategoriaProducto,
    setSubcategoriaProducto,
    refSubCatProd,
    modalSubCatProd,
    handleModalSubCatProd,
    subCatProductoFiltrado,
    subCatProductoBlur,
  } = useProdServices();

  return (
    <div className="cont-form-derecho w-full">
      <div className="sombra relative w-full bg-white p-[15px] rounded-xl">
        <h2 className="relative text-[18px] text-[#4e5865] font-semibold">
          Información del Producto
        </h2>
        <div className="relative flex flex-col w-full my-6 gap-y-6">
          <div className="row w-full flex flex-col lg:flex-row justify-between gap-y-5 lg:gap-0">
            <div className="cont-producto relative flex flex-col w-full lg:w-[47%]">
              <div className="cont-input w-full">
                <input
                  type="text"
                  className={Styles.inputL}
                  placeholder=" "
                  id="nombreProducto"
                  value={formProd.nombreProducto}
                  onChange={changeProducto}
                  required
                />
                <label htmlFor="nombreProducto" className={Styles.labelL}>
                  Nombre del Producto
                  <span className="relative text-red-700 ml-1">*</span>
                </label>
              </div>
              <div className="info w-full flex px-1 pt-2">
                <p className="relative text-[.70rem] text-[rgba(0,0,0,.6)]">
                  Nombre general (Ejemplo: Polera)
                </p>
              </div>
            </div>
            <div className="cont-variante relative flex flex-col w-full lg:w-[47%]">
              <div className="cont-input w-full relative">
                <input
                  type="text"
                  className={Styles.inputL}
                  id="varianteProducto"
                  placeholder=" "
                  value={formProd.varianteProducto}
                  onChange={changeProducto}
                  required
                />
                <label htmlFor="varianteProducto" className={Styles.labelL}>
                  Nombre de Variante
                </label>
              </div>
              <div className="info flex px-1 pt-2 w-full">
                <p className="relative text-[.70rem] text-[rgba(0,0,0,.6)]">
                  Lo que marca la diferencia (Ejemplo: Talla L)
                </p>
              </div>
            </div>
          </div>
          <div className="row w-full flex flex-col lg:flex-row justify-between gap-y-5 lg:gap-0">
            <div className="cont-categoria relative flex flex-col w-full lg:w-[47%]">
              <div
                ref={refCatProd}
                onClick={handleModalCatProd}
                className="cont-input w-full"
              >
                <input
                  type="text"
                  className={Styles.inputL}
                  id="categoriaProducto"
                  placeholder=" "
                  value={categoriaProducto}
                  onChange={(e) => {
                    catProductoFiltrado(e);
                    setCategoriaProducto(e.target.value);
                  }}
                  onBlur={catProductoBlur}
                  required
                />
                <label htmlFor="categoriaProducto" className={Styles.labelL}>
                  Categoría
                  <span className="relative text-red-700 ml-1">*</span>
                </label>
                <Down
                  className={`absolute top-3.5 right-3 ${
                    modalCatProd && "rotate-180 text-[#09c]"
                  }`}
                />
                <SCategoria />
              </div>
            </div>
            <div className="cont-subcategoria relative flex gap-x-1 w-full lg:w-[47%]">
              <div
                ref={refSubCatProd}
                onClick={handleModalSubCatProd}
                className="cont-input w-full"
              >
                <input
                  type="text"
                  className={Styles.inputL}
                  id="subcategoriaProducto"
                  placeholder=" "
                  value={subcategoriaProducto}
                  onChange={(e) => {
                    subCatProductoFiltrado(e);
                    setSubcategoriaProducto(e.target.value);
                  }}
                  onBlur={subCatProductoBlur}
                  required
                />
                <label htmlFor="subcategoriaProducto" className={Styles.labelL}>
                  SubCategoria
                  <span className="relative text-red-700 ml-1">*</span>
                </label>
                <Down
                  className={`absolute top-3.5 right-3 ${
                    modalSubCatProd && "rotate-180 text-[#09c]"
                  }`}
                />
                <SSubCategoria />
              </div>
            </div>
          </div>
          <div className="row w-full flex flex-col lg:flex-row justify-between gap-y-5 lg:gap-0">
            <div className="cont-tipo relative flex flex-col w-full lg:w-[47%]">
              <div className="cont-input w-full">
                <input
                  type="text"
                  className={Styles.inputL}
                  id="skuProducto"
                  placeholder=" "
                  value={formProd.skuProducto}
                  onChange={changeProducto}
                  required
                />
                <label htmlFor="skuProducto" className={Styles.labelL}>
                  SKU
                  <span className="relative text-red-700 ml-1">*</span>
                </label>
              </div>
            </div>
            <div className="cont-marca relative flex gap-x-1 w-full lg:w-[47%]">
              <div
                ref={refMarcaProd}
                onClick={handleModalMarcaProd}
                className="cont-input w-full"
              >
                <input
                  type="text"
                  className={Styles.inputL}
                  id="marcaProducto"
                  placeholder=" "
                  value={marcaProducto}
                  onChange={(e) => {
                    marcaProductoFiltrado(e);
                    setMarcaProducto(e.target.value);
                  }}
                  onBlur={marcaProductoBlur}
                  required
                />
                <label htmlFor="marcaProducto" className={Styles.labelL}>
                  Marca
                  <span className="relative text-red-700 ml-1">*</span>
                </label>
                <Down
                  className={`absolute top-3.5 right-3 ${
                    modalMarcaProd && "rotate-180 text-[#09c]"
                  }`}
                />
                <SMarca />
              </div>
            </div>
          </div>
          <div className="row w-full flex flex-col lg:flex-row justify-between gap-y-5 lg:gap-0">
            <div className="cont-colores relative flex flex-col w-full lg:w-[47%]">
              <div
                ref={refColorProd}
                onClick={handleModalColorProd}
                className="cont-input w-full"
              >
                <input
                  type="text"
                  className={Styles.inputL}
                  id="colorProducto"
                  placeholder=" "
                  value={colorProducto}
                  onChange={(e) => {
                    colorProductoFiltrado(e);
                    setColorProducto(e.target.value);
                  }}
                  onBlur={colorProductoBlur}
                  required
                />
                <label htmlFor="colorProducto" className={Styles.labelL}>
                  Colores
                  <span className="relative text-red-700 ml-1">*</span>
                </label>
                <Down
                  className={`absolute top-3.5 right-3 ${
                    modalColorProd && "rotate-180 text-[#09c]"
                  }`}
                />
                <SColores />
              </div>
            </div>
            <div className="cont-seriales relative flex flex-col w-full lg:w-[47%]">
              <div className="cont-input w-full">
                <select
                  id="cantSerialesProducto"
                  value={formProd.cantSerialesProducto}
                  onChange={changeProducto}
                  className={Styles.select}
                >
                  <option>Seriales</option>
                  {Seriales.map((seriales) => (
                    <option key={seriales.value}>{seriales.value}</option>
                  ))}
                </select>
                <label htmlFor="cantSerialesProducto" className="hidden">
                  Seriales
                  <span className="relative text-red-700 ml-1">*</span>
                </label>
              </div>
            </div>
          </div>
          <div className="cont-descripcion relative w-full">
            <textarea
              id="descripcionProducto"
              className={Styles.inputTextAreaL}
              placeholder=""
              value={formProd.descripcionProducto}
              onChange={changeProducto}
            />
            <label
              htmlFor="descripcionProducto"
              className={Styles.labelTextAreaL}
            >
              Descripción del Producto
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
