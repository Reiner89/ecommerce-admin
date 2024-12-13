import { useProdServices } from "../../../../ProductosServicios/Hooks/useProdServices";

export const Precio = () => {
  const { selectedPack } = useProdServices();

  return (
    <div>
      <h6 className="relative text-base font-semibold">Precio</h6>
      <h5 className="relative text-xl font-semibold">
        S/{selectedPack?.packPrecioImpuestos}
      </h5>
    </div>
  );
};
