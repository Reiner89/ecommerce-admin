import * as Icon from "../../../Components/Icons/Iconos";
import { useAdministracion } from "../../../Hooks/useAdmin";
import { Layout } from "../../../Layout/Layout";
import { Container } from "./Components/Container";
import { Estadisticas } from "./Components/Estadisticas";
import { TableReportes } from "./Components/TableReportes";
import * as Proveedores from "../Proveeedores/Components";
import * as Vehiculos from "../Vehiculos/Components";
import { reseñas, usuarios } from "./Data/Reportes";
import { EditVehiculo } from "../Vehiculos/Components/Modals/EditVehiculo";
import { Toaster } from "sonner";
import { EditUsuario } from "../Nuevo/Components/Form/Edit/EditUsuario";
import { EditProveedor } from "../Proveeedores/Components/Modals/EditProveedor";
import { TableClientes } from "../Clientes/TableClientes";

export const Reportes = () => {
  const { tableActive, changeTableActive } = useAdministracion();

  return (
    <Layout
      areaPadre="Administración"
      areaPagina="Reportes"
      children={
        <>
          <Toaster position="bottom-right" richColors />
          <div className="row flex flex-col lg:flex-row">
            <div className="cards-container w-full lg:w-[50%] flex flex-col md:flex-row px-3 gap-x-3">
              <Container
                cards={[
                  {
                    iconComponent: <Icon.IconUser />,
                    tittle: "Trabajadores",
                    cantidad: "1200",
                    changeTable: () => changeTableActive("trabajadores"),
                    background: "card-trabajadores",
                  },
                  {
                    iconComponent: <Icon.IconoRegistroEnvio />,
                    tittle: "Proveedores",
                    cantidad: "357",
                    changeTable: () => changeTableActive("proveedores"),
                    background: "card-proveedores",
                  },
                ]}
              />
              <Container
                className="mt-6 md:mt-0"
                cards={[
                  {
                    iconComponent: <Icon.RemisionesAside />,
                    tittle: "Vehículos",
                    cantidad: "2300",
                    changeTable: () => changeTableActive("vehiculos"),
                    background: "card-vehiculos",
                  },
                  {
                    iconComponent: <Icon.IconUsers />,
                    tittle: "Clientes",
                    cantidad: "25",
                    changeTable: () => changeTableActive("clientes"),
                    background: "card-reseñas",
                  },
                ]}
              />
            </div>
            <div className="estadistica-container w-full lg:w-[50%] px-3 mt-6 lg:mt-0">
              <div className="estadistica flex flex-col h-full bg-white rounded-2xl shadow-[0_20px_27px_0_rgba(0,0,0,.05)] transition-all">
                <div className="estadistica-header px-4 pt-4">
                  <h6 className="relative text-base text-[#344767] font-semibold">
                    Reseñas
                  </h6>
                </div>
                <div className="estadistica-body px-4 pt-4">
                  {reseñas.map((reseña) => (
                    <Estadisticas
                      key={reseña.id}
                      title={reseña.nombre}
                      porcentaje={reseña.porcentaje}
                    />
                  ))}
                </div>
                <div className="estadistica-footer flex flex-col sm:flex-row sm:items-center w-full px-4 pb-4">
                  <div className="w-full sm:w-[60%] text-sm text-[#67748e] font-normal mb-4">
                    <p className="">
                      Más de<b className="font-bold mx-1">1,500,000</b>
                      han visitado el sitioi para visualizar
                      <b className="font-bold mx-1">700,000</b> productos
                    </p>
                  </div>
                  <div className="w-full sm:w-[40%] text-right">
                    <button
                      type="button"
                      className="relative text-xs text-white uppercase font-bold px-6 py-3 bg-[linear-gradient(310deg,#141727,#3a416f)] rounded-lg shadow-[0_4px_7px_-1px_rgba(0,0,0,.11),0_2px_4px_-1px_rgba(0,0,0,.07)] hover: transition-all"
                    >
                      Ver Reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-container relative flex text-base text-[#67748e] my-6">
            <div className="w-full max-w-full px-3 font-normal">
              <div className="scroll relative flex flex-col bg-white rounded-2xl shadow-[0_20px_27px_0_rgba(0,0,0,.05)] overflow-x-auto transition-all">
                {tableActive === "proveedores" && <Proveedores.Table />}
                {tableActive === "vehiculos" && <Vehiculos.Table />}
                {tableActive === "trabajadores" && (
                  <TableReportes data={usuarios} />
                )}
                {tableActive === "clientes" && (
                  <TableClientes data={usuarios} />
                )}
              </div>
            </div>
          </div>
          <EditVehiculo />
          <EditUsuario />
          <EditProveedor />
        </>
      }
    />
  );
};
