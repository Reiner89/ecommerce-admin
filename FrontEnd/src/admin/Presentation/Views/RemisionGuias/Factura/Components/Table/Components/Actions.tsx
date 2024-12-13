import * as Icon from "../../../../../../Components/Icons/Iconos";
import { useRemisionGuias } from "../../../../../../Hooks/useRemisionGuias";

export const Actions = ({ index }: Props) => {
  const { formTable, handleDeleteItem, handleAddItem } = useRemisionGuias();

  return (
    <div className="flex gap-2">
      <div
        onClick={() => handleDeleteItem(index)}
        className={`delete p-1 bg-red-500 rounded-full text-white cursor-pointer ${
          formTable.length === 1 ? "hidden" : ""
        }`}
      >
        <Icon.Delete />
      </div>
      <div
        onClick={handleAddItem}
        className="add p-1 bg-green-500 rounded-full text-white cursor-pointer"
      >
        <Icon.Agregar />
      </div>
    </div>
  );
};

interface Props {
  index: number;
}
