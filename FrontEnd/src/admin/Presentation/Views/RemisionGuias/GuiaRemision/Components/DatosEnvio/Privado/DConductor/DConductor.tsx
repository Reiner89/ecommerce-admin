import { Close } from "../../../../../../../Components/Icons/Iconos";
import { useRemisionGuias } from "../../../../../../../Hooks/useRemisionGuias";
import {
  buttonSubmit,
  inputS,
  labelS,
} from "../../../../../../../Styles/Actions";

export const DConductor = () => {
  const {
    DConductor,
    handleInputChangeDC,
    agregarDConductor,
    eliminarDConductor,
  } = useRemisionGuias();

  return (
    <div>
      <h1 className="relative font-bold text-base">Datos del Conductor:</h1>
      {DConductor.map((conductor) => (
        <div
          key={conductor.idDC}
          className="FILADATOSCONDUCTOR p-4 flex flex-col gap-5"
        >
          <div className="flex items-center gap-x-10">
            <div className="relative w-full group">
              <input
                type="text"
                name={`tipoDocDC_${conductor.idDC}`}
                id={`tipoDocDC_${conductor.idDC}`}
                className={inputS}
                placeholder=" "
                value={conductor.tipoDocDC}
                onChange={(e) => handleInputChangeDC(conductor.idDC, e)}
                required
              />
              <label htmlFor={`tipoDocDC_${conductor.idDC}`} className={labelS}>
                Tipo de Documento
              </label>
            </div>
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name={`nroIdentidadDC_${conductor.idDC}`}
                id={`nroIdentidadDC_${conductor.idDC}`}
                className={inputS}
                placeholder=" "
                value={conductor.nroIdentidadDC}
                onChange={(e) => handleInputChangeDC(conductor.idDC, e)}
                required
              />
              <label
                htmlFor={`nroIdentidadDC_${conductor.idDC}`}
                className={labelS}
              >
                N° Doc. de identidad*
              </label>
            </div>
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name={`nroLicenciaDC_${conductor.idDC}`}
                id={`nroLicenciaDC_${conductor.idDC}`}
                className={inputS}
                placeholder=" "
                value={conductor.nroLicenciaDC}
                onChange={(e) => handleInputChangeDC(conductor.idDC, e)}
                required
              />
              <label
                htmlFor={`nroLicenciaDC_${conductor.idDC}`}
                className={labelS}
              >
                N° de licencia o brevete *
              </label>
            </div>
          </div>
          <div className="flex items-center gap-x-10">
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name={`nombresDC_${conductor.idDC}`}
                id={`nombresDC_${conductor.idDC}`}
                className={inputS}
                placeholder=" "
                value={conductor.nombresDC}
                onChange={(e) => handleInputChangeDC(conductor.idDC, e)}
                required
              />
              <label htmlFor={`nombresDC_${conductor.idDC}`} className={labelS}>
                Nombre del conductor *
              </label>
            </div>
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name={`apellidosDC_${conductor.idDC}`}
                id={`apellidosDC_${conductor.idDC}`}
                className={inputS}
                placeholder=" "
                value={conductor.apellidosDC}
                onChange={(e) => handleInputChangeDC(conductor.idDC, e)}
                required
              />
              <label
                htmlFor={`apellidosDC_${conductor.idDC}`}
                className={labelS}
              >
                Apellido del conductor *
              </label>
            </div>
          </div>
          {DConductor.length > 1 && (
            <button
              onClick={() => eliminarDConductor(conductor.idDC)}
              className="absolute right-0 top-6 text-red-500 hover:text-red-700"
            >
              <Close />
            </button>
          )}
        </div>
      ))}
      <div className="container-button">
        <button onClick={agregarDConductor} className={buttonSubmit}>
          Agregar conductor
        </button>
      </div>
    </div>
  );
};
