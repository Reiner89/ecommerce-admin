import {
  Delete,
  Edit,
} from "../../../../../../../../../Components/Icons/Iconos";
import { useProdServices } from "../../../../../../../ProductosServicios/Hooks/useProdServices";

export const Detalles = () => {
  const { openModalDetalle, formPack } = useProdServices();

  return (
    <div className="cont-form-derecho w-full py-3">
      <div className="sombra relative w-full bg-white p-[15px] rounded-xl">
        <div className="header-container w-full flex justify-between mb-4">
          <h3 className="text-[15px] text-[#4e5865] font-medium mb-2">
            palles del Pack/Promoción
          </h3>
          <div className="cont-button">
            <button
              type="button"
              className="relative bg-transparent border border-solid border-[#09c] text-[#09c] px-4 py-1 rounded hover:bg-[#ebf5f8] transition-all duration-300"
              onClick={openModalDetalle}
            >
              Agregar detalles
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-x-auto">
          <table className="relative w-full text-[14px] mb-5">
            <thead className="relative w-full border-b border-solid border-[rgba(78,88,101,.3)]">
              <tr className="relative text-[#09c] text-left">
                <th className="relative font-normal py-3 px-6">
                  Producto/Servicio
                </th>
                <th className="relative font-normal py-3 px-6">Variante</th>
                <th className="relative font-normal py-3 px-6">SKU</th>
                <th className="relative font-normal py-3 px-6">Categoría</th>
                <th className="relative font-normal py-3 px-6">Marca</th>
                <th className="relative font-normal py-3 px-6">Acciones</th>
              </tr>
            </thead>
            {formPack.productosPacks.length > 0 && (
              <tbody className="">
                {formPack.productosPacks.map((p) => (
                  <tr key={p.id} className="relative text-[#4e5865]">
                    <td className="relative py-3 px-6">{p.nombreProducto}</td>
                    <td className="relative py-3 px-6">{p.varianteProducto}</td>
                    <td className="relative py-3 px-6">{p.skuProducto}</td>
                    <td className="relative py-3 px-6">
                      {p.categoriaProducto}
                    </td>
                    <td className="relative py-3 px-6">{p.marcaProducto}</td>
                    <td className="relative py-3 px-6">
                      <div className="acciones-container flex gap-4 text-base justify-center">
                        <p className="relative text-[#09c]">
                          <Edit />
                        </p>
                        <p className="relative text-red-500">
                          <Delete />
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
