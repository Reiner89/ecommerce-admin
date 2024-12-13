// import { useProdServices } from "../../../../../ProductosServicios/Hooks/useProdServices";

export const Table = () => {
  // const {} = useProdServices();

  return (
    <div className="relative max-h-80 flex justify-center">
      <div className="scroll table-matriz-container w-full relative flex flex-col overflow-y-auto">
        <table className="relative w-full text-[#67748e] mb-5 xl:mb-0">
          <thead>
            <tr className="text-[.65rem] text-[#8392ab] text-left uppercase opacity-70 border-b border-solid border-[#e9ecef]">
              <th className="py-3 px-6">Producto</th>
              <th className="py-3 px-6">Marca</th>
              <th className="py-3 px-6">Categoría</th>
              <th className="py-3 px-6">Variante</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// TODO: Almacenes es un select buscador/creador
// TODO: En recepcion agregamos el campo de "Lote" al costado de producto
