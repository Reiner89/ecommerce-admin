import {
  Dollar,
  Greaficas,
  RemisionesAside,
} from "../../../Components/Icons/Iconos";
import { Layout } from "../../../Layout/Layout";
import { Container } from "./Components/Container";
import * as Graficos from "./Components/Graficos";
import { FirstWidget } from "./Components/Select/FirstWidget";

export const KPI = () => {
  return (
    <Layout
      areaPadre="Comercial"
      areaPagina="KPI"
      children={
        <div className="row flex flex-col lg:flex-row">
          <div className="widgets-container w-full flex flex-col gap-4">
            <div className="widgets-top w-full flex flex-col md:flex-row px-3 gap-x-3">
              <Container
                cards={[
                  {
                    select: <FirstWidget />,
                  },
                  {
                    tittle: "S/.1,000.00",
                    cantidad: "Ventas Totales",
                    porcent: <RemisionesAside />,
                  },
                ]}
              />
              <Container
                cards={[
                  {
                    tittle: "S/.2,000.00",
                    cantidad: "Margen S/",
                    porcent: <Dollar />,
                  },
                  {
                    porcent: <Greaficas />,
                    cantidad: "Margen %",
                    tittle: "10%",
                  },
                ]}
              />
            </div>
            <div className="widgets-center w-full flex flex-col md:flex-row px-3 gap-x-3">
              <div className="bg-white p-3 w-2/6 h-96 rounded-2xl flex flex-col gap-2">
                <h1 className="relative font-semibold">Ventas Mensuales</h1>
                <p className="relative border-b-1" />
                <Graficos.Barras />
              </div>
              <div className="bg-white p-3 w-2/6 h-96 rounded-2xl flex flex-col gap-2">
                <h1 className="relative font-semibold">Ventas por Productos</h1>
                <p className="relative border-b-1" />
                <Graficos.BarHorizontales />
              </div>
              <div className="bg-white p-3 w-2/6 h-96 rounded-2xl flex flex-col gap-2">
                <h1 className="relative font-semibold">Medios de Pago</h1>
                <p className="relative border-b-1" />
                <Graficos.Anillo />
              </div>
            </div>
            <div className="widgets-bottom w-full flex flex-col md:flex-row px-3 gap-x-3">
              <div className="relative w-[66.5%] bg-white py-5 rounded-2xl">
                <h1 className="relative font-semibold">Ventas Diarias</h1>
                <p className="relative border-b-1" />
                <Graficos.Lineas />
              </div>
              <div className="relative w-[33%] bg-white py-5 rounded-2xl">
                <h1 className="relative font-semibold">Canales de Venta</h1>
                <p className="relative border-b-1" />
                <Graficos.Torta />
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};
