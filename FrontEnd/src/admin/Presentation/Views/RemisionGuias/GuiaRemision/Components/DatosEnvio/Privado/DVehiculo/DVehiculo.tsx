import { Close } from "../../../../../../../Components/Icons/Iconos";
import { useRemisionGuias } from "../../../../../../../Hooks/useRemisionGuias";
import {
  buttonSubmit,
  inputS,
  labelS,
} from "../../../../../../../Styles/Actions";

export const DVehiculo = () => {
  const {
    DVehiculo,
    handleInputChangeDV,
    agregarDVehiculo,
    eliminarDVehiculo,
  } = useRemisionGuias();

  return (
    <div className="relative flex flex-col gap-3">
      <h1 className="relative font-bold text-base">Datos del Vehiculo</h1>
      {DVehiculo.map((vehiculo) => (
        <div
          key={vehiculo.idDV}
          className="FILADATOSVEHICULO p-4 flex items-center gap-x-10 relative"
        >
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name={`placaDV_${vehiculo.idDV}`}
              id={`placaDV_${vehiculo.idDV}`}
              className={inputS}
              placeholder=" "
              value={vehiculo.placaDV}
              onChange={(e) => handleInputChangeDV(vehiculo.idDV, e)}
              required
            />
            <label htmlFor={`placaDV_${vehiculo.idDV}`} className={labelS}>
              Placa principal *
            </label>
          </div>
          <div className="relative w-full group">
            <input
              type="text"
              name={`emisoraAutorizacionDV_${vehiculo.idDV}`}
              id={`emisoraAutorizacionDV_${vehiculo.idDV}`}
              className={inputS}
              placeholder=" "
              value={vehiculo.emisoraAutorizacionDV}
              onChange={(e) => handleInputChangeDV(vehiculo.idDV, e)}
              required
            />
            <label
              htmlFor={`emisoraAutorizacionDV_${vehiculo.idDV}`}
              className={labelS}
            >
              N° de autorización vehicular (opcional)
            </label>
          </div>
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name={`nroAutorizacionDV_${vehiculo.idDV}`}
              id={`nroAutorizacionDV_${vehiculo.idDV}`}
              className={inputS}
              placeholder=" "
              value={vehiculo.nroAutorizacionDV}
              onChange={(e) => handleInputChangeDV(vehiculo.idDV, e)}
              required
            />
            <label
              htmlFor={`nroAutorizacionDV_${vehiculo.idDV}`}
              className={labelS}
            >
              N° de autorización vehicular (opcional)
            </label>
          </div>
          {DVehiculo.length > 1 && (
            <button
              onClick={() => eliminarDVehiculo(vehiculo.idDV)}
              className="absolute right-0 top-6 text-red-500 hover:text-red-700"
            >
              <Close />
            </button>
          )}
        </div>
      ))}
      <div className="container-button">
        <button onClick={agregarDVehiculo} className={buttonSubmit}>
          Agregar vehiculo
        </button>
      </div>
    </div>
  );
};
