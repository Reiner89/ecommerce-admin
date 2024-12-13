export const CardIGV = ({ active, changeIGV, IGV, description }: Props) => {
  return (
    <button
      type="button"
      onClick={changeIGV}
      className={`w-[50%] focus:bg-[#09C] focus:border-gray-500 focus:text-white text-gray-500 border-4 px-2 shadow-md border-gray-500 rounded-xl transition-all duration-300 ${
        active ? "bg-[#09C] text-white " : ""
      }`}
    >
      <p className="text-5xl my-2 font-semibold">{IGV}</p>
      <div className="px-2 mb-4">
        <p className="text-sm font-semibold">{description}</p>
      </div>
    </button>
  );
};

interface Props {
  active: boolean;
  changeIGV: () => void;
  IGV: "10.00" | "18.00";
  description: string;
}
