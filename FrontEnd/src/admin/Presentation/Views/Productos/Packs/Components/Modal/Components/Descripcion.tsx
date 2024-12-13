import { useProdServices } from "../../../../ProductosServicios/Hooks/useProdServices";

export const Descripcion = () => {
  const { selectedPack } = useProdServices();

  return (
    <div className="relative flex flex-col gap-2">
      <h1 className="relative text-xs font-bold">Descripción del Pack:</h1>
      <h1 className="relative text-base text-[#67748e]">
        {selectedPack?.comentarioPack}
      </h1>
    </div>
  );
};
