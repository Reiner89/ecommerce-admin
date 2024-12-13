import { Producto } from "../../../../../../../Interfaces/Productos/Productos";

export const Variantes = ({ selectedProd }: Props) => {
  return (
    <div className="flex flex-col ml-1">
      <h1 className="relative text-xs font-bold mb-2">
        Variantes del Producto:
      </h1>
      <ul className="relative text-xs text-[#67748e] flex flex-col gap-3">
        <li key={selectedProd.skuProducto} className="">
          <div className="w-full flex justify-between">
            <div className="variant-details flex flex-col">
              <p className="relative text-sm">
                {selectedProd.varianteProducto}
              </p>
            </div>
            <div className="variant-estado">
              <span
                className={`relative text-xs font-bold uppercase py-1.5 px-2.5 rounded-lg ${
                  selectedProd.estadoProducto
                    ? "text-[#43a047] bg-[#ddf8e0]"
                    : "text-[rgb(164,167,172)] bg-[#ebeced]"
                }`}
              >
                {selectedProd.estadoProducto ? "Activo" : "Inactivo"}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

interface Props {
  selectedProd: Producto;
}
