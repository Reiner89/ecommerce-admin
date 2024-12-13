import { Close } from "../../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../../Hooks/useStock";
import * as Styles from "../../../../../../../Styles/Actions";

export const SerialesUnitarios = () => {
  const {
    refSerialesUnitC,
    serialesUnitC,
    closeModalSerialesUnitariosC,
    formConsumo,
    submitFormCons,
    selectOptionC,
    handleSelectChangeC,
    inputValuesC,
    handleInputChangeC,
    consumoIsPosting,
  } = useStock();

  return (
    <div
      className={`dialog-asignar-sereales-container fixed top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.5)] transition-all duration-300 ${
        serialesUnitC ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refSerialesUnitC}
        className={`dialog-asignar-sereales-content w-[27%] absolute top-0 bottom-0 right-0 bg-gray-50 transition-all duration-300 ${
          serialesUnitC ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <form
          onSubmit={submitFormCons}
          className="dialog-asignar-cereales-form w-full h-full relative flex flex-col gap-5 p-6 overflow-y-auto"
          autoComplete="off"
        >
          <div className="dialog-sereales-header w-full h-[5%] flex justify-between items-center text-[#344767]">
            <h2 className="relative text-xl font-semibold">Asignar Sereales</h2>
            <p
              onClick={closeModalSerialesUnitariosC}
              className="relative text-xl cursor-pointer"
            >
              <Close />
            </p>
          </div>
          <div className="dialog-asignar-sereales-body w-full h-[92%] flex flex-col justify-between gap-5">
            <div className="scroll w-full h-[90%] relative flex flex-col gap-6 overflow-y-auto">
              {/* Creamos un arreglo con la cantidad en el formulario */}
              {Array.from({ length: formConsumo.consumoCant }, (_, index) => (
                <div
                  key={index}
                  className="dialog-asignar-sereales-body-item flex flex-col gap-5"
                >
                  <div className="dialog-asignar-sereales-body-item-header w-full flex items-center gap-5">
                    <p className="indicador relative">Sereal {index + 1}:</p>
                    <div className="select-container relative w-[70%]">
                      <select
                        name={`selectSereal${index}`}
                        id={`selectSereal${index}`}
                        className={Styles.select}
                        value={selectOptionC[index] || ""}
                        onChange={(e) =>
                          handleSelectChangeC(index, e.target.value)
                        }
                      >
                        <option value="">Seleccionar Tipo</option>
                        <option value="codigo">Código</option>
                        <option value="sereal">Sereal</option>
                        <option value="IMEI">IMEI</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-container relative w-full flex flex-col gap-5">
                    {/* Si la opcion seleccionada es IMEI creo 3 inputs sino 1 */}
                    {inputValuesC[index]?.map((inputValue, inputIdx) => (
                      <div key={inputIdx} className="input-wrapper relative">
                        <input
                          id={`inputSereal${index}_${inputIdx}`}
                          name={`inputSereal${index}_${inputIdx}`}
                          placeholder=""
                          className={Styles.inputS}
                          value={inputValue}
                          onChange={(e) =>
                            handleInputChangeC(index, inputIdx, e.target.value)
                          }
                        />
                        <label
                          htmlFor={`inputSereal${index}_${inputIdx}`}
                          className={Styles.labelS}
                        >
                          {selectOptionC[index] === "IMEI"
                            ? inputIdx === 0
                              ? `Sereal del Producto`
                              : `IMEI ${inputIdx + 1}`
                            : `Sereal del producto`}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button disabled={consumoIsPosting} className={Styles.buttonSubmit}>
              {consumoIsPosting ? "Guardando..." : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
