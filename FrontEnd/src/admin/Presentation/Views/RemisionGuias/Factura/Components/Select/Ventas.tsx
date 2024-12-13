import { useRemisionGuias } from "../../../../../Hooks/useRemisionGuias";

export const Ventas = ({ tipoDoc }: Props) => {
  const { modalVentas, ventas, handleVentaChange } = useRemisionGuias();

  return (
    <ul
      className={`h-auto max-h-32 scroll absolute left-0 right-0 bg-gray-50 shadow-[rgba(96,125,139,.1)] shadow-lg p-3 rounded-md z-10 overflow-auto transition-all duration-300 ${
        modalVentas ? "block" : "hidden"
      }`}
    >
      {ventas?.map((vent) => (
        <li
          key={vent.id}
          className="text-sm text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleVentaChange(vent.cod, tipoDoc)}
        >
          {vent.cod}
        </li>
      ))}
    </ul>
  );
};

interface Props {
  tipoDoc: "B" | "F";
}
