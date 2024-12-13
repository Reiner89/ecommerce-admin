import { useRemisionGuias } from "../../../../../../Hooks/useRemisionGuias";
import { inputS, labelS } from "../../../../../../Styles/Actions";

export const Form = () => {
  const { DEnvio, handleInputChangeDE, DEnvioActivo } = useRemisionGuias();

  return (
    <div className="relative w-full flex gap-14">
      <div className="relative w-full">
        <input
          type="date"
          id="fechaDE"
          className={inputS}
          placeholder=" "
          value={DEnvio.fechaDE}
          onChange={handleInputChangeDE}
          required
        />
        <label htmlFor="fechaDE" className={labelS}>
          Fecha de
          <span className="relative ml-1">
            {DEnvioActivo === "Privado"
              ? "inicio de traslado"
              : "entrega al Transportista"}
          </span>
        </label>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          id="descDE"
          className={inputS}
          placeholder=" "
          value={DEnvio.descDE}
          onChange={handleInputChangeDE}
          required
        />
        <label htmlFor="descDE" className={labelS}>
          Descripcion del traslado
        </label>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          id="unidMedidaDE"
          className={inputS}
          placeholder=" "
          value={DEnvio.unidMedidaDE}
          onChange={handleInputChangeDE}
          required
        />
        <label htmlFor="unidMedidaDE" className={labelS}>
          Descripcion del traslado
        </label>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          id="pesoBrutoDE"
          className={inputS}
          placeholder=" "
          value={DEnvio.pesoBrutoDE}
          onChange={handleInputChangeDE}
          required
        />
        <label htmlFor="pesoBrutoDE" className={labelS}>
          Peso bruto total *
        </label>
      </div>
    </div>
  );
};
