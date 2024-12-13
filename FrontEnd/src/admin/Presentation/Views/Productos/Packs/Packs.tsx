import { Toaster } from "sonner";
import { Layout } from "../../../Layout/Layout";
import * as Components from "./Components";
import { useProdServices } from "../ProductosServicios/Hooks/useProdServices";
import { ImpPacks } from "../ProductosServicios/Components/Modals/Importar/Components";
import { ProductosAsociados } from "./Components/Modal/ProductosAsoc/ProductosAsoc";

export const Packs = () => {
  const { estadoPack, packsFiltered, packsPaginated } = useProdServices();

  return (
    <Layout
      areaPadre="Packs"
      areaPagina="Crear Packs"
      children={
        <>
          <Toaster richColors position="bottom-right" />
          <div className="relative flex justify-center gap-5 h-[calc(100vh-165px)] pb-4">
            <div className="relative w-full flex flex-col">
              <Components.Header />
              <div className="relative w-full flex flex-col rounded-[20px] border border-solid border-[#e0e0e0] bg-[#fff] mt-1 overflow-y-hidden">
                <Components.TableHeader />
                <Components.Table
                  data={estadoPack === "Todos" ? packsPaginated : packsFiltered}
                />
                <div className="info-pagination-packs p-4">
                  <Components.Pagination />
                </div>
              </div>
            </div>
          </div>
          <Components.PackForm />
          <Components.Ver />
          <ImpPacks />
          <ProductosAsociados />
        </>
      }
    />
  );
};
