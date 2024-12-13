import * as Styles from "../../../../../../../Styles/Actions";
import * as Icon from "../../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../../Hooks/useStock";
import { SelectNroDocumento } from "./Select/SelectNroDocumento";

export const Body = () => {
  const {
    showCommentC,
    verComentC,
    formConsumo,
    setFormConsumo,
    changeFormCons,
    changeTipoSereal,
    refNroDoc,
    handleSelectNroDoc,
    blurNroDocConsumo,
    consumoSeleccionado,
  } = useStock();

  return (
    <div className="form-body w-full flex flex-col gap-8">
      <div className="form-body-group w-full flex flex-col gap-8">
        <div className="form-top w-full flex flex-row gap-5">
          <div
            ref={refNroDoc}
            onClick={handleSelectNroDoc}
            className="consumoNroDocumento relative w-[20%]"
          >
            <input
              name="consumoNroDocumento"
              id="consumoNroDocumento"
              placeholder=""
              className={Styles.inputS}
              value={formConsumo.consumoNroDocumento}
              onChange={changeFormCons}
              onBlur={blurNroDocConsumo}
              disabled={consumoSeleccionado !== "Retiro por Venta"}
            />
            <label htmlFor="consumoNroDocumento" className={Styles.labelS}>
              Nro. de Orden
            </label>
            <SelectNroDocumento />
          </div>
          <div className="consumoProd relative w-[65%]">
            <input
              name="consumoProd"
              id="consumoProd"
              placeholder=""
              className={Styles.inputS}
              value={formConsumo.consumoProd}
              onChange={changeFormCons}
              required
            />
            <label htmlFor="consumoProd" className={Styles.labelS}>
              Nombre de Producto/Pack
            </label>
          </div>
          <div className="loteConsumo relative w-[10%]">
            <input
              id="loteConsumo"
              name="loteConsumo"
              placeholder=""
              className={Styles.inputS}
              required
            />
            <label htmlFor="loteProd" className={Styles.labelS}>
              Lote
            </label>
          </div>
        </div>
        <div className="form-bottom w-full flex flex-row gap-5">
          <div className="fechaVigencia relative w-1/3">
            <input
              id="fechaConsumo"
              name="fechaConsumo"
              placeholder=""
              className={Styles.inputS}
              required
            />
            <label htmlFor="fechaConsumo" className={Styles.labelS}>
              Fecha de Vigencia
            </label>
          </div>
          <div className="consumoUMProd relative w-1/3">
            <input
              id="consumoUMProd"
              name="consumoUMProd"
              placeholder=""
              className={Styles.inputS}
              value={formConsumo.consumoUMProd}
              onChange={changeFormCons}
              required
            />
            <label htmlFor="consumoUMProd" className={Styles.labelS}>
              Unidad de Medida
            </label>
          </div>
          <div className="consumoCant relative w-1/3">
            <input
              id="consumoCant"
              name="consumoCant"
              placeholder=""
              className={Styles.inputS}
              value={formConsumo.consumoCant}
              onChange={changeFormCons}
              required
            />
            <label htmlFor="consumoCant" className={Styles.labelS}>
              Cantidad Consumida
            </label>
          </div>
        </div>
        <div
          className="stock-comment flex items-center text-gray-700 hover:text-[#09c] text-xl cursor-pointer transition-all duration-300"
          onClick={verComentC}
        >
          <Icon.Comment />
        </div>
      </div>
      <div className="form-body-group">
        <div className="sereales-masivos-container inline-flex items-center gap-2 border border-solid border-transparent py-1.5 px-3.5 has-[:checked]:border-[#09c] rounded-md transition-all duration-300">
          <label
            className="relative flex items-center rounded-full cursor-pointer"
            htmlFor="serealesMasivos"
          >
            <input
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#000000de] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#09c] checked:bg-[#09c] checked:before:bg-[#09c]"
              type="checkbox"
              id="serealesMasivos"
              checked={formConsumo.consumoTipoSereal === 2}
              onChange={() => changeTipoSereal(2)}
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
              checked={formConsumo.consumoTipoSereal === 1}
              onChange={() => changeTipoSereal(1)}
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
      {showCommentC && (
        <div className="consumoNota relative">
          <textarea
            id="consumoNota"
            name="consumoNota"
            rows={2}
            className={Styles.inputTextAreaS}
            placeholder=" "
            value={formConsumo.consumoNota}
            onChange={(e) => {
              setFormConsumo((prev) => ({
                ...prev,
                consumoNota: e.target.value,
              }));
            }}
          />
          <label htmlFor="consumoNota" className={Styles.labelTextAreaS}>
            Observaciones
          </label>
        </div>
      )}
    </div>
  );
};
