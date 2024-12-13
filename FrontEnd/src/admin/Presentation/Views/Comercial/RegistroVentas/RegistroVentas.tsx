import { Header } from "./Components/Header/Header";
import { Layout } from "../../../Layout/Layout";
import { Table } from "./Components/Table/Table";

export const CReportes = () => {
  return (
    <Layout
      areaPadre="Comercial"
      areaPagina="Registro de Ventas"
      children={
        <div className="historial-movimientos-container flex flex-col gap-5">
          <div className="relative flex flex-col gap-5 bg-white rounded-lg p-5">
            <Header />
            <Table />
          </div>
        </div>
      }
    />
  );
};
