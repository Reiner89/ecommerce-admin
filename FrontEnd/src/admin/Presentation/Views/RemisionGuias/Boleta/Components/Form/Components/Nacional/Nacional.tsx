import { useRemisionGuias } from "../../../../../../../Hooks/useRemisionGuias";
import * as Form from "./Components";

export const Nacional = () => {
  const { formBNac, handleInputChangeBNac } = useRemisionGuias();

  return (
    <>
      <Form.FormLeft form={formBNac} handleChangeN={handleInputChangeBNac} />
      <Form.FormRight form={formBNac} handleChangeN={handleInputChangeBNac} />
    </>
  );
};
