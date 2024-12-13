import { IconBuscador } from "../../../../../../Components/Icons/Iconos";

export const Buscador = () => {
  return (
    <div
      className={`cont-buscador relative transition-all duration-300 h-[37px] w-[240px]`}
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
          placeholder="Buscar notificación..."
          className="w-full h-full text-[.875rem] text-[#000000de] bg-transparent outline-none"
        />
      </label>
    </div>
  );
};
