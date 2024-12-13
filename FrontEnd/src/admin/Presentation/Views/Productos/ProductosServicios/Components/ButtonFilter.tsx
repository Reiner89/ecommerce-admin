interface Props {
  label: string;
  cantidad: number;
}

export const ButtonFilter = ({ label, cantidad }: Props) => {
  return (
    <div className="relative transition-all duration-75 border-b-[3px] border-[#09c] cursor-pointer">
      <span className="relative w-[50px] text-[1rem] font-semibold  transition-all duration-75 text-[#09c]">
        {label}
      </span>
      <span className="relative text-[1rem] font-bold px-1 ml-1 rounded-lg transition-all duration-75 text-[#09c] bg-[#e6f5fa]">
        {cantidad}
      </span>
    </div>
  );
};
