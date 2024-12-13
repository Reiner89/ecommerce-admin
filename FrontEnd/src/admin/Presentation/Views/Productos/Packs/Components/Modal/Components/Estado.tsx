import { useProdServices } from "../../../../ProductosServicios/Hooks/useProdServices";

export const Estado = () => {
  const { selectedPack } = useProdServices();

  return (
    <div>
      <span
        className={`relative w-24 text-center text-xs font-bold uppercase py-1.5 px-2.5 rounded-lg transition-all duration-300 ${
          selectedPack?.packEstado
            ? "text-[#43a047] bg-[#ddf8e0]"
            : "text-[#bd0000] bg-[#fc9797]"
        }`}
      >
        {selectedPack?.packEstado ? "En Stock" : "Sin Stock"}
      </span>
    </div>
  );
};
