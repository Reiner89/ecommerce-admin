export const CardConsumo = ({ chageTOrden, title, icon }: Props) => {
  return (
    <button
      type="button"
      onClick={chageTOrden}
      className="w-[50%] focus:bg-[#09C] focus:border-gray-500 focus:text-white text-gray-500 border-4 px-2 shadow-md border-gray-500 rounded-xl transition-all duration-300"
    >
      <p className="text-5xl my-2 font-semibold flex justify-center">{icon}</p>
      <div className="px-2 mb-4">
        <p className="text-sm font-semibold">{title}</p>
      </div>
    </button>
  );
};

interface Props {
  chageTOrden: () => void;
  title: string;
  icon: React.JSX.Element;
}
