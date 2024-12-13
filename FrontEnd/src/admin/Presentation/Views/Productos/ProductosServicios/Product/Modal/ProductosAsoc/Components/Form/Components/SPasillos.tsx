import { useProdServices } from "../../../../../../Hooks/useProdServices";

export const SPasillos = () => {
  const { pasillosProd, modalPasillosProd } = useProdServices();

  return (
    <div
      className={`scroll h-auto max-h-28 absolute top-11 left-0 right-0 bg-gray-50 shadow-[rgba(96,125,139,.1)] shadow-lg p-3 rounded-md z-10 overflow-auto ${
        modalPasillosProd ? "visible" : "invisible"
      }`}
    >
      <div className="relative text-xs flex flex-col gap-3">
        {pasillosProd.map((dp) => (
          <p
            key={dp.id}
            className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
            // onClick={() => SeleccionarPlaca(dp.name)}
          >
            {dp.name}
          </p>
        ))}
      </div>
    </div>
  );
};
