import * as P from "../Data/Peru";
import * as B from "../Data/BoletaFactura";
import { useContext } from "react";
import { RemiGContext } from "../Context/RemisionGuias/RemisionGuiasContext";

export const useRemisionGuias = () => {
  const context = useContext(RemiGContext);

  if (!context) {
    throw new Error(
      "useRemisionGuias must be used within a RemisionGuiasContext"
    );
  }

  return context;
};

export interface RemGIntCTX {
  // Boleta
  serieBoleta: string;
  SeriesChangeBoleta: (e: React.ChangeEvent<HTMLInputElement>) => void;
  correlativoBoleta: string;
  CorrelativosChangeBoleta: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editandoBoleta: boolean;
  saveChangesBoleta: () => void;
  editValuesBoleta: () => void;

  // Factura
  editando: boolean;
  serie: string;
  correlativo: string;
  editValues: () => void;
  saveChanges: () => void;
  handleSeriesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCorrelativosChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // Boleta y Factura
  tipoFactura: string;
  handleTipoFacturaChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tipoBoleta: string;
  handleTipoBoletaChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formFNac: FN;
  handleInputChangeFNac: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formFIInt: FI;
  handleInputChangeFIInt: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formBNac: BN;
  handleInputChangeBNac: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formBIInt: BI;
  handleInputChangeBIInt: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // Formulario de la tabla
  formTable: TableFactura[];
  handleInputChangeFTable: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleDeleteItem: (index: number) => void;
  handleAddItem: () => void;

  // Departamenos, provincias y distritos
  handleDptChange: (newId: number, newDept: string, newTipo: string) => void;
  handleProvChange: (newId: number, newProv: string, newTipo: string) => void;
  handleDistChange: (newDist: string, newTipo: string) => void;
  dpt: P.Departamento[];
  prov: P.Provincia[];
  dist: P.Distrito[];
  refDept: React.RefObject<HTMLDivElement>;
  modalDpt: boolean;
  handleModalDpt: () => void;
  refProv: React.RefObject<HTMLDivElement>;
  modalProv: boolean;
  handleModalProv: () => void;
  refDist: React.RefObject<HTMLDivElement>;
  modalDist: boolean;
  handleModalDist: () => void;

  // Modales Generales
  refIGV: React.RefObject<HTMLDivElement>;
  modalIGV: boolean;
  handleModalIGV: () => void;
  handleIGVChange: (newIGV: "10.00" | "18.00", newTipo: string) => void;
  refOrdServ: React.RefObject<HTMLDivElement>;
  modalOrdServ: boolean;
  handleModalOrdServ: () => void;
  refPrevFactura: React.RefObject<HTMLDivElement>;
  modalPrevFactura: boolean;
  handleModalPrevFactura: () => void;
  refCompReferencia: React.RefObject<HTMLDivElement>;
  compReferencia: boolean;
  handleCompReferencia: () => void;
  refPDF: React.RefObject<HTMLDivElement>;
  modalPDF: boolean;
  handleViewPDF: () => void;

  // ventas, tipos de documentos, monedas, tipos de pago, bienes
  ventas: B.VentaInt[];
  handleVentaChange: (newVenta: string, newTipo: string) => void;
  tiposDoc: B.TipoDoc[];
  handleDocChange: (newDoc: string, newTipo: string) => void;
  monedas: B.Moneda[];
  handleMonedaChange: (newMoneda: string, newTipo: string) => void;
  tiposPago: B.TipoPago[];
  handlePagoChange: (newPago: string) => void;
  bienes: B.VentaInt[];
  handleBienChange: (newBien: string, newTipo: string) => void;
  refVentas: React.RefObject<HTMLDivElement>;
  modalVentas: boolean;
  handleModalVentas: () => void;
  refDocs: React.RefObject<HTMLDivElement>;
  modalDocs: boolean;
  handleModalDocs: () => void;
  refMonedas: React.RefObject<HTMLDivElement>;
  modalMonedas: boolean;
  handleModalMonedas: () => void;
  refTiposPago: React.RefObject<HTMLDivElement>;
  modalTiposPago: boolean;
  handleModalTiposPago: () => void;
  refBienes: React.RefObject<HTMLDivElement>;
  modalBienes: boolean;
  handleModalBienes: () => void;

  // Paises y ciudades
  paises: P.Pais[];
  handlePaisChange: (newId: number, newPais: string, newTipo: string) => void;
  ciudades: P.Ciudad[];
  handleCiudadChange: (newCiudad: string, newTipo: string) => void;
  refPaises: React.RefObject<HTMLDivElement>;
  modalPaises: boolean;
  handleModalPaises: () => void;
  refCiudades: React.RefObject<HTMLDivElement>;
  modalCiudades: boolean;
  handleModalCiudades: () => void;

  // Comprobante de referencia
  refComprobantes: React.RefObject<HTMLDivElement>;
  formCompRef: CompRef;
  handleCompRefChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTipoComprobanteChange: (newTipoComprobante: string) => void;
  tipoComprobante: boolean;
  handleTipoComp: () => void;

  // Orden de servicio
  formOrdenServ: OrdenServ;
  handleInputChangeOrdenServ: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // ===================================================== Guias Remision =====================================================
  correlativaGR: string;
  serieGR: string;
  editandoGR: boolean;
  cambiarSerieGR: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cambiarCorrelativaGR: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editarValuesGR: () => void;
  GRemision: GR;
  handleInputChangeGR: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openInfoAdicional: boolean;
  changeModalInfo: () => void;
  DEnvioActivo: DetalleActivo;
  DEnvio: DE;
  cambiarDEnvioActivo: (newEnvioActivo: DetalleActivo) => void;
  handleInputChangeDE: (e: React.ChangeEvent<HTMLInputElement>) => void;
  DVehiculo: DV[];
  handleInputChangeDV: (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  agregarDVehiculo: () => void;
  eliminarDVehiculo: (id: number) => void;
  DConductor: DC[];
  handleInputChangeDC: (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  agregarDConductor: () => void;
  eliminarDConductor: (id: number) => void;
  puntoActivo: PuntoActivo;
  cambiarPuntoActivo: (newPuntoActivo: PuntoActivo) => void;
  PPuntoPartida: PPartida;
  handleInputChangePPartida: (e: React.ChangeEvent<HTMLInputElement>) => void;
  PPuntoLlegada: PLlegada;
  handleInputChangePLlegada: (e: React.ChangeEvent<HTMLInputElement>) => void;
  TableGR: TableGuiaRemision[];
  handleInputChangeGRTable: (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  agregarGuiaTabla: () => void;
  eliminarGuiaTabla: (id: number) => void;
}

export interface FN {
  FNVentaInterna: string;
  FNTipoDoc: string;
  FNNroDoc: string;
  FNRazonSocial: string;
  FNDireccion: string;
  FNDepartamento: string;
  FNProvincia: string;
  FNDistrito: string;
  FNEmail: string;
  FNFechaEmision: string;
  FNFechaVencimiento: string;
  FNMoneda: string;
  FNIGV: string;
  FNTipoPago: string;
  FNNroCuotas: string;
}

export interface FI {
  FIExpBienes: string;
  FINroIdAtr: string;
  FIRazonSocial: string;
  FIDireccion: string;
  FIPais: string;
  FICodPostal: string;
  FICiudad: string;
  FIEmail: string;
  FIFechaEmision: string;
  FIFechaVencimiento: string;
  FIMoneda: string;
  FIIGV: string;
  FIPago: string;
  FINroCuotas: string;
}

export interface BN {
  BNVentaInterna: string;
  BNTipoDoc: string;
  BNNroDoc: string;
  BNNombresApellidos: string;
  BNDireccion: string;
  BNDepartamento: string;
  BNProvincia: string;
  BNDistrito: string;
  BNEmail: string;
  BNFechaEmision: string;
  BNFechaVencimiento: string;
  BNMoneda: string;
  BNIGV: string;
}

export interface BI {
  BIExpBienes: string;
  BINroIdAtr: string;
  BIRazonSocial: string;
  BIDireccion: string;
  BIPais: string;
  BICodPostal: string;
  BICiudad: string;
  BIEmail: string;
  BIFechaEmision: string;
  BIFechaVencimiento: string;
  BIMoneda: string;
  BIIGV: string;
}

export interface CompRef {
  tipoComprobante: string;
  nroComprobante: string;
  fechaEmisionComprobante: string;
}

export interface OrdenServ {
  nroOServicio: string;
  fechaEmisionOServicio: string;
}

export interface TableFactura {
  TFid: number;
  TFcodigo: string;
  TFcantidad: string;
  TFunidad: string;
  TFdescripcion: string;
  TFVunitario: string;
  TFPUnitario: string;
  TFImpTotal: string;
}

export type DetalleActivo = "Privado" | "Publico";
export type PuntoActivo = "Partida" | "Llegada";

export interface GR {
  tipoGR: string;
  motTrasladoGR: string;
  tipoDocGR: string;
  nroDocGR: string;
  razSocGR: string;
  direccionGR: string;
  departamentoGR: string;
  provinciaGR: string;
  distritoGR: string;
  emailGR: string;
  fechaGR: string;
}

export interface DE {
  fechaDE: string;
  descDE: string;
  unidMedidaDE: string;
  pesoBrutoDE: string;
  transladosDE: boolean;
  nroAutorizacionVehDE: string;
  entidadEmisoraDE: string;
  indicadorRetornoVEDE: boolean;
  transbordoProgramadoDE: boolean;
  indicadorRetornoVVDE: boolean;
}

export interface DV {
  idDV: number;
  placaDV: string;
  emisoraAutorizacionDV: string;
  nroAutorizacionDV: string;
}

export interface DC {
  idDC: number;
  tipoDocDC: string;
  nroIdentidadDC: string;
  nombresDC: string;
  apellidosDC: string;
  nroLicenciaDC: string;
}

export interface PPartida {
  direccionPP: string;
  departamentoPP: string;
  provinciaPP: string;
  distritoPP: string;
}

export interface PLlegada {
  direccionPP: string;
  departamentoPP: string;
  provinciaPP: string;
  distritoPP: string;
}

export interface TableGuiaRemision {
  idTableGR: number;
  cantidadTGR: string;
  unidadTGR: string;
  codigoTGR: string;
  descripcionTGR: string;
  codSunatTGR: string;
  GtinTGR: string;
  codSubpNacionalTGR: string;
}
