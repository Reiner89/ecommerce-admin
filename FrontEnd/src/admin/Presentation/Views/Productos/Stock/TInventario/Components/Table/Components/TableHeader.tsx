import { TInventario } from "../../../../../../../../Interfaces/Context/TomaI/TomaI";

export const TableHeader = ({ inventarios, deatallesExist }: Props) => {
  return (
    <div className="table-header w-full flex gap-1 text-sm text-[#999999] mb-3 pb-3">
      Llevas ingresado
      <p className="relative font-bold">{inventarios.length}</p>
      <p className={`${deatallesExist === 0 ? "hidden" : "block"}`}>
        ({deatallesExist} detalles no cargados)
      </p>
      registros de inventario destinada a la sucursal
      <p className="relative font-bold">Domicilio Fiscal</p>
    </div>
  );
};

interface Props {
  inventarios: TInventario[];
  deatallesExist: number;
}
