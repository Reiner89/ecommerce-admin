import * as P from "../../Product";
import { useProdServices } from "../../Hooks/useProdServices";
import { LoaderTables } from "../../../../../Components";
import { Producto } from "../../../../../../Interfaces/Productos/Productos";

export const Table = ({ estadoActivo, productsFiltered }: Props) => {
  const { loading, prodsPaginated } = useProdServices();

  return (
    <div className="scroll cont-tabla relative w-full overflow-x-auto">
      {loading ? (
        <LoaderTables />
      ) : (
        <P.Table
          data={estadoActivo === "Todos" ? prodsPaginated : productsFiltered}
        />
      )}
    </div>
  );
};

interface Props {
  estadoActivo: string;
  productsFiltered: Producto[];
}
