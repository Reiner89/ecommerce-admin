import { Impuestos, Detalles } from "./Components";

export const RightEditar = () => {
  return (
    <div className="cont-form-derecho w-full relative">
      <Detalles />
      <Impuestos />
    </div>
  );
};
