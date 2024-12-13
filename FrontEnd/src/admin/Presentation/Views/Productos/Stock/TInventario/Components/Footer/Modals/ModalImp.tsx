import { useStock } from "../../../../../../../Hooks/useStock";
import * as Icon from "../../../../../../../Components/Icons/Iconos";

export const ModalImp = () => {
  const { modalImportar, openImpPlantilla } = useStock();

  return (
    <div
      className={`w-[195px] absolute right-0 top-10 bg-white border border-[#dadce0] rounded z-10 ${
        modalImportar ? "block" : "hidden"
      }`}
    >
      <ul className="relative flex flex-col p-3 text-sm normal-case text-[#39404a]">
        <li
          onClick={openImpPlantilla}
          className="relative flex gap-3 items-center py-2 px-3 cursor-pointer hover:bg-gray-100"
        >
          <Icon.ImportFile />
          <p className="">Importar Plantilla</p>
        </li>
        <li className="relative flex gap-3 items-center py-2 px-3 cursor-pointer hover:bg-gray-100">
          <Icon.Exportar />
          <p className="">Descargar Plantilla</p>
        </li>
        <li className="relative flex gap-3 items-center py-2 px-3 cursor-pointer hover:bg-gray-100">
          <Icon.Exportar />
          <p className="">Descargar Formato</p>
        </li>
      </ul>
    </div>
  );
};
