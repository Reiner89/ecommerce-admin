import * as Styles from "../../../../../../Styles/Actions";
import * as Icon from "../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../Hooks/useStock";
import { ListProducts } from "./Components/ListProducts";

export const Form = () => {
  const {
    refVariantes,
    formTInv,
    showObs,
    handleShowObs,
    filterVarTI,
    setFormTInv,
    changeFormInv,
    submitFormInv,
    handleKeyDown,
    savingItemInventario,
  } = useStock();

  return (
    <form
      onSubmit={submitFormInv}
      autoComplete="off"
      className="flex flex-col gap-5"
    >
      <div className="form-body w-full flex flex-col gap-8">
        <div ref={refVariantes} className="prod-consumido relative">
          <input
            id="inventProd"
            name="inventProd"
            placeholder=""
            className={Styles.inputS}
            value={formTInv.inventProd}
            onChange={changeFormInv}
            required
          />
          <label htmlFor="inventProd" className={Styles.labelS}>
            Producto
          </label>
          {filterVarTI.length > 0 && <ListProducts />}
        </div>
        <div className="cont-form-values w-full flex gap-4">
          <div className="inventSSistema w-full relative">
            <input
              id="inventSSistema"
              name="inventSSistema"
              placeholder=""
              className={Styles.inputS}
              value={formTInv.inventSSistema}
              onChange={changeFormInv}
              onKeyDown={(e) => handleKeyDown(e, formTInv.inventSSistema)}
              required
            />
            <label htmlFor="inventSSistema" className={Styles.labelS}>
              Cantidad
            </label>
          </div>
          <div
            className="stock-comment flex items-center text-gray-700 hover:text-[#09c] text-xl cursor-pointer transition-all duration-300"
            onClick={handleShowObs}
          >
            <Icon.Comment />
          </div>
        </div>
        {showObs && (
          <div className="inventObs relative">
            <textarea
              id="inventObs"
              name="inventObs"
              rows={2}
              className={Styles.inputTextAreaS}
              placeholder=" "
              value={formTInv.inventObs}
              onChange={(e) => {
                setFormTInv((prev) => ({
                  ...prev,
                  inventObs: e.target.value,
                }));
              }}
            />
            <label htmlFor="inventObs" className={Styles.labelTextAreaS}>
              Observaciones
            </label>
          </div>
        )}
      </div>
      <div className="cont-button flex">
        <button disabled={savingItemInventario} className={Styles.buttonSubmit}>
          <Icon.Agregar className="text-lg" />
          <p>{savingItemInventario ? "Agregando..." : "Agregar"}</p>
        </button>
      </div>
    </form>
  );
};
