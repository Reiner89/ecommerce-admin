export const Header = () => {
  return (
    <thead>
      <tr className="text-[.65rem] text-[#8392ab] text-left uppercase opacity-70 border-b border-solid border-[#e9ecef]">
        <th className="py-3 px-6">Item</th>
        <th className="py-3 px-6">Código</th>
        <th className="py-3 px-6">Cantidad</th>
        <th className="py-3 px-6">Unidad</th>
        <th className="py-3 px-6">Descripción</th>
        <th className="py-3 px-6">V. Unit. (sin impuesto)</th>
        <th className="py-3 px-6">P. Unit. (sin impuesto)</th>
        <th className="py-3 px-6">Imp. Total (con impuesto)</th>
        <th className="py-3 px-6"></th>
      </tr>
    </thead>
  );
};
