import { useRemisionGuias } from "../../../../../Hooks/useRemisionGuias";

export const TipoDocumento = ({ tipoDoc }: Props) => {
  const { tiposDoc, handleDocChange, modalDocs } = useRemisionGuias();

  return (
    <ul
      className={`h-auto max-h-32 scroll absolute left-0 right-0 bg-gray-50 shadow-[rgba(96,125,139,.1)] shadow-lg p-3 rounded-md z-10 overflow-auto transition-all duration-300 ${
        modalDocs ? "block" : "hidden"
      }`}
    >
      {tiposDoc?.map((doc) => (
        <li
          key={doc.id}
          className="text-sm text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleDocChange(doc.tipodoc, tipoDoc)}
        >
          {doc.tipodoc}
        </li>
      ))}
    </ul>
  );
};

interface Props {
  tipoDoc: "B" | "F";
}
