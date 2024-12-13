import { SetStateAction } from "react";
import { Pack } from "../../Pack/Pack";
import {
  CatProd,
  Color,
  ColoresProd,
  MarcasProd,
  Producto,
  SubCatProd,
  tablesCant,
  ValuesProduct,
} from "../../Productos/Productos";
import { Impuesto } from "../../Impuestos/Impuestos";
// import { MarcaProd } from "../../MarcaProd/MarcaProd";

export interface ProdCtx {
  loading: boolean;

  // Productos
  cantProds: tablesCant;
  tableProductos: Producto[];
  productsFiltered: Producto[];
  filterProducts: (newFilter: string) => void;

  // Packs
  cantPacks: tablesCant;
  tablePacks: Pack[];
  packsFiltered: Pack[];
  filterPacks: (newFilter: string) => void;

  // Filtros
  // Por estado
  refFiltroEstados: React.RefObject<HTMLDivElement>;
  refFiltroTipo: React.RefObject<HTMLDivElement>;

  estadoActivo: string;
  modalFiltroEstados: boolean;
  handleFiltroEstados: () => void;
  // Por tipo
  tipoActivo: string;
  modalFiltroTipos: boolean;
  handleFiltroTipos: () => void;

  // Modales
  modalOpciones: boolean;
  handleModalOpciones: () => void;

  // Estados
  searchActive: boolean;
  importProducts: boolean;
  importPacks: boolean;
  importDescriptions: boolean;
  importImages: boolean;
  refModalVerProd: React.RefObject<HTMLDivElement>;
  modalVerProd: boolean;
  refModalVerPack: React.RefObject<HTMLDivElement>;
  modalVerPack: boolean;
  searchRef: React.RefObject<HTMLDivElement>;
  importRef: React.RefObject<HTMLDivElement>;
  refImpProds: React.RefObject<HTMLDivElement>;

  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    value: number
  ) => void;
  changetipoActivo: (newFilter: string) => void;
  openImportProducts: () => void;
  closeImportProducts: () => void;
  openImportPacks: () => void;
  closeImportPacks: () => void;
  openImportDescriptions: () => void;
  closeImportDescriptions: () => void;
  openImportImages: () => void;
  closeImportImages: () => void;
  activeSearch: () => void;

  // ============================== Productos ==============================
  formProd: ValuesProduct;
  imagesProducts: string[];
  colorProducto: string;
  setColorProducto: React.Dispatch<React.SetStateAction<string>>;
  colorProductoFiltrado: (e: React.ChangeEvent<HTMLInputElement>) => void;
  categoriaProducto: string;
  setCategoriaProducto: React.Dispatch<React.SetStateAction<string>>;
  catProductoFiltrado: (e: React.ChangeEvent<HTMLInputElement>) => void;
  marcaProducto: string;
  setMarcaProducto: React.Dispatch<React.SetStateAction<string>>;
  marcaProductoFiltrado: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subcategoriaProducto: string;
  setSubcategoriaProducto: React.Dispatch<React.SetStateAction<string>>;
  selectedProd: Producto | null;
  changeSelectedProd: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  changeProducto: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  limpiarImagenes: () => void;
  imageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  OpenModalVerProd: (row: Producto) => void;
  CloseModalVerProd: () => void;
  typeFormProd: "new" | "edit";
  modalProdForm: boolean;
  refModalProdForm: React.RefObject<HTMLDivElement>;
  openFormProd: () => void;
  closeFormProd: () => void;
  editFormProd: (item: Producto) => void;
  handleExportProducts: () => void;
  // Paginacion
  totalProdPages: number;
  curPageProds: number;
  prodsPaginated: Producto[];
  prodsPerPage: number;
  pageEndProd: number;
  pageStarProd: number;
  refModalPageProds: React.RefObject<HTMLDivElement>;
  modalPagProd: boolean;
  showModalProdMov: () => void;
  changeCurPageProds: (newPage: number) => void;
  changeProdPerPage: (newPerPage: number) => void;
  refColorProd: React.RefObject<HTMLDivElement>;
  coloresProd: ColoresProd[];
  modalColorProd: boolean;
  handleModalColorProd: () => void;
  colorProductoSeleccionada: (newName: string, id: number) => void;
  colorProductoBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  refCatProd: React.RefObject<HTMLDivElement>;
  catProd: CatProd[];
  modalCatProd: boolean;
  handleModalCatProd: () => void;
  catProductoSeleccionada: (newName: string, id: number) => void;
  catProductoBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  refSubCatProd: React.RefObject<HTMLDivElement>;
  subCatProd: SubCatProd[];
  modalSubCatProd: boolean;
  handleModalSubCatProd: () => void;
  subCatProductoFiltrado: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  subCatProductoSeleccionada: (newName: string, id: number) => void;
  subCatProductoBlur: (e: React.FocusEvent<HTMLInputElement>) => Promise<void>;
  refMarcaProd: React.RefObject<HTMLDivElement>;
  marcasProd: MarcasProd[];
  modalMarcaProd: boolean;
  handleModalMarcaProd: () => void;
  marcaProductoSeleccionada: (newName: string, id: number) => void;
  marcaProductoBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  refModalUbicacionProd: React.RefObject<HTMLDivElement>;
  modalUbicaionProd: boolean;
  openModalUbicacionProd: () => void;
  closeModalUbicacionProd: () => void;
  refAlmacenProd: React.RefObject<HTMLDivElement>;
  almacenProd: Color[];
  modalAlmacenProd: boolean;
  handleModalAlmacen: () => void;
  refNivelesProd: React.RefObject<HTMLDivElement>;
  nivelesProd: Color[];
  modalNivelesProd: boolean;
  handleModalNiveles: () => void;
  refPasillosProd: React.RefObject<HTMLDivElement>;
  pasillosProd: Color[];
  modalPasillosProd: boolean;
  handleModalPasillos: () => void;
  refSubnivelesProd: React.RefObject<HTMLDivElement>;
  subnivelesProd: Color[];
  modalSubnivelesProd: boolean;
  handleModalSubniveles: () => void;
  refZonasProd: React.RefObject<HTMLDivElement>;
  zonasProd: Color[];
  modalZonasProd: boolean;
  handleModalZonas: () => void;

  // ================================= Packs =================================
  formPack: Pack;
  handleChangePack: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  imagesPack: (e: React.ChangeEvent<HTMLInputElement>) => void;
  limpiarImgPack: () => void;
  submitPack: (e: React.FormEvent<HTMLFormElement>) => void;
  loadingPack: boolean;
  modalDetalle: boolean;
  openModalDetalle: () => void;
  closeModalDetalle: () => void;
  openModalVerPack: (row: Pack) => void;
  closeModalVerPack: () => void;
  typeFormPack: "new" | "edit";
  refModalPackForm: React.RefObject<HTMLDivElement>;
  modalPackForm: boolean;
  changeTipoPack: (newTipo: string) => void;
  openFormPack: () => void;
  closeFormPack: () => void;
  editFormPack: (item: Pack) => void;
  tipoPack: string;
  estadoPack: string;
  inputRefPack: React.RefObject<HTMLInputElement>;
  activeInputPack: boolean;
  openInputPack: () => void;
  selectedPack: Pack | null;
  modalEstadosPack: boolean;
  handleEstadosPack: () => void;
  modalTiposPack: boolean;
  handleTiposPack: () => void;
  refEstadoPack: React.RefObject<HTMLDivElement>;
  refTipoPack: React.RefObject<HTMLDivElement>;
  handleExportPacks: () => void;
  // Paginacion
  totalPacksPages: number;
  curPagePacks: number;
  packsPaginated: Pack[];
  packsPerPage: number;
  pageEndPacks: number;
  pageStarPacks: number;
  refModalPagePacks: React.RefObject<HTMLDivElement>;
  modalPagPacks: boolean;
  showModalPacksMov: () => void;
  changeCurPagePacks: (newPage: number) => void;
  changePacksPerPage: (newPerPage: number) => void;
  refModalProductosPack: React.RefObject<HTMLDivElement>;
  modalProductosPack: boolean;
  productosPack: Producto[];
  openProductsAsoc: (productos: Producto[]) => void;
  verProductosAsoc: (productos: Producto[]) => void;
  closeProductsAsoc: () => void;
  selectedProdsPack: number[];
  allProdsSelectedPack: boolean;
  handleAllProductosPack: () => void;
  handleSelectProductPack: (id: number) => void;
  addSelectedProdsPack: () => void;

  // ============================ Impuestos ============================
  formImp: Impuesto;
  setFormImp: React.Dispatch<SetStateAction<Impuesto>>;
  loadingImp: boolean;
  modalImp: boolean;
  refModalImp: React.RefObject<HTMLDivElement>;
  openModalImp: () => void;
  closeModalImp: () => void;
  changeFormImp: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitFormImp: (e: React.FormEvent<HTMLFormElement>) => void;
}
