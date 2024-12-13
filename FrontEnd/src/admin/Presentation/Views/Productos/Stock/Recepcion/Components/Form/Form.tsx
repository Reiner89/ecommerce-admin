import * as Styles from "../../../../../../Styles/Actions";
import * as Icon from "../../../../../../Components/Icons/Iconos";
import * as C from "./Components";
import { useStock } from "../../../../../../Hooks/useStock";

export const Form = () => {
  const { agregarCereales, formRecep } = useStock();

  return (
    <form
      onSubmit={agregarCereales}
      autoComplete="off"
      className="w-full flex flex-col gap-8"
    >
      <C.FormTop />
      <C.FormBody />
      <C.FormBottom />
      <div className="cont-button flex">
        <button
          className={Styles.buttonSubmit}
          disabled={
            formRecep.recepCantIng <= 0 || formRecep.recepCantIng === undefined
          }
        >
          <Icon.Agregar className="relative text-lg" />
          <p>Agregar Sereales</p>
        </button>
      </div>
    </form>
  );
};
