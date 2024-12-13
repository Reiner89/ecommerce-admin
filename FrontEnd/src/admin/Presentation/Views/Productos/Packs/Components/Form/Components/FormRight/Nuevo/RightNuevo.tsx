import { Agregar } from "../../../../../../../../Components/Icons/Iconos";
import * as Styles from "../../../../../../../../Styles/Actions";
import { useProdServices } from "../../../../../../ProductosServicios/Hooks/useProdServices";

export const RightNuevo = () => {
  const { formPack, handleChangePack, verProductosAsoc, tableProductos } =
    useProdServices();

  return (
    <div className="cont-form-izquierdo w-full">
      <div className="sombra w-full relative flex flex-col gap-y-7 bg-white p-[15px] rounded-xl">
        <div className="relative flex flex-col w-full my-6 gap-y-6">
          <div className="row flex flex-col lg:flex-row justify-between w-full gap-5">
            <div className="cont-producto relative flex flex-col w-full lg:w-[47%]">
              <div className="cont-input w-full">
                <input
                  type="text"
                  className={Styles.inputL}
                  placeholder=" "
                  id="packNombre"
                  value={formPack.packNombre}
                  onChange={handleChangePack}
                />
                <label htmlFor="packNombre" className={Styles.labelL}>
                  Nombre del Pack
                  <span className="relative text-red-700 ml-1">*</span>
                </label>
              </div>
              <div className="info w-full flex px-1 pt-2">
                <p className="relative text-[.70rem] text-[rgba(0,0,0,.6)]">
                  Ejemplo: Polera + Pantalón
                </p>
              </div>
            </div>
            <div className="cont-variante relative flex flex-col w-full lg:w-[47%]">
              <div className="cont-input w-full">
                <input
                  className={Styles.inputL}
                  placeholder=" "
                  id="packSku"
                  value={formPack.packSku}
                  onChange={handleChangePack}
                />
                <label htmlFor="packSku" className={Styles.labelL}>
                  SKU
                </label>
              </div>
              <div className="info flex px-1 pt-2 w-full">
                <p className="relative text-[.70rem] text-[rgba(0,0,0,.6)]">
                  Si no tienes, le crearemos uno
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="cont-tipo relative flex flex-col w-full lg:w-[47%]">
              <input
                className={Styles.inputL}
                placeholder=" "
                id="packTipo"
                value={formPack.packTipo}
                onChange={handleChangePack}
              />
              <label htmlFor="packTipo" className={Styles.labelL}>
                Tipo de Producto
              </label>
            </div>
          </div>
          <div className="row flex flex-col w-full gap-3">
            <div className="w-full flex justify-between">
              <div />
              <p
                onClick={() => verProductosAsoc(tableProductos)}
                className="relative bg-[#09C] text-white rounded-full p-1.5 cursor-pointer"
              >
                <Agregar />
              </p>
            </div>
            <div className="relative">
              <textarea
                id="productosPacks"
                className={Styles.inputTextAreaL}
                placeholder=""
                value={formPack.productosPacks
                  .map((prod) => prod.nombreProducto)
                  .join(", ")}
                readOnly
              />
              <label htmlFor="productosPacks" className={Styles.labelTextAreaL}>
                Productos del Pack
              </label>
            </div>
          </div>
          <div className="cont-descripcion relative w-full">
            <textarea
              id="comentarioPack"
              className={Styles.inputTextAreaL}
              placeholder=" "
              value={formPack.comentarioPack}
              onChange={handleChangePack}
            />
            <label htmlFor="comentarioPack" className={Styles.labelTextAreaL}>
              Descripción del Pack
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
