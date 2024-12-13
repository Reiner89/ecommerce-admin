import { CompsRef } from "../../../../../../../Data/BoletaFactura";

export const Table = () => {
  return (
    <div className="relative min-h-[250px] flex justify-center">
      <div className="scroll table-matriz-container w-full relative flex flex-col overflow-y-hidden">
        <table className="relative w-full text-[#67748e] mb-5 xl:mb-0">
          <thead>
            <tr className="text-[.65rem] text-[#8392ab] text-left uppercase opacity-70 border-b border-solid border-[#e9ecef]">
              <th className="py-3 px-6">Áreas del Cliente</th>
              <th className="py-3 px-6">N° Comprobante</th>
              <th className="py-3 px-6">Fecha Emision</th>
              <th className="py-3 px-6">Cantidad de Guías</th>
            </tr>
          </thead>
          <tbody>
            {CompsRef.map((item) => (
              <tr
                key={item.id}
                className="text-[.875rem] text-left leading-[1.5] font-normal border-b cursor-pointer hover:bg-gray-100"
              >
                <td className="py-3 px-6">{item.cliente}</td>
                <td className="py-3 px-6">{item.NComp}</td>
                <td className="py-3 px-6">{item.fechaEmision}</td>
                <td className="py-3 px-6">{item.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
