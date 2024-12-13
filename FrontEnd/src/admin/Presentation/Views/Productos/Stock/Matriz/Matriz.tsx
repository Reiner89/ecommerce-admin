import { Toaster } from "sonner";
import { Layout } from "../../../../Layout/Layout";
import { Table } from "./Components/Table/Table";
import { CantMov } from "./Components/CantItems/CantMov";
import { Pagination } from "./Components/Pagination/Pagination";
import { Buscador } from "./Components/Buscador/Buscador";
import { useStock } from "../../../../Hooks/useStock";
import { buttonAction } from "../../../../Styles/Actions";
import { FileCsv } from "../../../../Components/Icons/Iconos";

export const Matriz = () => {
  const { exportMovsToExcelMatrices } = useStock();

  return (
    <Layout
      areaPadre="Stock"
      areaPagina="Matriz"
      children={
        <>
          <Toaster richColors position="bottom-right" />
          <div className="matriz-container flex flex-col gap-5">
            <div className="relative flex flex-col gap-5 bg-white rounded-lg p-5">
              <div className="flex justify-between">
                <CantMov />
                <div className="right-container flex gap-5">
                  <Buscador />
                  <button
                    onClick={exportMovsToExcelMatrices}
                    className={buttonAction}
                    type="button"
                  >
                    <FileCsv className="mr-2" />
                    Exportar a CSV
                  </button>
                </div>
              </div>
              <Table />
              <Pagination />
            </div>
          </div>
        </>
      }
    />
  );
};
