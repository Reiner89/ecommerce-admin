import { useProdServices } from "../../../../../../Hooks/useProdServices";
import * as Icon from "../../../../../../../../../Components/Icons/Iconos";

export const Variantes = () => {
  const { selectedProd } = useProdServices();

  return (
    <div className="variantes-container relative w-full h-auto py-3 transition-all duration-300">
      <div className="variantes sombra w-full relative bg-white p-5 rounded-xl transition-all duration-300">
        <div className="variantes-header w-full flex justify-between mb-4">
          <h2 className="flex items-center text-xl text-[#4e5865] font-semibold">
            Variantes
          </h2>
        </div>
        <table className="relative w-full text-sm">
          <thead className="w-full text-left border-b border-solid border-[rgba(78,88,101,.3)]">
            <tr className="relative my-1.5 text-sm text-[#09c] font-normal">
              <th className="relative py-3 px-6">Estado</th>
              <th className="relative py-3 px-6">Nombre Variante</th>
              <th className="relative py-3 px-6">SKU</th>
              <th className="relative py-3 px-6">Código de Barras</th>
              <th className="relative py-3 px-6">Sucursales</th>
              <th className="relative py-3 px-6">Acciones</th>
            </tr>
          </thead>
          {selectedProd && (
            <tbody className="relative">
              <tr key={selectedProd.id}>
                <td className="relative py-3 px-6">
                  {selectedProd.estadoProducto ? "Activa" : "Inactivo"}
                </td>
                <td className="relative py-3 px-6">
                  {selectedProd.varianteProducto}
                </td>
                <td className="relative py-3 px-6">
                  {selectedProd.skuProducto}
                </td>
                <td className="relative py-3 px-6">
                  {selectedProd.colorProducto}
                </td>
                <td className="relative py-3 px-6">1 de 1</td>
                <td className="relative py-3 px-6 cursor-pointer">
                  <div className="container-acciones flex gap-2 items-center justify-center">
                    <Icon.Edit className="text-[#09c] text-lg" />
                    <Icon.Delete className="text-red-500 text-lg" />
                  </div>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};
