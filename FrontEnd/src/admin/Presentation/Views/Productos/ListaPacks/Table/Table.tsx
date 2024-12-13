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
        <div className="scroll table-historial-movimientos-container w-full relative flex flex-col overflow-y-hidden">
          <table className="relative w-full table-fixed text-nowrap block text-[#67748e]">
            <thead>
              <tr className="text-[.65rem] text-[#8392ab] text-left uppercase opacity-70 border-b border-solid border-[#e9ecef]">
                <th className="">
                  <div className="checkMov-container relative flex items-center justify-center">
                    <input
                      name="checkAllPreciosPacks"
                      type="checkbox"
                      className={inputCheck}
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <Check />
                    </span>
                  </div>
                </th>
                <th className="py-3 px-6">Tipo de Pack</th>
                <th className="py-3 px-6">Nombre de Pack</th>
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
                  <td className="py-3 px-6">
                    {new Intl.NumberFormat("es-PE", {
                      style: "currency",
                      currency: "PEN",
                    }).format(mov.HMProdMonto)}
                  </td>
                  <td className="py-3 px-6">
                    <div className="relative">
                      <input
                        id={`margen-${mov.HMId}`}
                        name={`margen-${mov.HMId}`}
                        type="text"
                        className={inputS}
                      />
                      <label
                        htmlFor={`margen-${mov.HMId}`}
                        className={labelS}
                      ></label>
                    </div>
                  </td>
                  <td className="py-3 px-6">S/.1300.00</td>
                  <td className="py-3 px-6">
                    <div className="relative">
                      <input
                        id={`descuento-${mov.HMId}`}
                        name={`descuento-${mov.HMId}`}
                        type="text"
                        className={inputS}
                      />
                      <label
                        htmlFor={`descuento-${mov.HMId}`}
                        className={labelS}
                      ></label>
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
                  <td className="relative py-3 px-6 flex justify-center items-center gap-x-3">
                    <button
                      className="text-[#67748e] hover:text-[#344767] transition-colors"
                      onClick={() => console.log("Editar")}
                    >
                      <Activar />
                    </button>
                    <button
                      className="text-[#67748e] hover:text-[#344767] transition-colors"
                      onClick={() => console.log("Eliminar")}
                    >
                      <Desactivar />
                    </button>
                    <button
                      className="text-[#67748e] hover:text-[#344767] transition-colors"
                      onClick={() => console.log("Eliminar")}
                    >
                      <Refresh />
                    </button>
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
