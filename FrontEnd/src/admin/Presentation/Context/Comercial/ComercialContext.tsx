/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { Venta, Ventas } from "../../Data/DComercial";
import { useOutsideClick } from "../../Helper/useOutSideClick";

export const ComercialContext = createContext<PropsComercialCtx>(
  {} as PropsComercialCtx
);

export const ComercialProvider = ({ children }: PropsWithChildren) => {
  // ==============================================  REGISTRO DE VENTAS ==============================================
  const [loading, setLoading] = useState(false);
  const [ventas, setVentas] = useState<Venta[]>([]);

  // Paginacion
  const [ventasFiltradas, setVentasFiltradas] = useState<Venta[]>([]);
  const [ventasPaginadas, setVentasPaginadas] = useState<Venta[]>([]);
  const refCantVentas = useRef<HTMLDivElement>(null);
  const [cantVentasPag, setCantVentasPag] = useState(10);
  const [modalCantVentas, setModalCantVentas] = useState(false);
  const [ventasPageNow, setVentasPageNow] = useState(1);
  const [totalPagesVentas, setTotalPagesVentas] = useState(0);
  const maxBtnPVentas = 5;

  const [searchVenta, setSearchVenta] = useState("");

  const capturarBusqueda = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVenta(e.target.value);
  };

  const pageStartVenta = Math.max(
    1,
    ventasPageNow - Math.floor(maxBtnPVentas / 2)
  );
  const pageEndVenta = Math.min(
    totalPagesVentas,
    pageStartVenta + maxBtnPVentas - 1
  );

  const handleModalCantVentas = () => setModalCantVentas(!modalCantVentas);
  useOutsideClick(refCantVentas, () => setModalCantVentas(false));

  const cambiarCantVentasPorPagina = (newPerPage: number) => {
    setCantVentasPag(newPerPage);
    setVentasPageNow(1);
    setModalCantVentas(false);
  };

  const cambiarPagina = (newPage: number) => setVentasPageNow(newPage);

  const calcularTotalPaginas = (filtered: Venta[]) => {
    const total = Math.ceil(filtered.length / cantVentasPag);
    setTotalPagesVentas(total);
  };

  const filtrarVentas = () => {
    const filtered = ventas.filter(
      (vent) =>
        vent.comNOrden.toLowerCase().includes(searchVenta.toLowerCase()) ||
        vent.comFecha.toLowerCase().includes(searchVenta.toLowerCase()) ||
        vent.comCliente.toLowerCase().includes(searchVenta.toLowerCase()) ||
        vent.comTipo.toLowerCase().includes(searchVenta.toLowerCase()) ||
        vent.comProductosPacks
          .toLowerCase()
          .includes(searchVenta.toLowerCase()) ||
        vent.comCanalVenta.toLowerCase().includes(searchVenta.toLowerCase()) ||
        vent.comMedioPago.toLowerCase().includes(searchVenta.toLowerCase())
    );
    setVentasFiltradas(filtered);
    calcularTotalPaginas(filtered);
  };

  const actualizarVentasPaginadas = () => {
    const paginated = ventasFiltradas.slice(
      (ventasPageNow - 1) * cantVentasPag,
      ventasPageNow * cantVentasPag
    );
    setVentasPaginadas(paginated);
  };

  // Llamamos los datos
  useEffect(() => {
    setLoading(true);

    // LLamamos a la "API"
    setTimeout(() => {
      setVentas(Ventas);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filtrarVentas();
    calcularTotalPaginas(ventasFiltradas);
  }, [ventas, searchVenta, cantVentasPag]);

  useEffect(() => {
    actualizarVentasPaginadas();
  }, [ventasFiltradas, cantVentasPag, ventasPageNow]);

  return (
    <ComercialContext.Provider
      value={{
        loading,
        ventas,
        ventasPaginadas,
        cantVentasPag,
        ventasPageNow,
        totalPagesVentas,
        pageStartVenta,
        pageEndVenta,
        refCantVentas,
        modalCantVentas,
        handleModalCantVentas,
        capturarBusqueda,
        cambiarCantVentasPorPagina,
        cambiarPagina,
      }}
    >
      {children}
    </ComercialContext.Provider>
  );
};

export interface PropsComercialCtx {
  loading: boolean;
  ventas: Venta[];
  ventasPaginadas: Venta[];
  cantVentasPag: number;
  ventasPageNow: number;
  totalPagesVentas: number;
  pageStartVenta: number;
  pageEndVenta: number;
  refCantVentas: React.RefObject<HTMLDivElement>;
  modalCantVentas: boolean;
  handleModalCantVentas: () => void;
  capturarBusqueda: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cambiarCantVentasPorPagina: (newPerPage: number) => void;
  cambiarPagina: (newPage: number) => void;
}
