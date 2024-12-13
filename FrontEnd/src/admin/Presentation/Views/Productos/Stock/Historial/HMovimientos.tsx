import { Layout } from "../../../../Layout/Layout";
import { Table } from "./Components/Table/Table";
import { Form } from "./Components/Form/Form";
import { Pagination } from "./Components/Pagination/Pagination";
import { CantMov } from "./Components/CantMov";
import { Toaster } from "sonner";

export const HMovimientos = () => {
  return (
    <Layout
      areaPadre="Stock"
      areaPagina="Historial de Movimientos"
      children={
        <>
          <Toaster richColors position="bottom-right" />
          <div className="historial-movimientos-container flex flex-col gap-5">
            <Form />
            <div className="relative flex flex-col gap-5 bg-white rounded-lg p-5">
              <CantMov />
              <Table />
              <Pagination />
            </div>
          </div>
        </>
      }
    />
  );
};
