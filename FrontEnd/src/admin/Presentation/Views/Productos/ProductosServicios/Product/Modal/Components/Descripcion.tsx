import { Producto } from "../../../../../../../Interfaces/Productos/Productos";

export const Descripcion = ({ selectedProd }: Props) => {
  return (
    <div className="relative ml-1">
      <h1 className="relative text-xs font-bold mb-2">
        Descripción del Producto:
      </h1>
      <h1 className="relative text-base text-[#67748e]">
        {selectedProd.descripcionProducto}
      </h1>
    </div>
  );
};

interface Props {
  selectedProd: Producto;
}
