import { useRemisionGuias } from "../../../../../../../Hooks/useRemisionGuias";
import * as C from "./Components";

export const Internacional = () => {
  const { formBIInt, handleInputChangeBIInt } = useRemisionGuias();

  return (
    <>
      <C.FormLeft form={formBIInt} handleChangeI={handleInputChangeBIInt} />
      <C.FormRight form={formBIInt} handleChangeI={handleInputChangeBIInt} />
    </>
  );
};
