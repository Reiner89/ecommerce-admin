import { inputS, labelS } from "../../../../../../../../Styles/Actions";

export const Form = () => {
  return (
    <div>
      <div className="FILADATOSVEHICULO p-4 flex items-center gap-x-10 relative">
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="rucTransportista"
            id="rucTransportista"
            className={inputS}
            placeholder=" "
            required
          />
          <label htmlFor="rucTransportista" className={labelS}>
            RUC *
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="razonSocialTransportista"
            id="razonSocialTransportista"
            className={inputS}
            placeholder=" "
            required
          />
          <label htmlFor="razonSocialTransportista" className={labelS}>
            Razon social o denominacion *
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="nroRegistroMTCTransportista"
            id="nroRegistroMTCTransportista"
            className={inputS}
            placeholder=" "
            required
          />
          <label className={labelS}>N° de registro MTC</label>
        </div>
      </div>
      <div className="FILADATOSVEHICULO p-4 flex items-center gap-x-10 relative">
        <div className="relative z-0 w-1/3 group pr-6">
          <input
            type="text"
            name="emailTransportista"
            id="emailTransportista"
            className={inputS}
            placeholder=" "
            required
          />
          <label className={labelS}>E-mail de Transportista</label>
        </div>{" "}
      </div>
      <div className="my-4 mx-4 text-gray-600">
        <div className="flex items-center gap-x-2">
          <input id="regVehConTransportista" type="checkbox" />
          <label htmlFor="regVehConTransportista" className="font-semibold">
            Registrar vehiculos y conductores del transporte
          </label>
        </div>
      </div>
    </div>
  );
};
