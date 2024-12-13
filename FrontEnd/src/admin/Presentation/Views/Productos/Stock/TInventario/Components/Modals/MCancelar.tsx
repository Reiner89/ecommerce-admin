import { useStock } from "../../../../../../Hooks/useStock";

export const MCancelar = () => {
  const { modalCancelar, handleConfirmCancelar, handleCloseCancelar } =
    useStock();

  return (
    <div
      className={`fixed left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-50 flex justify-center items-center transition-all duration-500 ${
        modalCancelar ? "visible" : "invisible"
      }`}
    >
      <div
        className={`w-[50%] absolute flex flex-col justify-between gap-5 bg-white rounded-md overflow-hidden transition-transform duration-500 ${
          modalCancelar ? "translate-y-0" : "translate-y-[600%]"
        }`}
      >
        <div className="relative rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
          <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
            ¡¡Mucha Atención!!
          </div>
          <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
            Esta acción no se podrá deshacer, ¿Desea continuar?
          </div>
          <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
            <button
              className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handleCloseCancelar}
            >
              Cancelar
            </button>
            <button
              className="middle none center rounded-lg bg-gradient-to-tr from-[#33ADD6] to-[#33ADD6] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md tansition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handleConfirmCancelar}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
