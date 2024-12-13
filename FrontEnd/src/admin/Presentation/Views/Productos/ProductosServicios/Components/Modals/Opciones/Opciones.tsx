import * as Icon from "../../../../../../Components/Icons/Iconos";
import { useProdServices } from "../../../Hooks/useProdServices";

export const Opciones = ({ modalOpciones }: Props) => {
  const { handleModalOpciones } = useProdServices();

  return (
    <div
      className={`sombra absolute min-w-[235px] max-w-[270px] max-h-[512px] bg-white rounded z-20 top-10 right-0 transition-all duration-300 ${
        modalOpciones ? "block opacity-100" : "hidden opacity-0"
      }`}
    >
      <ul className="relative py-2">
        <li
          // onClick={handleExportProducts}
          className="flex items-center py-0.5 px-4 text-[#39404a] text-[0.875rem] hover:bg-gray-100 transition-all cursor-pointer"
        >
          <span className="relative mr-2 text-[17px]">
            <Icon.Exportar />
          </span>
          Exportar
        </li>
        <li
          onClick={handleModalOpciones}
          className="flex items-center py-0.5 px-4 text-[#39404a] text-[0.875rem] hover:bg-gray-100 transition-all cursor-pointer"
        >
          <span className="relative mr-2 text-[17px]">
            <Icon.IconPapelera />
          </span>
          Papelera
        </li>
      </ul>
    </div>
  );
};

interface Props {
  modalOpciones: boolean;
}
