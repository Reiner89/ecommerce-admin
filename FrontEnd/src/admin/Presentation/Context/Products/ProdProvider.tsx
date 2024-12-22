/* eslint-disable react-hooks/exhaustive-deps */
import {
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Color,
  Colores,
  Producto,
  tablesCant,
  Almacenes,
  Zonas,
  Niveles,
  SubNiveles,
  Pasillos,
  ValuesProduct,
  CatProd,
  SubCatProd,
  MarcasProd,
} from "../../../Interfaces/Productos/Productos";
import { Pack, Packs } from "../../../Interfaces/Pack/Pack";
import { Impuesto } from "../../../Interfaces/Impuestos/Impuestos";
import { toast } from "sonner";
import { useOutsideClick } from "../../Helper/useOutSideClick";
import { ProdContext } from "./ProdContext";
import {
  createProduct,
  getCategorias,
  getMarcas,
  getProducts,
  getSubCategorias,
} from "../../Helper/Fetch";
import { AuthContext } from "../Auth/AuthContext";
import moment from "moment";

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const { auth, responseToken } = useContext(AuthContext);

  // Tablas
  // Productos
  const [cantProds, setCantProds] = useState<tablesCant>({
    txt: "Productos",
    cant: 0,
  });
  const [tableProductos, setTableProductos] = useState<Producto[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Producto[]>([]);

  // Packs
  const [cantPacks, setCantPacks] = useState<tablesCant>({
    txt: "Packs",
    cant: 0,
  });
  const [tablePacks, setTablePacks] = useState<Pack[]>([]);
  const [packsFiltered, setPacksFiltered] = useState<Pack[]>([]);

  // Filtros
  // Estado
  const refFiltroEstados = useRef<HTMLDivElement>(null);
  const [modalFiltroEstados, setModalFiltroEstados] = useState(false);
  const [estadoActivo, setEstadoActivo] = useState("Todos");
  // Tipo
  const [modalFiltroTipos, setModalFiltroTipos] = useState(false);
  const [tipoActivo, setTipoActivo] = useState("");
  const refFiltroTipo = useRef<HTMLDivElement>(null);

  const [searchActive, setSearchActive] = useState(false);

  // Modales
  const [importProducts, setImportProducts] = useState(false);
  const [importDescriptions, setImportDescriptions] = useState(false);
  const [importImages, setImportImages] = useState(false);
  const refModalVerProd = useRef<HTMLDivElement>(null);
  const [modalVerProd, setModalVerProd] = useState(false);
  const refModalUbicacionProd = useRef<HTMLDivElement>(null);
  const [modalUbicaionProd, setModalUbicaionProd] = useState(false);

  const openModalUbicacionProd = () => setModalUbicaionProd(true);
  const closeModalUbicacionProd = () => setModalUbicaionProd(false);
  useOutsideClick(refModalUbicacionProd, closeModalUbicacionProd);

  const refModalProdForm = useRef<HTMLDivElement>(null);
  const [modalProdForm, setModalProdForm] = useState(false);

  const [modalOpciones, setModalOpciones] = useState(false);

  // Ref
  const searchRef = useRef<HTMLDivElement>(null);
  const importRef = useRef<HTMLDivElement>(null);
  const refImpProds = useRef<HTMLDivElement>(null);

  // Funciones para Abrir/Cerrar
  const openImportProducts = () => setImportProducts(true);
  const closeImportProducts = () => setImportProducts(false);
  const openImportDescriptions = () => setImportDescriptions(true);
  const closeImportDescriptions = () => setImportDescriptions(false);
  const openImportImages = () => setImportImages(true);
  const closeImportImages = () => setImportImages(false);
  const handleFiltroEstados = () => setModalFiltroEstados(!modalFiltroEstados);
  const handleFiltroTipos = () => setModalFiltroTipos(!modalFiltroTipos);
  const handleModalOpciones = () => setModalOpciones(!modalOpciones);
  useOutsideClick(refFiltroEstados, () => setModalFiltroEstados(false));
  useOutsideClick(refFiltroTipo, () => setModalFiltroTipos(false));

  // Funcion para cargar los datos en las tablas
  const loadProducts = async () => {
    setLoading(true);
    const response = await getProducts();
    console.log(response);

    if (response.ok) {
      setTableProductos(response.productos);
      setProductsFiltered(response.productos);
      setCantProds({ txt: "Productos", cant: response.productos.length });
    } else {
      setTableProductos([]);
      setProductsFiltered([]);
      setCantProds({ txt: "Productos", cant: 0 });
    }
    setLoading(false);
  };

  const loadPacks = () => {
    setTablePacks(Packs);
    setPacksFiltered(Packs);
  };

  // Verificar que solo sean numeros y un solo punto
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    value: number
  ) => {
    const key = e.key;
    const valueAsString = value.toString();

    if (
      !/[0-9.]/.test(key) &&
      key !== "Backspace" &&
      key !== "ArrowLeft" &&
      key !== "ArrowRight" &&
      key !== "Delete" &&
      key !== "Tab"
    ) {
      e.preventDefault();
    }
    if (key === "." && valueAsString.includes(".")) {
      e.preventDefault();
    }
  };

  // Funcion para cambiar el filtro por tipo
  const changetipoActivo = (newFilter: string) => {
    setTipoActivo(newFilter);
    setModalFiltroTipos(false);
  };

  // Funcion para desactivar el search
  const activeSearch = () => setSearchActive(true);

  // Filtrar productos
  const filterProducts = (newFilter: string) => {
    // Mostramos todas los productos
    if (newFilter === "Todos") {
      setEstadoActivo(newFilter);
      setProductsFiltered(tableProductos);
    } else if (newFilter === "Destacados") {
      setEstadoActivo(newFilter);

      // Productos destacados
      const prodDestacados = tableProductos.filter(
        (prod) => prod.destacadoProducto
      );
      setProductsFiltered(prodDestacados);
    } else if (newFilter === "Activos") {
      setEstadoActivo(newFilter);

      // Productos activos
      const prodActivos = tableProductos.filter((prod) => prod.estadoProducto);
      setProductsFiltered(prodActivos);
    } else if (newFilter === "Inactivos") {
      setEstadoActivo(newFilter);

      // Productos inactivos
      const prodInactivos = tableProductos.filter(
        (prod) => !prod.estadoProducto
      );
      setProductsFiltered(prodInactivos);
    }

    setModalFiltroEstados(false);
    setCurPageProds(1);
  };

  // Click Fuera
  useOutsideClick(searchRef, () => setSearchActive(false));
  useOutsideClick(importRef, () => setModalOpciones(false));
  useOutsideClick(refImpProds, () => setImportProducts(false));

  // Actualizar la cantidad
  useEffect(() => {
    setCantProds({ txt: "Productos", cant: tableProductos.length });
    setCantPacks({ txt: "Packs", cant: tablePacks.length });
  }, [tableProductos, tablePacks]);

  // Actualizar la cantidad cuando se aplique el filtro
  useEffect(() => {
    setCantProds({ txt: "Productos", cant: productsFiltered.length });
    setCantPacks({ txt: "Packs", cant: packsFiltered.length });
  }, [productsFiltered, packsFiltered]);

  // ======================================== PRODUCTOS ========================================
  const [colorProducto, setColorProducto] = useState<string>("");
  const [categoriaProducto, setCategoriaProducto] = useState<string>("");
  const [marcaProducto, setMarcaProducto] = useState<string>("");
  const [subcategoriaProducto, setSubcategoriaProducto] = useState<string>("");

  // Formulario de Producto
  const valuesProducto: ValuesProduct = {
    nombreProducto: "",
    varianteProducto: "",
    descripcionProducto: "",
    skuProducto: "",
    destacadoProducto: false,
    estadoProducto: true,
    fechaCreado: Date.now(),
    fechaActualizado: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    id_creador_producto: auth.id_usuario,
    id_color: null,
    id_categoria: null,
    id_subcategoria: null,
    id_marca: null,
    imagenProducto: [],
    cantSerialesProducto: "",
  };

  // Estado de loading mientras se manda el formulario
  const [loading, setLoading] = useState(false);
  // Estado del formulario nuevo producto
  const [formProd, setFormProd] = useState(valuesProducto);
  // Estado del producto seleccionado
  const [selectedProd, setSelectedProd] = useState<Producto | null>(null);
  const [imagesProducts, setImagesProducts] = useState<string[]>([]);
  // Tipo del formulario
  const [typeFormProd, setTypeFormProd] = useState<"new" | "edit">("new");

  // Marca / Color / Tipo
  const refColorProd = useRef<HTMLDivElement>(null);
  const [coloresProd, setColoresProd] = useState<Color[]>([]);
  const [modalColorProd, setModalColorProd] = useState(false);
  const refCatProd = useRef<HTMLDivElement>(null);
  const [catProd, setCatProd] = useState<CatProd[]>([]);
  const [modalCatProd, setModalCatProd] = useState(false);
  // const refSubCatProd = useRef<HTMLDivElement>(null);
  const [subCatProd, setSubCatProd] = useState<SubCatProd[]>([]);
  // const [modalSubCatProd, setModalSubCatProd] = useState(false);
  const refMarcaProd = useRef<HTMLDivElement>(null);
  const [marcasProd, setMarcasProd] = useState<MarcasProd[]>([]);
  const [modalMarcaProd, setModalMarcaProd] = useState(false);
  const refAlmacenProd = useRef<HTMLDivElement>(null);
  const [almacenProd, setAlmacenProd] = useState<Color[]>([]);
  const [modalAlmacenProd, setModalAlmacenProd] = useState(false);
  const refNivelesProd = useRef<HTMLDivElement>(null);
  const [nivelesProd, setNivelesProd] = useState<Color[]>([]);
  const [modalNivelesProd, setModalNivelesProd] = useState(false);
  const refPasillosProd = useRef<HTMLDivElement>(null);
  const [pasillosProd, setPasillosProd] = useState<Color[]>([]);
  const [modalPasillosProd, setModalPasillosProd] = useState(false);
  const refSubnivelesProd = useRef<HTMLDivElement>(null);
  const [subnivelesProd, setSubnivelesProd] = useState<Color[]>([]);
  const [modalSubnivelesProd, setModalSubnivelesProd] = useState(false);
  const refZonasProd = useRef<HTMLDivElement>(null);
  const [zonasProd, setZonasProd] = useState<Color[]>([]);
  const [modalZonasProd, setModalZonasProd] = useState(false);

  const loadCategorias = async () => {
    const response = await getCategorias();

    if (response.ok) {
      setCatProd(response.categorias);
    } else {
      setCatProd([]);
    }
  };

  const loadSubcategorias = async () => {
    const response = await getSubCategorias();

    if (response.ok) {
      setSubCatProd(response.subcategorias);
    } else {
      setSubCatProd([]);
    }
  };

  const loadMarcas = async () => {
    const response = await getMarcas();

    if (response.ok) {
      setMarcasProd(response.marcas);
    } else {
      setMarcasProd([]);
    }
  };

  const loadColores = async () => {};

  // Abrir/Cerrar modales
  const handleModalColorProd = () => setModalColorProd(!modalColorProd);
  useOutsideClick(refColorProd, () => setModalColorProd(false));
  const handleModalCatProd = () => setModalCatProd(!modalCatProd);
  useOutsideClick(refCatProd, () => setModalCatProd(false));
  const handleModalMarcaProd = () => setModalMarcaProd(!modalMarcaProd);
  useOutsideClick(refMarcaProd, () => setModalMarcaProd(false));
  const handleModalAlmacen = () => setModalAlmacenProd(!modalAlmacenProd);
  useOutsideClick(refAlmacenProd, () => setModalAlmacenProd(false));
  const handleModalNiveles = () => setModalNivelesProd(!modalNivelesProd);
  useOutsideClick(refNivelesProd, () => setModalNivelesProd(false));
  const handleModalPasillos = () => setModalPasillosProd(!modalPasillosProd);
  useOutsideClick(refPasillosProd, () => setModalPasillosProd(false));
  const handleModalSubniveles = () =>
    setModalSubnivelesProd(!modalSubnivelesProd);
  useOutsideClick(refSubnivelesProd, () => setModalSubnivelesProd(false));
  const handleModalZonas = () => setModalZonasProd(!modalZonasProd);
  useOutsideClick(refZonasProd, () => setModalZonasProd(false));

  // Colores de productos
  const colorProductoFiltrado = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = coloresProd.filter((a) =>
        a.name.toLowerCase().includes(query)
      );
      setColoresProd(filtered);
    } else {
      setColoresProd(Colores);
    }
  };

  const colorProductoSeleccionada = (newName: string, id: number) => {
    setColorProducto(newName);

    setFormProd({
      ...formProd,
      id_color: id,
    });

    setModalColorProd(false);
  };

  const colorProductoBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const colorName = e.target.value;
    if (!coloresProd.some((area) => area.name === colorName)) {
      setColorProducto("");
      setFormProd({ ...formProd, id_color: null });
      setColoresProd(Colores);
    }
  };

  // Categorias de productos
  const catProductoFiltrado = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = catProd.filter((a) =>
        a.nombre_categoria.toLowerCase().includes(query)
      );
      setCatProd(filtered);
    } else {
      await loadCategorias();
    }
  };

  const catProductoSeleccionada = (newName: string, id: number) => {
    setCategoriaProducto(newName);

    setFormProd({
      ...formProd,
      id_categoria: id,
    });

    setModalCatProd(false);
  };

  const catProductoBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const catName = e.target.value;
    if (!catProd.some((area) => area.nombre_categoria === catName)) {
      setCategoriaProducto("");
      setFormProd({ ...formProd, id_categoria: null });
      await loadCategorias();
    }
  };

  // Marcas de productos
  const marcaProductoFiltrado = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = marcasProd.filter((a) =>
        a.nombre_marca.toLowerCase().includes(query)
      );
      setMarcasProd(filtered);
    } else {
      await loadMarcas();
    }
  };

  const marcaProductoSeleccionada = (newName: string, id: number) => {
    setMarcaProducto(newName);
    setFormProd({
      ...formProd,
      id_marca: id,
    });

    setModalMarcaProd(false);
  };

  const marcaProductoBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const marcaName = e.target.value;
    if (!marcasProd.some((area) => area.nombre_marca === marcaName)) {
      setMarcaProducto("");
      setFormProd({ ...formProd, id_marca: null });
      await loadMarcas();
    }
  };

  const changeSelectedProd = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (selectedProd) {
      const { id, value } = e.target;
      setSelectedProd({
        ...selectedProd,
        [id]: value,
      });
    }
  };

  // Paginacion
  const [prodsPerPage, setProdsPerPage] = useState(10);
  const refModalPageProds = useRef<HTMLDivElement>(null);
  const [modalPagProd, setModalPagProd] = useState(false);
  const [curPageProds, setCurPageProds] = useState(1);
  const [totalProdPages, setTotalProdsPages] = useState(0);
  const [prodsPaginated, setProdsPaginated] = useState<Producto[]>([]);
  const maxButtonsProd = 5;
  const pageStarProd = Math.max(
    1,
    curPageProds - Math.floor(maxButtonsProd / 2)
  );
  const pageEndProd = Math.min(
    totalProdPages,
    pageStarProd + maxButtonsProd - 1
  );

  const showModalProdMov = () => setModalPagProd(!modalPagProd);
  useOutsideClick(refModalPageProds, () => setModalPagProd(false));

  const changeProdPerPage = (newPerPage: number) => {
    setProdsPerPage(newPerPage);
    setModalPagProd(false);
  };

  const changeCurPageProds = (newPage: number) => {
    setCurPageProds(newPage);
  };

  const calctotalProdsPages = (filtered: Producto[]) => {
    const total = Math.ceil(filtered.length / prodsPerPage);
    setTotalProdsPages(total);
  };

  const updateProdsPaginated = () => {
    const paginated = productsFiltered.slice(
      (curPageProds - 1) * prodsPerPage,
      curPageProds * prodsPerPage
    );
    setProdsPaginated(paginated);
  };

  // Calculamos el total de paginas y actualizamos
  useEffect(() => {
    calctotalProdsPages(productsFiltered);
    updateProdsPaginated();
  }, [tableProductos, prodsPerPage, totalProdPages, curPageProds]);

  useEffect(() => {
    setProductsFiltered(tableProductos);
  }, [tableProductos]);

  // Cargar los datos en la tabla
  useEffect(() => {
    loadProducts();
    loadCategorias();
    loadSubcategorias();
    loadMarcas();
    loadColores();
    loadPacks();
  }, [responseToken]);

  // Ejecutar la funcion de exportar
  const handleExportProducts = () => {
    // const { data, columns } = prepareProductsExport(tableProductos);
    // exportToExcel(data, columns, "Listado_Productos");
    setModalOpciones(false);
  };

  // Funcion para ver el formulario de producto
  const openFormProd = () => {
    setTypeFormProd("new");
    setModalProdForm(true);
    setSelectedProd(null);
    setFormProd(valuesProducto);
    setImagesProducts([]);
    setColorProducto("");
    setMarcaProducto("");
    setCategoriaProducto("");
  };

  // Funcion para cerrar el formulario de producto
  const closeFormProd = () => {
    setModalProdForm(false);
  };

  useOutsideClick(refModalProdForm, () => {
    closeFormProd();
  });

  const editFormProd = (item: Producto) => {
    setTypeFormProd("edit");
    setModalProdForm(true);
    setSelectedProd(item);
  };

  // Funcion para ver Producto
  const OpenModalVerProd = (row: Producto) => {
    setModalVerProd(true);
    setSelectedProd(row);
  };

  // Funcion para cerrar el modal de ver producto
  const CloseModalVerProd = () => {
    setModalVerProd(false);
  };

  useOutsideClick(refModalVerProd, () => setModalVerProd(false));

  // Manejar cambios en los campos del formulario
  const changeProducto = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormProd((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Funcion para limpiar las imagenes
  const limpiarImagenes = () => {
    if (selectedProd) {
      setSelectedProd((prev) => ({
        ...prev!,
        imagenProducto: [],
      }));
    } else {
      setFormProd((prev) => ({ ...prev, imagenProducto: [] }));
      setImagesProducts([]);
    }
  };

  // Funcion para cargar 4 imagenes
  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Si hay mas de 4 imagenes
      if (files.length > 4) {
        return;
      }

      // Guardamos las imagenes seleccionadas
      const filesArray = Array.from(files);

      const fileArray = filesArray.map((file) => URL.createObjectURL(file));
      if (selectedProd) {
        setImagesProducts(fileArray);
        setSelectedProd((prev) => ({
          ...prev!,
          imagenProducto: fileArray,
        }));
      } else {
        setImagesProducts(fileArray);

        setFormProd((prev) => ({
          ...prev,
          imagenProducto: filesArray,
        }));
      }
    }
  };

  // Funcion para enviar el formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Si es crear
    if (typeFormProd === "new") {
      setLoading(true);

      console.log(formProd);
      const response = await createProduct(formProd);
      console.log(response);

      setLoading(false);
      // Cerramos el modal
      closeFormProd();
      // Mostramos el toas
      toast.success("Producto agregado con exito");
    } else {
      setTimeout(() => {
        // mostramos en consola
        console.log(selectedProd);
        setLoading(false);
        // Cerramos el modal
        closeFormProd();
        // Mostramos el toas
        toast.success("Producto actualizado con exito");
      }, 1000);
    }
  };

  useEffect(() => {
    setAlmacenProd(Almacenes);
    setZonasProd(Zonas);
    setNivelesProd(Niveles);
    setSubnivelesProd(SubNiveles);
    setPasillosProd(Pasillos);
  }, []);

  // ========================================== Packs ==========================================
  const initPack: Pack = {
    packNombre: "",
    packImages: [],
    packSku: "",
    packPrecioImpuestos: 0,
    packTipo: "",
    productosPacks: [],
    packEstado: true,
    packDestacado: false,
    comentarioPack: "",
  };

  const [loadingPack, setLoadingPack] = useState(false);

  // Formulario Pack
  const [formPack, setFormPack] = useState<Pack>(initPack);
  const [typeFormPack, setTypeFormPack] = useState<"new" | "edit">("new");

  // Pack seleccionado
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);

  // Productos asociados al pack
  const refModalProductosPack = useRef<HTMLDivElement>(null);
  const [modalProductosPack, setModalProductosPack] = useState(false);
  const [productosPack, setProductosPack] = useState<Producto[]>([]);
  const [selectedProdsPack, setSelectedProdsPack] = useState<number[]>([]);
  const [allProdsSelectedPack, setAllProdsSelectedPack] = useState(false);

  // Filtro Pack
  const refEstadoPack = useRef<HTMLDivElement>(null);
  const [estadoPack, setEstadoPack] = useState("Todos");
  const refTipoPack = useRef<HTMLDivElement>(null);
  const [tipoPack, setTipPack] = useState("");

  const changeTipoPack = (newTipo: string) => {
    setTipPack(newTipo);
    setModalTiposPack(false);
  };

  // Input Pack
  const inputRefPack = useRef<HTMLInputElement>(null);
  const [activeInputPack, setActiveInputPack] = useState(false);

  // Input Pack
  const openInputPack = () => setActiveInputPack(true);
  useOutsideClick(inputRefPack, () => setActiveInputPack(false));

  // Modales
  const [modalDetalle, setmodalDetalle] = useState(false);
  const [importPacks, setImportPacks] = useState(false);
  const refModalVerPack = useRef<HTMLDivElement>(null);
  const [modalVerPack, setModalVerPack] = useState(false);
  const refModalPackForm = useRef<HTMLDivElement>(null);
  const [modalPackForm, setModalPackForm] = useState(false);
  const [modalEstadosPack, setModalEstadosPack] = useState(false);
  const [modalTiposPack, setModalTiposPack] = useState(false);

  const openProductsAsoc = (productos: Producto[]) => {
    setTypeFormPack("edit");
    setProductosPack(productos);
    setModalProductosPack(true);
  };

  const verProductosAsoc = (productos: Producto[]) => {
    setTypeFormPack("new");
    setProductosPack(productos);
    setModalProductosPack(true);
  };

  const closeProductsAsoc = () => {
    setProductosPack([]);
    setSelectedProdsPack([]);
    setModalProductosPack(false);
    setAllProdsSelectedPack(false);
    setTypeFormPack("new");
  };

  useOutsideClick(refModalProductosPack, closeProductsAsoc);

  // Asociar todos los productos a un pack
  const handleAllProductosPack = () => {
    if (allProdsSelectedPack) {
      setSelectedProdsPack([]);
    } else {
      const allProds = tableProductos.map((prod) => prod.id);
      setSelectedProdsPack(allProds);
    }

    setAllProdsSelectedPack(!allProdsSelectedPack);
  };

  // Asociar un producto a un pack
  const handleSelectProductPack = (id: number) => {
    // Verificamos si el producto ya estaba seleccionado
    setSelectedProdsPack((prev) => {
      // Almacenamos la lista
      let updateSelection;

      // Si ya estaba seleccionado, lo eliminamos
      if (prev.includes(id)) {
        updateSelection = prev.filter((prod) => prod !== id);
      } else {
        // Si no estaba seleccionado, lo agregamos
        updateSelection = [...prev, id];
      }

      // Si todos los productos estan seleccionados marcamos el checkbox
      setAllProdsSelectedPack(updateSelection.length === tableProductos.length);
      return updateSelection;
    });
  };

  // Agregar los productos seleccionados al pack
  const addSelectedProdsPack = () => {
    const selectedProds = tableProductos.filter((prod) =>
      selectedProdsPack.includes(prod.id)
    );

    setFormPack((prev) => ({
      ...prev,
      productosPacks: selectedProds,
    }));

    closeProductsAsoc();
  };

  // Paginacion
  const [packsPerPage, setPacksPerPage] = useState(10);
  const refModalPagePacks = useRef<HTMLDivElement>(null);
  const [modalPagPacks, setModalPagPacks] = useState(false);
  const [curPagePacks, setCurPagePacks] = useState(1);
  const [totalPacksPages, setTotalPacksPages] = useState(0);
  const [packsPaginated, setPacksPaginated] = useState<Pack[]>([]);
  const maxButtonsPacks = 5;
  const pageStarPacks = Math.max(
    1,
    curPagePacks - Math.floor(maxButtonsPacks / 2)
  );
  const pageEndPacks = Math.min(
    totalPacksPages,
    pageStarPacks + maxButtonsPacks - 1
  );

  const showModalPacksMov = () => setModalPagPacks(!modalPagPacks);
  useOutsideClick(refModalPagePacks, () => setModalPagPacks(false));

  const changePacksPerPage = (newPerPage: number) => {
    setPacksPerPage(newPerPage);
    setModalPagPacks(false);
    setCurPagePacks(1);
  };

  const changeCurPagePacks = (newPage: number) => setCurPagePacks(newPage);

  const calctotalPacksPages = (filtered: Pack[]) => {
    const total = Math.ceil(filtered.length / packsPerPage);
    setTotalPacksPages(total);
  };

  const updatePacksPaginated = () => {
    const paginated = packsFiltered.slice(
      (curPagePacks - 1) * packsPerPage,
      curPagePacks * packsPerPage
    );
    setPacksPaginated(paginated);
  };

  // Calculamos el total de paginas y actualizamos
  useEffect(() => {
    calctotalPacksPages(packsFiltered);
    updatePacksPaginated();
  }, [tablePacks, packsPerPage, totalPacksPages, curPagePacks]);

  useEffect(() => {
    setPacksFiltered(tablePacks);
  }, [tablePacks]);

  // Abrir/cerrar modales
  const openModalDetalle = () => setmodalDetalle(true);
  const closeModalDetalle = () => setmodalDetalle(false);
  const openImportPacks = () => setImportPacks(true);
  const closeImportPacks = () => setImportPacks(false);
  const handleEstadosPack = () => setModalEstadosPack(!modalEstadosPack);
  const handleTiposPack = () => setModalTiposPack(!modalTiposPack);

  // Click fuera
  useOutsideClick(refEstadoPack, () => setModalEstadosPack(false));
  useOutsideClick(refTipoPack, () => setModalTiposPack(false));

  const openFormPack = () => {
    setFormPack(initPack);
    setTypeFormPack("new");
    setModalPackForm(true);
  };

  const closeFormPack = () => {
    setModalPackForm(false);
  };

  useOutsideClick(refModalPackForm, closeFormPack);

  const editFormPack = (item: Pack) => {
    setTypeFormPack("edit");
    setModalPackForm(true);
    setFormPack(item);
  };

  const openModalVerPack = (row: Pack) => {
    setSelectedPack(row);
    setModalVerPack(true);
  };

  const closeModalVerPack = () => {
    setModalVerPack(false);
  };

  useOutsideClick(refModalVerPack, closeModalVerPack);

  // Filtrar Packs
  const filterPacks = (newFilter: string) => {
    // Mostramos todas los Packs
    if (newFilter === "Todos") {
      setEstadoPack(newFilter);
      setPacksFiltered(tablePacks);
    } else if (newFilter === "Destacados") {
      setEstadoPack(newFilter);

      // Packs destacados
      const packsDestacados = tablePacks.filter((pack) => pack.packDestacado);
      setPacksFiltered(packsDestacados);
    } else if (newFilter === "Activos") {
      setEstadoPack(newFilter);

      // Packs activos
      const packsActivos = tablePacks.filter((pack) => pack.packEstado);
      setPacksFiltered(packsActivos);
    } else if (newFilter === "Inactivos") {
      setEstadoPack(newFilter);

      // Packs inactivos
      const packsInactivos = tablePacks.filter((pack) => !pack.packEstado);
      setPacksFiltered(packsInactivos);
    }

    setModalEstadosPack(false);
  };

  const limpiarImgPack = () => {
    setFormPack((prevValues) => ({ ...prevValues, packImages: [] }));
  };

  const imagesPack = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Si hay mas de 4 imagenes
      if (files.length > 4) {
        return;
      }
      const fileArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setFormPack((prev) => ({
        ...prev,
        packImages: fileArray,
      }));
    }
  };

  // Ejecutar
  const handleExportPacks = () => {
    // const { data, columns } = preparePacksExport(tablePacks);
    // exportToExcel(data, columns, "Listado_Packs");
    setModalOpciones(false);
  };

  const handleChangePack = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormPack((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const submitPack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingPack(true);

    if (typeFormPack === "new") {
      setTimeout(() => {
        console.log(formPack);

        // Agregamos el pack al arreglo
        setTablePacks([...tablePacks, formPack]);
        console.log(tablePacks);

        setLoadingPack(false);

        closeFormPack();

        toast.success("Pack creado con exito");
      }, 1000);
    } else {
      setTimeout(() => {
        console.log(formPack);

        console.log(tablePacks);

        setLoadingPack(false);

        closeFormPack();

        toast.success("Pack actualizado con exito");
      }, 1000);
    }
  };

  // ===================================== Impuestos =====================================
  const initImp = {
    igv: true,
    exonerado: false,
    paraExportacion: false,
    icbPer: false,
  };

  const [formImp, setFormImp] = useState<Impuesto>(initImp);
  const [loadingImp, setloadingImp] = useState(false);
  const refModalImp = useRef<HTMLDivElement>(null);
  const [modalImp, setModalImp] = useState(false);

  const openModalImp = () => setModalImp(true);
  useOutsideClick(refModalImp, () => setModalImp(false));

  const closeModalImp = () => {
    setModalImp(false);
    setFormImp(initImp);
  };

  const changeFormImp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormImp((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const submitFormImp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setloadingImp(true);
    console.log(formImp);
    setloadingImp(false);
    closeModalImp();
  };

  return (
    <ProdContext.Provider
      value={{
        loading,
        estadoActivo,
        tipoActivo,
        searchActive,
        importImages,
        importDescriptions,
        searchRef,
        handleKeyDown,
        changetipoActivo,
        openImportDescriptions,
        closeImportDescriptions,
        openImportImages,
        closeImportImages,
        activeSearch,
        handleFiltroEstados,
        handleFiltroTipos,
        handleModalOpciones,
        importRef,
        modalFiltroEstados,
        modalFiltroTipos,
        modalOpciones,
        refImpProds,
        // ============================================ Productos ============================
        typeFormProd,
        cantProds,
        tableProductos,
        productsFiltered,
        importProducts,
        openImportProducts,
        closeImportProducts,
        formProd,
        imagesProducts,
        categoriaProducto,
        catProductoFiltrado,
        colorProducto,
        colorProductoFiltrado,
        marcaProducto,
        marcaProductoFiltrado,
        setCategoriaProducto,
        setColorProducto,
        setMarcaProducto,
        setSubcategoriaProducto,
        subcategoriaProducto,
        refModalVerProd,
        modalVerProd,
        modalProdForm,
        refModalProdForm,
        selectedProd,
        changeSelectedProd,
        handleSubmit,
        changeProducto,
        imageChange,
        limpiarImagenes,
        OpenModalVerProd,
        CloseModalVerProd,
        openFormProd,
        closeFormProd,
        editFormProd,
        filterProducts,
        handleExportProducts,
        refFiltroEstados,
        refFiltroTipo,
        refCatProd,
        catProd,
        modalCatProd,
        handleModalCatProd,
        catProductoBlur,
        catProductoSeleccionada,
        subCatProd,
        refColorProd,
        coloresProd,
        modalColorProd,
        handleModalColorProd,
        colorProductoBlur,
        colorProductoSeleccionada,
        refMarcaProd,
        marcasProd,
        modalMarcaProd,
        handleModalMarcaProd,
        marcaProductoBlur,
        marcaProductoSeleccionada,
        refAlmacenProd,
        almacenProd,
        modalAlmacenProd,
        handleModalAlmacen,
        refNivelesProd,
        nivelesProd,
        modalNivelesProd,
        handleModalNiveles,
        refPasillosProd,
        pasillosProd,
        modalPasillosProd,
        handleModalPasillos,
        refZonasProd,
        modalZonasProd,
        zonasProd,
        handleModalZonas,
        refSubnivelesProd,
        modalSubnivelesProd,
        subnivelesProd,
        handleModalSubniveles,

        // Paginacion
        changeCurPageProds,
        changeProdPerPage,
        curPageProds,
        modalPagProd,
        pageEndProd,
        pageStarProd,
        prodsPaginated,
        prodsPerPage,
        refModalPageProds,
        showModalProdMov,
        totalProdPages,
        refModalUbicacionProd,
        closeModalUbicacionProd,
        modalUbicaionProd,
        openModalUbicacionProd,

        // ================================ Packs ================================================
        cantPacks,
        filterPacks,
        tablePacks,
        packsFiltered,
        importPacks,
        openImportPacks,
        closeImportPacks,
        changeTipoPack,
        formPack,
        loadingPack,
        typeFormPack,
        modalPackForm,
        refModalPackForm,
        modalDetalle,
        refModalVerPack,
        modalVerPack,
        handleChangePack,
        limpiarImgPack,
        imagesPack,
        submitPack,
        openModalDetalle,
        closeModalDetalle,
        openModalVerPack,
        closeModalVerPack,
        openFormPack,
        closeFormPack,
        editFormPack,
        tipoPack,
        estadoPack,
        inputRefPack,
        activeInputPack,
        openInputPack,
        selectedPack,
        handleEstadosPack,
        handleTiposPack,
        modalEstadosPack,
        modalTiposPack,
        refEstadoPack,
        refTipoPack,
        handleExportPacks,
        // Paginacion
        changeCurPagePacks,
        changePacksPerPage,
        curPagePacks,
        modalPagPacks,
        pageEndPacks,
        pageStarPacks,
        packsPaginated,
        packsPerPage,
        refModalPagePacks,
        showModalPacksMov,
        totalPacksPages,
        closeProductsAsoc,
        modalProductosPack,
        refModalProductosPack,
        productosPack,
        openProductsAsoc,
        selectedProdsPack,
        verProductosAsoc,
        handleSelectProductPack,
        addSelectedProdsPack,
        allProdsSelectedPack,
        handleAllProductosPack,

        // ================================== Impuestos ==================================
        formImp,
        setFormImp,
        loadingImp,
        modalImp,
        refModalImp,
        openModalImp,
        closeModalImp,
        changeFormImp,
        submitFormImp,
      }}
    >
      {children}
    </ProdContext.Provider>
  );
};
