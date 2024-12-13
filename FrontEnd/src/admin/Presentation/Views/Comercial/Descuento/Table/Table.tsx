import { LoaderTables } from "../../../../Components";
import {
  Activar,
  Check,
  Desactivar,
  Refresh,
} from "../../../../Components/Icons/Iconos";
import { useStock } from "../../../../Hooks/useStock";
import {
  inputCheck,
  inputDate,
  inputS,
  labelDate,
  labelS,
} from "../../../../Styles/Actions";
import moment from "moment";

export const Table = () => {
  const { loading, movPaginated, handleCheckboxChange } = useStock();

  return (
    <>
      {loading ? (
        <LoaderTables />
      ) : (
        <div className="scroll container-table-lista-productos w-full relative flex flex-col overflow-y-hidden">
          <table className="table-lista-productos table-fixed whitespace-nowrap block relative w-full text-[#67748e]">
            <thead>
              <tr className="text-[.65rem] text-[#8392ab] text-left uppercase border-b border-solid border-[#e9ecef]">
                <th className="py-3">
                  <div className="checkMov-container relative flex items-center justify-center">
                    <input type="checkbox" className={inputCheck} />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <Check />
                    </span>
                  </div>
                </th>
                <th className="py-3 px-6">Tipo de Producto</th>
                <th className="py-3 px-6">Producto</th>
                <th className="py-3 px-6">Marca</th>
                <th className="py-3 px-6">Color</th>
                <th className="py-3 px-6">Variante</th>
                <th className="py-3 px-6">Costo .Prod</th>
                <th className="py-3 px-6">Margen %</th>
                <th className="py-3 px-6">Precio .Prod</th>
                <th className="py-3 px-6">Descuento %</th>
                <th className="py-3 px-6">Precio Real</th>
                <th className="py-3 px-6">Vigencia</th>
                <th className="py-3 px-6 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {movPaginated.map((mov) => (
                <tr
                  key={mov.HMId}
                  className="text-[.875rem] text-left leading-[1.5] font-normal border-b cursor-pointer hover:bg-gray-100"
                >
                  <td className="py-2 px-2">
                    <div className="checkMov-container relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        className={inputCheck}
                        id={`checkMov${mov.HMId}`}
                        onChange={() => handleCheckboxChange(mov.HMId)}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <Check />
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6">{mov.HMProdSKU}</td>
                  <td className="py-3 px-6">{mov.HMProdFam}</td>
                  <td className="py-3 px-6">{mov.HMProdFam}</td>
                  <td className="py-3 px-6">{mov.HMColorProd}</td>
                  <td className="py-3 px-6">{"mov.HMProdVar"}</td>
                  <td className="py-3 px-6">
                    {new Intl.NumberFormat("es-PE", {
                      style: "currency",
                      currency: "PEN",
                    }).format(mov.HMProdMonto)}
                  </td>
                  <td className="py-3 px-6">
                    <div className="relative">
                      <input
                        id="margen"
                        name="margen"
                        type="text"
                        className={inputS}
                      />
                      <label htmlFor="margen" className={labelS}></label>
                    </div>
                  </td>
                  <td className="py-3 px-6">S/.1300.00</td>
                  <td className="py-3 px-6">
                    <div className="relative">
                      <input
                        id="descuento"
                        name="descuento"
                        type="text"
                        className={inputS}
                      />
                      <label htmlFor="descuento" className={labelS}></label>
                    </div>
                  </td>
                  <td className="py-3 px-6">S/.1005.00</td>
                  <td className="py-3 px-6">
                    <input
                      type="date"
                      name={"BNFechaVencimiento"}
                      id={"BNFechaVencimiento"}
                      className={inputDate}
                      placeholder=""
                      min={moment().format("YYYY-MM-DD")}
                    />
                    <label
                      htmlFor={"BNFechaVencimiento"}
                      className={labelDate}
                    ></label>
                  </td>
                  <td className="relative py-3 px-6">
                    <div className="acciones-container text-lg flex gap-3 justify-center items-center">
                      <button
                        className="text-[#67748e] hover:text-green-500 transition-colors"
                        onClick={() => console.log("Activar")}
                      >
                        <Activar />
                      </button>
                      <button
                        className="text-[#67748e] hover:text-red-500 transition-colors"
                        onClick={() => console.log("Desactivar")}
                      >
                        <Desactivar />
                      </button>
                      <button
                        className="text-[#67748e] hover:text-[#09c] transition-colors"
                        onClick={() => console.log("Refresh")}
                      >
                        <Refresh />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

// TODO:CADA QUE ESCRIBA EN MARGEN SE AGREGARA EL SIGNO % SE PERMITIRAN ENTEROS
// TODO:CADA QUE ESCRIBA EN DESCUENTO SE AGREGARA EL SIGNO % SE PERMITIRAN ENTEROS
// TODO:SOLO 3 DIGITOS MAX
