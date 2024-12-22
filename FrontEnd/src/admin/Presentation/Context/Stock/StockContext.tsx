/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import * as ExcelJS from "exceljs";
import {
  Auxiliares,
  Conductor,
  Conductores,
  formValuesDespacho,
  Placas,
  StockCTX,
  Transp,
  TipoProveedores,
} from "../../../Interfaces/Context/Stock/StockCTX";
import * as I from "../../../Interfaces/Stock/Stock";
import { toast } from "sonner";
import { TInventario } from "../../../Interfaces/Context/TomaI/TomaI";
import {
  Product,
  Products,
  Variante,
} from "../../../Interfaces/Productos/Productos";
import { IMarcas, ITipos, marcas, tipos } from "../../Data/tipos";
import moment from "moment";
import {
  ConsumoData,
  Consumos,
  Documento,
  Documentos,
  TDocumento,
  TDocumentos,
} from "../../Data/Stock";
import {
  HistMov,
  HistMovs,
  ListaOrden,
  ListaOrdenes,
} from "../../Data/HistorialMovimientos";
import { exportToExcel } from "../../Libs/ExportToExcel";
import { useOutsideClick } from "../../Helper/useOutSideClick";
import {
  Departamento,
  Departamentos,
  Distrito,
  Distritos,
  Provincia,
  Provincias,
} from "../../Data/Peru";
import { usuario, usuarios } from "../../Views/Usuarios/Reportes/Data/Reportes";

export const StockContext = React.createContext<StockCTX>({} as StockCTX);

export const StockProvider = ({ children }: React.PropsWithChildren) => {
  // ============================== Recepcion ==============================
  // Ref al modal de elegir documento
  const refButtonDoc = React.useRef<HTMLDivElement>(null);

  const initStock: I.Recepcion = {
    recepId: Date.now(),
    recepcionDocumento: "",
    recepTipo: "",
    recepMarca: "",
    recepColor: "",
    recepNumDoc: "",
    recepProd: "",
    recepUMedida: "",
    recepCantIng: 0,
    recepCostUnit: 0,
    recepComment: "",
    tipoSereal: 0,
  };

  // loading
  const [loading, setLoading] = React.useState(false);
  const [recepcionIsPosting, setRecepcionIsPosting] = React.useState(false);
  const [recepcionIsSaving, setRecepcionIsSaving] = React.useState(false);

  // Arreglo de Stocks
  const [recepciones, setRecepciones] = React.useState<I.Recepcion[]>([]);

  // Form Stocks
  const [formRecep, setFormRecep] = React.useState(initStock);

  // Modal para elegir documento
  const [modalDoc, setModalDoc] = React.useState(false);

  // Ver comentario
  const [verComentario, setVerComentario] = React.useState(false);

  // Tipo
  const modalTipo = React.useRef<HTMLDivElement>(null);
  const [filterTipo, setFilterTipo] = React.useState<ITipos[]>([]);
  const [tipoElegido, setTipoElegido] = React.useState<number | null>(null);

  // Marcas
  const modalMarca = React.useRef<HTMLDivElement>(null);
  const [filterMarca, setFilterMarca] = React.useState<IMarcas[]>([]);
  const [marcaElegida, setMarcaElegida] = React.useState<number | null>(null);

  // Producto
  const modalProductos = React.useRef<HTMLDivElement>(null);
  const [filterProd, setFilterProd] = React.useState<Product[]>([]);

  // Modal sereales
  const refModalSerealesR = React.useRef<HTMLDivElement>(null);
  const [modalSerealesR, setModalSerealesR] = React.useState(false);
  const refSerialesMasivosR = React.useRef<HTMLDivElement>(null);
  const [serialesMasivosR, setSerialesMasivosR] = React.useState(false);

  useOutsideClick(refSerialesMasivosR, () => setSerialesMasivosR(false));
  const handleSerialesMarivosR = () => setSerialesMasivosR(!serialesMasivosR);

  // Almacenar los valores de los input
  const [inputValues, setInputValues] = React.useState<{
    [key: number]: string[];
  }>({});

  // Seguimiento a la opcion seleccionada
  const [selectOption, setSelectOption] = React.useState<{
    [key: number]: string;
  }>({});

  // Manejar los cambios de los select
  const handleSelectChangeR = (i: number, value: string) => {
    setSelectOption((prev) => ({
      ...prev,
      [i]: value,
    }));

    // Si se selecciona la opcion de "IMEI", agregamos 3 inputs, si no 1
    setInputValues((prev) => ({
      ...prev,
      [i]: value === "IMEI" ? ["", "", ""] : [""],
    }));
  };

  // Verificar si el valor ya existe
  const checkForDuplicates = (
    newValue: string,
    parentIndex: number,
    childIndex: number
  ) => {
    const allValues = Object.entries(inputValues)
      .flatMap(([key, values]) =>
        values.map((val, idx) => ({
          parentIndex: Number(key),
          childIndex: idx,
          value: val,
        }))
      )
      .filter(
        (item) =>
          !(item.parentIndex === parentIndex && item.childIndex === childIndex)
      )
      .map((item) => item.value);

    if (allValues.includes(newValue)) {
      toast.error("Este valor ya ha sido ingresado.");
      return true;
    }
    return false;
  };

  // Manejar los cambios de los inputs
  const handleInputChangeR = (i: number, inputIndex: number, value: string) => {
    // Verificar si el valor ya existe
    if (checkForDuplicates(value, i, inputIndex)) {
      return;
    }

    // Agregar el valor a la lista de valores
    setInputValues((prev) => ({
      ...prev,
      [i]: prev[i].map((v, idx) => (idx === inputIndex ? value : v)),
    }));
  };

  // Cerrar Modal sereales
  const closeModalSerealesR = () => {
    setModalSerealesR(false);
    setInputValues({});
    setSelectOption({});
  };

  // Funcion para cancelar recepcion
  const cancelarRecepcion = () => {
    setLoading(true);

    // Eliminar los datos del arreglo
    setTimeout(() => {
      setRecepciones([]);
      setLoading(false);
    }, 200);
  };

  // Funcion para ver comentario
  const verComentarioRecepcion = () => setVerComentario(!verComentario);

  // Cerrar el modal si se clickea fuera del boton
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      refButtonDoc.current &&
      !refButtonDoc.current.contains(event.target as Node)
    ) {
      setModalDoc(false);
    }
  };

  // Limpiar el arreglo de tipo
  const handleOutsideModalTipo = (event: MouseEvent) => {
    if (
      modalTipo.current &&
      !modalTipo.current.contains(event.target as Node)
    ) {
      setFilterTipo([]);
    }
  };

  // Limpiar el arreglo de marca
  const handleOutsideModalMarca = (event: MouseEvent) => {
    if (
      modalMarca.current &&
      !modalMarca.current.contains(event.target as Node)
    ) {
      setFilterMarca([]);
    }
  };

  // Limpiar el arreglo de productos
  const handleOutsideModalProductos = (event: MouseEvent) => {
    if (
      modalProductos.current &&
      !modalProductos.current.contains(event.target as Node)
    ) {
      setFilterProd([]);
    }
  };

  // Cambiar de doc
  const changeDoc = (doc: string) => {
    setFormRecep((prev) => ({
      ...prev,
      recepcionDocumento: doc,
    }));
    setModalDoc(false);
  };

  // Hallar tota neto
  const totalNeto = recepciones.reduce(
    (acc, stock) => acc + stock.recepCantIng * stock.recepCostUnit,
    0
  );

  // Formatear numero a moneda peruana
  const formatMoney = (value: number) =>
    value.toLocaleString("es-PE", {
      minimumFractionDigits: 2,
    });

  // Abrir/cerrar modal de tipo de documento
  const showModalDoc = () => setModalDoc(!modalDoc);

  // Filtrar tipos mientras se escribe
  const TiposFiltered = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = tipos.filter((tipo) =>
      tipo.nombre.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilterTipo(filtered);
  };

  // Seleccionar tipo
  const selectTipoRecepcion = (id: number) => {
    // Guardamos el id
    setTipoElegido(id);

    // Buscamos el tipo
    const tipo = tipos.find((tipo) => tipo.id === id);

    // Actualizamos el formulario
    if (tipo) {
      setFormRecep((prev) => ({
        ...prev,
        recepTipo: tipo.nombre,
      }));
    }

    // Limpiamos
    setFilterTipo([]);
  };

  // Filtrar marcas mientras se escribe
  const MarcasFiltered = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (tipoElegido) {
      // Se filtrara por el tipo y el texto ingresado
      const filtered = marcas.filter(
        (marca) =>
          marca.tipo === tipoElegido &&
          marca.nombre.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setFilterMarca(filtered);
    }
  };

  // Seleccionar marca
  const selectMarcaRecepcion = (id: number) => {
    // Guardamos el id
    setMarcaElegida(id);

    // Buscamos la marca
    const marca = marcas.find((marca) => marca.id === id);
    // Actualizamos el formulario
    if (marca) {
      setFormRecep((prev) => ({
        ...prev,
        recepMarca: marca.nombre,
      }));
    }

    // Limpiamos el arreglo
    setFilterMarca([]);
  };

  // Filtrar productos mientras escribe
  const ProductosFiltered = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (tipoElegido) {
      if (marcaElegida) {
        // Se filtraran por tipo y marca
        const filtered = Products.filter(
          (prod) =>
            prod.tipoProducto === tipoElegido.toString() &&
            prod.marcaProducto === marcaElegida.toString() &&
            prod.nombreProducto
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
        );

        setFilterProd(filtered);
      }
    }
  };

  // Seleccionar un producto
  const selectProductoRecepcion = (prodId: number, varId: string) => {
    // Buscamos el producto con el id
    const producto = Products.find((prod) => prod.id === prodId);

    // Verificamos que exista y tenga variantes
    if (producto) {
      const VSeleccionada = producto.variantes.find(
        (v) => v.skuVariante === varId
      );

      if (VSeleccionada) {
        // Actualizamos el formulario
        setFormRecep((prev) => ({
          ...prev,
          recepProd: VSeleccionada.nombreVariante,
          recepColor: VSeleccionada.color,
          recepUMedida: VSeleccionada.unidadMedida,
        }));
      }
    }

    // Limpiamos el arreglo
    setFilterProd([]);
  };

  // Capturar los inputs
  const changeFormRecepcion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "recepCantIng") {
      // Vemos la cantidad ingresada
      const cantIng = parseFloat(value);

      // Si no es un numero, no hacemos nada
      if (isNaN(cantIng) && value !== "") return;

      // Si la cantidad ingresada es mayor a uno, sera sereal masivo, si no unitario
      setFormRecep({
        ...formRecep,
        recepCantIng: value === "" ? 0 : cantIng,
        tipoSereal: cantIng > 10 ? 2 : 1,
      });
    } else {
      setFormRecep({ ...formRecep, [name]: value });
    }

    if (name === "recepTipo") {
      TiposFiltered(e);
    } else if (name === "recepMarca") {
      MarcasFiltered(e);
    } else if (name === "recepProd") {
      ProductosFiltered(e);
    }
  };

  // Cambiar el checkbox
  const changeCheckbox = (tipo: number) => {
    setFormRecep((prev) => ({
      ...prev,
      tipoSereal: formRecep.tipoSereal === tipo ? 0 : tipo,
    }));
  };

  // Descargar excel de productos recepcionados masivamente
  const descargarExcelSerialesMasivosR = async () => {
    const columns = [
      { header: "SKU Producto", key: "sku", width: 32 },
      { header: "Código", key: "codigo", width: 15 },
      { header: "Serial", key: "serial", width: 15 },
      { header: "IMEI1", key: "imei1", width: 15 },
      { header: "IMEI2", key: "imei2", width: 15 },
    ];

    // Generamos los datos para cada filta segun la cantidad consumida
    const data = Array.from({ length: formRecep.recepCantIng }, (_, index) => ({
      sku: formRecep.recepProd || `SKU-${index + 1}`,
      codigo: `C-${index + 1}`,
      serial: "",
      imei1: "",
      imei2: "",
    }));

    // Llamamos a la funcion de descarga de excel
    await exportToExcel(data, columns, "SerialesProductosRecepcionados");
  };

  // Agregar cereales
  const agregarCereales = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar que la cantidad ingresada sea mayor a 0
    if (formRecep.recepCantIng <= 0) {
      toast.warning("La cantidad debe ser mayor a 0");
      return;
    } else if (formRecep.recepCantIng > 10) {
      toast.info("Descargando excel de seriales");
      await descargarExcelSerialesMasivosR();
      setSerialesMasivosR(true);
      return;
    }

    setModalSerealesR(true);
  };

  // submit recepcion
  const submitRecepcion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRecepcionIsPosting(true);

    // Agregamos un stock al arreglo
    setTimeout(() => {
      console.log(formRecep);
      setSerialesMasivosR(false);
      setFormRecep(initStock);
      setModalSerealesR(false);
      setInputValues({});
      setSelectOption({});
      setRecepcionIsPosting(false);
      setRecepciones([...recepciones, formRecep]);
      toast.success("Registro ingresado correctamente");
    }, 1000);

    // Limpiamos el formulario
  };

  // Guardar todas las recepciones
  const guardarRecepciones = () => {
    setRecepcionIsSaving(true);

    setTimeout(() => {
      setRecepcionIsSaving(false);
      setRecepciones([]);
      toast.success("Recepciones guardadas correctamente");
    }, 1000);
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

  // Agregamos la funcion del click
  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("click", handleOutsideModalTipo);
    document.addEventListener("click", handleOutsideModalMarca);
    document.addEventListener("click", handleOutsideModalProductos);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("click", handleOutsideModalTipo);
      document.removeEventListener("click", handleOutsideModalMarca);
      document.removeEventListener("click", handleOutsideModalProductos);
    };
  }, []);

  // ==================================================================== Consumo ====================================================================
  const initConsumo: I.Consumo = {
    idConsumido: Date.now(),
    consumoNroDocumento: "",
    consumoProd: "",
    consumoUMProd: "",
    consumoCant: 0,
    consumoNota: "",
    consumoTipoSereal: 0,
    consumoTipo: "",
    consumoLote: "",
    consumoFechaVigencia: "",
  };

  // Formulario de consumo
  const [formConsumo, setFormConsumo] = React.useState(initConsumo);
  const [consumoIsPosting, setConsumoIsPosting] = React.useState(false);
  const [consumoSaved, setConsumoSaved] = React.useState(false);

  // Arreglo de consumos
  const [consumos, setConsumos] = React.useState<I.Consumo[]>([]);

  // Modal para elegir el tipo de consumo
  const refTConsumo = React.useRef<HTMLDivElement>(null);
  const [modalConsumo, setModalConsumo] = React.useState(false);
  const [consumoSeleccionado, setConsumoSeleccionado] = React.useState("");

  // Ver comentario de consumo
  const [showCommentC, setshowCommentC] = React.useState(false);

  // Numeros de documentos
  const refNroDoc = React.useRef<HTMLDivElement>(null);
  const [modalNrosDocs, setModalNrosDocs] = React.useState(false);
  const [filterNroDoc, setFilterNroDoc] = React.useState<ConsumoData[]>([]);

  // Imprimir orden
  const refOrdenConsumo = React.useRef<HTMLDivElement>(null);
  const [modalOrdenConsumo, setModalOrdenConsumo] = React.useState(false);

  // Modal sereales
  const refSerialesUnitC = React.useRef<HTMLDivElement>(null);
  const [serialesUnitC, setSerialesUnitC] = React.useState(false);
  const refSerialesMasivoC = React.useRef<HTMLDivElement>(null);
  const [serialesMasivoC, setSerialesMasivoC] = React.useState(false);

  // Almacenar los valores de los input
  const [inputValuesC, setInputValuesC] = React.useState<{
    [key: number]: string[];
  }>({});

  // Seguimiento a la opcion seleccionada
  const [selectOptionC, setSelectOptionC] = React.useState<{
    [key: number]: string;
  }>({});

  // Manejar los cambios de los select
  const handleSelectChangeC = (i: number, value: string) => {
    setSelectOptionC((prev) => ({
      ...prev,
      [i]: value,
    }));

    // Si se selecciona la opción de "IMEI", agregamos 3 inputs, si no, 1
    setInputValuesC((prev) => ({
      ...prev,
      [i]: value === "IMEI" ? ["", "", ""] : [""],
    }));
  };

  // Verificar si el valor ya existe en otros campos
  const checkForDuplicatesC = (
    newValue: string,
    parentIndex: number,
    childIndex: number
  ) => {
    const allValues = Object.entries(inputValuesC)
      .flatMap(([key, values]) =>
        values.map((val, idx) => ({
          parentIndex: Number(key),
          childIndex: idx,
          value: val,
        }))
      )
      .filter(
        (item) =>
          !(item.parentIndex === parentIndex && item.childIndex === childIndex)
      )
      .map((item) => item.value);

    if (allValues.includes(newValue)) {
      toast.error("Este valor ya ha sido ingresado.");
      return true;
    }
    return false;
  };

  // Manejar los cambios de los inputs
  const handleInputChangeC = (i: number, inputIndex: number, value: string) => {
    // Verificar si el valor ya existe
    if (checkForDuplicatesC(value, i, inputIndex)) {
      return;
    }

    // Agregar el valor a la lista de valores
    setInputValuesC((prev) => ({
      ...prev,
      [i]: prev[i].map((v, idx) => (idx === inputIndex ? value : v)),
    }));
  };

  // Cerrar Modal sereales
  const closeModalSerialesUnitariosC = () => {
    setSerialesUnitC(false);
    setInputValuesC({});
    setSelectOptionC({});
  };

  const handleModalOConsumo = () => setModalOrdenConsumo(!modalOrdenConsumo);

  const seleccionarOdenConsumo = (newOrden: string) => {
    toast.info(`Imprimiendo ${newOrden}`);
    setModalOrdenConsumo(false);
  };

  // Modal numeros de documentos
  const handleSelectNroDoc = () => setModalNrosDocs(!modalNrosDocs);

  const filtrarNroDocConsumo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();

    if (value) {
      const filteredNroDoc = Consumos.filter((doc) =>
        doc.nroDocumento.toLowerCase().includes(value)
      );

      setFilterNroDoc(filteredNroDoc);
    } else {
      setFilterNroDoc(Consumos);
    }
  };

  const seleccionarNroDocConsumo = (doc: ConsumoData) => {
    setFormConsumo((prev) => ({
      ...prev,
      consumoNroDocumento: doc.nroDocumento,
      consumoMarcaProd: doc.marca,
      consumoProd: doc.nombreProducto,
      consumoColorProd: doc.color,
      consumoUMProd: doc.unidadMedida,
      consumoLote: doc.consumoLote,
      consumoFechaVigencia: doc.consumoFechaVigencia,
      consumoCant: doc.consumoCant,
    }));
    setModalNrosDocs(false);
  };

  const blurNroDocConsumo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!filterNroDoc.some((doc) => doc.nroDocumento === value)) {
      setFormConsumo({
        ...formConsumo,
        consumoNroDocumento: "",
      });
    } else {
      setFormConsumo({
        ...formConsumo,
        consumoNroDocumento: value,
      });
    }

    setFilterNroDoc(Consumos);
  };

  // Ver/Ocultar comentario
  const verComentC = () => setshowCommentC(!showCommentC);

  // Abri/cerrar modal de elegir tipo de consumo
  const showModalTipoConsumo = () => setModalConsumo(!modalConsumo);

  // Cambiar tipo de consumo
  const changeTipoConsumo = (newType: string) => {
    setConsumoSeleccionado(newType);
    setFormConsumo({
      ...initConsumo,
      consumoTipo: newType,
    });
  };

  // Cancelar consumo
  const cancelarConsumo = () => {
    setLoading(true);
    setTimeout(() => {
      setConsumos([]);
      setLoading(false);
    }, 200);
  };

  // Ver si el click fue fuera
  useOutsideClick(refTConsumo, () => setModalConsumo(false));
  useOutsideClick(refNroDoc, () => setModalNrosDocs(false));
  useOutsideClick(refSerialesUnitC, () => {
    setSerialesUnitC(false);
    setInputValuesC({});
    setSelectOptionC({});
  });
  useOutsideClick(refSerialesMasivoC, () => setSerialesMasivoC(false));

  const handleSerialesMasivosC = () => setSerialesMasivoC(!serialesMasivoC);

  // Cambiar tipo de sereal
  const changeTipoSereal = (newType: number) => {
    setFormConsumo((prev) => ({ ...prev, consumoTipoSereal: newType }));
  };

  // Descargar excel con para llenar los seriales de los productos consumidos
  const descargarExcelSerialesMasivosC = async () => {
    const columns = [
      { header: "SKU Producto", key: "sku", width: 32 },
      { header: "Código", key: "codigo", width: 15 },
      { header: "Serial", key: "serial", width: 15 },
      { header: "IMEI1", key: "imei1", width: 15 },
      { header: "IMEI2", key: "imei2", width: 15 },
    ];

    // Generamos los datos para cada filta segun la cantidad consumida
    const data = Array.from(
      { length: formConsumo.consumoCant },
      (_, index) => ({
        sku: formConsumo.consumoProd || `SKU-${index + 1}`,
        codigo: `C-${index + 1}`,
        serial: "",
        imei1: "",
        imei2: "",
      })
    );

    // Llamamos a la funcion de descarga de excel
    await exportToExcel(data, columns, "SerialesProductosConsumidos");
  };

  // Agregar seriales
  const agregarSerialesUnitariasC = async () => {
    // Validar que la cantidad ingresada sea mayor a 0
    if (formConsumo.consumoCant <= 0) {
      toast.warning("La cantidad debe ser mayor a 0");
      return;
    }

    // Si es mayor a 10 es masivo
    if (formConsumo.consumoCant > 10) {
      toast.info("Descargando excel de seriales");
      await descargarExcelSerialesMasivosC();
      setSerialesMasivoC(true);
      return;
    }

    setSerialesUnitC(true);
  };

  // Capturamos los inputs
  const changeFormCons = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "consumoCant") {
      // Permitimos decimales
      const cant = parseFloat(value);

      // Si no es numero o esta vacio no hacemos nada
      if (isNaN(cant) && value !== "") return;

      // Si la cantidad es mayor a 10 será serial masivo
      setFormConsumo({
        ...formConsumo,
        consumoCant: value === "" ? 0 : cant,
        consumoTipoSereal: cant > 10 ? 2 : 1,
      });
    } else {
      setFormConsumo({ ...formConsumo, [name]: value });
    }

    if (name === "consumoNroDocumento") {
      // Ejecutamos el filtro de nro de documentos
      filtrarNroDocConsumo(e);
    }
  };

  // Crear un Consumo
  const submitFormCons = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConsumoIsPosting(true);

    // Agregamos un consumo al arreglo
    setTimeout(() => {
      console.log(formConsumo);
      setSerialesMasivoC(false);
      setSerialesUnitC(false);
      setConsumoIsPosting(false);
      setConsumos((prev) => [...prev, formConsumo]);
      toast.success("Consumo agregado exitosamente");
    }, 1000);

    // Limpiamos el formulario
    setFormConsumo(initConsumo);
  };

  // Guardar inventario de consumo
  const guardarConsumo = () => {
    setConsumoSaved(true);
    setTimeout(() => {
      setConsumoSaved(false);
      setModalOrdenConsumo(true);
      toast.success("Consumos guardados correctamente");
    }, 1000);
  };

  // Agregamos la funcion del click
  React.useEffect(() => {
    setFilterNroDoc(Consumos);
  }, []);

  // =============================================================== Toma Inventario ===============================================================
  const initTInv = {
    inventId: Date.now(),
    inventProd: "",
    inventObs: "",
    inventUMedida: "",
    inventSSistema: 0,
    inventSReal: 0,
  };

  const refVariantes = React.useRef<HTMLDivElement>(null);
  const refMImpTI = React.useRef<HTMLDivElement>(null);
  const [savingTInventario, setSavingTInventario] = React.useState(false);
  const [savingItemInventario, setSavingItemInventario] = React.useState(false);

  // Arreglo de productos filtrados
  const [filterVarTI, setFilterVarTI] = React.useState<Variante[]>([]);
  // Formulario
  const [formTInv, setFormTInv] = React.useState<TInventario>(initTInv);
  // Arreglo de inventarios
  const [inventarios, setInventarios] = React.useState<TInventario[]>([]);
  // Modal de importar
  const [modalImportar, setModalImportar] = React.useState(false);
  // Importar Plantilla
  const [importarPlantilla, setImportarPlantilla] = React.useState(false);
  // Ver resumen
  const [verResumen, setVerResumen] = React.useState(false);
  // Ver detalles
  const [deatallesExist, setDetallesExist] = React.useState(0);
  // Fecha de inicio vacia
  const [fechaInicio, setFechaInicio] = React.useState("");
  // Modal Cancelar
  const [modalCancelar, setModalCancelar] = React.useState(false);
  // total de las cantidades ingresadas
  const [totales, setTotales] = React.useState<Record<string, number>>({});
  // Show obs
  const [showObs, setShowObs] = React.useState(false);

  // Show obs
  const handleShowObs = () => setShowObs(!showObs);

  // Seleccionar producto filtrado
  const selectProdTInventario = (
    newName: string,
    newSReal: number,
    newUMedida: string
  ) => {
    // Lo agregamos al formulario
    setFormTInv((prev) => ({
      ...prev,
      inventProd: newName,
      inventSReal: newSReal,
      inventUMedida: newUMedida,
    }));

    // Limpiamos
    setFilterVarTI([]);
  };

  // Abrir importar plantilla
  const openImpPlantilla = () => {
    setImportarPlantilla(true);
    setModalImportar(false);
  };

  // Cerrar importar plantilla
  const closeImpPlantilla = () => {
    setImportarPlantilla(false);
  };

  // Abrir modal cancelar
  const handleOpenCancelar = () => setModalCancelar(true);

  // Cerrar modal cancelar
  const handleCloseCancelar = () => setModalCancelar(false);

  // Confirmar cancelar
  const handleConfirmCancelar = () => {
    // Limpiara el arreglo
    setInventarios([]);

    // Eliminara los detalles
    localStorage.removeItem("detalles");

    // Eliminamos la hora
    localStorage.removeItem("fecha");

    // Ver resumen a false
    setVerResumen(false);

    // Cerramos el modal
    handleCloseCancelar();
  };

  // Funcion para la fecha en formato PM y AM
  const guardarFecha = () => {
    // Definimos el formato
    const formato = "DD/MM/YYYY hh:mm A";

    // Obtenemos la fecha actual
    const fechaFormateada = moment().format(formato);

    // Guardamo
    localStorage.setItem("fecha", fechaFormateada);
  };

  // Funcion para ver si existen detalles en el localeStorage
  const verDetalles = () => {
    // Otenemos los detalles
    const detalles = localStorage.getItem("detalles");

    // Si existen detalles
    if (detalles) {
      // Parsemos los detalles
      const parseDetails = JSON.parse(detalles);

      // Seteamos los details
      setDetallesExist(parseDetails.length);
      return detalles;
    }
    // Si no existen detalles
    setDetallesExist(0);
    return false;
  };

  // Mostrar/cerrar modal de importar
  const handleImportar = () => setModalImportar(!modalImportar);

  // Cargar detalles del local storage
  const cargarDetalles = () => {
    // Obtenemos los detalles
    const details = verDetalles();

    // Si existen detalles
    if (details) {
      // Cargar detalles
      const detalles = JSON.parse(details);

      // Agregar detalles al arreglo
      detalles.forEach((detalle: TInventario) => {
        // Agregar detalle
        setInventarios((prevInventarios) => [...prevInventarios, detalle]);
      });

      // Eliminamos los detalles por que ya los cargamos
      localStorage.removeItem("detalles");

      // Mostramos el mensaje
      toast.success("Detalles recuperados exitosamente");
      return;
    }
    // Si no hay detalles mostramos el mensaje
    toast.info("No hay detalles para mostrar");
  };

  // Continuar mas tarde
  const continuarMasTarde = () => {
    // Veremos si hay detalles guardados en el local storage
    const detalles = localStorage.getItem("detalles");

    // Si hay detalles, lo eliminamos y guardamos el nuevo detalle
    if (detalles) {
      // Borramos los detalles almacenado
      localStorage.removeItem("detalles");

      // Guardamos el nuevo detalle
      localStorage.setItem("detalles", JSON.stringify(inventarios));
    } else {
      // Si no hay detalles, guardamos el inventario
      localStorage.setItem("detalles", JSON.stringify(inventarios));
    }

    // Mostramos el mensaje
    toast.success("Inventario guardado exitosamente");

    // Limpiamos el arreglo de inventarios
    setInventarios([]);
  };

  // Ver resumen
  const verResumenInv = () => setVerResumen(!verResumen);

  // Filtrar Variantes de Productos
  const filtrarVariantes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const variantesFiltered = Products.flatMap((prod) =>
      prod.variantes.filter((variante) =>
        variante.nombreVariante.toLowerCase().includes(value.toLowerCase())
      )
    );

    setFormTInv((prev) => ({
      ...prev,
      inventProd: value,
    }));
    // Seteamos el filtro
    setFilterVarTI(variantesFiltered);
  };

  // Si se hace click fuera se limpia el arreglo
  const outSideClickVariantes = (e: MouseEvent) => {
    if (
      refVariantes.current &&
      !refVariantes.current.contains(e.target as Node)
    ) {
      setFilterVarTI([]);
    }
  };

  const outSideClickMImpTI = (e: MouseEvent) => {
    if (refMImpTI.current && !refMImpTI.current.contains(e.target as Node)) {
      setModalImportar(false);
    }
  };

  // Capturar los cambios de los inputs
  const changeFormInv = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Si es inventSSistema
    if (name === "inventSSistema") {
      // Reemplazar el 0
      setFormTInv((prev) => ({
        ...prev,
        [name]: prev.inventSSistema === 0 ? Number(value) : Number(value),
      }));
    } else if (name === "inventProd") {
      filtrarVariantes(e);
    } else {
      setFormTInv({ ...formTInv, [name]: value });
    }
  };

  // Enviar el formulario
  const submitFormInv = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // La cantidad no sea menor a 0
    if (formTInv.inventSSistema <= 0) {
      toast.warning("La cantidad debe ser mayor a 0");
      return;
    }

    // La cantidad no puede ser mayor a la del producto
    if (formTInv.inventSSistema > formTInv.inventSReal) {
      toast.warning("La cantidad no puede ser mayor a la del producto");
      return;
    }

    setSavingItemInventario(true);

    // Agregamos un inventario al arreglo
    setTimeout(() => {
      console.log(formTInv);
      setFormTInv(initTInv);
      setVerResumen(false);
      setInventarios([...inventarios, formTInv]);
      setSavingItemInventario(false);
      toast.success("Inventario agregado exitosamente");
    }, 1000);
  };

  const guardarInventario = () => {
    setSavingTInventario(true);

    setTimeout(() => {
      setInventarios([]);
      setSavingTInventario(false);
      toast.success("Inventario guardado exitosamente");
    }, 1000);
  };

  React.useEffect(() => {
    document.addEventListener("click", outSideClickVariantes);
    document.addEventListener("click", outSideClickMImpTI);
    return () => {
      document.removeEventListener("click", outSideClickVariantes);
      document.removeEventListener("click", outSideClickMImpTI);
    };
  }, []);

  React.useEffect(() => {
    // Obtenemos la fecha
    const fecha = localStorage.getItem("fecha");

    // Si hay fecha la guardamos
    if (fecha) {
      setFechaInicio(fecha);
    } else {
      // Si no hay fecha, guardas la fecha
      guardarFecha();
      setFechaInicio(localStorage.getItem("fecha") || "");
    }
  }, []);

  // Miramos la cantidad de detalles almacenados
  React.useEffect(() => {
    verDetalles();
  }, [inventarios]);

  // Calculamos el total
  React.useEffect(() => {
    // Recorremos el arreglo de inventarios
    const nuevosTotales = inventarios.reduce((acc, item) => {
      acc[item.inventProd] =
        (acc[item.inventProd] || 0) + Number(item.inventSSistema);
      return acc;
    }, {} as Record<string, number>);
    setTotales(nuevosTotales);
  }, [inventarios]);

  // ============== HISTORIAL DE MOVIMIENTOS ==============
  const initMovimientos = {
    HMId: Date.now(),
    HMProducto: "",
    HMEstado: "",
    HMTipoDocumento: "",
    HMTipoConsumo: "",
    HMUnidadMedida: "",
    HMCantidad: "",
    HMConsumoDesde: "",
    HMConsumoHasta: "",
  };

  // Ref
  const RefHMEstado = React.useRef<HTMLDivElement>(null);
  const RefHMTDoc = React.useRef<HTMLDivElement>(null);
  const RefHMTConsumo = React.useRef<HTMLDivElement>(null);
  const RefModalPagMov = React.useRef<HTMLDivElement>(null);

  // Estado para almacenar la data
  const [movimientos, setMovimientos] = React.useState<HistMov[]>([]);

  // Formulario de Historial de Movimientos
  const [formHM, setFormHM] = React.useState<I.HMovimiento>(initMovimientos);
  // Filtrados
  const [HMEstFilter, setHMEstFilter] = React.useState<TDocumento[]>([]);
  const [HMTDocFilter, setHMTDocFilter] = React.useState<Documento[]>([]);
  const [HMConsumoFilter, setHMConsumoFilter] = React.useState<Documento[]>([]);
  // Guardamos el id de los filtrados
  const [HEIdEstado, setHEIdEstado] = React.useState<number | null>(null);
  // Cantidad de movimientos por pagina
  const [movPerPage, setMovPerPage] = React.useState(10);
  // Modal de paginacion
  const [modalPagMov, setModalPagMov] = React.useState(false);
  // Pagina actual
  const [curPageM, setCurPageM] = React.useState(1);
  // Total de paginas
  const [totalMovPages, settotalMovPages] = React.useState(0);
  // Movimientos paginados
  const [movPaginated, setMovPaginated] = React.useState<HistMov[]>([]);
  // Numero maximo de botones de paginacion
  const maxButtonsMov = 5;
  // Pagina de inicio
  const pageStarMov = Math.max(1, curPageM - Math.floor(maxButtonsMov / 2));
  // Pagina de fin
  const pageEndMov = Math.min(totalMovPages, pageStarMov + maxButtonsMov - 1);
  // Modal seriales unitarios
  const [modalSU, setModalSU] = React.useState<number | null>(null);
  // Modal seriales masivos
  const [modalSM, setModalSM] = React.useState<number | null>(null);
  // Capturar los movimientos seleccionados
  const [selectedMovs, setSelectedMovs] = React.useState<number[]>([]);
  // Capturar todos los movimientos
  const [isAllSelected, setIsAllSelected] = React.useState(false);

  // Abrir/cerrar modal seriales unitarios
  const showModalSU = (rowId: number) => setModalSU(rowId);
  const closeModalSU = () => setModalSU(null);

  // Abrir/cerrar modal seriales masivos
  const showModalSM = (rowId: number) => setModalSM(rowId);
  const closeModalSM = () => setModalSM(null);

  // Abrir/cerrar modal de paginacion
  const showModalPagMov = () => setModalPagMov(!modalPagMov);

  // Funcion para cambiar la cantidad de movimientos por pagina
  const changeMovPerPage = (newPerPage: number) => {
    setMovPerPage(newPerPage);
    setModalPagMov(false);
  };

  // Funcion para cambiar de pagina
  const changeCurPageM = (newPage: number) => setCurPageM(newPage);

  // Funcion para calcular el total de paginas
  const calctotalMovPagesHM = () => {
    const total = Math.ceil(movimientos.length / movPerPage);
    settotalMovPages(total);
  };

  // Función para actualizar los movimientos paginados
  const updateMovPaginated = () => {
    const paginated = movimientos.slice(
      (curPageM - 1) * movPerPage,
      curPageM * movPerPage
    );
    setMovPaginated(paginated);
  };

  // Filtrar estado miestras se escribe
  const FiltrarEstado = (estado: string) => {
    // Filtramos a medida que escribe
    const HMEstado = TDocumentos.filter((doc) =>
      doc.nombreTDoc.toLowerCase().includes(estado.toLowerCase())
    );

    // Seteamos
    setHMEstFilter(HMEstado);
  };

  // Seleccionamos el estado
  const SelectMov = (newName: string, newId: number) => {
    // Actualizamos el formulario
    setFormHM((prev) => ({ ...prev, HMEstado: newName }));

    // Guardamos el id
    setHEIdEstado(newId);

    // Limpiamos el arreglo
    setHMEstFilter([]);
    setHMTDocFilter([]);
    setHMConsumoFilter([]);

    // Limpiamos el formulario
    setFormHM((prev) => ({ ...prev, HMTipoDocumento: "", HMTipoConsumo: "" }));
  };

  // Filtrar Tipo de documento mientras se escribe
  const FiltrarTipoDoc = (tipoDoc: string) => {
    // Vemos si hay un id de estado
    if (HEIdEstado === 1) {
      // Filtramos a medida que escribe
      const HMTDoc = Documentos.filter(
        (doc) =>
          doc.idTDoc === HEIdEstado &&
          doc.nombreDocumeto.toLowerCase().includes(tipoDoc.toLowerCase())
      );

      // Seteamos
      setHMTDocFilter(HMTDoc);
    } else if (HEIdEstado === 2) {
      // Filtramos a medida que escribe
      const HMTDoc = Documentos.filter(
        (doc) =>
          doc.idTDoc === 1 &&
          doc.nombreDocumeto.toLowerCase().includes(tipoDoc.toLowerCase())
      );

      // Seteamos
      setHMTDocFilter(HMTDoc);
    } else {
      // Seteamos
      setHMTDocFilter([]);
    }
  };

  // Filtrar tipo de consumo mientras se escribe
  const FiltrarTipoConsumo = (tipoConsumo: string) => {
    // Vemos si hay un id de estado
    if (HEIdEstado) {
      // Filtramos a medida que escribe
      const HMTDoc = Documentos.filter(
        (doc) =>
          doc.idTDoc === HEIdEstado &&
          doc.nombreDocumeto.toLowerCase().includes(tipoConsumo.toLowerCase())
      );

      // Seteamos
      setHMConsumoFilter(HMTDoc);
    }
  };

  // Seleccionamos el tipo de documento
  const SeleccionarTipoDoc = (newName: string) => {
    // Actualizamos el formulario
    setFormHM((prev) => ({ ...prev, HMTipoDocumento: newName }));

    // Limpiamos el arreglo
    setHMTDocFilter([]);
  };

  const SeleccionarTipoConsumo = (newName: string) => {
    // Actualizamos el formulario
    setFormHM((prev) => ({ ...prev, HMTipoConsumo: newName }));

    // Limpiamos
    setHMConsumoFilter([]);
  };

  // Click fuera se limpia el arreglo filtrado de estados
  const clickOutsideHMEstados = (e: MouseEvent) => {
    if (
      RefHMEstado.current &&
      !RefHMEstado.current.contains(e.target as Node)
    ) {
      setHMEstFilter([]);
    }
  };

  // Click fuera se limpia el arreglo filtrado de tipo de documento
  const clickOutsideHMTDoc = (e: MouseEvent) => {
    if (RefHMTDoc.current && !RefHMTDoc.current.contains(e.target as Node)) {
      setHMTDocFilter([]);
    }
  };

  // Click fuera se cierra el modal de paginacion
  const clickOutsideModalPag = (e: MouseEvent) => {
    if (
      RefModalPagMov.current &&
      !RefModalPagMov.current.contains(e.target as Node)
    ) {
      setModalPagMov(false);
    }
  };

  // Funcion del checkbox masivo
  const handleSelectAllMovimientos = () => {
    if (isAllSelected) {
      setSelectedMovs([]);
    } else {
      // Seleccionamos todos los movimientos
      const allMovsId = movimientos.map((mov) => mov.HMId);
      setSelectedMovs(allMovsId);
    }

    setIsAllSelected(!isAllSelected);
  };

  // Capturar los movimientos seleccionados
  const handleCheckboxChange = (movId: number) => {
    setSelectedMovs((prevSelected) => {
      if (prevSelected.includes(movId)) {
        return prevSelected.filter((id) => id !== movId);
      } else {
        return [...prevSelected, movId];
      }
    });
  };

  // Funcion para exportar a csv los movimientos elegidos
  const exportMovsToExcel = () => {
    const movsToExport = movimientos.filter((mov) =>
      selectedMovs.includes(mov.HMId)
    );

    const columns: Partial<ExcelJS.Column>[] = [
      { header: "SKU", key: "HMProdSKU", width: 15 },
      { header: "Familia", key: "HMProdFam", width: 15 },
      { header: "Marca", key: "HMProdMarca", width: 15 },
      { header: "Producto", key: "HMProd", width: 35 },
      { header: "Unidad", key: "HMProdUnidad", width: 15 },
      { header: "Cantidad", key: "HMProdCant", width: 15 },
      { header: "Tipo de Movimiento", key: "HMProdTipoMov", width: 22 },
      { header: "Tipo de Documento", key: "HMProdTipoDoc", width: 22 },
      { header: "Número de Documento", key: "HMProdNumDoc", width: 22 },
      { header: "Monto", key: "HMProdMonto", width: 15 },
    ];

    exportToExcel<HistMov>(movsToExport, columns, "HistorialMovimientos");

    // Limpiamos los movimientos seleccionados
    setSelectedMovs([]);
    setIsAllSelected(false);
  };

  // Actualizar el formulario
  const changeFormHM = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    // Ejecutamos la funcion de filtrado de estado
    if (id === "HMEstado") {
      FiltrarEstado(value);
    } else if (id === "HMTipoDocumento") {
      FiltrarTipoDoc(value);
    } else if (id === "HMTipoConsumo") {
      FiltrarTipoConsumo(value);
    }

    // Validar solo números y decimales para el campo HMCantidad
    if (id === "HMCantidad") {
      // Eliminar caracteres no numéricos excepto el punto decimal
      let numericValue = value.replace(/[^0-9.]/g, "");

      // Permitir solo un punto decimal
      const parts = numericValue.split(".");
      if (parts.length > 2) {
        numericValue = parts[0] + "." + parts.slice(1).join("");
      }

      setFormHM((prev) => ({
        ...prev,
        [id]: numericValue,
      }));
    } else {
      setFormHM((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  // Enviar formulario
  const handleSubmitHM = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // Funcion para cargar la data
  const cargarData = () => {
    // Iniciamos con la peticion
    setLoading(true);

    // Llamamos a la API
    setTimeout(() => {
      setMovimientos(HistMovs);
      setLoading(false);
    }, 1000);
  };

  // Cargamos la data
  React.useEffect(() => {
    cargarData();
  }, []);

  // Calculamos el total de paginas y actualizamos
  React.useEffect(() => {
    calctotalMovPagesHM();
    updateMovPaginated();
  }, [movimientos, movPerPage, totalMovPages, curPageM]);

  // Clicks fuera de los compoentes
  React.useEffect(() => {
    document.addEventListener("click", clickOutsideHMEstados);
    document.addEventListener("click", clickOutsideHMTDoc);
    document.addEventListener("click", clickOutsideModalPag);
    return () => {
      document.removeEventListener("click", clickOutsideHMEstados);
      document.removeEventListener("click", clickOutsideHMTDoc);
      document.removeEventListener("click", clickOutsideModalPag);
    };
  }, []);

  // ============================================================ Matriz ============================================================
  const [matData, setMatData] = React.useState<HistMov[]>([]);

  // Paginado
  const [matPaginated, setMatPaginated] = React.useState<HistMov[]>([]);
  const RefModalPagMat = React.useRef<HTMLDivElement>(null);
  const [modalPagMat, setModalPagMat] = React.useState(false);
  const [matPerPage, setMatPerPage] = React.useState(10);
  const [totalMatPages, setTotalMatPages] = React.useState(0);
  const [curPageMat, setCurPageMat] = React.useState(1);
  const maxButtonsMat = 5;
  const pageStartMat = Math.max(1, curPageMat - Math.floor(maxButtonsMat / 2));
  const pageEndMat = Math.min(totalMatPages, pageStartMat + maxButtonsMat - 1);
  // Matrices seleccionadas
  const [selectedMat, setSelectedMat] = React.useState<number[]>([]);
  // Matriz masivo
  const [matrizAllSelected, setMatrizAllSelected] = React.useState(false);

  // Buscador
  const [searchMat, setSearchMat] = React.useState("");

  // Función para buscar en todas las matrices
  const handleSearchMat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMat(e.target.value.toLowerCase());
  };

  // Abrir/cerrar modal de paginacion
  const handleModalPagMat = () => setModalPagMat(!modalPagMat);

  // Cambiar la cantidad de items por pagina
  const changeMatPerPage = (newPerPage: number) => {
    setMatPerPage(newPerPage);
    setModalPagMat(false);
  };

  // Cambiar de pagina
  const changeCurPageMat = (newPage: number) => setCurPageMat(newPage);

  // Calcular todal de items a mostrar
  const totalMovPerPagesMat = () => {
    const total = Math.ceil(matData.length / matPerPage);
    setTotalMatPages(total);
  };

  // Función para actualizar los datos paginados con filtro de búsqueda
  const updMatPaginated = () => {
    let filteredData = matData;

    // Si se esta buscando filtrar
    if (searchMat) {
      filteredData = matData.filter((matriz) => {
        return (
          matriz.HMProdSKU.toLowerCase().includes(searchMat) ||
          matriz.HMProd.toLowerCase().includes(searchMat) ||
          matriz.HMProdMarca.toLowerCase().includes(searchMat) ||
          matriz.HMCantEntradas.toString().includes(searchMat) ||
          matriz.HMCantSalidas.toString().includes(searchMat) ||
          matriz.HMCantMermas.toString().includes(searchMat) ||
          matriz.HMCantDestruidas.toString().includes(searchMat) ||
          matriz.HMCantSeparadas.toString().includes(searchMat) ||
          matriz.HMStockFinal.toString().includes(searchMat) ||
          matriz.HMStockSeguridad.toString().includes(searchMat) ||
          matriz.HMStockInventario.toString().includes(searchMat)
        );
      });
    }

    // calculamos los items a mostrar por pagina,
    const paginated = filteredData.slice(
      (curPageMat - 1) * matPerPage,
      curPageMat * matPerPage
    );

    setMatPaginated(paginated);
  };

  // Funcion para cargar la data
  const cargarDataMat = () => {
    setLoading(true);

    setTimeout(() => {
      setMatData(HistMovs);
      setLoading(false);
    }, 1000);
  };

  // Capturar todas las matrices
  const handleSelectAllMatrices = () => {
    if (matrizAllSelected) {
      setSelectedMat([]);
    } else {
      // Seleccionamos todas las matrices
      const allMatricesId = matData.map((matriz) => matriz.HMId);
      setSelectedMat(allMatricesId);
    }

    setMatrizAllSelected(!matrizAllSelected);
  };

  // Capturar las matrices seleccionadas
  const handleCheckboxChangeMatriz = (movId: number) => {
    setSelectedMat((prevSelected) => {
      if (prevSelected.includes(movId)) {
        return prevSelected.filter((id) => id !== movId);
      } else {
        return [...prevSelected, movId];
      }
    });
  };

  // Funcion para exportar a csv las matrices elegidas
  const exportMovsToExcelMatrices = () => {
    const matToExport = matData.filter((mov) => selectedMat.includes(mov.HMId));

    const columns: Partial<ExcelJS.Column>[] = [
      { header: "SKU", key: "HMProdSKU", width: 15 },
      { header: "Almacenes", key: "HMProdFam", width: 15 },
      { header: "Pasillos", key: "HMProdMarca", width: 15 },
      { header: "Niveles", key: "HMProd", width: 35 },
      { header: "Secciones", key: "HMProdUnidad", width: 15 },
      { header: "Lotes", key: "HMProdCant", width: 15 },
      { header: "Producto", key: "HMProdTipoMov", width: 22 },
      { header: "Marca", key: "HMProdTipoDoc", width: 22 },
      { header: "Costo de Producto", key: "HMProdNumDoc", width: 22 },
      { header: "Entradas", key: "HMProdMonto", width: 15 },
      { header: "Salidas", key: "HMProdMonto", width: 15 },
      { header: "Mermas", key: "HMProdMonto", width: 15 },
      { header: "Destruidos", key: "HMProdMonto", width: 15 },
      { header: "Separados", key: "HMProdMonto", width: 15 },
      { header: "Stock Final", key: "HMProdMonto", width: 15 },
      { header: "Stock Seguridad", key: "HMProdMonto", width: 15 },
      { header: "Stock Inventario", key: "HMProdMonto", width: 15 },
    ];

    exportToExcel<HistMov>(matToExport, columns, "Matrices");

    setSelectedMat([]);
    setMatrizAllSelected(false);
  };

  // Cargamos la data
  React.useEffect(() => {
    cargarDataMat();
  }, []);

  // Calculamos el total de paginas y actualizamos
  React.useEffect(() => {
    totalMovPerPagesMat();
    updMatPaginated();
  }, [matData, matPerPage, totalMatPages, curPageMat]);

  // Si se busca se actualiza los datos paginados
  React.useEffect(() => {
    setCurPageMat(1);
    updMatPaginated();
  }, [searchMat]);

  // ====================================================== Lista de Ordenes ======================================================
  const valuesDespachos = {
    gestionDespacho: "",
    conductorDespacho: "",
    auxiliarDespacho: "",
    deptDespacho: "",
    provDespacho: "",
    distDespacho: "",
    placaDespacho: "",
    TVehiculo: "",
    cantBultosDespacho: "",
    pesoTDespacho: "",
    proveedoresDespacho: "",
    tipoProveedorDespacho: "",
  };

  // Arreglo de campos filtrados
  const [gestiones, setGestiones] = React.useState<usuario[]>([]);
  const [conductores, setConductores] = React.useState<Conductor[]>([]);
  const [auxiliares, setAuxiliares] = React.useState<Conductor[]>([]);
  const [departamentos, setDepartamentos] = React.useState<Departamento[]>([]);
  const [provincias, setProvincias] = React.useState<Provincia[]>([]);
  const [distritos, setDistritos] = React.useState<Distrito[]>([]);
  const [placas, setPlacas] = React.useState<Transp[]>([]);
  const [proveedores, setProveedores] = React.useState<usuario[]>([]);
  const [tipoProvs, setTiposProvs] = React.useState<Transp[]>([]);

  // Form
  const [formDesp, setFormDesp] =
    React.useState<formValuesDespacho>(valuesDespachos);

  // Modals y Select
  const refVerDespacho = React.useRef<HTMLDivElement>(null);
  const [verDespacho, setVerDespacho] = React.useState(false);

  const refSelectGestion = React.useRef<HTMLDivElement>(null);
  const [selectGestion, setSelectGestion] = React.useState(false);
  const [gestSelect, setGestSelect] = React.useState(false);

  const refSelectConductor = React.useRef<HTMLDivElement>(null);
  const [selectConductor, setSelectConductor] = React.useState(false);

  const refSelectPlaca = React.useRef<HTMLDivElement>(null);
  const [selectPlaca, setSelectPlaca] = React.useState(false);

  const refSelectAuxiliar = React.useRef<HTMLDivElement>(null);
  const [selectAux, setSelectAux] = React.useState(false);

  const refSelectDpt = React.useRef<HTMLDivElement>(null);
  const [selectDpt, setSelectDpt] = React.useState(false);

  const refSelectProv = React.useRef<HTMLDivElement>(null);
  const [selectProv, setSelectProv] = React.useState(false);

  const refSelectDist = React.useRef<HTMLDivElement>(null);
  const [selectDist, setSelectDist] = React.useState(false);

  const refSelectProve = React.useRef<HTMLDivElement>(null);
  const [selectProve, setSelectProve] = React.useState(false);

  const refTipoProveedor = React.useRef<HTMLDivElement>(null);
  const [selectTipoProv, setSelectTipoProv] = React.useState(false);

  const handleGestionSeleccionada = () => {
    setGestSelect(false);
    setFormDesp(valuesDespachos);
  };

  const handleAsignarDespacho = () => {
    setVerDespacho(!verDespacho);
    setFormDesp(valuesDespachos);
  };
  useOutsideClick(refVerDespacho, () => setVerDespacho(false));

  const handleSelectGestion = () => setSelectGestion(!selectGestion);
  useOutsideClick(refSelectGestion, () => setSelectGestion(false));

  const handleSelectConductor = () => setSelectConductor(!selectConductor);
  useOutsideClick(refSelectConductor, () => setSelectConductor(false));

  const handleSelectPlaca = () => setSelectPlaca(!selectPlaca);
  useOutsideClick(refSelectPlaca, () => setSelectPlaca(false));

  const handleSelectAuxiliar = () => setSelectAux(!selectAux);
  useOutsideClick(refSelectAuxiliar, () => setSelectAux(false));

  const handleSelectDpt = () => setSelectDpt(!selectDpt);
  useOutsideClick(refSelectDpt, () => setSelectDpt(false));

  const handleSelectProv = () => setSelectProv(!selectProv);
  useOutsideClick(refSelectProv, () => setSelectProv(false));

  const handleSelectDist = () => setSelectDist(!selectDist);
  useOutsideClick(refSelectDist, () => setSelectDist(false));

  const handleSelectProve = () => setSelectProve(!selectProve);
  useOutsideClick(refSelectProve, () => setSelectProve(false));

  const handleSelectTProvs = () => setSelectTipoProv(!selectTipoProv);
  useOutsideClick(refTipoProveedor, () => setSelectTipoProv(false));

  // Gestiones
  const seleccionarGestion = (
    newGestion: string,
    newTProv: string,
    newTServ: string
  ) => {
    setFormDesp({
      ...valuesDespachos,
      gestionDespacho: newGestion,
      proveedoresDespacho: newTProv,
      tipoProveedorDespacho: newTServ,
    });
    setSelectGestion(false);
    setGestSelect(true);
  };

  const GestionesFiltradas = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = gestiones.filter((gestion) =>
      gestion.razonSocialProveedor
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setGestiones(filtered);
  };

  const GestionBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const gestionName = e.target.value;
    if (!gestiones.some((gest) => gest.razonSocialProveedor === gestionName)) {
      setFormDesp({ ...formDesp, gestionDespacho: "" });
    }
  };

  // Proveedores
  const seleccionarProveedor = (newProv: string) => {
    setFormDesp({ ...formDesp, proveedoresDespacho: newProv });
    setSelectProve(false);
  };

  const ProveedoresFiltrados = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = proveedores.filter((prov) =>
        prov.razonSocialProveedor.toLowerCase().includes(query)
      );
      setProveedores(filtered);
    } else {
      setProveedores(usuarios);
    }
  };

  const ProveedoresBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const provName = e.target.value;
    if (!proveedores.some((prov) => prov.razonSocialProveedor === provName)) {
      setFormDesp({ ...formDesp, proveedoresDespacho: "" });
      setProveedores(usuarios);
    }
  };

  // Tipo de Proveedores
  const seleccionarTProv = (newTProv: string) => {
    setFormDesp({ ...formDesp, tipoProveedorDespacho: newTProv });
    setSelectTipoProv(false);
  };

  const TProvsFiltrados = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = tipoProvs.filter((tp) =>
        tp.name.toLowerCase().includes(query)
      );
      setTiposProvs(filtered);
    } else {
      setTiposProvs(TipoProveedores);
    }
  };

  const TProvsBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const gestionName = e.target.value;
    if (!gestiones.some((gest) => gest.razonSocialProveedor === gestionName)) {
      setFormDesp({ ...formDesp, tipoProveedorDespacho: "" });
      setTiposProvs(TipoProveedores);
    }
  };

  // Seleccionar conductor
  const seleccionarConductor = (newConductor: string) => {
    setFormDesp({ ...formDesp, conductorDespacho: newConductor });
    setSelectConductor(false);
  };

  // Limpiar input si no se selecciona ninguno
  const ConductorBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const conductorName = e.target.value;
    if (!conductores.some((conductor) => conductor.name === conductorName)) {
      setFormDesp({ ...formDesp, conductorDespacho: "" });
      setConductores(Conductores);
    }
  };

  // Filtrar mientras se escribe en gestion
  const ConductoresFiltrados = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = Conductores.filter((gestion) =>
        gestion.name.toLowerCase().includes(query)
      );
      setConductores(filtered);
    } else {
      setConductores(Conductores);
    }
  };

  const seleccionarAuxiliar = (newAux: string) => {
    setFormDesp({ ...formDesp, auxiliarDespacho: newAux });
    setSelectAux(false);
  };

  // Filtrar mientras se escribe en gestion
  const AuxiliaresFiltrados = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = Auxiliares.filter((gestion) =>
        gestion.name.toLowerCase().includes(query)
      );
      setAuxiliares(filtered);
    } else {
      setAuxiliares(Auxiliares);
    }
  };

  const AuxiliarBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const auxiliarName = e.target.value;
    if (!auxiliares.some((aux) => aux.name === auxiliarName)) {
      setFormDesp({ ...formDesp, auxiliarDespacho: "" });
      setAuxiliares(Auxiliares);
    }
  };

  // Seleccionar placa
  const SeleccionarPlaca = (newPlaca: string) => {
    setFormDesp({ ...formDesp, placaDespacho: newPlaca });
    setSelectPlaca(false);
  };

  // Filtrar mientras se escribe en gestion
  const PlacasFiltradas = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = placas.filter((gestion) =>
        gestion.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setPlacas(filtered);
    } else {
      setPlacas(Placas);
    }
  };

  const PlacaBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const placaName = e.target.value;
    if (!placas.some((pl) => pl.name === placaName)) {
      setFormDesp({ ...formDesp, placaDespacho: "" });
      setPlacas(Placas);
    }
  };

  // Departamentos filtrados
  const DepartamentosFiltrados = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = Departamentos.filter((d) =>
      d.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDepartamentos(filtered);
  };

  // Manejar el departamento
  const SeleccionarDpt = (newId: number, newDept: string) => {
    // Buscar las provincias correspondientes
    const provs = Provincias?.filter((d) => d.idDep === newId);
    setProvincias(provs);

    // Actualizar el formulario y limpiar provincia y distrito
    setFormDesp({
      ...formDesp,
      deptDespacho: newDept,
      provDespacho: "",
      distDespacho: "",
    });

    setSelectDpt(false);
  };

  const DptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dptName = e.target.value;
    if (!departamentos.some((dpt) => dpt.name === dptName)) {
      setFormDesp({ ...formDesp, deptDespacho: "" });
    }
  };

  // Provincias filtradas
  const ProvinciasFiltradas = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = provincias.filter((p) =>
      p.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProvincias(filtered);
  };

  // Manejar provincia seleecionada
  const SeleccionarProv = (newId: number, newProv: string) => {
    // Buscar los distritos correspondientes
    const dists = Distritos?.filter((d) => d.idProv === newId);
    setDistritos(dists);

    // Actualizar el formulario y limpiar distrito
    setFormDesp({
      ...formDesp,
      provDespacho: newProv,
      distDespacho: "",
    });

    setSelectProv(false);
  };

  const ProvBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const provName = e.target.value;
    if (!provincias.some((prov) => prov.name === provName)) {
      setFormDesp({ ...formDesp, provDespacho: "" });
    }
  };

  // Distritos filtrados
  const DistritosFiltrados = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    const filtered = distritos.filter((d) =>
      d.name.toLowerCase().includes(query)
    );
    setDistritos(filtered);
  };

  // Manejar distrito seleccionado
  const SeleccionarDist = (newDist: string) => {
    setFormDesp({ ...formDesp, distDespacho: newDist });
    setSelectDist(false);
  };

  const DistBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const distName = e.target.value;
    if (!distritos.some((dist) => dist.name === distName)) {
      setFormDesp({ ...formDesp, distDespacho: "" });
    }
  };

  // Capturamos los input
  const changeFormDesp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormDesp({ ...formDesp, [id]: value });

    // Filtramos
    if (id === "gestionDespacho") {
      GestionesFiltradas(e);
    } else if (id === "conductorDespacho") {
      ConductoresFiltrados(e);
    } else if (id === "auxiliarDespacho") {
      AuxiliaresFiltrados(e);
    } else if (id === "placaDespacho") {
      PlacasFiltradas(e);
    } else if (id === "deptDespacho") {
      DepartamentosFiltrados(e);
    } else if (id === "provDespacho") {
      ProvinciasFiltradas(e);
    } else if (id === "distDespacho") {
      DistritosFiltrados(e);
    } else if (id === "proveedoresDespacho") {
      ProveedoresFiltrados(e);
    } else if (id === "tipoProveedorDespacho") {
      TProvsFiltrados(e);
    }
  };

  // Enviar formulario
  const submitFormDesp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formDesp);
    toast.success("Despacho creado con exito");
    setGestSelect(false);
    setFormDesp(valuesDespachos);
  };

  // Cargar los datos que seran filtrados
  const cargarDatos = () => {
    setGestiones(usuarios);
    setConductores(Conductores);
    setAuxiliares(Auxiliares);
    setPlacas(Placas);
    setDepartamentos(Departamentos);
    setProvincias(Provincias);
    setDistritos(Distritos);
    setProveedores(usuarios);
    setTiposProvs(TipoProveedores);
  };

  React.useEffect(() => {
    cargarDatos();
  }, [gestSelect, verDespacho]);

  // ==================================================== Paginacion de despachos/lista de ordenes ====================================================
  const [despachos, setDespachos] = React.useState<ListaOrden[]>([]);
  const [despFiltrados, setDespFiltrados] = React.useState<ListaOrden[]>([]);
  const [despPaginated, setDespPaginated] = React.useState<ListaOrden[]>([]);
  const refCantDesp = React.useRef<HTMLDivElement>(null);
  const [cantDespPag, setCantDespPag] = React.useState(10);
  const [modalCantDesp, setModalCantDesp] = React.useState(false);
  const [despPageNow, setDespPageNow] = React.useState(1);
  const [totalPagesDesp, setTotalPagesDesp] = React.useState(0);
  const maxBtnDesp = 5;
  const [searchDesp, setSearchDesp] = React.useState("");

  const capturarDespacho = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchDesp(e.target.value);
  };

  const pageStartDesp = Math.max(1, despPageNow - Math.floor(maxBtnDesp / 2));
  const pageEndDesp = Math.min(totalPagesDesp, pageStartDesp + maxBtnDesp - 1);

  const handleModalCantDesp = () => setModalCantDesp(!modalCantDesp);
  useOutsideClick(refCantDesp, () => setModalCantDesp(false));

  const cambiarCantDespachosPorPagina = (newPerPage: number) => {
    setCantDespPag(newPerPage);
    setDespPageNow(1);
    setModalCantDesp(false);
  };

  const cambiarPaginaDespacho = (newPage: number) => setDespPageNow(newPage);

  const calcularTotalPaginasDespachos = (filtered: ListaOrden[]) => {
    const total = Math.ceil(filtered.length / cantDespPag);
    setTotalPagesDesp(total);
  };

  const filtrarDespachos = () => {
    const filtered = despachos.filter(
      (dep) =>
        dep.LONroOrden.toLowerCase().includes(searchDesp.toLowerCase()) ||
        dep.LOCliente.toLowerCase().includes(searchDesp.toLowerCase()) ||
        dep.LODepartamento.toLowerCase().includes(searchDesp.toLowerCase()) ||
        dep.LOProvincia.toLowerCase().includes(searchDesp.toLowerCase()) ||
        dep.LODistrito.toLowerCase().includes(searchDesp.toLowerCase()) ||
        dep.LODireccion.toLowerCase().includes(searchDesp.toLowerCase())
    );
    setDespFiltrados(filtered);
    calcularTotalPaginasDespachos(filtered);
  };

  // Actualizar la paginacion
  const actualizarDespachosPaginados = () => {
    const paginated = despFiltrados.slice(
      (despPageNow - 1) * cantDespPag,
      despPageNow * cantDespPag
    );
    setDespPaginated(paginated);
  };

  // Llamamos los datos
  React.useEffect(() => {
    setLoading(true);

    // LLamamos a la "API"
    setTimeout(() => {
      setDespachos(ListaOrdenes);
      setLoading(false);
    }, 1000);
  }, []);

  // Recalculamos despues que el usuario busco un proveedor
  React.useEffect(() => {
    filtrarDespachos();
    calcularTotalPaginasDespachos(despFiltrados);
  }, [despachos, searchDesp, cantDespPag]);

  // Recalculamos despues de cambiar la cantidad de proveedores por pagina
  React.useEffect(() => {
    actualizarDespachosPaginados();
  }, [despFiltrados, cantDespPag, despPageNow]);

  return (
    <StockContext.Provider
      value={{
        // ============================================================= Lista de Ordenes =============================================================
        formDesp,
        submitFormDesp,
        changeFormDesp,
        refVerDespacho,
        verDespacho,
        handleAsignarDespacho,
        gestSelect,
        handleGestionSeleccionada,
        refSelectGestion,
        selectGestion,
        gestiones,
        seleccionarGestion,
        handleSelectGestion,
        GestionBlur,
        refSelectConductor,
        selectConductor,
        conductores,
        handleSelectConductor,
        seleccionarConductor,
        ConductorBlur,
        refSelectAuxiliar,
        selectAux,
        auxiliares,
        handleSelectAuxiliar,
        seleccionarAuxiliar,
        AuxiliarBlur,
        refSelectPlaca,
        selectPlaca,
        placas,
        handleSelectPlaca,
        SeleccionarPlaca,
        PlacaBlur,
        refSelectDpt,
        selectDpt,
        departamentos,
        handleSelectDpt,
        SeleccionarDpt,
        DptBlur,
        refSelectProv,
        selectProv,
        provincias,
        handleSelectProv,
        SeleccionarProv,
        ProvBlur,
        refSelectDist,
        selectDist,
        distritos,
        handleSelectDist,
        SeleccionarDist,
        DistBlur,
        refSelectProve,
        proveedores,
        selectProve,
        seleccionarProveedor,
        handleSelectProve,
        ProveedoresBlur,
        refTipoProveedor,
        tipoProvs,
        selectTipoProv,
        seleccionarTProv,
        handleSelectTProvs,
        TProvsBlur,
        // ======================================= Paginacion =======================================
        despachos,
        despPaginated,
        refCantDesp,
        cantDespPag,
        modalCantDesp,
        despPageNow,
        totalPagesDesp,
        pageStartDesp,
        pageEndDesp,
        searchDesp,
        maxBtnDesp,
        cambiarCantDespachosPorPagina,
        cambiarPaginaDespacho,
        capturarDespacho,
        handleModalCantDesp,

        // ============================================================ Recepciones =============================================================
        loading,
        refButtonDoc,
        recepciones,
        formRecep,
        modalDoc,
        totalNeto,
        verComentario,
        // Cambios de los select de sereales
        selectOption,
        handleSelectChangeR,
        // Cambios en los input de sereales
        inputValues,
        handleInputChangeR,
        // Modal Sereales
        refModalSerealesR,
        modalSerealesR,
        closeModalSerealesR,
        // Tipos
        modalTipo,
        filterTipo,
        selectTipoRecepcion,
        // Marcas
        modalMarca,
        filterMarca,
        selectMarcaRecepcion,
        // Productos
        modalProductos,
        filterProd,
        selectProductoRecepcion,
        changeCheckbox,
        cancelarRecepcion,
        verComentarioRecepcion,
        changeDoc,
        formatMoney,
        showModalDoc,
        setFormRecep,
        changeFormRecepcion,
        agregarCereales,
        handleKeyDown,
        submitRecepcion,
        handleSerialesMarivosR,
        refSerialesMasivosR,
        serialesMasivosR,
        guardarRecepciones,
        recepcionIsPosting,
        recepcionIsSaving,
        // ================================================================= Consumo =================================================================
        consumoSaved,
        consumoIsPosting,
        refTConsumo,
        refNroDoc,
        consumos,
        formConsumo,
        modalConsumo,
        showCommentC,
        consumoSeleccionado,
        refOrdenConsumo,
        modalOrdenConsumo,
        handleModalOConsumo,
        seleccionarOdenConsumo,
        // Numeros de documentos filtrados
        filterNroDoc,
        blurNroDocConsumo,
        handleSelectNroDoc,
        modalNrosDocs,
        seleccionarNroDocConsumo,
        cancelarConsumo,
        verComentC,
        setFormConsumo,
        showModalTipoConsumo,
        changeFormCons,
        submitFormCons,
        changeTipoSereal,
        changeTipoConsumo,
        agregarSerialesUnitariasC,
        handleInputChangeC,
        handleSelectChangeC,
        inputValuesC,
        selectOptionC,
        closeModalSerialesUnitariosC,
        refSerialesUnitC,
        serialesUnitC,
        handleSerialesMasivosC,
        refSerialesMasivoC,
        serialesMasivoC,
        guardarConsumo,

        // ============================================================ Toma de inventario ============================================================
        refVariantes,
        refMImpTI,
        fechaInicio,
        formTInv,
        inventarios,
        modalImportar,
        verResumen,
        deatallesExist,
        modalCancelar,
        totales,
        filterVarTI,
        showObs,
        importarPlantilla,
        openImpPlantilla,
        closeImpPlantilla,
        handleShowObs,
        selectProdTInventario,
        handleOpenCancelar,
        handleConfirmCancelar,
        handleCloseCancelar,
        handleImportar,
        cargarDetalles,
        verResumenInv,
        continuarMasTarde,
        changeFormInv,
        setFormTInv,
        submitFormInv,
        savingItemInventario,
        savingTInventario,
        guardarInventario,

        // ======================================================= Historial de movimientos =======================================================
        movimientos,
        RefHMEstado,
        RefHMTDoc,
        RefHMTConsumo,
        formHM,
        HMEstFilter,
        HMTDocFilter,
        HMConsumoFilter,
        HEIdEstado,
        changeFormHM,
        handleSubmitHM,
        SelectMov,
        SeleccionarTipoDoc,
        SeleccionarTipoConsumo,
        curPageM,
        totalMovPages,
        movPaginated,
        movPerPage,
        changeCurPageM,
        changeMovPerPage,
        maxButtonsMov,
        pageEndMov,
        pageStarMov,
        modalPagMov,
        RefModalPagMov,
        showModalPagMov,
        modalSM,
        showModalSM,
        closeModalSU,
        modalSU,
        showModalSU,
        closeModalSM,
        handleCheckboxChange,
        exportMovsToExcel,
        selectedMovs,
        isAllSelected,
        handleSelectAllMovimientos,

        // ================================================================= Matriz =================================================================
        searchMat,
        matData,
        matPaginated,
        RefModalPagMat,
        modalPagMat,
        matPerPage,
        totalMatPages,
        curPageMat,
        pageStartMat,
        pageEndMat,
        maxButtonsMat,
        changeCurPageMat,
        changeMatPerPage,
        updMatPaginated,
        handleModalPagMat,
        handleSearchMat,
        matrizAllSelected,
        selectedMat,
        handleSelectAllMatrices,
        exportMovsToExcelMatrices,
        handleCheckboxChangeMatriz,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};
