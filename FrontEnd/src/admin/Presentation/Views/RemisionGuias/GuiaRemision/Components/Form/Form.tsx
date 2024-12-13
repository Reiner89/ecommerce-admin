import { useRemisionGuias } from "../../../../../Hooks/useRemisionGuias";
import { inputS, labelS } from "../../../../../Styles/Actions";

export const Form = () => {
  const {
    handleModalOrdServ,
    handleCompReferencia,
    GRemision,
    handleInputChangeGR,
  } = useRemisionGuias();

  return (
    <div className="grid grid-cols-3 gap-x-10">
      <div className="row-1 flex flex-col gap-y-5">
        <div className="w-full relative">
          <input
            type="text"
            id="tipoGR"
            className={inputS}
            placeholder=" "
            value={GRemision.tipoGR}
            onChange={handleInputChangeGR}
            required
          />
          <label htmlFor="tipoGR" className={labelS}>
            Tipo de Guía de Remisión
          </label>
        </div>
        <div className="w-full relative">
          <input
            type="text"
            id="motTrasladoGR"
            className={inputS}
            placeholder=" "
            value={GRemision.motTrasladoGR}
            onChange={handleInputChangeGR}
            required
          />
          <label htmlFor="motTrasladoGR" className={labelS}>
            Motivo de Traslado
          </label>
        </div>
        <div className="flex w-full gap-5">
          <div className="w-full relative">
            <input
              type="text"
              id="tipoDocGR"
              className={inputS}
              placeholder=" "
              value={GRemision.tipoDocGR}
              onChange={handleInputChangeGR}
              required
            />
            <label htmlFor="tipoDocGR" className={labelS}>
              Tipo Documento
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              id="nroDocGR"
              className={inputS}
              placeholder=" "
              value={GRemision.nroDocGR}
              onChange={handleInputChangeGR}
              required
            />
            <label htmlFor="nroDocGR" className={labelS}>
              Nro Documento
            </label>
          </div>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            id="razSocGR"
            className={inputS}
            placeholder=" "
            value={GRemision.razSocGR}
            onChange={handleInputChangeGR}
            required
          />
          <label htmlFor="razSocGR" className={labelS}>
            Razon Social
          </label>
        </div>
      </div>
      <div className="row-2 flex flex-col gap-y-5">
        <div className="relative w-full">
          <input
            type="text"
            id="direccionGR"
            className={inputS}
            placeholder=" "
            value={GRemision.direccionGR}
            onChange={handleInputChangeGR}
            required
          />
          <label htmlFor="direccionGR" className={labelS}>
            Direccion
          </label>
        </div>
        <div className="w-full relative flex gap-5">
          <div className="w-full relative">
            <input
              type="text"
              id="departamentoGR"
              className={inputS}
              placeholder=" "
              value={GRemision.departamentoGR}
              onChange={handleInputChangeGR}
              required
            />
            <label htmlFor="departamentoGR" className={labelS}>
              Departamento
            </label>
          </div>
          <div className="w-full relative">
            <input
              type="text"
              id="provinciaGR"
              className={inputS}
              placeholder=" "
              value={GRemision.provinciaGR}
              onChange={handleInputChangeGR}
              required
            />
            <label htmlFor="provinciaGR" className={labelS}>
              Provincia
            </label>
          </div>
        </div>
        <div className="w-full relative">
          <input
            type="text"
            id="distritoGR"
            className={inputS}
            placeholder=" "
            value={GRemision.distritoGR}
            onChange={handleInputChangeGR}
            required
          />
          <label htmlFor="distritoGR" className={labelS}>
            Distrito
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            id="emailGR"
            className={inputS}
            placeholder=" "
            required
          />
          <label htmlFor="emailGR" className={labelS}>
            Email
          </label>
        </div>
      </div>
      <div className="row-3 flex flex-col gap-y-5">
        <div className="relative w-full">
          <input
            type="date"
            className={inputS}
            id="fechaGR"
            value={GRemision.fechaGR}
            onChange={handleInputChangeGR}
            required
          />
          <label htmlFor="fechaGR" className={labelS}>
            Fecha de Emision *
          </label>
        </div>
        <div className="border  border-gray-400 rounded-xl p-6">
          <h1 className="font-semibold text-md mb-3 border-b-2 pb-6 border-gray-400">
            Documentos Relacionados:
          </h1>
          <div className="space-y-4 pt-4 items-center">
            <div className=" items-center flex justify-between  space-x-2">
              <button
                onClick={handleModalOrdServ}
                className="flex gap-2 items-center justify-center align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-[10px] py-3 px-6 rounded-lg bg-[#09c] text-white shadow-md shadow-[#09c]/10 hover:shadow-lg hover:shadow-[#09c]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              >
                Añadir documento
              </button>
              <button
                onClick={handleCompReferencia}
                className="flex gap-2 items-center justify-center align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-[10px] py-3 px-6 rounded-lg bg-[#09c] text-white shadow-md shadow-[#09c]/10 hover:shadow-lg hover:shadow-[#09c]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              >
                Vincular O. Servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
