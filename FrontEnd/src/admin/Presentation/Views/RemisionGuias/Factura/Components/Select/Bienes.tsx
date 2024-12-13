import { useRemisionGuias } from "../../../../../Hooks/useRemisionGuias";

export const Bienes = ({ tipoDoc }: Props) => {
  const { bienes, modalBienes, handleBienChange } = useRemisionGuias();

  return (
    <ul
      className={`h-auto max-h-32 scroll absolute left-0 right-0 bg-gray-50 shadow-[rgba(96,125,139,.1)] shadow-lg p-3 rounded-md z-10 overflow-auto transition-all duration-300 ${
        modalBienes ? "block" : "hidden"
      }`}
    >
      {bienes?.map((bien) => (
        <li
          key={bien.id}
          className="text-sm text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleBienChange(bien.cod, tipoDoc)}
        >
          {bien.cod}
        </li>
      ))}
    </ul>
  );
};

interface Props {
  tipoDoc: "B" | "F";
}
