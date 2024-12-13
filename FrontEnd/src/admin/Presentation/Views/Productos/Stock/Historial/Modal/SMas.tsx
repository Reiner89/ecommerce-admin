export const SMas = ({ seriales, isOpen }: Props) => {
  if (!seriales) {
    return null;
  }

  return (
    <div
      className={`absolute w-80 max-w-80 h-32 max-h-min-h-32 scroll right-0 bottom-6 text-[#67748e] font-normal bg-gray-50 shadow-[rgba(96,125,139,.1)] shadow-md p-3 rounded-md z-10 overflow-y-auto overflow-x-hidden transition-all duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div className="grid grid-cols-3 gap-4">
        {seriales.map((serial, index) => (
          <p key={index} className="">
            {serial}
          </p>
        ))}
      </div>
    </div>
  );
};

interface Props {
  seriales: string[];
  isOpen: boolean;
}
