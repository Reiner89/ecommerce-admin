import { useRemisionGuias } from "../../../../../Hooks/useRemisionGuias";

export const Ciudad = ({ tipoDoc }: Props) => {
  const { modalCiudades, ciudades, handleCiudadChange } = useRemisionGuias();

  return (
    <ul
      className={`h-auto max-h-32 scroll absolute left-0 right-0 bg-gray-50 shadow-[rgba(96,125,139,.1)] shadow-lg p-3 rounded-md z-10 overflow-auto transition-all duration-300 ${
        modalCiudades ? "block" : "hidden"
      }`}
    >
      {ciudades?.map((ciudad) => (
        <li
          key={ciudad.id}
          className="text-sm text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleCiudadChange(ciudad.name, tipoDoc)}
        >
          {ciudad.name}
        </li>
      ))}
    </ul>
  );
};

interface Props {
  tipoDoc: "B" | "F";
}
