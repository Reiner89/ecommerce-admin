import { Down } from "../../../../../../../Components/Icons/Iconos";
import { useRemisionGuias } from "../../../../../../../Hooks/useRemisionGuias";

export const DAdicionales = () => {
  const { openInfoAdicional, changeModalInfo } = useRemisionGuias();

  return (
    <div className="DATOS ADICIONALES">
      <button
        onClick={changeModalInfo}
        className="font-semibold flex items-center text-[#09c]  my-4 gap-x-2 "
      >
        Otros datos Adicionales <Down />
      </button>
      <div
        className={`transform origin-top transition-all  duration-300 ease-in-out overflow-hidden space-y-4 mx-4 py-2 ${
          openInfoAdicional
            ? "scale-y-100 opacity-100 max-h-[1000px] "
            : "scale-y-0 opacity-0 max-h-0 "
        }`}
      >
        <h1 className="font-semibold text-gray-600">Indicadores:</h1>
        <div className="flex gap-x-10 justify-between text-gray-600 font-semibold text-sm">
          <div className="relative flex items-center gap-2">
            <input type="checkbox" />
            <label htmlFor="">
              Indicador de retorno de vehiculo con envases o embajales vacios
            </label>
          </div>
          <div className="relative flex items-center gap-2">
            <input type="checkbox" />
            <label htmlFor=""> Transbordo Programado</label>
          </div>
          <div className="relative flex items-center gap-2">
            <input type="checkbox" />
            <label htmlFor=""> Indicador de retorno de vehiculo vacio</label>
          </div>
        </div>
      </div>
    </div>
  );
};
