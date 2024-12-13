import { useRemisionGuias } from "../../../../../Hooks/useRemisionGuias";

export const Distritos = ({ tipoDoc }: Props) => {
  const { handleDistChange, dist, modalDist } = useRemisionGuias();

  return (
    <ul
      className={`h-auto max-h-32 scroll absolute left-0 right-0 bg-gray-50 shadow-[rgba(96,125,139,.1)] shadow-lg p-3 rounded-md z-10 overflow-auto transition-all duration-300 ${
        modalDist ? "block" : "hidden"
      }`}
    >
      {dist?.map((dist) => (
        <li
          key={dist.id}
          className="text-sm text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleDistChange(dist.name, tipoDoc)}
        >
          {dist.name}
        </li>
      ))}
    </ul>
  );
};

interface Props {
  tipoDoc: "B" | "F";
}
