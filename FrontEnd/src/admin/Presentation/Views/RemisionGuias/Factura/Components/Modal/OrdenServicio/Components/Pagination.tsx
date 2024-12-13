export const Pagination = () => {
  return (
    <div className="relative flex items-center gap-5">
      <div className="prev relative text-xs text-[#8392ab] hover:text-[#09C] cursor-pointer">
        ◄ Anterior
      </div>
      <div className="next relative text-xs text-[#8392ab] hover:text-[#09C] cursor-pointer">
        Siguiente ►
      </div>
    </div>
  );
};
