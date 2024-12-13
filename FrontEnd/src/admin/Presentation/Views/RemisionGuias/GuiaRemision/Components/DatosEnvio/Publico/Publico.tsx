import { DAdicionales } from "./Components/DAdicionales";
import { Form } from "./Components/Form/Form";

export const Publico = () => {
  return (
    <div>
      <h2 className="font-bold text-base">Datos del Transportista</h2>
      <Form />
      <DAdicionales />
    </div>
  );
};
