import { useRemisionGuias } from "../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../Styles/Actions";

export const DocumentoRef = () => {
  const { tipoFactura,handleCompReferencia } = useRemisionGuias();

  return (
    <div className="relative flex flex-col gap-y-3 border border-gray-400 rounded-xl p-4">
      <h1 className="font-semibold text-base text-[#344767]">
        Documentos de referencia
      </h1>
      <div className="form-documentos-referencia-container relative flex flex-col gap-y-5">
        <div className="relative w-full">
          <input
            type="text"
            name={tipoFactura === "nacional" ? "NCondPago" : "ICondPago"}
            id={tipoFactura === "nacional" ? "NCondPago" : "ICondPago"}
            className={Styles.inputS}
            placeholder=" "
            required
          />
          <label
            htmlFor={tipoFactura === "nacional" ? "NCondPago" : "ICondPago"}
            className={Styles.labelS}
          >
            Condicion de pago
          </label>
        </div>
        <div className="relative w-full ">
          <input
            type="text"
            name={tipoFactura === "nacional" ? "NOrdenC" : "IOrdenC"}
            id={tipoFactura === "nacional" ? "NOrdenC" : "IOrdenC"}
            className={Styles.inputS}
            placeholder=" "
            required
          />
          <label
            htmlFor={tipoFactura === "nacional" ? "NOrdenC" : "IOrdenC"}
            className={Styles.labelS}
          >
            Orden de Compra
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name={tipoFactura === "nacional" ? "NCentroC" : "ICentroC"}
            id={tipoFactura === "nacional" ? "NCentroC" : "ICentroC"}
            className={Styles.inputS}
            placeholder=" "
            required
          />
          <label
            htmlFor={tipoFactura === "nacional" ? "NCentroC" : "ICentroC"}
            className={Styles.labelS}
          >
            Centro de costos
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name={tipoFactura === "nacional" ? "NProyecto" : "IProyecto"}
            id={tipoFactura === "nacional" ? "NProyecto" : "IProyecto"}
            className={Styles.inputS}
            placeholder=" "
            required
          />
          <label
            htmlFor={tipoFactura === "nacional" ? "NProyecto" : "IProyecto"}
            className={Styles.labelS}
          >
            Referencias a proyectos
          </label>
        </div>
        <div></div>
        <div className="flex items-center gap-5">
          <h1 className=" font-semibold text-sm text-[#344767]">
            Guias de remision:
          </h1>
          <button
            onClick={handleCompReferencia}
            className={Styles.buttonSubmit}
          >
            Agregar guia
          </button>
        </div>
      </div>
    </div>
  );
};
