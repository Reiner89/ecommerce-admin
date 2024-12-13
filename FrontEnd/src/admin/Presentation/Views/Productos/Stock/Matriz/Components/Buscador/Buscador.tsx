import { IconBuscador } from "../../../../../../Components/Icons/Iconos";
import { useStock } from "../../../../../../Hooks/useStock";

export const Buscador = () => {
  const { searchMat, handleSearchMat } = useStock();

  return (
    <div className={`cont-buscador relative transition-all duration-300`}>
      <label
        htmlFor="searchMatriz"
        className="inline-flex h-full w-full px-4 py-2 bg-[#e5e9ed] rounded-[12px]"
      >
        <i className="relative flex items-center text-[1.15rem] text-[#666] mr-3">
          <IconBuscador />
        </i>
        <input
          type="text"
          id="searchMatriz"
          placeholder="Buscar..."
          value={searchMat}
          onChange={handleSearchMat}
          className="w-full h-full text-[.875rem] text-[#000000de] bg-transparent outline-none"
        />
      </label>
    </div>
  );
};
