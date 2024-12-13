import { useStock } from "../../../../../../../../Hooks/useStock";

export const SelectProducts = () => {
  const { filterProd, selectProductoRecepcion } = useStock();

  return (
    <ul className="absolute left-0 right-0 top-11 bg-gray-50 shadow-[rgba(96,125,139,.1)] shadow-lg p-3 rounded-md z-10 overflow-auto">
      {filterProd.map((prod) => (
        <div key={prod.id}>
          {prod.variantes.map((v) => (
            <li
              key={v.skuVariante}
              className="text-sm text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => selectProductoRecepcion(prod.id, v.skuVariante)}
            >
              ({v.skuVariante}) {v.nombreVariante}
            </li>
          ))}
        </div>
      ))}
    </ul>
  );
};
