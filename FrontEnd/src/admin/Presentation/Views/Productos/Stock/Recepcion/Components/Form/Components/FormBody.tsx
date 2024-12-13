import { useStock } from "../../../../../../../Hooks/useStock";
import * as Styles from "../../../../../../../Styles/Actions";
import * as Icon from "../../../../../../../Components/Icons/Iconos";
import * as C from ".";

export const FormBody = () => {
  const {
    modalTipo,
    filterTipo,
    modalMarca,
    filterMarca,
    modalProductos,
    filterProd,
    formRecep,
    changeCheckbox,
    changeFormRecepcion,
    handleKeyDown,
    verComentarioRecepcion,
  } = useStock();

  return (
    <div className="form-body flex flex-col gap-8">
      <div className="form-group flex flex-col xl:flex-row gap-8">
        <div ref={modalTipo} className="recepTipo relative w-[20%]">
          <input
            id="recepTipo"
            name="recepTipo"
            placeholder=""
            className={Styles.inputS}
            value={formRecep.recepTipo}
            onChange={changeFormRecepcion}
            required
            disabled={!formRecep.recepcionDocumento}
          />
          <label htmlFor="recepTipo" className={Styles.labelS}>
            Categoría Producto
          </label>
          {filterTipo.length > 0 && <C.SelectTipo />}
        </div>
        <div ref={modalMarca} className="recepMarca relative w-[20%]">
          <input
            id="recepMarca"
            name="recepMarca"
            placeholder=""
            className={Styles.inputS}
            value={formRecep.recepMarca}
            onChange={changeFormRecepcion}
            disabled={!formRecep.recepTipo}
            required
          />
          <label htmlFor="recepMarca" className={Styles.labelS}>
            Marca del Producto
          </label>
          {filterMarca.length > 0 && <C.SelectMarca />}
        </div>
        <div ref={modalProductos} className="recepProd relative w-[50%]">
          <input
            id="recepProd"
            name="recepProd"
            placeholder=""
            className={Styles.inputS}
            value={formRecep.recepProd}
            onChange={changeFormRecepcion}
            disabled={!formRecep.recepTipo || !formRecep.recepMarca}
            required
          />
          <label htmlFor="recepProd" className={Styles.labelS}>
            Producto
          </label>
          {filterProd.length > 0 && <C.SelectProducts />}
        </div>
        <div className="loteProd relative w-[10%]">
          <input
            id="loteProd"
            name="loteProd"
            placeholder=""
            className={Styles.inputS}
            disabled={!formRecep.recepTipo || !formRecep.recepMarca}
            required
          />
          <label htmlFor="loteProd" className={Styles.labelS}>
            Lote
          </label>
        </div>
        <div className="fechaVigencia relative w-[10%]">
          <input
            type="date"
            id="fechaVigProd"
            name="fechaVigProd"
            placeholder=""
            className={Styles.inputS}
            required
          />
          <label htmlFor="fechaVigProd" className={Styles.labelS}>
            Fecha de Vigencia
          </label>
        </div>
      </div>
      <div className="form-group flex flex-col xl:flex-row gap-8">
        <div className="recepColor relative w-[20%]">
          <input
            id="recepColor"
            name="recepColor"
            placeholder=""
            className={Styles.inputS}
            value={formRecep.recepColor}
            onChange={changeFormRecepcion}
            disabled
            required
          />
          <label htmlFor="recepColor" className={Styles.labelS}>
            Color del Producto
          </label>
        </div>
        <div className="num-doc w-[20%] relative">
          <input
            id="recepNumDoc"
            name="recepNumDoc"
            placeholder=""
            className={Styles.inputS}
            value={formRecep.recepNumDoc}
            onChange={changeFormRecepcion}
            disabled={!formRecep.recepcionDocumento}
            required
          />
          <label htmlFor="recepNumDoc" className={Styles.labelS}>
            N° Documento
          </label>
        </div>
        <div className="recepUMedida w-[20%] relative">
          <input
            id="recepUMedida"
            name="recepUMedida"
            placeholder=""
            className={Styles.inputS}
            value={formRecep.recepUMedida}
            onChange={changeFormRecepcion}
            disabled
            required
          />
          <label htmlFor="recepUMedida" className={Styles.labelS}>
            Unidad de Medida
          </label>
        </div>
        <div className="recepCantIng w-[20%] relative">
          <input
            id="recepCantIng"
            name="recepCantIng"
            placeholder=""
            className={Styles.inputS}
            value={formRecep.recepCantIng}
            onChange={changeFormRecepcion}
            required
            disabled={!formRecep.recepcionDocumento}
          />
          <label htmlFor="recepCantIng" className={Styles.labelS}>
            Cantidad de Ingreso
          </label>
        </div>
        <div className="recepCostUnit w-[20%] relative">
          <input
            id="recepCostUnit"
            name="recepCostUnit"
            placeholder=""
            className={Styles.inputS}
            value={formRecep.recepCostUnit}
            onChange={changeFormRecepcion}
            onKeyDown={(e) => handleKeyDown(e, formRecep.recepCostUnit)}
            required
            disabled={!formRecep.recepcionDocumento}
          />
          <label htmlFor="recepCostUnit" className={Styles.labelS}>
            Costo Neto Unitario
          </label>
        </div>
        <div
          className="stock-comment flex items-center text-gray-700 hover:text-[#09c] text-xl cursor-pointer transition-all duration-300"
          onClick={verComentarioRecepcion}
        >
          <Icon.Comment />
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="sereales-masivos-container inline-flex items-center gap-2 border border-solid border-transparent py-1.5 px-3.5 has-[:checked]:border-[#09c] rounded-md transition-all duration-300">
          <label
            className="relative flex items-center rounded-full cursor-pointer"
            htmlFor="serealesMasivos"
          >
            <input
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#000000de] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#09c] checked:bg-[#09c] checked:before:bg-[#09c]"
              type="checkbox"
              id="serealesMasivos"
              checked={formRecep.tipoSereal === 2}
              onChange={() => changeCheckbox(2)}
              disabled
            />
            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <Icon.Check />
            </span>
          </label>
          <label
            className="w-full mt-px font-light text-[#39404a] cursor-pointer select-none"
            htmlFor="serealesMasivos"
          >
            <div>
              <p className="block font-sans text-sm transition-all duration-300">
                Sereales Masivos
              </p>
            </div>
          </label>
        </div>
        <div className="sereales-unitarios-container inline-flex items-center gap-2 border border-solid border-transparent py-1.5 px-3.5 has-[:checked]:border-[#09c] rounded-md transition-all duration-300">
          <label
            className="relative flex items-center rounded-full cursor-pointer"
            htmlFor="serealesUnitarios"
          >
            <input
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#000000de] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#09c] checked:bg-[#09c] checked:before:bg-[#09c]"
              type="checkbox"
              id="serealesUnitarios"
              checked={formRecep.tipoSereal === 1}
              onChange={() => changeCheckbox(1)}
              disabled
            />
            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <Icon.Check />
            </span>
          </label>
          <label
            className="w-full mt-px font-light text-[#39404a] cursor-pointer select-none"
            htmlFor="serealesUnitarios"
          >
            <div>
              <p className="block font-sans text-sm transition-all duration-300">
                Sereal Unitario
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
