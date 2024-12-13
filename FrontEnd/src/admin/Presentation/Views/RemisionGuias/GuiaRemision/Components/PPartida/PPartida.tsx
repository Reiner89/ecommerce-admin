import { useRemisionGuias } from "../../../../../Hooks/useRemisionGuias";
import { inputS, labelS } from "../../../../../Styles/Actions";

export const PPartida = () => {
  const { PPuntoLlegada, handleInputChangePLlegada } = useRemisionGuias();

  return (
    <div className="space-y-6 border-1 border border-blue-400 rounded-tl-none rounded-xl px-6 py-4">
      <div className="relative z-0 w-full  group">
        <input
          type="text"
          id="direccionPP"
          className={inputS}
          placeholder=" "
          value={PPuntoLlegada.direccionPP}
          onChange={handleInputChangePLlegada}
          required
        />
        <label htmlFor="direccionPP" className={labelS}>
          Direccion *
        </label>
      </div>
      <div className="flex gap-x-10">
        <div className="relative  w-full  group">
          <input
            type="text"
            id="departamentoPP"
            className={inputS}
            placeholder=" "
            value={PPuntoLlegada.departamentoPP}
            onChange={handleInputChangePLlegada}
            required
          />
          <label htmlFor="departamentoPP" className={labelS}>
            Departamento
          </label>
        </div>
        <div className="relative  w-full  group">
          <input
            type="text"
            id="provinciaPP"
            className={inputS}
            placeholder=" "
            value={PPuntoLlegada.provinciaPP}
            onChange={handleInputChangePLlegada}
            required
          />
          <label htmlFor="provinciaPP" className={labelS}>
            Provincia
          </label>
        </div>
        <div className="relative  w-full  group">
          <input
            type="text"
            id="distritoPP"
            className={inputS}
            placeholder=" "
            value={PPuntoLlegada.distritoPP}
            onChange={handleInputChangePLlegada}
            required
          />
          <label htmlFor="distritoPP" className={labelS}>
            Distrito
          </label>
        </div>
      </div>
    </div>
  );
};
