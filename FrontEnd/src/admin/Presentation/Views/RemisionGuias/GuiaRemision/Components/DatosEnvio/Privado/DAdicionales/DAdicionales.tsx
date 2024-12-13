import { Down } from "../../../../../../../Components/Icons/Iconos";
import { useRemisionGuias } from "../../../../../../../Hooks/useRemisionGuias";
import { inputS, labelS } from "../../../../../../../Styles/Actions";

export const DAdicionales = () => {
  const { openInfoAdicional, changeModalInfo, DEnvio, handleInputChangeDE } =
    useRemisionGuias();

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
        <div>
          Datos de la autorizacion especial para el traslado de carga (opcional)
        </div>
        <div className="flex gap-x-10 items-center ">
          <div className="relative z-0 w-[50%]  group">
            <input
              type="text"
              id="nroAutorizacionVehDE"
              className={inputS}
              placeholder=" "
              value={DEnvio.nroAutorizacionVehDE}
              onChange={handleInputChangeDE}
              required
            />
            <label htmlFor="nroAutorizacionVehDE" className={labelS}>
              N° de autorización vehícular (opcional)
            </label>
          </div>
          <div className="relative  w-full  group">
            <input
              type="text"
              id="entidadEmisoraDE"
              className={inputS}
              placeholder=" "
              value={DEnvio.entidadEmisoraDE}
              onChange={handleInputChangeDE}
              required
            />
            <label htmlFor="entidadEmisoraDE" className={labelS}>
              Entidad emisora de la autorización vehícular (opcional)
            </label>
          </div>
        </div>
        <h1 className="font-semibold text-gray-600">Indicadores:</h1>
        <div className="flex gap-x-10 justify-between text-gray-600 font-semibold text-sm">
          <div className="relative flex items-center gap-2">
            <input id="indicadorRetornoVEDE" type="checkbox" />
            <label htmlFor="indicadorRetornoVEDE">
              Indicador de retorno de vehiculo con envases o embajales vacios
            </label>
          </div>
          <div className="relative flex items-center gap-2">
            <input id="transbordoProgramadoDE" type="checkbox" />
            <label htmlFor="transbordoProgramadoDE">
              Transbordo Programado
            </label>
          </div>
          <div className="relative flex items-center gap-2">
            <input id="indicadorRetornoVVDE" type="checkbox" />
            <label htmlFor="indicadorRetornoVVDE">
              Indicador de retorno de vehiculo vacio
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
