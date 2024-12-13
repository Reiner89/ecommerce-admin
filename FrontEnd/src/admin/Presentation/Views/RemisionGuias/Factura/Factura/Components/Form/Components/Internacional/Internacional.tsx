import { useRemisionGuias } from "../../../../../../../../Hooks/useRemisionGuias";
import * as C from "./Components";

export const Internacional = () => {
  const { formFIInt, handleInputChangeFIInt } = useRemisionGuias();

  return (
    <>
      <C.FormLeft
        formFIInt={formFIInt}
        handleChangeI={handleInputChangeFIInt}
      />
      <C.FormRight
        formFIInt={formFIInt}
        handleChangeI={handleInputChangeFIInt}
      />
    </>
  );
};
