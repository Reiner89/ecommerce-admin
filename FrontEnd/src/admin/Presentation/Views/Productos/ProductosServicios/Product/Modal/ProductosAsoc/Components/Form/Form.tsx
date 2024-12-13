import * as Styles from "../../../../../../../../Styles/Actions";
import { useProdServices } from "../../../../../Hooks/useProdServices";
import { SAlmacenes } from "./Components/SAlmacenes";
import { SNiveles } from "./Components/SNiveles";
import { SPasillos } from "./Components/SPasillos";
import { SSubniveles } from "./Components/SSubniveles";
import { SZonas } from "./Components/SZonas";

export const Form = () => {
  const {
    refAlmacenProd,
    handleModalAlmacen,
    refZonasProd,
    handleModalZonas,
    refPasillosProd,
    handleModalPasillos,
    refSubnivelesProd,
    handleModalSubniveles,
    refNivelesProd,
    handleModalNiveles,
  } = useProdServices();

  return (
    <div className="relative w-full flex flex-col gap-4">
      <div className="flex gap-5">
        <div
          ref={refAlmacenProd}
          onClick={handleModalAlmacen}
          className="input-almacen relative"
        >
          <input
            type="text"
            className={Styles.inputL}
            placeholder=" "
            id="almacenProducto"
            required
          />
          <label htmlFor="almacenProducto" className={Styles.labelL}>
            Almacenes
          </label>
          <SAlmacenes />
        </div>
        <div
          ref={refZonasProd}
          onClick={handleModalZonas}
          className="input-almacen relative"
        >
          <input
            type="text"
            className={Styles.inputL}
            placeholder=" "
            id="zonaProducto"
            required
          />
          <label htmlFor="zonaProducto" className={Styles.labelL}>
            Zonas
          </label>
          <SZonas />
        </div>
        <div
          ref={refPasillosProd}
          onClick={handleModalPasillos}
          className="input-almacen relative"
        >
          <input
            type="text"
            className={Styles.inputL}
            placeholder=" "
            id="pasilloProducto"
            required
          />
          <label htmlFor="pasilloProducto" className={Styles.labelL}>
            Pasillos
          </label>
          <SPasillos />
        </div>
        <div
          ref={refNivelesProd}
          onClick={handleModalNiveles}
          className="input-almacen relative"
        >
          <input
            type="text"
            className={Styles.inputL}
            placeholder=" "
            id="nivelProducto"
            required
          />
          <label htmlFor="nivelProducto" className={Styles.labelL}>
            Niveles
          </label>
          <SNiveles />
        </div>
        <div
          ref={refSubnivelesProd}
          onClick={handleModalSubniveles}
          className="input-almacen relative"
        >
          <input
            type="text"
            className={Styles.inputL}
            placeholder=" "
            id="subnivelProducto"
            required
          />
          <label htmlFor="subnivelProducto" className={Styles.labelL}>
            Subniveles
          </label>
          <SSubniveles />
        </div>
      </div>
      <div className="container flex justify-end">
        <button type="button" className={Styles.buttonSubmit}>
          Ubicar
        </button>
      </div>
    </div>
  );
};
