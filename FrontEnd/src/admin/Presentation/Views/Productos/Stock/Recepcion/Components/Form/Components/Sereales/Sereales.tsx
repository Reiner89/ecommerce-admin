import { useStock } from "../../../../../../../../Hooks/useStock";
import * as Styles from "../../../../../../../../Styles/Actions";

export const Sereales = () => {
  const {
    formRecep,
    selectOption,
    handleSelectChangeR,
    inputValues,
    handleInputChangeR,
  } = useStock();

  return (
    <div className="scroll w-full h-[90%] relative flex flex-col gap-6 overflow-y-auto">
      {/* Creamos un arreglo con la cantidad en el formulario */}
      {Array.from({ length: formRecep.recepCantIng }, (_, index) => (
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
                value={selectOption[index] || ""}
                onChange={(e) => handleSelectChangeR(index, e.target.value)}
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
            {inputValues[index]?.map((inputValue, inputIdx) => (
              <div key={inputIdx} className="input-wrapper relative">
                <input
                  id={`inputSereal${index}_${inputIdx}`}
                  name={`inputSereal${index}_${inputIdx}`}
                  placeholder=""
                  className={Styles.inputS}
                  value={inputValue}
                  onChange={(e) =>
                    handleInputChangeR(index, inputIdx, e.target.value)
                  }
                />
                <label
                  htmlFor={`inputSereal${index}_${inputIdx}`}
                  className={Styles.labelS}
                >
                  {selectOption[index] === "IMEI"
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
  );
};
