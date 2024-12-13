/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Areas,
  Cargo,
  Cargos,
  TipProveedores,
  TipServicios,
  TProveedor,
  usuario,
  usuarios,
} from "../../Views/Usuarios/Reportes/Data/Reportes";
import { useOutsideClick } from "../../Helper/useOutSideClick";
import {
  Departamento,
  Departamentos,
  Distrito,
  Distritos,
  Provincia,
  Provincias,
} from "../../Data/Peru";
import { toast } from "sonner";

export const AdminContext = createContext<AdminProps>({} as AdminProps);

const valuesProvForm: Partial<usuario> = {
  DNIRUCProveedor: "",
  razonSocialProveedor: "",
  representanteProveedor: "",
  tipoProveedor: "",
  tipoServicioProveedor: "",
  departamentoProveedor: "",
  provinciaProveedor: "",
  distritoProveedor: "",
  direccionProveedor: "",
  referenciasProveedor: "",
  contactoProveedor: "",
  telefonoProveedor: "",
  emailProveedor: "",
  claveProveedor: "",
};

const valuesFormVehiculos: Partial<usuario> = {
  placaVehiculo: "",
  tipoVehiculo: "",
  nSerieVehiculo: "",
  soatVehiculo: "",
  vigenciasDesdeVehiculo: "",
  vigenciaHastaVehiculo: "",
  ultRevisionVehiculo: "",
  vencimientoSoatVehiculo: "",
  tarjetaPropiedadVehiculo: "",
};

const valuesFormUsuarios: Partial<usuario> = {
  fotoUsuario: null,
  DNIUsuario: "",
  nombreUsuario: "",
  apellidosUsuario: "",
  emailUsuario: "",
  claveUsuario: "",
  telefonoUsuario: "",
  direccionUsuario: "",
  departamentoUsuario: "",
  provinciaUsuario: "",
  distritoUsuario: "",
  areaUsuario: "",
  cargoUsuario: "",
  twitterUsuario: "",
  facebookUsuario: "",
  instagramUsuario: "",
  fechaUsuario: "",
  emailCorporativoUsuario: "",
  biografiaUsuario: "",
};

type tableReportes = "trabajadores" | "proveedores" | "vehiculos" | "clientes";

export const AdminProvider = ({ children }: PropsWithChildren) => {
  // REPORTES
  const [tableActive, setTableActive] = useState<tableReportes>("trabajadores");
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);

  const changeTableActive = (table: tableReportes) => setTableActive(table);
  // ========================================= TRABAJADORES ==========================================
  // Moda
  const refModalFormUsuarios = useRef<HTMLDivElement>(null);
  const [modalFormUsuarios, setModalFormUsuarios] = useState(false);
  const refFotoUsuario = useRef<HTMLInputElement>(null);

  // Formulario
  const [formTrab, setFormTrab] = useState(valuesFormUsuarios);
  const [editUser, setEditUser] = useState(false);
  const [formEditTrab, setFormEditTrab] = useState(valuesFormUsuarios);

  // Departamento, Provincia, Distrito
  const [deptUsuario, setDeptUsuario] = useState<number | null>(null);
  const [provUsuario, setProvUsuario] = useState<number | null>(null);
  const refDptUsuario = useRef<HTMLDivElement>(null);
  const [dptsUsuarios, setDptsUsuarios] = useState<Departamento[]>([]);
  const [modalDpt, setModalDpt] = useState(false);

  const refProvUsuario = useRef<HTMLDivElement>(null);
  const [provUsuarios, setProvsUsuarios] = useState<Provincia[]>([]);
  const [modalProv, setModalProv] = useState(false);

  const refDistUsuario = useRef<HTMLDivElement>(null);
  const [distUsuarios, setDisUsuarios] = useState<Distrito[]>([]);
  const [modalDist, setModalDist] = useState(false);

  // Areas y Cargos
  const refAreasUsuarios = useRef<HTMLDivElement>(null);
  const [modalAreasUsuarios, setModalAreasUsuarios] = useState(false);
  const [areasUsuarios, setAreasUsuarios] = useState<TProveedor[]>([]);
  const [areaSeleccionada, setAreaSeleccionada] = useState<number | null>(null);
  const refCargosUsuarios = useRef<HTMLDivElement>(null);
  const [modalCargosUsuarios, setModalCargosUsuarios] = useState(false);
  const [cargosUsuarios, setCargosUsuarios] = useState<Cargo[]>([]);

  const handleModalAreas = () => setModalAreasUsuarios(!modalAreasUsuarios);
  useOutsideClick(refAreasUsuarios, () => setModalAreasUsuarios(false));

  const handleModalCargos = () => setModalCargosUsuarios(!modalCargosUsuarios);
  useOutsideClick(refCargosUsuarios, () => setModalCargosUsuarios(false));

  const handleModalDpt = () => setModalDpt(!modalDpt);
  useOutsideClick(refDptUsuario, () => setModalDpt(false));

  const handleModalProv = () => setModalProv(!modalProv);
  useOutsideClick(refProvUsuario, () => setModalProv(false));

  const handleModalDist = () => setModalDist(!modalDist);
  useOutsideClick(refDistUsuario, () => setModalDist(false));

  // Areas
  const areasUsuariosFiltradas = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = areasUsuarios.filter((a) =>
        a.name.toLowerCase().includes(query)
      );
      setAreasUsuarios(filtered);
    } else {
      setAreasUsuarios(Areas);
    }
  };

  const usuarioAreaSeleccionada = (newId: number, newName: string) => {
    setAreaSeleccionada(newId);
    const cargos = Cargos.filter((c) => c.idAsociado === newId);
    setCargosUsuarios(cargos);

    // Editando?
    if (editUser) {
      setFormEditTrab({
        ...formEditTrab,
        areaUsuario: newName,
        cargoUsuario: "",
      });
    } else {
      setFormTrab({
        ...formTrab,
        areaUsuario: newName,
        cargoUsuario: "",
      });
    }

    setModalAreasUsuarios(false);
  };

  const usuarioAreaBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const areaName = e.target.value;
    if (!areasUsuarios.some((area) => area.name === areaName)) {
      // Editando?
      if (editUser) {
        setFormEditTrab({ ...formEditTrab, areaUsuario: "", cargoUsuario: "" });
      } else {
        setFormTrab({ ...formTrab, areaUsuario: "", cargoUsuario: "" });
      }
      setAreasUsuarios(Areas);
      setAreaSeleccionada(null);
    }
  };

  // Cargos
  const cargosUsuariosFiltrados = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = cargosUsuarios.filter((c) =>
        c.name.toLowerCase().includes(query)
      );
      setCargosUsuarios(filtered);
    } else {
      const cargos = Cargos.filter((c) => c.idAsociado === areaSeleccionada);
      setCargosUsuarios(cargos);
    }
  };

  const usuarioCargoSeleccionado = (newName: string) => {
    // Editando?
    if (editUser) {
      setFormEditTrab({
        ...formEditTrab,
        cargoUsuario: newName,
      });
    } else {
      setFormTrab({
        ...formTrab,
        cargoUsuario: newName,
      });
    }

    setModalCargosUsuarios(false);
  };

  const usuarioCargoBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const cargoName = e.target.value;
    if (!cargosUsuarios.some((cargo) => cargo.name === cargoName)) {
      // Editando?
      if (editUser) {
        setFormEditTrab({ ...formEditTrab, cargoUsuario: "" });
      } else {
        setFormTrab({ ...formTrab, cargoUsuario: "" });
      }
      const cargos = Cargos.filter((c) => c.idAsociado === areaSeleccionada);
      setCargosUsuarios(cargos);
    }
  };

  // Departamentos filtrados
  const usuarioDptFiltrados = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = dptsUsuarios.filter((d) =>
        d.name.toLowerCase().includes(query)
      );
      setDptsUsuarios(filtered);
    } else {
      setDptsUsuarios(Departamentos);
    }
  };

  // Manejar el departamento
  const usuarioSeleccionarDpt = (newId: number, newDept: string) => {
    setDeptUsuario(newId);
    const provs = Provincias.filter((p) => p.idDep === newId);
    setProvsUsuarios(provs);
    // Editando?
    if (editUser) {
      setFormEditTrab({
        ...formEditTrab,
        departamentoUsuario: newDept,
        provinciaUsuario: "",
        distritoUsuario: "",
      });
    } else {
      setFormTrab({
        ...formTrab,
        departamentoUsuario: newDept,
        provinciaUsuario: "",
        distritoUsuario: "",
      });
    }
    setModalDpt(false);
  };

  const usuarioDptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dptName = e.target.value;
    if (!dptsUsuarios.some((dpt) => dpt.name === dptName)) {
      // Editando?
      if (editUser) {
        setFormEditTrab({
          ...formEditTrab,
          departamentoUsuario: "",
          provinciaUsuario: "",
          distritoUsuario: "",
        });
      } else {
        setFormTrab({
          ...formTrab,
          departamentoUsuario: "",
          provinciaUsuario: "",
          distritoUsuario: "",
        });
      }
      setDptsUsuarios(Departamentos);
      setDeptUsuario(null);
      setProvUsuario(null);
    }
  };

  // Provincias filtradas
  const usuarioProvFiltradas = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = provUsuarios.filter((p) =>
        p.name.toLowerCase().includes(query)
      );
      setProvsUsuarios(filtered);
    } else {
      const prov = Provincias.filter((p) => p.idDep === deptUsuario);
      setProvsUsuarios(prov);
    }
  };

  // Manejar provincia seleecionada
  const usuarioSeleccionarProv = (newId: number, newProv: string) => {
    setProvUsuario(newId);
    const dists = Distritos.filter((d) => d.idProv === newId);
    setDisUsuarios(dists);
    // Editando?
    if (editUser) {
      setFormEditTrab({
        ...formEditTrab,
        provinciaUsuario: newProv,
        distritoUsuario: "",
      });
    } else {
      setFormTrab({
        ...formTrab,
        provinciaUsuario: newProv,
        distritoUsuario: "",
      });
    }
    setModalProv(false);
  };

  const usuarioProvBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const provName = e.target.value;

    if (!provUsuarios.some((prov) => prov.name === provName)) {
      // Editando?
      if (editUser) {
        setFormEditTrab({
          ...formEditTrab,
          provinciaUsuario: "",
          distritoUsuario: "",
        });
      } else {
        setFormTrab({
          ...formTrab,
          provinciaUsuario: "",
          distritoUsuario: "",
        });
      }
      const prov = Provincias.filter((p) => p.idDep === deptUsuario);
      setProvsUsuarios(prov);
      setProvUsuario(null);
    }
  };

  // Distritos filtrados
  const usuarioDistFiltrados = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = distUsuarios.filter((d) =>
        d.name.toLowerCase().includes(query)
      );
      setDisUsuarios(filtered);
    } else {
      const dist = Distritos.filter((d) => d.idProv === provUsuario);
      setDisUsuarios(dist);
    }
  };

  // Manejar distrito seleccionado
  const usuarioSeleccionarDist = (newDist: string) => {
    // Editando?
    if (editUser) {
      setFormEditTrab({ ...formEditTrab, distritoUsuario: newDist });
    } else {
      setFormTrab({ ...formTrab, distritoUsuario: newDist });
    }
    setModalDist(false);
  };

  // Manejar el blur en el distrito
  const usuarioDistBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const distName = e.target.value;

    if (!distUsuarios.some((dist) => dist.name === distName)) {
      // Editando?
      if (editUser) {
        setFormEditTrab({ ...formEditTrab, distritoUsuario: "" });
      } else {
        setFormTrab({ ...formTrab, distritoUsuario: "" });
      }
      const dist = Distritos.filter((d) => d.idProv === provUsuario);
      setDisUsuarios(dist);
    }
  };

  const openFormUsuarios = (newUser: Partial<usuario>) => () => {
    setModalFormUsuarios(true);

    if (refFotoUsuario.current) refFotoUsuario.current.value = "";

    setFormEditTrab(newUser);
    setEditUser(true);
  };

  const closeFormUsuarios = () => {
    setModalFormUsuarios(false);
    setEditUser(false);

    if (refFotoUsuario.current) refFotoUsuario.current.value = "";

    setFormEditTrab(valuesFormUsuarios);
  };

  useOutsideClick(refModalFormUsuarios, () => {
    setModalFormUsuarios(false);
    setEditUser(false);

    if (refFotoUsuario.current) refFotoUsuario.current.value = "";

    setFormEditTrab(valuesFormUsuarios);
  });

  // Capturar los inputs del formulario
  const handleInputChangeTrab = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (editUser) {
      setFormEditTrab({ ...formEditTrab, [id]: value });

      if (id === "departamentoUsuario") {
        usuarioDptFiltrados(e);
      } else if (id === "provinciaUsuario") {
        usuarioProvFiltradas(e);
      } else if (id === "distritoUsuario") {
        usuarioDistFiltrados(e);
      } else if (id === "areaUsuario") {
        areasUsuariosFiltradas(e);
      } else if (id === "cargoUsuario") {
        cargosUsuariosFiltrados(e);
      }
    } else {
      setFormTrab({ ...formTrab, [id]: value });

      if (id === "departamentoUsuario") {
        usuarioDptFiltrados(e);
      } else if (id === "provinciaUsuario") {
        usuarioProvFiltradas(e);
      } else if (id === "distritoUsuario") {
        usuarioDistFiltrados(e);
      } else if (id === "areaUsuario") {
        areasUsuariosFiltradas(e);
      } else if (id === "cargoUsuario") {
        cargosUsuariosFiltrados(e);
      }
    }
  };

  // Capturar el input de imagen
  const handleFileChangeTrab = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (editUser) {
        setFormEditTrab({ ...formEditTrab, fotoUsuario: file });
      } else {
        setFormTrab({ ...formTrab, fotoUsuario: file });
      }
    }
  };

  // Enviar el formulario
  const handleSubmitTrab = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPosting(true);

    if (editUser) {
      setTimeout(() => {
        console.log(formEditTrab);
        setPosting(false);
        setModalFormUsuarios(false);
        setEditUser(false);
        toast.success("Usuario editado exitosamente");
        setFormEditTrab(valuesFormUsuarios);
      }, 1000);
    } else {
      setTimeout(() => {
        console.log(formTrab);
        setPosting(false);
        toast.success("Usuario agregado exitosamente");
        setFormTrab(valuesFormUsuarios);
      }, 1000);
    }
  };

  useEffect(() => {
    setDptsUsuarios(Departamentos);
    setProvsUsuarios(Provincias);
    setDisUsuarios(Distritos);
    setAreasUsuarios(Areas);
    setCargosUsuarios(Cargos);
  }, []);

  // ========================================== PROVEEDORES ==========================================
  const [proveedores, setProveedores] = useState<usuario[]>([]);

  // Formulario
  const [formProvs, setFormProvs] = useState<Partial<usuario>>(valuesProvForm);
  const [deptProveedor, setDeptProveedor] = useState<number | null>(null);
  const [provProveedor, setProvProveedor] = useState<number | null>(null);
  const refModalFormProv = useRef<HTMLDivElement>(null);
  const [modalFormProv, setModalFormProv] = useState(false);
  // Editar Proveedor
  const [editProveedor, setEditProveedor] = useState(false);
  const [formEditProvs, setFormEditProvs] = useState(valuesProvForm);

  const openFormProveedor = (newProveedor: Partial<usuario>) => {
    setModalFormProv(true);
    setEditProveedor(true);
    setFormEditProvs(newProveedor);
  };

  const closeFormProveedor = () => {
    setModalFormProv(false);
    setEditProveedor(false);
    setFormEditProvs(valuesProvForm);
  };

  useOutsideClick(refModalFormProv, () => {
    setModalFormProv(false);
    setEditProveedor(false);
    setFormEditProvs(valuesProvForm);
  });

  // Selects y modales
  const refSelectTProv = useRef<HTMLDivElement>(null);
  const [TProvedores, setTProvedores] = useState<TProveedor[]>([]);
  const [selectTProv, setSelectTProv] = useState(false);

  const refSelectTServ = useRef<HTMLDivElement>(null);
  const [TServicios, setTServicios] = useState<TProveedor[]>([]);
  const [selectTServ, setSelectTServ] = useState(false);

  const refSelectDpt = useRef<HTMLDivElement>(null);
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const [selectDpt, setSelectDpt] = useState(false);

  const refSelectProv = useRef<HTMLDivElement>(null);
  const [provincias, setProvincias] = useState<Provincia[]>([]);
  const [selectProv, setSelectProv] = useState(false);

  const refSelectDist = useRef<HTMLDivElement>(null);
  const [distritos, setDistritos] = useState<Distrito[]>([]);
  const [selectDist, setSelectDist] = useState(false);

  // Abrir/Cerrar selects
  const handleSelectTProv = () => setSelectTProv(!selectTProv);
  useOutsideClick(refSelectTProv, () => setSelectTProv(false));

  const handleSelectTServ = () => setSelectTServ(!selectTServ);
  useOutsideClick(refSelectTServ, () => setSelectTServ(false));

  const handleSelectDpt = () => setSelectDpt(!selectDpt);
  useOutsideClick(refSelectDpt, () => setSelectDpt(false));

  const handleSelectProv = () => setSelectProv(!selectProv);
  useOutsideClick(refSelectProv, () => setSelectProv(false));

  const handleSelectDist = () => setSelectDist(!selectDist);
  useOutsideClick(refSelectDist, () => setSelectDist(false));

  // Seleccionar tipo de proveedor
  const SeleccionarTProv = (newPlaca: string) => {
    // Editando
    if (editProveedor) {
      setFormEditProvs({ ...formEditProvs, tipoProveedor: newPlaca });
    } else {
      setFormProvs({ ...formProvs, tipoProveedor: newPlaca });
    }
    setSelectTProv(false);
  };

  // Filtrar mientras se escribe en Tipo de Proveedor
  const TProvsFiltrados = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = TProvedores.filter((tprov) =>
        tprov.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setTProvedores(filtered);
    } else {
      setTProvedores(TipProveedores);
    }
  };

  // Caturar el input de busqueda de tipo de proveedor
  const TProvsBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tprovname = e.target.value;
    if (!TProvedores.some((tp) => tp.name === tprovname)) {
      // Editando
      if (editProveedor) {
        setFormEditProvs({ ...formEditProvs, tipoProveedor: "" });
      } else {
        setFormProvs({ ...formProvs, tipoProveedor: "" });
      }

      setTProvedores(TipProveedores);
    }
  };

  // Seleccionar tipo de servicio
  const SeleccionarTServ = (newPlaca: string) => {
    // Editando
    if (editProveedor) {
      setFormEditProvs({ ...formEditProvs, tipoServicioProveedor: newPlaca });
    } else {
      setFormProvs({ ...formProvs, tipoServicioProveedor: newPlaca });
    }

    setSelectTServ(false);
  };

  // Filtrar mientras se escribe en Tipo de servicio
  const TServFiltrados = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = TServicios.filter((tserv) =>
        tserv.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setTServicios(filtered);
    } else {
      setTServicios(TipServicios);
    }
  };

  // Caturar el input de busqueda de tipo de servicio
  const TServBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tservname = e.target.value;
    if (!TServicios.some((tp) => tp.name === tservname)) {
      //Editando
      if (editProveedor) {
        setFormEditProvs({ ...formEditProvs, tipoServicioProveedor: "" });
      } else {
        setFormProvs({ ...formProvs, tipoServicioProveedor: "" });
      }

      setTServicios(TipServicios);
    }
  };

  // Departamentos filtrados
  const DepartamentosFiltrados = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = departamentos.filter((d) =>
        d.name.toLowerCase().includes(query)
      );
      setDepartamentos(filtered);
    } else {
      setDepartamentos(Departamentos);
    }
  };

  // Manejar el departamento
  const SeleccionarDpt = (newId: number, newDept: string) => {
    setDeptProveedor(newId);
    const provs = Provincias.filter((p) => p.idDep === newId);
    setProvincias(provs);

    // Editando
    if (editProveedor) {
      setFormEditProvs({
        ...formEditProvs,
        departamentoProveedor: newDept,
        provinciaProveedor: "",
        distritoProveedor: "",
      });
    } else {
      setFormProvs({
        ...formProvs,
        departamentoProveedor: newDept,
        provinciaProveedor: "",
        distritoProveedor: "",
      });
    }

    setSelectDpt(false);
  };

  const DptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dptName = e.target.value;
    if (!departamentos.some((dpt) => dpt.name === dptName)) {
      // Editando
      if (editProveedor) {
        setFormEditProvs({
          ...formEditProvs,
          departamentoProveedor: "",
          provinciaProveedor: "",
          distritoProveedor: "",
        });
      } else {
        setFormProvs({
          ...formProvs,
          departamentoProveedor: "",
          provinciaProveedor: "",
          distritoProveedor: "",
        });
      }

      setDepartamentos(Departamentos);
    }
  };

  // Provincias filtradas
  const ProvinciasFiltradas = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = provincias.filter((p) =>
        p.name.toLowerCase().includes(query)
      );
      setProvincias(filtered);
    } else {
      const prov = Provincias.filter((p) => p.idDep === deptProveedor);
      setProvincias(prov);
    }
  };

  // Manejar provincia seleecionada
  const SeleccionarProv = (newId: number, newProv: string) => {
    setProvProveedor(newId);
    const dists = Distritos.filter((d) => d.idProv === newId);
    setDistritos(dists);

    // Editando
    if (editProveedor) {
      setFormEditProvs({
        ...formEditProvs,
        provinciaProveedor: "",
        distritoProveedor: "",
      });
    } else {
      setFormProvs({
        ...formProvs,
        provinciaProveedor: newProv,
        distritoProveedor: "",
      });
    }

    setSelectProv(false);
  };

  const ProvBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const provName = e.target.value;

    if (!provincias.some((prov) => prov.name === provName)) {
      // Editando
      if (editProveedor) {
        setFormEditProvs({ ...formEditProvs, provinciaProveedor: "" });
      } else {
        setFormProvs({ ...formProvs, provinciaProveedor: "" });
      }

      const prov = Provincias.filter((p) => p.idDep === deptProveedor);
      setProvincias(prov);
    }
  };

  // Distritos filtrados
  const DistritosFiltrados = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    // Escribiendo
    if (query) {
      const filtered = distritos.filter((d) =>
        d.name.toLowerCase().includes(query)
      );
      setDistritos(filtered);
    } else {
      const dist = Distritos.filter((d) => d.idProv === provProveedor);
      setDistritos(dist);
    }
  };

  // Manejar distrito seleccionado
  const SeleccionarDist = (newDist: string) => {
    // Editando
    if (editProveedor) {
      setFormEditProvs({ ...formEditProvs, distritoProveedor: "" });
    } else {
      setFormProvs({ ...formProvs, distritoProveedor: newDist });
    }

    setSelectDist(false);
  };

  // Manejar el blur en el distrito
  const DistBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const distName = e.target.value;

    if (!distritos.some((dist) => dist.name === distName)) {
      // Editando
      if (editProveedor) {
        setFormEditProvs({ ...formEditProvs, distritoProveedor: "" });
      } else {
        setFormProvs({ ...formProvs, distritoProveedor: "" });
      }

      const dist = Distritos.filter((d) => d.idProv === provProveedor);
      setDistritos(dist);
    }
  };

  // Capturar los inputs del formulario
  const handleInputChangeProv = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (editProveedor) {
      setFormEditProvs({ ...formEditProvs, [id]: value });

      // Filtramos
      if (id === "tipoProveedor") {
        TProvsFiltrados(e);
      } else if (id === "tipoServicioProveedor") {
        TServFiltrados(e);
      } else if (id === "departamentoProveedor") {
        DepartamentosFiltrados(e);
      } else if (id === "provinciaProveedor") {
        ProvinciasFiltradas(e);
      } else if (id === "distritoProveedor") {
        DistritosFiltrados(e);
      }
    } else {
      setFormProvs({ ...formProvs, [id]: value });

      // Filtramos
      if (id === "tipoProveedor") {
        TProvsFiltrados(e);
      } else if (id === "tipoServicioProveedor") {
        TServFiltrados(e);
      } else if (id === "departamentoProveedor") {
        DepartamentosFiltrados(e);
      } else if (id === "provinciaProveedor") {
        ProvinciasFiltradas(e);
      } else if (id === "distritoProveedor") {
        DistritosFiltrados(e);
      }
    }
  };

  // Enviar el formulario
  const submitFormProv = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPosting(true);

    if (editProveedor) {
      setTimeout(() => {
        setPosting(false);
        console.log(formEditProvs);
        setModalFormProv(false);
        setEditProveedor(false);
        toast.success("Proveedor editado exitosamente");
        setFormEditProvs(valuesProvForm);
      }, 1000);
    } else {
      setTimeout(() => {
        setPosting(false);
        console.log(formProvs);
        toast.success("Proveedor agregado exitosamente");
        setFormProvs(valuesProvForm);
      }, 1000);
    }
  };

  const cargarDepartamentos = () => {
    setDepartamentos(Departamentos);
  };

  const cargarProvincias = () => {
    setProvincias(Provincias);
  };

  const cargarDistritos = () => {
    setDistritos(Distritos);
  };

  const cargarTProv = () => {
    setTProvedores(TipProveedores);
  };

  const cargarTServicio = () => {
    setTServicios(TipServicios);
  };

  useEffect(() => {
    cargarDepartamentos();
    cargarProvincias();
    cargarDistritos();
    cargarTProv();
    cargarTServicio();
  }, []);

  // ======================================== Paginacion de Proveedores ========================================
  const [proveedoresFiltrados, setProveedoresFiltrados] = useState<usuario[]>(
    []
  );
  const [provsPaginated, setProvsPaginated] = useState<usuario[]>([]);
  const refCantProvs = useRef<HTMLDivElement>(null);
  const [cantProvsPag, setCantProvsPag] = useState(10);
  const [modalCantProvs, setModalCantProvs] = useState(false);
  const [provsPageNow, setProvsPageNow] = useState(1);
  const [totalPagesProvs, setTotalPagesProvs] = useState(0);
  const maxBtnProvs = 5;

  // Buscador de proveedores
  const [searchProv, setSearchProv] = useState("");

  // Caturar el input de busqueda de proveedores
  const capturarBusqueda = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProv(e.target.value);
  };

  // Calcular el inicio y final de la paginacion
  const pageStarProvs = Math.max(1, provsPageNow - Math.floor(maxBtnProvs / 2));
  const pageEndProvs = Math.min(
    totalPagesProvs,
    pageStarProvs + maxBtnProvs - 1
  );

  // Abrir/cerrar modal de cantidad de proveedores
  const handleModalCantProvs = () => setModalCantProvs(!modalCantProvs);

  // Cambiar la cantidad de proveedores por pagina
  const cambiarCantProvsPorPagina = (newPerPage: number) => {
    setCantProvsPag(newPerPage);
    setProvsPageNow(1);
    setModalCantProvs(false);
  };

  // Cambiar de pagina
  const cambiarPagina = (newPage: number) => setProvsPageNow(newPage);

  // Calcular todal de paginas
  const calcularTotalPaginas = (filtered: usuario[]) => {
    const total = Math.ceil(filtered.length / cantProvsPag);
    setTotalPagesProvs(total);
  };

  // Filtramos proveedores segun el termnino de busqueda
  const filtrarProveedores = () => {
    const filtered = proveedores.filter(
      (prov) =>
        prov.DNIRUCProveedor.toLowerCase().includes(searchProv.toLowerCase()) ||
        prov.razonSocialProveedor
          .toLowerCase()
          .includes(searchProv.toLowerCase()) ||
        prov.representanteProveedor
          .toLowerCase()
          .includes(searchProv.toLowerCase()) ||
        prov.claveProveedor.toLowerCase().includes(searchProv.toLowerCase()) ||
        prov.tipoProveedor.toLowerCase().includes(searchProv.toLowerCase()) ||
        prov.tipoServicioProveedor
          .toLowerCase()
          .includes(searchProv.toLowerCase()) ||
        prov.departamentoProveedor
          .toLowerCase()
          .includes(searchProv.toLowerCase()) ||
        prov.provinciaProveedor
          .toLowerCase()
          .includes(searchProv.toLowerCase()) ||
        prov.distritoProveedor
          .toLowerCase()
          .includes(searchProv.toLowerCase()) ||
        prov.direccionProveedor
          .toLowerCase()
          .includes(searchProv.toLowerCase()) ||
        prov.referenciasProveedor
          .toLowerCase()
          .includes(searchProv.toLowerCase()) ||
        prov.telefonoProveedor
          .toLowerCase()
          .includes(searchProv.toLowerCase()) ||
        prov.emailProveedor.toLowerCase().includes(searchProv.toLowerCase())
    );
    setProveedoresFiltrados(filtered);
    calcularTotalPaginas(filtered);
  };

  // Actualizar la paginacion
  const actualizarProvsPaginados = () => {
    const paginated = proveedoresFiltrados.slice(
      (provsPageNow - 1) * cantProvsPag,
      provsPageNow * cantProvsPag
    );
    setProvsPaginated(paginated);
  };

  // Llamamos los datos
  useEffect(() => {
    setLoading(true);

    // LLamamos a la "API"
    setTimeout(() => {
      setProveedores(usuarios);
      setLoading(false);
    }, 1000);
  }, []);

  // Recalculamos despues que el usuario busco un proveedor
  useEffect(() => {
    filtrarProveedores();
    calcularTotalPaginas(proveedoresFiltrados);
  }, [proveedores, searchProv, cantProvsPag]);

  // Recalculamos despues de cambiar la cantidad de proveedores por pagina
  useEffect(() => {
    actualizarProvsPaginados();
  }, [proveedoresFiltrados, cantProvsPag, provsPageNow]);

  // ========================================================= VEHICULOS =========================================================
  const [vehiculos, setVehiculos] = useState<usuario[]>([]);

  // Formulario de vehiculos
  const [formVeh, setFormVeh] = useState<Partial<usuario>>(valuesFormVehiculos);
  // Editar Vehiculo
  const [editVehiculo, setEditVehiculo] = useState(false);
  const [formEditVehiculo, setFormEditVehiculo] = useState(valuesFormVehiculos);

  // Modales
  const refFormVeh = useRef<HTMLDivElement>(null);
  const [modalFormVeh, setModalFormVeh] = useState(false);

  // Cerrar/abrir modales
  const openFormVeh = (veh: Partial<usuario>) => {
    setModalFormVeh(true);
    setEditVehiculo(true);
    setFormEditVehiculo(veh);
  };

  const closeFormVeh = () => {
    setModalFormVeh(false);
    setEditVehiculo(false);
    setFormEditVehiculo(valuesFormVehiculos);
  };

  useOutsideClick(refFormVeh, () => {
    setModalFormVeh(false);
    setEditVehiculo(false);
    setFormEditVehiculo(valuesFormVehiculos);
  });

  // Capturar los inputs del formulario
  const handleInputChangeVeh = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (editVehiculo) {
      setFormEditVehiculo({ ...formEditVehiculo, [id]: value });
    } else {
      setFormVeh({ ...formVeh, [id]: value });
    }
  };

  // Enviar el formulario
  const handleSubmitVeh = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPosting(true);

    // Si se esta editando
    if (editVehiculo) {
      setTimeout(() => {
        setPosting(false);
        console.log(formEditVehiculo);
        setModalFormVeh(false);
        setEditVehiculo(false);
        toast.success("Vehiculo editado exitosamente");
        setFormEditVehiculo(valuesFormVehiculos);
      }, 1000);
    } else {
      setTimeout(() => {
        setPosting(false);
        console.log(formVeh);
        toast.success("Vehiculo agregado exitosamente");
        setFormVeh(valuesFormVehiculos);
      }, 1000);
    }
  };

  // =================================================== Paginacion de vehiculos =====================================================
  const [vehFiltrados, setVehFiltrados] = useState<usuario[]>([]);
  const [vehPaginated, setVehPaginated] = useState<usuario[]>([]);
  const refCantVehs = useRef<HTMLDivElement>(null);
  const [cantVehsPag, setCantVehsPag] = useState(10);
  const [modalCantVehs, setModalCantVehs] = useState(false);
  const [vehsPageNow, setVehsPageNow] = useState(1);
  const [totalPagesVehs, setTotalPagesVehs] = useState(0);
  const maxBtnVehs = 5;

  // Buscador de vehiculos
  const [searchVeh, setSearchVeh] = useState("");

  // Caturar el input de busqueda de vehiculo
  const capturarBusquedaVeh = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVeh(e.target.value);
  };

  // Calcular el inicio y final de la paginacion
  const pageStarVehs = Math.max(1, vehsPageNow - Math.floor(maxBtnVehs / 2));
  const pageEndVehs = Math.min(totalPagesVehs, pageStarVehs + maxBtnVehs - 1);

  // Abrir/cerrar modal de cantidad de vehiculos
  const handleModalCantVehs = () => setModalCantVehs(!modalCantVehs);
  useOutsideClick(refCantVehs, () => setModalCantVehs(false));

  // Cambiar la cantidad de behiculos por pagina
  const cambiarCantVehsPorPagina = (newPerPage: number) => {
    setCantVehsPag(newPerPage);
    setVehsPageNow(1);
    setModalCantVehs(false);
  };

  // Cambiar de pagina
  const cambiarPaginaVehs = (newPage: number) => setVehsPageNow(newPage);

  // Calcular todal de paginas
  const calcularTotalPaginasVehs = (filtered: usuario[]) => {
    const total = Math.ceil(filtered.length / cantVehsPag);
    setTotalPagesVehs(total);
  };

  // Filtramos proveedores segun el termnino de busqueda
  const filtrarVehiculos = () => {
    const filtered = vehiculos.filter(
      (veh) =>
        veh.placaVehiculo.toLowerCase().includes(searchVeh.toLowerCase()) ||
        veh.tipoVehiculo.toLowerCase().includes(searchVeh.toLowerCase()) ||
        veh.nSerieVehiculo.toLowerCase().includes(searchVeh.toLowerCase()) ||
        veh.soatVehiculo.toLowerCase().includes(searchVeh.toLowerCase()) ||
        veh.vigenciasDesdeVehiculo
          .toLowerCase()
          .includes(searchVeh.toLowerCase()) ||
        veh.vigenciaHastaVehiculo
          .toLowerCase()
          .includes(searchVeh.toLowerCase()) ||
        veh.ultRevisionVehiculo
          .toLowerCase()
          .includes(searchVeh.toLowerCase()) ||
        veh.vencimientoSoatVehiculo
          .toLowerCase()
          .includes(searchVeh.toLowerCase()) ||
        veh.tarjetaPropiedadVehiculo
          .toLowerCase()
          .includes(searchVeh.toLowerCase())
    );
    setVehFiltrados(filtered);
    calcularTotalPaginasVehs(filtered);
  };

  // Actualizar la paginacion
  const actualizarVehsPaginados = () => {
    const paginated = vehFiltrados.slice(
      (vehsPageNow - 1) * cantVehsPag,
      vehsPageNow * cantVehsPag
    );
    setVehPaginated(paginated);
  };

  // Llamamos los datos
  useEffect(() => {
    setLoading(true);

    // LLamamos a la "API"
    setTimeout(() => {
      setVehiculos(usuarios);
      setLoading(false);
    }, 1000);
  }, []);

  // Recalculamos despues que el usuario busco un proveedor
  useEffect(() => {
    filtrarVehiculos();
    calcularTotalPaginasVehs(vehFiltrados);
  }, [vehiculos, searchVeh, cantVehsPag]);

  // Recalculamos despues de cambiar la cantidad de proveedores por pagina
  useEffect(() => {
    actualizarVehsPaginados();
  }, [vehFiltrados, cantVehsPag, vehsPageNow]);

  return (
    <AdminContext.Provider
      value={{
        // =========================== Reportes ===========================
        tableActive,
        changeTableActive,
        formEditVehiculo,
        formTrab,
        formEditTrab,
        modalFormUsuarios,
        refModalFormUsuarios,
        openFormUsuarios,
        closeFormUsuarios,
        handleInputChangeTrab,
        handleFileChangeTrab,
        handleSubmitTrab,
        refFotoUsuario,

        // Areas
        areaSeleccionada,
        areasUsuarios,
        refAreasUsuarios,
        modalAreasUsuarios,
        usuarioAreaBlur,
        usuarioAreaSeleccionada,
        handleModalAreas,

        // Cargos
        cargosUsuarios,
        refCargosUsuarios,
        modalCargosUsuarios,
        usuarioCargoBlur,
        usuarioCargoSeleccionado,
        handleModalCargos,

        // Departamento, provincia, distrito
        dptsUsuarios,
        deptUsuario,
        modalDpt,
        refDptUsuario,
        handleModalDpt,
        usuarioDptBlur,
        usuarioSeleccionarDpt,
        provUsuarios,
        provUsuario,
        modalProv,
        refProvUsuario,
        handleModalProv,
        usuarioProvBlur,
        usuarioSeleccionarProv,
        distUsuarios,
        modalDist,
        refDistUsuario,
        handleModalDist,
        usuarioDistBlur,
        usuarioSeleccionarDist,

        loading,
        posting,
        // =========================== Proveedores ===========================
        // Paginacion de Proveedores
        proveedores,
        provsPaginated,
        refCantProvs,
        cantProvsPag,
        modalCantProvs,
        provsPageNow,
        totalPagesProvs,
        maxBtnProvs,
        pageStarProvs,
        pageEndProvs,
        searchProv,
        handleModalCantProvs,
        capturarBusqueda,
        cambiarCantProvsPorPagina,
        cambiarPagina,
        // Formulario de Proveedores
        refModalFormProv,
        modalFormProv,
        openFormProveedor,
        closeFormProveedor,
        formProvs,
        formEditProvs,
        deptProveedor,
        provProveedor,
        handleInputChangeProv,
        submitFormProv,
        refSelectTProv,
        TProvedores,
        selectTProv,
        handleSelectTProv,
        SeleccionarTProv,
        TProvsBlur,
        refSelectTServ,
        TServicios,
        selectTServ,
        handleSelectTServ,
        SeleccionarTServ,
        TServBlur,
        refSelectDist,
        distritos,
        selectDist,
        handleSelectDist,
        SeleccionarDist,
        DistBlur,
        refSelectProv,
        provincias,
        selectProv,
        handleSelectProv,
        SeleccionarProv,
        ProvBlur,
        refSelectDpt,
        departamentos,
        selectDpt,
        handleSelectDpt,
        SeleccionarDpt,
        DptBlur,
        // Paginacion vehiculos
        vehiculos,
        vehPaginated,
        refCantVehs,
        cantVehsPag,
        modalCantVehs,
        vehsPageNow,
        totalPagesVehs,
        maxBtnVehs,
        pageStarVehs,
        pageEndVehs,
        searchVeh,
        handleModalCantVehs,
        capturarBusquedaVeh,
        cambiarCantVehsPorPagina,
        cambiarPaginaVehs,
        // Formulario de vehiculos
        formVeh,
        handleInputChangeVeh,
        handleSubmitVeh,
        refFormVeh,
        modalFormVeh,
        openFormVeh,
        closeFormVeh,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export interface AdminProps {
  tableActive: tableReportes;
  changeTableActive: (table: tableReportes) => void;
  formEditVehiculo: Partial<usuario>;
  formTrab: Partial<usuario>;
  formEditTrab: Partial<usuario>;
  refFotoUsuario: React.RefObject<HTMLInputElement>;
  refModalFormUsuarios: React.RefObject<HTMLDivElement>;
  modalFormUsuarios: boolean;
  openFormUsuarios: (newUser: Partial<usuario>) => () => void;
  closeFormUsuarios: () => void;
  handleInputChangeTrab: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleFileChangeTrab: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitTrab: (e: React.FormEvent<HTMLFormElement>) => void;

  // Departamentos, provincias y distritos
  refDptUsuario: React.RefObject<HTMLDivElement>;
  dptsUsuarios: Departamento[];
  modalDpt: boolean;
  deptUsuario: number | null;
  handleModalDpt: () => void;
  usuarioSeleccionarDpt: (newId: number, newDept: string) => void;
  usuarioDptBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refProvUsuario: React.RefObject<HTMLDivElement>;
  provUsuarios: Provincia[];
  modalProv: boolean;
  provUsuario: number | null;
  handleModalProv: () => void;
  usuarioSeleccionarProv: (newId: number, newProv: string) => void;
  usuarioProvBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refDistUsuario: React.RefObject<HTMLDivElement>;
  distUsuarios: Distrito[];
  modalDist: boolean;
  handleModalDist: () => void;
  usuarioSeleccionarDist: (newDist: string) => void;
  usuarioDistBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // Areas
  areasUsuarios: TProveedor[];
  refAreasUsuarios: React.RefObject<HTMLDivElement>;
  areaSeleccionada: number | null;
  modalAreasUsuarios: boolean;
  handleModalAreas: () => void;
  usuarioAreaSeleccionada: (newId: number, newName: string) => void;
  usuarioAreaBlur: (e: React.FocusEvent<HTMLInputElement>) => void;

  // Cargos
  cargosUsuarios: Cargo[];
  refCargosUsuarios: React.RefObject<HTMLDivElement>;
  modalCargosUsuarios: boolean;
  handleModalCargos: () => void;
  usuarioCargoSeleccionado: (newName: string) => void;
  usuarioCargoBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  // ========================================= PROVEEDORES ==========================================
  loading: boolean;
  posting: boolean;
  proveedores: usuario[];
  provsPaginated: usuario[];
  refCantProvs: React.RefObject<HTMLDivElement>;
  cantProvsPag: number;
  modalCantProvs: boolean;
  provsPageNow: number;
  totalPagesProvs: number;
  maxBtnProvs: number;
  pageStarProvs: number;
  pageEndProvs: number;
  searchProv: string;
  handleModalCantProvs: () => void;
  capturarBusqueda: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cambiarCantProvsPorPagina: (newPerPage: number) => void;
  cambiarPagina: (newPage: number) => void;
  formProvs: Partial<usuario>;
  formEditProvs: Partial<usuario>;
  deptProveedor: number | null;
  provProveedor: number | null;
  refModalFormProv: React.RefObject<HTMLDivElement>;
  modalFormProv: boolean;
  openFormProveedor: (newProveedor: Partial<usuario>) => void;
  closeFormProveedor: () => void;
  handleInputChangeProv: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitFormProv: (e: React.FormEvent<HTMLFormElement>) => void;
  refSelectTProv: React.RefObject<HTMLDivElement>;
  selectTProv: boolean;
  TProvedores: TProveedor[];
  handleSelectTProv: () => void;
  SeleccionarTProv: (newPlaca: string) => void;
  TProvsBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refSelectTServ: React.RefObject<HTMLDivElement>;
  TServicios: TProveedor[];
  selectTServ: boolean;
  handleSelectTServ: () => void;
  SeleccionarTServ: (newPlaca: string) => void;
  TServBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refSelectDpt: React.RefObject<HTMLDivElement>;
  departamentos: Departamento[];
  selectDpt: boolean;
  handleSelectDpt: () => void;
  SeleccionarDpt: (newId: number, newDept: string) => void;
  DptBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refSelectProv: React.RefObject<HTMLDivElement>;
  provincias: Provincia[];
  selectProv: boolean;
  handleSelectProv: () => void;
  SeleccionarProv: (newId: number, newProv: string) => void;
  ProvBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refSelectDist: React.RefObject<HTMLDivElement>;
  distritos: Distrito[];
  selectDist: boolean;
  handleSelectDist: () => void;
  SeleccionarDist: (newDist: string) => void;
  DistBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // ========================================== VEHICULOS ==========================================
  vehiculos: usuario[];
  vehPaginated: usuario[];
  refCantVehs: React.RefObject<HTMLDivElement>;
  cantVehsPag: number;
  modalCantVehs: boolean;
  vehsPageNow: number;
  totalPagesVehs: number;
  maxBtnVehs: number;
  pageStarVehs: number;
  pageEndVehs: number;
  searchVeh: string;
  handleModalCantVehs: () => void;
  capturarBusquedaVeh: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cambiarCantVehsPorPagina: (newPerPage: number) => void;
  cambiarPaginaVehs: (newPage: number) => void;
  // Formulario de vehiculos
  formVeh: Partial<usuario>;
  handleInputChangeVeh: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitVeh: (e: React.FormEvent<HTMLFormElement>) => void;
  refFormVeh: React.RefObject<HTMLDivElement>;
  modalFormVeh: boolean;
  openFormVeh: (veh: Partial<usuario>) => void;
  closeFormVeh: () => void;
}
