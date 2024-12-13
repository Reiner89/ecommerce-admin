import {
  createContext,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { useOutsideClick } from "../../Helper/useOutSideClick";
import moment from "moment";
import * as RG from "../../Hooks/useRemisionGuias";
import * as P from "../../Data/Peru";
import * as B from "../../Data/BoletaFactura";
import { toast } from "sonner";

export const RemiGContext = createContext<RG.RemGIntCTX>({} as RG.RemGIntCTX);

export const RemisionGuiasProvider = ({ children }: PropsWithChildren) => {
  // Factura Nacional
  const initValuesFNac: RG.FN = {
    FNVentaInterna: "",
    FNTipoDoc: "",
    FNNroDoc: "",
    FNRazonSocial: "",
    FNDireccion: "",
    FNDepartamento: "",
    FNProvincia: "",
    FNDistrito: "",
    FNEmail: "",
    FNFechaEmision: moment().format("YYYY-MM-DD"),
    FNFechaVencimiento: "",
    FNMoneda: "Soles",
    FNIGV: "18.00",
    FNTipoPago: "Contado",
    FNNroCuotas: "",
  };

  // Factura Internacional
  const initValuesFIInt: RG.FI = {
    FIExpBienes: "0200",
    FINroIdAtr: "",
    FIRazonSocial: "",
    FIDireccion: "",
    FIPais: "",
    FICodPostal: "",
    FICiudad: "",
    FIEmail: "",
    FIFechaEmision: moment().format("YYYY-MM-DD"),
    FIFechaVencimiento: "",
    FIMoneda: "",
    FIIGV: "",
    FIPago: "Contado",
    FINroCuotas: "",
  };

  // Boleta Nacional
  const initValuesBNac: RG.BN = {
    BNVentaInterna: "",
    BNTipoDoc: "",
    BNNroDoc: "",
    BNNombresApellidos: "",
    BNDireccion: "",
    BNDepartamento: "",
    BNProvincia: "",
    BNDistrito: "",
    BNEmail: "",
    BNFechaEmision: moment().format("YYYY-MM-DD"),
    BNFechaVencimiento: "",
    BNMoneda: "Soles",
    BNIGV: "18.00",
  };

  // Boleta Internacional
  const initValuesBInt: RG.BI = {
    BIExpBienes: "0200",
    BINroIdAtr: "",
    BIRazonSocial: "",
    BIDireccion: "",
    BIPais: "",
    BICodPostal: "",
    BICiudad: "",
    BIEmail: "",
    BIFechaEmision: moment().format("YYYY-MM-DD"),
    BIFechaVencimiento: "",
    BIMoneda: "",
    BIIGV: "",
  };

  // Comprobante referencia
  const initValuesCompRef: RG.CompRef = {
    tipoComprobante: "Todos",
    nroComprobante: "",
    fechaEmisionComprobante: "",
  };

  // Orden de Servicio
  const initValuesOrdenServ: RG.OrdenServ = {
    nroOServicio: "",
    fechaEmisionOServicio: "",
  };

  // Form Table
  const initValuesFormTable: RG.TableFactura = {
    TFid: Date.now(),
    TFcodigo: "",
    TFcantidad: "",
    TFunidad: "",
    TFdescripcion: "",
    TFVunitario: "",
    TFPUnitario: "",
    TFImpTotal: "a",
  };

  // Estado del numero de serie por defecto
  const [serie, setSerie] = useState("001");
  const [serieBoleta, setSerieBoleta] = useState("001");
  // Estado del numero de correlativo por defecto
  const [correlativo, setCorrelativo] = useState("00003803");
  const [correlativoBoleta, setCorrelativoBoleta] = useState("00003803");
  // Estado de si se está editando el correlativo y numero de serie
  const [editando, setEditando] = useState(false);
  const [editandoBoleta, setEditandoBoleta] = useState(false);
  // Estado del tipo de factura
  const [tipoFactura, setTipoFactura] = useState("nacional");
  // Tipo de Boleta
  const [tipoBoleta, setTipoBoleta] = useState("nacional");
  // Formulario de Factura Nacional
  const [formFNac, setFormFNac] = useState(initValuesFNac);
  // Formulario de Factura Internacional
  const [formFIInt, setFormFIInt] = useState(initValuesFIInt);
  // Formulario de Boleta Nacional
  const [formBNac, setFormBNac] = useState(initValuesBNac);
  // Formulario de Boleta Internacional
  const [formBIInt, setFormBIInt] = useState(initValuesBInt);
  // Formulario de la tabla
  const [formTable, setFormTable] = useState([initValuesFormTable]);

  // Departamentos, provincias y distritos
  const [dpt, setDpt] = useState<P.Departamento[]>([]);
  const [prov, setProv] = useState<P.Provincia[]>([]);
  const [dist, setDist] = useState<P.Distrito[]>([]);
  const refDept = useRef<HTMLDivElement>(null);
  const [modalDpt, setModalDpt] = useState(false);
  const refProv = useRef<HTMLDivElement>(null);
  const [modalProv, setModalProv] = useState(false);
  const refDist = useRef<HTMLDivElement>(null);
  const [modalDist, setModalDist] = useState(false);

  // Modales generales
  const refIGV = useRef<HTMLDivElement>(null);
  const [modalIGV, setModalIGV] = useState(false);
  const refOrdServ = useRef<HTMLDivElement>(null);
  const [modalOrdServ, setModalOrdServ] = useState(false);
  const refPrevFactura = useRef<HTMLDivElement>(null);
  const [modalPrevFactura, setModalPrevFactura] = useState(false);
  const refCompReferencia = useRef<HTMLDivElement>(null);
  const [compReferencia, setCompReferencia] = useState(false);
  const refPDF = useRef<HTMLDivElement>(null);
  const [modalPDF, setModalPDF] = useState(false);

  // ventas, tipos de documentos, monedas, tipos de pago, bienes
  const refVentas = useRef<HTMLDivElement>(null);
  const [modalVentas, setModalVentas] = useState(false);
  const [ventas, setVentas] = useState<B.VentaInt[]>([]);
  const refDocs = useRef<HTMLDivElement>(null);
  const [modalDocs, setModalDocs] = useState(false);
  const [tiposDoc, setTiposDoc] = useState<B.TipoDoc[]>([]);
  const refMonedas = useRef<HTMLDivElement>(null);
  const [modalMonedas, setModalMonedas] = useState(false);
  const [monedas, setMonedas] = useState<B.Moneda[]>([]);
  const refTiposPago = useRef<HTMLDivElement>(null);
  const [modalTiposPago, setModalTiposPago] = useState(false);
  const [tiposPago, setTiposPago] = useState<B.TipoPago[]>([]);
  const refBienes = useRef<HTMLDivElement>(null);
  const [modalBienes, setModalBienes] = useState(false);
  const [bienes, setBienes] = useState<B.VentaInt[]>([]);

  // Paises y ciudades
  const refPaises = useRef<HTMLDivElement>(null);
  const [modalPaises, setModalPaises] = useState(false);
  const [paises, setPaises] = useState<P.Pais[]>([]);
  const refCiudades = useRef<HTMLDivElement>(null);
  const [modalCiudades, setModalCiudades] = useState(false);
  const [ciudades, setCiudades] = useState<P.Ciudad[]>([]);

  // Comprobante de referencia
  const [formCompRef, setFormCompRef] = useState(initValuesCompRef);
  const refComprobantes = useRef<HTMLDivElement>(null);
  const [tipoComprobante, setTipoComprobante] = useState(false);

  // Orden de servicio
  const [formOrdenServ, setFormOrdenServ] = useState(initValuesOrdenServ);

  // Capturar los inputs de la tabla
  const handleInputChangeFTable = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // Clonamos el arreglo
    const updatedTable = formTable.map((item) =>
      item.TFid === id ? { ...item, [name]: value } : item
    );

    setFormTable(updatedTable);
  };

  // Agregar nuevo item a la tabla
  const handleAddItem = () => {
    const lastRow = formTable[formTable.length - 1];

    // Verificamos si todos los campos de la última fila están llenos
    if (Object.values(lastRow).every((value) => value !== "")) {
      // Nuevo form
      const newRow = {
        TFid: Date.now(),
        TFcodigo: "",
        TFcantidad: "",
        TFunidad: "",
        TFdescripcion: "",
        TFVunitario: "",
        TFPUnitario: "",
        TFImpTotal: "a",
      };

      // Agregamos
      setFormTable([...formTable, newRow]);
    } else {
      // Mostrar alerta
      toast.warning("Todos los campos de la tabla deben estar llenos");
    }
  };

  // Eliminar un item de la tabla
  const handleDeleteItem = (index: number) => {
    // Buscamos y eliminamos
    const updatedTable = formTable.filter((item) => item.TFid !== index);

    // Actualizamos
    setFormTable(updatedTable);
  };

  // Capturar los inputs del formulario de orden de servicio
  const handleInputChangeOrdenServ = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormOrdenServ({ ...formOrdenServ, [name]: value });
  };

  // Capturar los inputs del formulario de Comprobante de referencia
  const handleCompRefChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormCompRef({ ...formCompRef, [e.target.name]: e.target.value });
  };

  // Cambiar tipo de Comrpobante de referecia
  const handleTipoComprobanteChange = (newTipoComprobante: string) => {
    setFormCompRef({ ...formCompRef, tipoComprobante: newTipoComprobante });
    setTipoComprobante(true);
  };

  // ========================================================= FACTURA =========================================================
  // Cambiar IGV
  const handleIGVChange = (newIGV: "10.00" | "18.00", newTipo: string) => {
    // Es boleta o factura?
    if (newTipo === "B") {
      // Actualizar formulario
      setFormBNac({ ...formBNac, BNIGV: newIGV });
    } else {
      // Actualizar formulario
      setFormFNac({ ...formFNac, FNIGV: newIGV });
    }
    setModalIGV(false);
  };

  // Seleccionar un pais
  const handlePaisChange = (
    newId: number,
    newPais: string,
    newTipo: string
  ) => {
    // Filtramos ciudades
    const newCiudades = P.Ciudades?.filter((cd) => cd.idPais === newId);
    setCiudades(newCiudades);

    // Es boleta o Factura?
    if (newTipo === "B") {
      // Actualizar formulario
      setFormBIInt({ ...formBIInt, BIPais: newPais, BICiudad: "" });
    } else {
      // Actualizar formulario
      setFormFIInt({ ...formFIInt, FIPais: newPais, FICiudad: "" });
    }
  };

  // Seleccionar una ciudad
  const handleCiudadChange = (newCiudad: string, newTipo: string) => {
    // Es boleta o Factura?
    if (newTipo === "B") {
      // Actualizar formulario
      setFormBIInt({ ...formBIInt, BICiudad: newCiudad });
    } else {
      // Actualizar formulario
      setFormFIInt({ ...formFIInt, FICiudad: newCiudad });
    }
  };

  // Seleccionar el tipo de venta interna
  const handleVentaChange = (newVenta: string, newTipo: string) => {
    // Es boleta o Factura?
    if (newTipo === "B") {
      // Actualizar formulario
      setFormBNac({ ...formBNac, BNVentaInterna: newVenta });
    } else {
      // Actualizar formulario
      setFormFNac({ ...formFNac, FNVentaInterna: newVenta });
    }
  };

  // Seleccionar el tipo de documento
  const handleDocChange = (newDoc: string, newTipo: string) => {
    // Es boleta o Factura?
    if (newTipo === "B") {
      // Actualizar formulario
      setFormBNac({ ...formBNac, BNTipoDoc: newDoc });
    } else {
      // Actualizar formulario
      setFormFNac({ ...formFNac, FNTipoDoc: newDoc });
    }
  };

  // Seleccionar el tipo de moneda
  const handleMonedaChange = (newMoneda: string, newTipo: string) => {
    // Es boleta o Factura?
    if (newTipo === "B") {
      if (tipoBoleta === "nacional") {
        setFormBNac({ ...formBNac, BNMoneda: newMoneda });
      } else {
        setFormBIInt({ ...formBIInt, BIMoneda: newMoneda });
      }
    } else {
      if (tipoFactura === "nacional") {
        setFormFNac({ ...formFNac, FNMoneda: newMoneda });
      } else {
        setFormFIInt({ ...formFIInt, FIMoneda: newMoneda });
      }
    }
  };

  // Seleccionar el tipo de pago
  const handlePagoChange = (newPago: string) => {
    if (tipoFactura === "nacional") {
      setFormFNac({ ...formFNac, FNTipoPago: newPago });
    } else {
      setFormFIInt({ ...formFIInt, FIPago: newPago });
    }
  };

  // Seleccionar el tipo de Bien
  const handleBienChange = (newBien: string, newTipo: string) => {
    // Es boleta o Factura?
    if (newTipo === "B") {
      setFormBIInt({ ...formBIInt, BIExpBienes: newBien });
    } else {
      setFormFIInt({ ...formFIInt, FIExpBienes: newBien });
    }
  };

  // Manejar el departamento
  const handleDptChange = (newId: number, newDept: string, newTipo: string) => {
    // Buscar las provincias correspondientes
    const provs = P.Provincias?.filter((d) => d.idDep === newId);
    setProv(provs);

    // Es boleta o Factura?
    if (newTipo === "B") {
      setFormBNac({
        ...formBNac,
        BNDepartamento: newDept,
        BNProvincia: "",
        BNDistrito: "",
      });
    } else {
      setFormFNac({
        ...formFNac,
        FNDepartamento: newDept,
        FNProvincia: "",
        FNDistrito: "",
      });
    }
  };

  // Manejar provincia seleecionada
  const handleProvChange = (
    newId: number,
    newProv: string,
    newTipo: string
  ) => {
    const dists = P.Distritos?.filter((d) => d.idProv === newId);
    setDist(dists);

    // Es boleta o Factura?
    if (newTipo === "B") {
      setFormBNac({
        ...formBNac,
        BNProvincia: newProv,
        BNDistrito: "",
      });
    } else {
      setFormFNac({
        ...formFNac,
        FNProvincia: newProv,
        FNDistrito: "",
      });
    }
  };

  // Manejar distrito seleccionado
  const handleDistChange = (newDist: string, newTipo: string) => {
    // Es boleta o Factura?
    if (newTipo === "B") {
      setFormBNac({ ...formBNac, BNDistrito: newDist });
    } else {
      setFormFNac({ ...formFNac, FNDistrito: newDist });
    }
  };

  // ======================================================== FACTURA/BOLETA NACIONAL ========================================================

  // Capturar los inputs del formulario de Factura Nacional
  const handleInputChangeFNac = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFNac({ ...formFNac, [name]: value });
  };

  // Capturar los inputs del formulario de Factura Internacional
  const handleInputChangeFIInt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFIInt({ ...formFIInt, [name]: value });
  };

  // Capturar los inputs del formulario de Boleta Nacional
  const handleInputChangeBNac = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormBNac({ ...formBNac, [name]: value });
  };

  // Capturar los inputs del formulario de Boleta Internacional
  const handleInputChangeBIInt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormBIInt({ ...formBIInt, [name]: value });
  };

  // Cambiar el n° de serie
  const handleSeriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerie(e.target.value);
  };

  // Cambiar el n° de correlativo
  const handleCorrelativosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorrelativo(e.target.value);
  };

  // Cambiar el n° de serie
  const SeriesChangeBoleta = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerieBoleta(e.target.value);
  };

  // Cambiar el n° de correlativo
  const CorrelativosChangeBoleta = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorrelativoBoleta(e.target.value);
  };

  // Guardar cambios
  const saveChanges = () => setEditando(false);
  const saveChangesBoleta = () => setEditandoBoleta(false);

  // Editar
  const editValues = () => setEditando(true);
  const editValuesBoleta = () => setEditandoBoleta(true);

  // Cambiar el tipo de factura
  const handleTipoFacturaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Cambiar tipo de Factura
    setTipoFactura(e.target.value);

    // Resetear los formularios
    setFormFNac(initValuesFNac);
    setFormFIInt(initValuesFIInt);
  };

  // Cambiar el tipo de Boleta
  const handleTipoBoletaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Cambiar tipo de Boleta
    setTipoBoleta(e.target.value);

    // Resetear los formularios
    setFormBNac(initValuesBNac);
    setFormBIInt(initValuesBInt);
  };

  // Abrir/cerrar modales
  const handleModalDpt = () => setModalDpt(!modalDpt);
  const handleModalProv = () => setModalProv(!modalProv);
  const handleModalDist = () => setModalDist(!modalDist);
  const handleModalVentas = () => setModalVentas(!modalVentas);
  const handleModalDocs = () => setModalDocs(!modalDocs);
  const handleModalMonedas = () => setModalMonedas(!modalMonedas);
  const handleModalTiposPago = () => setModalTiposPago(!modalTiposPago);
  const handleModalBienes = () => setModalBienes(!modalBienes);
  const handleModalPaises = () => setModalPaises(!modalPaises);
  const handleModalCiudades = () => setModalCiudades(!modalCiudades);
  const handleModalIGV = () => setModalIGV(!modalIGV);
  const handleModalOrdServ = () => setModalOrdServ(!modalOrdServ);
  const handleModalPrevFactura = () => setModalPrevFactura(!modalPrevFactura);
  const handleCompReferencia = () => setCompReferencia(!compReferencia);
  const handleTipoComp = () => setTipoComprobante(!tipoComprobante);
  const handleViewPDF = () => setModalPDF(!modalPDF);

  // Outside Clicks
  useOutsideClick(refDept, () => setModalDpt(false));
  useOutsideClick(refProv, () => setModalProv(false));
  useOutsideClick(refDist, () => setModalDist(false));
  useOutsideClick(refVentas, () => setModalVentas(false));
  useOutsideClick(refDocs, () => setModalDocs(false));
  useOutsideClick(refMonedas, () => setModalMonedas(false));
  useOutsideClick(refTiposPago, () => setModalTiposPago(false));
  useOutsideClick(refBienes, () => setModalBienes(false));
  useOutsideClick(refPaises, () => setModalPaises(false));
  useOutsideClick(refCiudades, () => setModalCiudades(false));
  useOutsideClick(refIGV, () => setModalIGV(false));
  useOutsideClick(refOrdServ, () => setModalOrdServ(false));
  useOutsideClick(refPrevFactura, () => setModalPrevFactura(false));
  useOutsideClick(refCompReferencia, () => setCompReferencia(false));
  useOutsideClick(refComprobantes, () => setTipoComprobante(false));
  useOutsideClick(refPDF, () => setModalPDF(false));

  useEffect(() => {
    setPaises(P.Paises);
    setCiudades(P.Ciudades);
    setDpt(P.Departamentos);
    setProv(P.Provincias);
    setDist(P.Distritos);
    setVentas(B.VentasInts);
    setTiposDoc(B.TiposDocs);
    setMonedas(B.Monedas);
    setTiposPago(B.TiposPagos);
    setBienes(B.Bienes);
  }, []);

  // ====================================================== GUIA DE REMISION ======================================================
  const initGRemision = {
    tipoGR: "",
    motTrasladoGR: "",
    tipoDocGR: "",
    nroDocGR: "",
    razSocGR: "",
    direccionGR: "",
    departamentoGR: "",
    provinciaGR: "",
    distritoGR: "",
    emailGR: "",
    fechaGR: moment().format("YYYY-MM-DD"),
  };

  const initDEnvio = {
    fechaDE: moment().format("YYYY-MM-DD"),
    descDE: "",
    unidMedidaDE: "",
    pesoBrutoDE: "",
    transladosDE: false,
    nroAutorizacionVehDE: "",
    entidadEmisoraDE: "",
    indicadorRetornoVEDE: false,
    transbordoProgramadoDE: false,
    indicadorRetornoVVDE: false,
  };

  const initDVehiculo = {
    idDV: Date.now(),
    placaDV: "",
    emisoraAutorizacionDV: "",
    nroAutorizacionDV: "",
  };

  const initDConductor = {
    idDC: Date.now(),
    tipoDocDC: "",
    nroIdentidadDC: "",
    nombresDC: "",
    apellidosDC: "",
    nroLicenciaDC: "",
  };

  const initPPuntos = {
    direccionPP: "",
    departamentoPP: "",
    provinciaPP: "",
    distritoPP: "",
  };

  const initTableGR = {
    idTableGR: Date.now(),
    cantidadTGR: "",
    unidadTGR: "",
    codigoTGR: "",
    descripcionTGR: "",
    codSunatTGR: "",
    GtinTGR: "",
    codSubpNacionalTGR: "",
  };

  const [correlativaGR, setCorrelativaGR] = useState("00003803");
  const [serieGR, setSerieGR] = useState("001");
  const [editandoGR, setEditandoGR] = useState(false);

  const cambiarSerieGR = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSerieGR(e.target.value);

  const cambiarCorrelativaGR = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCorrelativaGR(e.target.value);

  const editarValuesGR = () => setEditandoGR(!editandoGR);

  const [GRemision, setGRemision] = useState<RG.GR>(initGRemision);

  // const refModalTGuiaRemision = useRef<HTMLDivElement>(null);
  // const [modalTGuiaRemision, setModalTGuiaRemision] = useState(false);
  // const [guiasRemision, setGuiasRemision] = useState([]);

  // const refModalMotTrasladoGR = useRef<HTMLDivElement>(null);
  // const [modalMotTrasladoGR, setModalMotTrasladoGR] = useState(false);
  // const [motivosTrasladosGR, setMotivosTrasladosGR] = useState([]);

  // const refModalTipoDocGR = useRef<HTMLDivElement>(null);
  // const [modalTipoDocGR, setModalTipoDocGR] = useState(false);
  // const [tiposDocGR, setTiposDocGR] = useState([]);

  // const refModalDepartamentoGR = useRef<HTMLDivElement>(null);
  // const [modalDepartamentoGR, setModalDepartamentoGR] = useState(false);
  // const [departamentosGR, setDepartamentosGR] = useState([]);
  // const [deptSelecGR, setDptSelecGR] = useState<null | number>(null);

  // const refModalProvinciaGR = useRef<HTMLDivElement>(null);
  // const [modalProvinciaGR, setModalProvinciaGR] = useState(false);
  // const [provinciasGR, setProvinciasGR] = useState([]);
  // const [provSelecGR, setProvSelecGR] = useState<null | number>(null);

  // const refModalDistritoGR = useRef<HTMLDivElement>(null);
  // const [modalDistritoGR, setModalDistritoGR] = useState(false);
  // const [distritosGR, setDistritosGR] = useState([]);

  const handleInputChangeGR = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setGRemision({ ...GRemision, [id]: value });
  };

  const [openInfoAdicional, setOpenInfoAdicional] = useState(false);
  const [DEnvioActivo, setDEnvioActivo] = useState<RG.DetalleActivo>("Privado");
  const [DEnvio, setDEnvio] = useState<RG.DE>(initDEnvio);

  const changeModalInfo = () => setOpenInfoAdicional(!openInfoAdicional);

  const cambiarDEnvioActivo = (newEnvioActivo: RG.DetalleActivo) => {
    setDEnvioActivo(newEnvioActivo);
    setDEnvio(initDEnvio);
    setOpenInfoAdicional(false);
  };

  const handleInputChangeDE = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDEnvio({ ...DEnvio, [id]: value });
  };

  // DATOS DEL VEHICULO
  const [DVehiculo, setDVehiculo] = useState<RG.DV[]>([initDVehiculo]);

  // CAPTURAMOS EL ID Y EL EVENTO
  const handleInputChangeDV = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // Clonamos el arreglo
    const updateVehiculo = DVehiculo.map((item) =>
      item.idDV === id ? { ...item, [name]: value } : item
    );

    setDVehiculo(updateVehiculo);
  };

  // Agregar un nuevo formulario de vehiculo
  const agregarDVehiculo = () => {
    // Nuevo form
    const newDVehiculo = {
      idDV: Date.now(),
      placaDV: "",
      emisoraAutorizacionDV: "",
      nroAutorizacionDV: "",
    };

    // Agregamos el nuevo form al arreglo
    setDVehiculo([...DVehiculo, newDVehiculo]);
  };

  // Eliminar un formulario de vehiculo
  const eliminarDVehiculo = (id: number) => {
    // Buscamos y eliminamos
    const updatedTable = DVehiculo.filter((item) => item.idDV !== id);

    // Actualizamos el arreglo
    setDVehiculo(updatedTable);
  };

  const [DConductor, setDConductor] = useState<RG.DC[]>([initDConductor]);

  const handleInputChangeDC = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // Clonamos el arreglo
    const updateVehiculo = DConductor.map((item) =>
      item.idDC === id ? { ...item, [name]: value } : item
    );

    setDConductor(updateVehiculo);
  };

  // Agregar un nuevo formulario de vehiculo
  const agregarDConductor = () => {
    // Nuevo form
    const newDConductor = {
      idDC: Date.now(),
      tipoDocDC: "",
      nroIdentidadDC: "",
      nombresDC: "",
      apellidosDC: "",
      nroLicenciaDC: "",
    };

    // Agregamos el nuevo form al arreglo
    setDConductor([...DConductor, newDConductor]);
  };

  // Eliminar un formulario de vehiculo
  const eliminarDConductor = (id: number) => {
    // Buscamos y eliminamos
    const updatedTable = DConductor.filter((item) => item.idDC !== id);

    // Actualizamos el arreglo
    setDConductor(updatedTable);
  };

  const [puntoActivo, setPuntoActivo] = useState<RG.PuntoActivo>("Partida");
  const [PPuntoPartida, setPPuntoPartida] = useState<RG.PPartida>(initPPuntos);
  const [PPuntoLlegada, setPPuntoLlegada] = useState<RG.PLlegada>(initPPuntos);

  const cambiarPuntoActivo = (newPuntoActivo: RG.PuntoActivo) => {
    setPuntoActivo(newPuntoActivo);
    setPPuntoPartida(initPPuntos);
    setPPuntoLlegada(initPPuntos);
  };

  const handleInputChangePPartida = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    setPPuntoPartida({ ...PPuntoPartida, [id]: value });
  };

  const handleInputChangePLlegada = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    setPPuntoLlegada({ ...PPuntoLlegada, [id]: value });
  };

  const [TableGR, setTableGR] = useState<RG.TableGuiaRemision[]>([initTableGR]);

  const handleInputChangeGRTable = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // Clonamos el arreglo
    const updateTable = TableGR.map((item) =>
      item.idTableGR === id ? { ...item, [name]: value } : item
    );

    setTableGR(updateTable);
  };

  // Agregar un nuevo formulario de vehiculo
  const agregarGuiaTabla = () => {
    const lastRow = TableGR[TableGR.length - 1];

    // Verificamos que todos los campos de la última fila esté lleno
    if (Object.values(lastRow).every((value) => value !== "")) {
      // Nuevo form
      const newDConductor = {
        idTableGR: Date.now(),
        cantidadTGR: "",
        unidadTGR: "",
        codigoTGR: "",
        descripcionTGR: "",
        codSunatTGR: "",
        GtinTGR: "",
        codSubpNacionalTGR: "",
      };

      // Agregamos el nuevo form al arreglo
      setTableGR([...TableGR, newDConductor]);
    } else {
      toast.warning("Todos los campos deben estar llenos");
    }
  };

  // Eliminar un formulario de vehiculo
  const eliminarGuiaTabla = (id: number) => {
    // Buscamos y eliminamos
    const updatedTable = TableGR.filter((item) => item.idTableGR !== id);

    // Actualizamos el arreglo
    setTableGR(updatedTable);
  };

  return (
    <RemiGContext.Provider
      value={{
        // Factura
        editando,
        serie,
        correlativo,
        editValues,
        saveChanges,
        handleSeriesChange,
        handleCorrelativosChange,

        // Boleta
        correlativoBoleta,
        CorrelativosChangeBoleta,
        serieBoleta,
        SeriesChangeBoleta,
        editandoBoleta,
        editValuesBoleta,
        saveChangesBoleta,

        // Boleta / Factura
        tipoFactura,
        handleTipoFacturaChange,
        tipoBoleta,
        handleTipoBoletaChange,
        formFNac,
        handleInputChangeFNac,
        formFIInt,
        handleInputChangeFIInt,
        formBNac,
        handleInputChangeBNac,
        formBIInt,
        handleInputChangeBIInt,

        // Form Table
        formTable,
        handleInputChangeFTable,
        handleAddItem,
        handleDeleteItem,

        // Departamento, Provincia y Distrito
        handleDptChange,
        handleProvChange,
        handleDistChange,
        dpt,
        prov,
        dist,
        refDept,
        modalDpt,
        handleModalDpt,
        refProv,
        modalProv,
        handleModalProv,
        refDist,
        modalDist,
        handleModalDist,

        // Modales Generales
        refIGV,
        modalIGV,
        handleIGVChange,
        handleModalIGV,
        refOrdServ,
        modalOrdServ,
        handleModalOrdServ,
        refPrevFactura,
        modalPrevFactura,
        handleModalPrevFactura,
        refCompReferencia,
        compReferencia,
        handleCompReferencia,
        refPDF,
        modalPDF,
        handleViewPDF,

        //
        ventas,
        handleVentaChange,
        tiposDoc,
        handleDocChange,
        monedas,
        handleMonedaChange,
        tiposPago,
        handlePagoChange,
        bienes,
        handleBienChange,
        paises,
        handlePaisChange,
        ciudades,
        handleCiudadChange,
        refVentas,
        modalVentas,
        handleModalVentas,
        refDocs,
        modalDocs,
        handleModalDocs,
        refMonedas,
        modalMonedas,
        handleModalMonedas,
        refTiposPago,
        modalTiposPago,
        handleModalTiposPago,
        refBienes,
        modalBienes,
        handleModalBienes,
        refPaises,
        modalPaises,
        handleModalPaises,
        refCiudades,
        modalCiudades,
        handleModalCiudades,

        // Comprobante de referencia
        refComprobantes,
        formCompRef,
        handleCompRefChange,
        handleTipoComprobanteChange,
        tipoComprobante,
        handleTipoComp,

        // Orden de servicio
        formOrdenServ,
        handleInputChangeOrdenServ,

        // ===================================================== Guias Remision =====================================================
        correlativaGR,
        serieGR,
        editandoGR,
        cambiarCorrelativaGR,
        cambiarSerieGR,
        editarValuesGR,
        GRemision,
        handleInputChangeGR,
        openInfoAdicional,
        changeModalInfo,
        DEnvioActivo,
        DEnvio,
        cambiarDEnvioActivo,
        handleInputChangeDE,
        DVehiculo,
        handleInputChangeDV,
        agregarDVehiculo,
        eliminarDVehiculo,
        DConductor,
        handleInputChangeDC,
        agregarDConductor,
        eliminarDConductor,
        puntoActivo,
        cambiarPuntoActivo,
        PPuntoPartida,
        handleInputChangePPartida,
        PPuntoLlegada,
        handleInputChangePLlegada,
        TableGR,
        handleInputChangeGRTable,
        agregarGuiaTabla,
        eliminarGuiaTabla,
      }}
    >
      {children}
    </RemiGContext.Provider>
  );
};
