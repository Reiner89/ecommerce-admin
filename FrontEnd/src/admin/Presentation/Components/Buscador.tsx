import { IconBuscador } from "./Icons/Iconos";

interface Props {
  htmlRef: React.RefObject<HTMLDivElement>;
  active: boolean;
  changeActive: () => void;
}

export const Buscador = ({ htmlRef, active, changeActive }: Props) => {
  return (
    <div
      ref={htmlRef}
      className={`cont-buscador relative transition-all duration-300 h-[37px] ${
        active ? "w-[240px]" : "w-[180px]"
      }`}
      onClick={changeActive}
    >
      <label
        htmlFor="buscador"
        className="inline-flex h-full w-full pl-3 pr-4 bg-[#e5e9ed] rounded-[12px]"
      >
        <i className="relative flex items-center text-[1.15rem] text-[#666] mr-3">
          <IconBuscador />
        </i>
        <input
          type="text"
          id="buscador"
          placeholder="Buscar..."
          className="w-full h-full text-[.875rem] text-[#000000de] bg-transparent outline-none"
        />
      </label>
    </div>
  );
};
