import { useRemisionGuias } from "../../../../../../Hooks/useRemisionGuias";

export const TipoComprobantes = () => {
  const { tipoComprobante, handleTipoComprobanteChange } = useRemisionGuias();

  return (
    <ul
      className={`w-[180px] h-auto max-h-32 scroll absolute left-0 right-0 bg-gray-50 shadow-[rgba(96,125,139,.1)] shadow-lg p-3 rounded-md z-10 overflow-auto transition-all duration-300 ${
        tipoComprobante ? "block" : "hidden"
      }`}
    >
      <li
        className="text-sm text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
        onClick={() => handleTipoComprobanteChange("Todos")}
      >
        Todos
      </li>
      <li
        className="text-sm text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
        onClick={() => handleTipoComprobanteChange("Guia Remision")}
      >
        Guía Remisión
      </li>
      <li
        className="text-sm text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
        onClick={() => handleTipoComprobanteChange("Guia Transportista")}
      >
        Guía Transportista
      </li>
    </ul>
  );
};
