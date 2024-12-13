import { Documentos } from "../../../../../../../../Data/Stock";
import { useStock } from "../../../../../../../../Hooks/useStock";

export const SelectDRecepcion = () => {
  const { modalDoc, changeDoc } = useStock();

  return (
    <div
      className={`scroll h-auto max-h-28 absolute top-11 left-0 right-0 border bg-gradient-to-br from-white dark:to-black shadow-[rgba(96,125,139,.1)] bg-[hsl(0_0%_100%)] shadow-lg p-3 rounded-md z-10 overflow-auto ${
        modalDoc ? "visible" : "invisible"
      }`}
    >
      <div className="relative text-xs flex flex-col gap-3">
        {Documentos.filter((doc) => doc.idTDoc === 1).map((doc) => (
          <p
            key={doc.id}
            onClick={() => changeDoc(doc.nombreDocumeto)}
            className="text-xs text-[rgb(96_125_139/1)] px-3 py-2 hover:bg-gray-200 cursor-pointer"
          >
            {doc.nombreDocumeto}
          </p>
        ))}
      </div>
    </div>
  );
};
