import { Body } from "./Components/Body";
import { Headet } from "./Components/Headet";

export const Table = () => {
  return (
    <div className="relative flex justify-center">
      <div className="scroll table-matriz-container w-full max-h-80 relative flex flex-col overflow-y-auto">
        <table className="relative w-full text-[#67748e] block whitespace-nowrap table-fixed">
          <Headet />
          <Body />
        </table>
      </div>
    </div>
  );
};
