import * as Styles from "../../../../../../Styles/Actions";
import * as Icon from "../../../../../../Components/Icons/Iconos";
import * as CForm from "./Components";
import { useStock } from "../../../../../../Hooks/useStock";

export const Form = () => {
  const { agregarSerialesUnitariasC, formConsumo } = useStock();

  return (
    <form autoComplete="off" className="flex flex-col gap-5">
      <CForm.Top />
      <CForm.Body />
      <div className="cont-button flex">
        <button
          type="button"
          onClick={agregarSerialesUnitariasC}
          className={Styles.buttonSubmit}
          disabled={formConsumo.consumoCant === 0}
        >
          <Icon.Agregar className="relative text-lg" />
          <p>Agregar Seriales</p>
        </button>
      </div>
    </form>
  );
};
