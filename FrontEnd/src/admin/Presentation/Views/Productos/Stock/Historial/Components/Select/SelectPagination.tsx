import { useStock } from "../../../../../../Hooks/useStock";

export const SelectPagination = () => {
  const { modalPagMov, changeMovPerPage } = useStock();

  return (
    <div
      className={`absolute top-7 left-0 bg-gray-50 shadow-md z-10 ${
        modalPagMov ? "visible" : "hidden"
      }`}
    >
      <div className="relative flex flex-col gap-3 text-xs text-[rgb(96_125_139/1)]">
        <p
          className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => changeMovPerPage(5)}
        >
          5
        </p>
        <p
          className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => changeMovPerPage(10)}
        >
          10
        </p>
        <p
          className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => changeMovPerPage(15)}
        >
          15
        </p>
      </div>
    </div>
  );
};
