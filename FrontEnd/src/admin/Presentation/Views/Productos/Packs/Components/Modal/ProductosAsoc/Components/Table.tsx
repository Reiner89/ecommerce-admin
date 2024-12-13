import { Check } from "../../../../../../../Components/Icons/Iconos";
import { inputCheck } from "../../../../../../../Styles/Actions";
import { useProdServices } from "../../../../../ProductosServicios/Hooks/useProdServices";

export const Table = () => {
  const {
    productosPack,
    typeFormPack,
    handleSelectProductPack,
    allProdsSelectedPack,
    handleAllProductosPack,
    selectedProdsPack,
  } = useProdServices();

  return (
    <div className="relative max-h-80 flex justify-center">
      <div className="scroll table-matriz-container w-full relative flex flex-col overflow-y-auto">
        <table className="relative w-full text-[#67748e] mb-5 xl:mb-0">
          <thead>
            <tr className="text-[.65rem] text-[#8392ab] text-left uppercase opacity-70 border-b border-solid border-[#e9ecef]">
              {typeFormPack === "new" && (
                <th className="py-3 px-6">
                  <div className="checkBoxAsociarMasivo relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      className={inputCheck}
                      id="AsociarTodosProductos"
                      checked={allProdsSelectedPack}
                      onChange={handleAllProductosPack}
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <Check />
                    </span>
                  </div>
                </th>
              )}
              <th className="py-3 px-6">Producto</th>
              <th className="py-3 px-6">Marca</th>
              <th className="py-3 px-6">Categoría</th>
              <th className="py-3 px-6">Variante</th>
            </tr>
          </thead>
          <tbody>
            {productosPack.map((item) => (
              <tr
                key={item.id}
                className="text-[.875rem] text-left leading-[1.5] font-normal border-b cursor-pointer hover:bg-gray-100"
              >
                {typeFormPack === "new" && (
                  <td className="py-3 px-6">
                    <div className="checkBoxAsociarProducto relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        className={inputCheck}
                        id={`AsociarProducto${item.id}`}
                        checked={selectedProdsPack.includes(item.id)}
                        onChange={() => {
                          handleSelectProductPack(item.id);
                        }}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <Check />
                      </span>
                    </div>
                  </td>
                )}
                <td className="py-3 px-6">{item.nombreProducto}</td>
                <td className="py-3 px-6">{item.marcaProducto}</td>
                <td className="py-3 px-6">{item.categoriaProducto}</td>
                <td className="py-3 px-6">{item.varianteProducto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
