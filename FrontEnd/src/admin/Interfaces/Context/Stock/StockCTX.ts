import {
  HistMov,
  ListaOrden,
} from "../../../Presentation/Data/HistorialMovimientos";
import {
  Departamento,
  Distrito,
  Provincia,
} from "../../../Presentation/Data/Peru";
import {
  ConsumoData,
  Documento,
  TDocumento,
} from "../../../Presentation/Data/Stock";
import { IMarcas, ITipos } from "../../../Presentation/Data/tipos";
import { usuario } from "../../../Presentation/Views/Usuarios/Reportes/Data/Reportes";
import { Product, Variante } from "../../Productos/Productos";
import { Consumo, HMovimiento, Recepcion } from "../../Stock/Stock";
import { TInventario } from "../TomaI/TomaI";

export interface StockCTX {
  // ================= Recepcion =================
  loading: boolean;
  refButtonDoc: React.RefObject<HTMLDivElement>;
  recepciones: Recepcion[];
  formRecep: Recepcion;
  modalDoc: boolean;
  totalNeto: number;
  verComentario: boolean;
  // Select sereales
  selectOption: {
    [key: number]: string;
  };
  handleSelectChangeR: (i: number, value: string) => void;
  // Inputs de los sereales
  inputValues: {
    [key: number]: string[];
  };
  handleInputChangeR: (i: number, inputIndex: number, value: string) => void;
  // Modal Sereales
  refModalSerealesR: React.RefObject<HTMLDivElement>;
  modalSerealesR: boolean;
  closeModalSerealesR: () => void;
  // Tipos
  modalTipo: React.RefObject<HTMLDivElement>;
  filterTipo: ITipos[];
  selectTipoRecepcion: (id: number) => void;
  // Marcas
  modalMarca: React.RefObject<HTMLDivElement>;
  filterMarca: IMarcas[];
  selectMarcaRecepcion: (id: number) => void;
  // Productos
  modalProductos: React.RefObject<HTMLDivElement>;
  filterProd: Product[];
  selectProductoRecepcion: (prodId: number, varId: string) => void;
  // Otros
  submitRecepcion: (e: React.FormEvent<HTMLFormElement>) => void;
  changeCheckbox: (tipo: number) => void;
  cancelarRecepcion: () => void;
  verComentarioRecepcion: () => void;
  changeDoc: (doc: string) => void;
  formatMoney: (value: number) => string;
  showModalDoc: () => void;
  setFormRecep: React.Dispatch<React.SetStateAction<Recepcion>>;
  changeFormRecepcion: (e: React.ChangeEvent<HTMLInputElement>) => void;
  agregarCereales: (e: React.ChangeEvent<HTMLFormElement>) => void;
  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    value: number
  ) => void;
  refSerialesMasivosR: React.RefObject<HTMLDivElement>;
  serialesMasivosR: boolean;
  handleSerialesMarivosR: () => void;
  guardarRecepciones: () => void;
  recepcionIsPosting: boolean;
  recepcionIsSaving: boolean;

  // ================= Consumo =================
  refTConsumo: React.RefObject<HTMLDivElement>;
  refNroDoc: React.RefObject<HTMLDivElement>;
  refOrdenConsumo: React.RefObject<HTMLDivElement>;
  modalOrdenConsumo: boolean;
  handleModalOConsumo: () => void;
  seleccionarOdenConsumo: (newOrden: string) => void;
  consumos: Consumo[];
  formConsumo: Consumo;
  modalConsumo: boolean;
  showCommentC: boolean;
  filterNroDoc: ConsumoData[];
  modalNrosDocs: boolean;
  consumoSeleccionado: string;
  handleSelectNroDoc: () => void;
  blurNroDocConsumo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  seleccionarNroDocConsumo: (doc: ConsumoData) => void;
  cancelarConsumo: () => void;
  setFormConsumo: React.Dispatch<React.SetStateAction<Consumo>>;
  verComentC: () => void;
  showModalTipoConsumo: () => void;
  changeFormCons: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitFormCons: (e: React.ChangeEvent<HTMLFormElement>) => void;
  changeTipoSereal: (newType: number) => void;
  changeTipoConsumo: (newType: string) => void;
  refSerialesUnitC: React.RefObject<HTMLDivElement>;
  serialesUnitC: boolean;
  selectOptionC: {
    [key: number]: string;
  };
  handleSelectChangeC: (i: number, value: string) => void;
  inputValuesC: {
    [key: number]: string[];
  };
  handleInputChangeC: (i: number, inputIndex: number, value: string) => void;
  agregarSerialesUnitariasC: () => void;
  closeModalSerialesUnitariosC: () => void;
  refSerialesMasivoC: React.RefObject<HTMLDivElement>;
  serialesMasivoC: boolean;
  handleSerialesMasivosC: () => void;
  guardarConsumo: () => void;
  consumoIsPosting: boolean;
  consumoSaved: boolean;

  // Toma de inventario
  refVariantes: React.RefObject<HTMLDivElement>;
  refMImpTI: React.RefObject<HTMLDivElement>;
  formTInv: TInventario;
  inventarios: TInventario[];
  modalImportar: boolean;
  verResumen: boolean;
  deatallesExist: number;
  fechaInicio: string;
  modalCancelar: boolean;
  totales: Record<string, number>;
  filterVarTI: Variante[];
  showObs: boolean;
  importarPlantilla: boolean;
  openImpPlantilla: () => void;
  closeImpPlantilla: () => void;
  selectProdTInventario: (
    newName: string,
    newSReal: number,
    newUMedida: string
  ) => void;
  handleShowObs: () => void;
  setFormTInv: React.Dispatch<React.SetStateAction<TInventario>>;
  handleOpenCancelar: () => void;
  handleConfirmCancelar: () => void;
  handleCloseCancelar: () => void;
  handleImportar: () => void;
  cargarDetalles: () => void;
  verResumenInv: () => void;
  continuarMasTarde: () => void;
  changeFormInv: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitFormInv: (e: React.FormEvent<HTMLFormElement>) => void;
  savingTInventario: boolean;
  savingItemInventario: boolean;
  guardarInventario: () => void;

  // ==================================== Historial de movimientos ====================================
  RefHMEstado: React.RefObject<HTMLDivElement>;
  RefHMTDoc: React.RefObject<HTMLDivElement>;
  RefHMTConsumo: React.RefObject<HTMLDivElement>;
  movimientos: HistMov[];
  formHM: HMovimiento;
  HEIdEstado: number | null;
  HMEstFilter: TDocumento[];
  HMTDocFilter: Documento[];
  HMConsumoFilter: Documento[];
  changeFormHM: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitHM: (e: React.FormEvent<HTMLFormElement>) => void;
  SelectMov: (newName: string, newId: number) => void;
  SeleccionarTipoDoc: (newName: string) => void;
  SeleccionarTipoConsumo: (newName: string) => void;
  movPerPage: number; // cantidad de movimientos por página
  curPageM: number; // página actual
  totalMovPages: number; // total de páginas
  movPaginated: HistMov[]; // movimientos de la página actual
  changeMovPerPage: (newPerPage: number) => void;
  changeCurPageM: (newPage: number) => void;
  pageStarMov: number;
  pageEndMov: number;
  maxButtonsMov: number;
  modalPagMov: boolean;
  RefModalPagMov: React.RefObject<HTMLDivElement>;
  showModalPagMov: () => void;
  modalSU: number | null;
  showModalSU: (idRow: number) => void;
  closeModalSU: () => void;
  modalSM: number | null;
  showModalSM: (idRow: number) => void;
  closeModalSM: () => void;
  handleCheckboxChange: (id: number) => void;
  exportMovsToExcel: () => void;
  selectedMovs: number[];
  isAllSelected: boolean;
  handleSelectAllMovimientos: () => void;

  // ========================================= Capsula de Matriz =========================================
  searchMat: string;
  matData: HistMov[];
  matPaginated: HistMov[];
  RefModalPagMat: React.RefObject<HTMLDivElement>;
  modalPagMat: boolean;
  matPerPage: number;
  totalMatPages: number;
  curPageMat: number;
  pageStartMat: number;
  pageEndMat: number;
  maxButtonsMat: number;
  updMatPaginated: () => void;
  changeMatPerPage: (newPerPage: number) => void;
  changeCurPageMat: (newPage: number) => void;
  handleModalPagMat: () => void;
  handleSearchMat: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedMat: number[];
  matrizAllSelected: boolean;
  handleSelectAllMatrices: () => void;
  handleCheckboxChangeMatriz: (movId: number) => void;
  exportMovsToExcelMatrices: () => void;

  // ======================================= Lista de ordenes =======================================
  formDesp: formValuesDespacho;
  submitFormDesp: (e: React.FormEvent<HTMLFormElement>) => void;
  changeFormDesp: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refVerDespacho: React.RefObject<HTMLDivElement>;
  verDespacho: boolean;
  handleAsignarDespacho: () => void;
  gestSelect: boolean;
  handleGestionSeleccionada: () => void;
  refSelectGestion: React.RefObject<HTMLDivElement>;
  selectGestion: boolean;
  gestiones: usuario[];
  handleSelectGestion: () => void;
  seleccionarGestion: (
    newGestion: string,
    newTProv: string,
    newTServ: string
  ) => void;
  GestionBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refSelectConductor: React.RefObject<HTMLDivElement>;
  selectConductor: boolean;
  conductores: Conductor[];
  handleSelectConductor: () => void;
  seleccionarConductor: (newConductor: string) => void;
  ConductorBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refSelectAuxiliar: React.RefObject<HTMLDivElement>;
  selectAux: boolean;
  auxiliares: Conductor[];
  handleSelectAuxiliar: () => void;
  seleccionarAuxiliar: (newAux: string) => void;
  AuxiliarBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refSelectDpt: React.RefObject<HTMLDivElement>;
  selectDpt: boolean;
  departamentos: Departamento[];
  SeleccionarDpt: (newId: number, newDept: string) => void;
  handleSelectDpt: () => void;
  DptBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refSelectProv: React.RefObject<HTMLDivElement>;
  selectProv: boolean;
  provincias: Provincia[];
  handleSelectProv: () => void;
  SeleccionarProv: (newId: number, newProv: string) => void;
  ProvBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refSelectDist: React.RefObject<HTMLDivElement>;
  selectDist: boolean;
  distritos: Distrito[];
  handleSelectDist: () => void;
  SeleccionarDist: (newDist: string) => void;
  DistBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refSelectPlaca: React.RefObject<HTMLDivElement>;
  selectPlaca: boolean;
  placas: Transp[];
  handleSelectPlaca: () => void;
  SeleccionarPlaca: (newPlaca: string) => void;
  PlacaBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refSelectProve: React.RefObject<HTMLDivElement>;
  selectProve: boolean;
  proveedores: usuario[];
  seleccionarProveedor: (newProv: string) => void;
  handleSelectProve: () => void;
  ProveedoresBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refTipoProveedor: React.RefObject<HTMLDivElement>;
  selectTipoProv: boolean;
  tipoProvs: Transp[];
  seleccionarTProv: (newTProv: string) => void;
  handleSelectTProvs: () => void;
  TProvsBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  despachos: ListaOrden[];
  despPaginated: ListaOrden[];
  refCantDesp: React.RefObject<HTMLDivElement>;
  cantDespPag: number;
  modalCantDesp: boolean;
  despPageNow: number;
  totalPagesDesp: number;
  maxBtnDesp: 5;
  pageStartDesp: number;
  pageEndDesp: number;
  searchDesp: string;
  handleModalCantDesp: () => void;
  capturarDespacho: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cambiarCantDespachosPorPagina: (newPerPage: number) => void;
  cambiarPaginaDespacho: (newPage: number) => void;
}

export interface Transp {
  id: number;
  name: string;
}

export interface Conductor {
  id: number;
  ruc: string;
  name: string;
}

export const Conductores: Conductor[] = [
  {
    id: 1,
    ruc: "123456789",
    name: "Conductor 1",
  },
  {
    id: 2,
    ruc: "987654321",
    name: "Conductor 2",
  },
];

export const Auxiliares: Conductor[] = [
  {
    id: 1,
    ruc: "123456789",
    name: "Auxiliar 1",
  },
  {
    id: 2,
    ruc: "987654321",
    name: "Auxiliar 2",
  },
];

export const Placas: Transp[] = [
  {
    id: 1,
    name: "AAA111",
  },
  {
    id: 2,
    name: "BBB222",
  },
];

export const gestionDespacho: Transp[] = [
  {
    id: 1,
    name: "Proveedores Propios",
  },
  {
    id: 2,
    name: "Proveedores Externos",
  },
];

export const Proveedores: Transp[] = [
  { id: 1, name: "Proveedoredor 1" },
  { id: 2, name: "Proveedoredor 2" },
];

export const TipoProveedores: Transp[] = [
  { id: 1, name: "Tipo Proveedoredor 1" },
  { id: 2, name: "Tipo Proveedoredor 2" },
];

export interface formValuesDespacho {
  gestionDespacho: string;
  conductorDespacho: string;
  auxiliarDespacho: string;
  deptDespacho: string;
  provDespacho: string;
  distDespacho: string;
  placaDespacho: string;
  TVehiculo: string;
  cantBultosDespacho: string;
  pesoTDespacho: string;
  proveedoresDespacho: string;
  tipoProveedorDespacho: string;
}
