import { useProdServices } from "../../../../ProductosServicios/Hooks/useProdServices";

export const FichaPack = () => {
  const { selectedPack } = useProdServices();

  return (
    <div>
      <h1 className="relative text-xs font-bold">Ficha del Pack:</h1>
      <ul className="relative text-base text-[#67748e] list-disc list-inside pl-4 transition-all duration-300">
        <li className="">Tipo: {selectedPack?.packTipo}</li>
        <li className="">SKU: {selectedPack?.packSku}</li>
      </ul>
    </div>
  );
};
