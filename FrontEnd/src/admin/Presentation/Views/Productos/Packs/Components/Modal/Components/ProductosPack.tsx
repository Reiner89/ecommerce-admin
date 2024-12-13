import { useProdServices } from "../../../../ProductosServicios/Hooks/useProdServices";

export const ProductosPack = () => {
  const { selectedPack } = useProdServices();

  return (
    <div className="flex flex-col">
      {selectedPack ? (
        <>
          <h1 className="relative text-xs font-bold">
            Productos del Pack: {selectedPack.productosPacks.length}
          </h1>
          <ul className="relative text-base text-[#67748e] list-disc list-inside pl-4 transition-all duration-300">
            {selectedPack.productosPacks.map((prod) => (
              <li key={prod.id}>{prod.nombreProducto}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h1 className="relative text-xs font-bold">Productos del Pack: </h1>
          <ul className="relative text-base text-[#67748e] list-disc list-inside pl-4 transition-all duration-300">
            <li>No hay productos asociados</li>
          </ul>
        </>
      )}
    </div>
  );
};
