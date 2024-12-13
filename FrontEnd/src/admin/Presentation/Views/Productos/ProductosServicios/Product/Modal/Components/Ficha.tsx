import { Producto } from "../../../../../../../Interfaces/Productos/Productos";

export const Ficha = ({ selectedProd }: Props) => {
  return (
    <div className="">
      <h1 className="relative text-xs font-bold ml-1">Ficha del Producto:</h1>
      <ul className="relative text-base text-[#67748e] list-disc list-inside pl-4">
        <li className="">Marca: {selectedProd.marcaProducto}</li>
        <li className="">Tipo: {selectedProd.categoriaProducto}</li>
        <li className="">Color: {selectedProd.colorProducto}</li>
      </ul>
    </div>
  );
};

interface Props {
  selectedProd: Producto;
}
