import { useRemisionGuias } from "../../../../../../../../Hooks/useRemisionGuias";
import * as Form from "./Components";

export const Nacional = () => {
  const { formFNac, handleInputChangeFNac } = useRemisionGuias();

  return (
    <>
      <Form.FormLeft formNac={formFNac} handleChange={handleInputChangeFNac} />
      <Form.FormRight
        formNac={formFNac}
        handleChangeN={handleInputChangeFNac}
      />
    </>
  );
};
