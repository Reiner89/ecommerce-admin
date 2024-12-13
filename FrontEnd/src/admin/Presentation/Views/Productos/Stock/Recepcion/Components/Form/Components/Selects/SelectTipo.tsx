import { useStock } from "../../../../../../../../Hooks/useStock";

export const SelectTipo = () => {
  const { filterTipo, selectTipoRecepcion } = useStock();

  return (
    <ul
      className={`h-auto max-h-32 scroll absolute left-0 right-0 top-11 bg-gray-50 shadow-[rgba(96,125,139,.1)] shadow-lg p-3 rounded-md z-10 overflow-auto transition-all duration-300`}
    >
      {filterTipo.map((tipo) => (
        <li
          key={tipo.id}
          className="text-sm text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => selectTipoRecepcion(tipo.id)}
        >
          {tipo.nombre}
        </li>
      ))}
    </ul>
  );
};
