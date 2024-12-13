import { useStock } from "../../../../../../Hooks/useStock";
import * as Forms from "./Components";

export const Form = () => {
  const { handleSubmitHM } = useStock();

  return (
    <div className="form-historial-movimientos-container w-full relative flex flex-col bg-white p-6 rounded-xl transition-all">
      <form
        autoComplete="off"
        className="form-historial-movimientos w-full flex flex-col gap-10"
        onSubmit={handleSubmitHM}
      >
        <Forms.Top />
        <Forms.Bottom />
        <Forms.Actions />
      </form>
    </div>
  );
};
