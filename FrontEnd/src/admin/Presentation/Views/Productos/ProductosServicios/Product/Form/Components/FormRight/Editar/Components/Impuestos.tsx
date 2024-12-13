import { useProdServices } from "../../../../../../Hooks/useProdServices";

export const Impuestos = () => {
  const { openModalImp } = useProdServices();

  return (
    <div className="impuestos-container relative w-full h-auto py-3 transition-all duration-300">
      <div className="impuestos sombra w-full relative bg-white p-5 rounded-xl transition-all duration-300">
        <div className="impuestos-header w-full flex justify-between mb-4">
          <h2 className="flex items-center text-xl text-[#4e5865] font-semibold">
            Impuestos
          </h2>
          <button
            type="button"
            onClick={openModalImp}
            className="flex items-center text-sm text-[#09c] font-medium border border-[#09c] py-2 px-4 rounded hover:bg-[#09c] hover:bg-opacity-5 transition-all duration-300"
          >
            Asociar Impuestos
          </button>
        </div>
        <ul className="impuestos-body flex flex-col gap-2.5 list-disc list-inside transition-all duration-300">
          <li className="relative text-sm text-[#4e5865]">IGV(18%)</li>
        </ul>
      </div>
    </div>
  );
};
