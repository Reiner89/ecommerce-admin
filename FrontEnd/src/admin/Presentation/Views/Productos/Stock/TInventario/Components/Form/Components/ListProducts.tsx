import { useStock } from "../../../../../../../Hooks/useStock";

export const ListProducts = () => {
  const { filterVarTI, selectProdTInventario } = useStock();

  return (
    <ul className="scroll h-auto max-h-32 absolute left-0 right-0 top-11 border bg-gradient-to-br from-white dark:to-black shadow-[rgba(96,125,139,.1)] bg-[hsl(0_0%_100%)] shadow-lg p-3 rounded-md z-10 overflow-auto transition-all duration-300">
      {filterVarTI.map((prod, index) => (
        <li
          key={index}
          className="text-sm text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() =>
            selectProdTInventario(
              prod.nombreVariante,
              prod.cantidad,
              prod.unidadMedida
            )
          }
        >
          {prod.nombreVariante}
        </li>
      ))}
    </ul>
  );
};
