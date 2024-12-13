import { useStock } from "../../../../../../../../Hooks/useStock";

export const SelectNroDocumento = () => {
  const { filterNroDoc, seleccionarNroDocConsumo, modalNrosDocs } = useStock();

  return (
    <ul
      className={`scroll max-h-28 absolute left-0 right-0 top-11 bg-gray-50 shadow-[rgba(96,125,139,.1)] shadow-lg p-3 rounded-md z-10 overflow-y-auto ${
        modalNrosDocs ? "visible" : "invisible"
      }`}
    >
      {filterNroDoc.map((nro) => (
        <li
          key={nro.id}
          className="text-sm text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => seleccionarNroDocConsumo(nro)}
        >
          {nro.nroDocumento}
        </li>
      ))}
    </ul>
  );
};
