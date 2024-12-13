import { TiposArray } from "../../../../../../../Interfaces/Productos/Productos";
import { useProdServices } from "../../../Hooks/useProdServices";

export const FilTipos = ({ showModal }: Props) => {
  // Hook personalizado
  const { changetipoActivo } = useProdServices();

  return (
    <div
      className={`absolute z-10 top-8 bg-gray-50 shadow-md rounded-lg w-44 dark:bg-gray-700 dark:divide-gray-600 ${
        showModal ? "block" : "hidden"
      }`}
    >
      <ul className="relative flex flex-col gap-3 text-xs text-[rgb(96_125_139/1)] cursor-pointer">
        {TiposArray.map((item) => (
          <li
            key={item}
            onClick={() => {
              changetipoActivo(item);
            }}
            className="px-3 py-2 hover:bg-gray-200"
          >
            <span className="">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface Props {
  showModal: boolean;
}
