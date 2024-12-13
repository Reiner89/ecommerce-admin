import { Agregar, Delete } from "../../../../../../Components/Icons/Iconos";
import { useRemisionGuias } from "../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../Styles/Actions";

export const Body = () => {
  const {
    TableGR,
    handleInputChangeGRTable,
    agregarGuiaTabla,
    eliminarGuiaTabla,
  } = useRemisionGuias();

  return (
    <tbody>
      {TableGR.map((item) => (
        <tr key={item.idTableGR}>
          <td className="relative px-2 py-4">{item.idTableGR}</td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="cantidadTGR"
              id="cantidadTGR"
              placeholder=""
              value={item.cantidadTGR}
              onChange={(e) => handleInputChangeGRTable(item.idTableGR, e)}
            />
            <label htmlFor="cantidadTGR" className={`hidden ${Styles.labelD}`}>
              Cantidad:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="unidadTGR"
              id="unidadTGR"
              placeholder=""
              value={item.unidadTGR}
              onChange={(e) => handleInputChangeGRTable(item.idTableGR, e)}
            />
            <label htmlFor="unidadTGR" className={`hidden ${Styles.labelD}`}>
              Unidad:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="codigoTGR"
              id="codigoTGR"
              placeholder=""
              value={item.codigoTGR}
              onChange={(e) => handleInputChangeGRTable(item.idTableGR, e)}
            />
            <label htmlFor="codigoTGR" className={`hidden ${Styles.labelD}`}>
              Codgio:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="descripcionTGR"
              id="descripcionTGR"
              placeholder=""
              value={item.descripcionTGR}
              onChange={(e) => handleInputChangeGRTable(item.idTableGR, e)}
            />
            <label
              htmlFor="descripcionTGR"
              className={`hidden ${Styles.labelD}`}
            >
              Descripcion:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="codSunatTGR"
              id="codSunatTGR"
              placeholder=""
              value={item.codSunatTGR}
              onChange={(e) => handleInputChangeGRTable(item.idTableGR, e)}
            />
            <label htmlFor="codSunatTGR" className={`hidden ${Styles.labelD}`}>
              Cod Sunat:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="GtinTGR"
              id="GtinTGR"
              placeholder=""
              value={item.GtinTGR}
              onChange={(e) => handleInputChangeGRTable(item.idTableGR, e)}
            />
            <label htmlFor="GtinTGR" className={`hidden ${Styles.labelD}`}>
              GTIN:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="codSubpNacionalTGR"
              id="codSubpNacionalTGR"
              placeholder=""
              value={item.codSubpNacionalTGR}
              onChange={(e) => handleInputChangeGRTable(item.idTableGR, e)}
            />
            <label
              htmlFor="codSubpNacionalTGR"
              className={`hidden ${Styles.labelD}`}
            >
              Cod Subp Nacional:
            </label>
          </td>
          <td className="relative px-2 py-4">0.00</td>
          <td className="relative px-2 py-4 flex gap-2">
            <button
              type="button"
              className="add p-1 bg-green-500 rounded-full text-white cursor-pointer"
              onClick={agregarGuiaTabla}
            >
              <Agregar />
            </button>
            <button
              type="button"
              className={`delete p-1 bg-red-500 rounded-full text-white cursor-pointer ${
                TableGR.length === 1 ? "hidden" : ""
              }`}
              onClick={() => eliminarGuiaTabla(item.idTableGR)}
            >
              <Delete />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
