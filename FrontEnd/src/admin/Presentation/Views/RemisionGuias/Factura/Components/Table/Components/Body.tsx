import { useRemisionGuias } from "../../../../../../Hooks/useRemisionGuias";
import * as Styles from "../../../../../../Styles/Actions";
import { Actions } from "./Actions";

export const Body = () => {
  const { formTable, handleInputChangeFTable } = useRemisionGuias();

  return (
    <tbody>
      {formTable.map((item) => (
        <tr key={item.TFid}>
          <td className="relative px-2 py-4">{item.TFid}</td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="TFcodigo"
              id="TFcodigo"
              placeholder=""
              value={item.TFcodigo}
              onChange={(e) => handleInputChangeFTable(item.TFid, e)}
            />
            <label htmlFor="TFcodigo" className={`hidden ${Styles.labelD}`}>
              Código:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="TFcantidad"
              id="TFcantidad"
              placeholder=""
              value={item.TFcantidad}
              onChange={(e) => handleInputChangeFTable(item.TFid, e)}
            />
            <label htmlFor="TFcantidad" className={`hidden ${Styles.labelD}`}>
              Cantidad:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="TFunidad"
              id="TFunidad"
              placeholder=""
              value={item.TFunidad}
              onChange={(e) => handleInputChangeFTable(item.TFid, e)}
            />
            <label htmlFor="TFunidad" className={`hidden ${Styles.labelD}`}>
              Unidad:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="TFdescripcion"
              id="TFdescripcion"
              placeholder=""
              value={item.TFdescripcion}
              onChange={(e) => handleInputChangeFTable(item.TFid, e)}
            />
            <label
              htmlFor="TFdescripcion"
              className={`hidden ${Styles.labelD}`}
            >
              Descripción:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="TFVunitario"
              id="TFVunitario"
              placeholder=""
              value={item.TFVunitario}
              onChange={(e) => handleInputChangeFTable(item.TFid, e)}
            />
            <label htmlFor="TFVunitario" className={`hidden ${Styles.labelD}`}>
              V. Unit:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="TFPUnitario"
              id="TFPUnitario"
              placeholder=""
              value={item.TFPUnitario}
              onChange={(e) => handleInputChangeFTable(item.TFid, e)}
            />
            <label htmlFor="TFPUnitario" className={`hidden ${Styles.labelD}`}>
              P. Unit:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <input
              className={Styles.inputD}
              type="text"
              name="TFImpTotal"
              id="TFImpTotal"
              value={item.TFImpTotal}
              onChange={(e) => handleInputChangeFTable(item.TFid, e)}
              placeholder=""
              readOnly
              disabled
            />
            <label htmlFor="TFImpTotal" className={`hidden ${Styles.labelD}`}>
              Imp. Total:
            </label>
          </td>
          <td className="relative px-2 py-4">
            <Actions index={item.TFid} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
