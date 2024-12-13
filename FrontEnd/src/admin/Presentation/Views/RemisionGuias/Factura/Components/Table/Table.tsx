import * as CTable from "./Components";

export const Table = () => {
  return (
    <div className="relative flex justify-center">
      <div className="scroll table-matriz-container w-full max-h-80 relative flex flex-col overflow-y-auto">
        <table className="relative w-full text-[#67748e] mb-5 xl:mb-0">
          <CTable.Header />
          <CTable.Body />
        </table>
      </div>
    </div>
  );
};
