import { ImgProds } from "../Components/ImgProds/ImgProds";
import { useProdServices } from "../../../../../Hooks/useProdServices";
import * as Styles from "../../../../../../../../Styles/Actions";
import { Seriales } from "../../../../../../../../../Interfaces/Productos/Productos";

export const LeftEdit = () => {
  const { selectedProd, changeSelectedProd } = useProdServices();

  return (
    <>
      {selectedProd && (
        <>
          <ImgProds />
          <div className="cont-input w-full relative">
            <input
              type="text"
              className={Styles.inputL}
              id="nombreProducto"
              placeholder=" "
              value={selectedProd.nombreProducto}
              onChange={changeSelectedProd}
              required
            />
            <label htmlFor="nombreProducto" className={Styles.labelL}>
              Nombre del Producto
              <span className="relative text-red-700 ml-1">*</span>
            </label>
          </div>
          <div className="cont-tipo relative flex gap-x-1 w-full">
            <div className="cont-input w-full">
              <input
                type="text"
                className={Styles.inputL}
                id="categoriaProducto"
                placeholder=" "
                value={selectedProd.categoriaProducto}
                onChange={changeSelectedProd}
                required
              />
              <label htmlFor="categoriaProducto" className={Styles.labelL}>
                Categoría
                <span className="relative text-red-700 ml-1">*</span>
              </label>
            </div>
          </div>
          <div className="cont-marca relative flex gap-x-1 w-full">
            <div className="cont-input w-full">
              <input
                type="text"
                className={Styles.inputL}
                id="marcaProducto"
                placeholder=" "
                value={selectedProd.marcaProducto}
                onChange={changeSelectedProd}
                required
              />
              <label htmlFor="marcaProducto" className={Styles.labelL}>
                Marca
                <span className="relative text-red-700 ml-1">*</span>
              </label>
            </div>
          </div>
          <div className="cont-seriales relative flex flex-col w-full">
            <div className="cont-input w-full">
              <select
                id="cantSerialesProducto"
                className={Styles.select}
                value={selectedProd.cantSerialesProducto}
                onChange={changeSelectedProd}
              >
                <option>Seriales</option>
                {Seriales.map((seriales) => (
                  <option key={seriales.value}>{seriales.value}</option>
                ))}
              </select>
              <label htmlFor="cantSerialesProducto" className="hidden">
                Seriales
                <span className="relative text-red-700 ml-1">*</span>
              </label>
            </div>
          </div>
        </>
      )}
    </>
  );
};
