import ImgUser from "../../../../../assets/FotoUsuario.webp";

// Arreglo de reseñas
export const reseñas = [
  {
    id: 1,
    nombre: "Reseñas Positivas",
    representanteProveedor: "Reseñas Positivas",
    porcentaje: 80,
  },
  {
    id: 2,
    nombre: "Reseñas Neutrales",
    representanteProveedor: "Reseñas Neutrales",
    porcentaje: 50,
  },
  {
    id: 3,
    nombre: "Reseñas Negativas",
    representanteProveedor: "Reseñas Negativas",
    porcentaje: 20,
  },
];

export interface usuario {
  id: number;
  fotoUsuario: File | string | null;
  DNIUsuario: string;
  nombreUsuario: string;
  apellidosUsuario: string;
  emailUsuario: string;
  claveUsuario: string;
  telefonoUsuario: string;
  direccionUsuario: string;
  departamentoUsuario: string;
  provinciaUsuario: string;
  distritoUsuario: string;
  areaUsuario: string;
  cargoUsuario: string;
  twitterUsuario: string;
  facebookUsuario: string;
  instagramUsuario: string;
  fechaUsuario: string;
  emailCorporativoUsuario: string;
  biografiaUsuario: string;
  departamentoProveedor: string;
  provinciaProveedor: string;
  distritoProveedor: string;
  DNIRUCProveedor: string;
  razonSocialProveedor: string;
  representanteProveedor: string;
  claveProveedor: string;
  tipoProveedor: string;
  tipoServicioProveedor: string;
  direccionProveedor: string;
  referenciasProveedor: string;
  referencias: string;
  telefonoProveedor: string;
  emailProveedor: string;
  contactoProveedor: string;
  placaVehiculo: string;
  tipoVehiculo: string;
  nSerieVehiculo: string;
  soatVehiculo: string;
  vigenciasDesdeVehiculo: string;
  vigenciaHastaVehiculo: string;
  ultRevisionVehiculo: string;
  vencimientoSoatVehiculo: string;
  tarjetaPropiedadVehiculo: string;
  validoVehiculo: boolean;
}

// Arreglo de usuarios
export const usuarios: usuario[] = [
  {
    id: 43431,
    fotoUsuario: ImgUser,
    nombreUsuario: "Danfer Axel",
    apellidosUsuario: "Moriano Sanchez",
    representanteProveedor: "Danfer Moriano",
    areaUsuario: "Front-End Developer",
    cargoUsuario: "Trabajador",
    emailUsuario: "danfermoriano@gmail.com",
    emailProveedor: "danfermoriano@gmail.com",
    fechaUsuario: "2024-01-31",
    departamentoUsuario: "Lima",
    provinciaUsuario: "Lima",
    distritoUsuario: "Los Olivos",
    departamentoProveedor: "Lima",
    provinciaProveedor: "Lima",
    distritoProveedor: "Los Olivos",
    DNIRUCProveedor: "12345678",
    razonSocialProveedor: "Danfer Services SAC",
    claveProveedor: "clave123",
    tipoProveedor: "Individual",
    tipoServicioProveedor: "Desarrollo de software",
    direccionProveedor: "Calle Falsa 123",
    direccionUsuario: "Calle Falsa 123",
    referenciasProveedor: "Cerca del parque central",
    referencias: "Cerca del parque central",
    telefonoProveedor: "987654321",
    telefonoUsuario: "987654321",
    contactoProveedor: "José Moriano",
    placaVehiculo: "ABC-123",
    tipoVehiculo: "Sedán",
    nSerieVehiculo: "SN123456789",
    soatVehiculo: "SOAT2024",
    vigenciasDesdeVehiculo: "2024-01-01",
    vigenciaHastaVehiculo: "2024-12-31",
    ultRevisionVehiculo: "2024-06-15",
    vencimientoSoatVehiculo: "2024-12-31",
    tarjetaPropiedadVehiculo: "TARJ123456",
    validoVehiculo: true,
    claveUsuario: "clave123",
    DNIUsuario: "12345678901",
    biografiaUsuario:
      "Soy una apasionada del diseño UX/UI. Me encanta crear interfaces intuitivas y atractivas.",
    twitterUsuario: "@mariafdez",
    facebookUsuario: "maria.fernanda.lopez",
    instagramUsuario: "maria_fdez_design",
    emailCorporativoUsuario: "maria.fernanda@mfd.com",
  },
  {
    id: 43432,
    fotoUsuario: ImgUser,
    nombreUsuario: "Sergio Jose",
    apellidosUsuario: "Ramos Rodriguez",
    representanteProveedor: "Sergio Ramos",
    areaUsuario: "Back-End Developer",
    cargoUsuario: "Trabajador",
    emailUsuario: "sergiom@gmail.com",
    emailProveedor: "sergiom@gmail.com",
    fechaUsuario: "2024-10-30",
    departamentoUsuario: "Lima",
    provinciaUsuario: "Lima",
    distritoUsuario: "Comas",
    departamentoProveedor: "Lima",
    provinciaProveedor: "Lima",
    distritoProveedor: "Comas",
    DNIRUCProveedor: "87654321",
    razonSocialProveedor: "Sergio Dev Solutions",
    claveProveedor: "clave456",
    tipoProveedor: "Empresa",
    tipoServicioProveedor: "Backend y APIs",
    direccionProveedor: "Av. Siempre Viva 456",
    direccionUsuario: "Av. Siempre Viva 456",
    referenciasProveedor: "Frente a la estación del tren",
    referencias: "Frente a la estación del tren",
    telefonoProveedor: "987654322",
    telefonoUsuario: "987654322",
    contactoProveedor: "Luis Ramos",
    placaVehiculo: "XYZ-456",
    tipoVehiculo: "SUV",
    nSerieVehiculo: "SN987654321",
    soatVehiculo: "SOAT2024",
    vigenciasDesdeVehiculo: "2024-03-01",
    vigenciaHastaVehiculo: "2025-02-28",
    ultRevisionVehiculo: "2024-08-10",
    vencimientoSoatVehiculo: "2025-03-01",
    tarjetaPropiedadVehiculo: "TARJ789101",
    validoVehiculo: true,
    claveUsuario: "clave123",
    DNIUsuario: "12345678901",
    biografiaUsuario:
      "Soy una apasionada del diseño UX/UI. Me encanta crear interfaces intuitivas y atractivas.",
    twitterUsuario: "@mariafdez",
    facebookUsuario: "maria.fernanda.lopez",
    instagramUsuario: "maria_fdez_design",
    emailCorporativoUsuario: "maria.fernanda@mfd.com",
  },
  {
    id: 43433,
    fotoUsuario: ImgUser,
    nombreUsuario: "David Reiner",
    apellidosUsuario: "Alayo Llaury",
    representanteProveedor: "David Reiner",
    areaUsuario: "Full-Stack Developer",
    cargoUsuario: "Trabajador",
    emailUsuario: "davidreiner@gmail.com",
    emailProveedor: "davidreiner@gmail.com",
    fechaUsuario: "2024-06-29",
    departamentoUsuario: "Lima",
    provinciaUsuario: "Lima",
    distritoUsuario: "Miraflores",
    departamentoProveedor: "Lima",
    provinciaProveedor: "Lima",
    distritoProveedor: "Miraflores",
    DNIRUCProveedor: "54321678",
    razonSocialProveedor: "Reiner Solutions",
    claveProveedor: "clave789",
    tipoProveedor: "Consultor",
    tipoServicioProveedor: "Desarrollo full-stack",
    direccionProveedor: "Av. Pardo 789",
    direccionUsuario: "Av. Pardo 789",
    referenciasProveedor: "Al costado del supermercado",
    referencias: "Al costado del supermercado",
    telefonoProveedor: "987654323",
    telefonoUsuario: "987654323",
    contactoProveedor: "Carlos Reiner",
    placaVehiculo: "LMN-789",
    tipoVehiculo: "Pickup",
    nSerieVehiculo: "SN123654987",
    soatVehiculo: "SOAT2024",
    vigenciasDesdeVehiculo: "2024-05-01",
    vigenciaHastaVehiculo: "2025-04-30",
    ultRevisionVehiculo: "2024-07-15",
    vencimientoSoatVehiculo: "2025-05-01",
    tarjetaPropiedadVehiculo: "TARJ456789",
    validoVehiculo: false,
    claveUsuario: "clave123",
    DNIUsuario: "12345678901",
    biografiaUsuario:
      "Soy una apasionada del diseño UX/UI. Me encanta crear interfaces intuitivas y atractivas.",
    twitterUsuario: "@mariafdez",
    facebookUsuario: "maria.fernanda.lopez",
    instagramUsuario: "maria_fdez_design",
    emailCorporativoUsuario: "maria.fernanda@mfd.com",
  },
  {
    id: 43434,
    fotoUsuario: ImgUser,
    nombreUsuario: "Xander Antonio",
    apellidosUsuario: "Almeira Almeira",
    representanteProveedor: "Xander Almeira",
    areaUsuario: "Full-Stack Developer",
    cargoUsuario: "Usuario",
    emailUsuario: "xanderalmeira@gmail.com",
    emailProveedor: "xanderalmeira@gmail.com",
    fechaUsuario: "2024-11-30",
    departamentoUsuario: "Lima",
    provinciaUsuario: "Lima",
    distritoUsuario: "San Isidro",
    departamentoProveedor: "Lima",
    provinciaProveedor: "Lima",
    distritoProveedor: "San Isidro",
    DNIRUCProveedor: "10293847",
    razonSocialProveedor: "Xander Tech",
    claveProveedor: "clave321",
    tipoProveedor: "Freelancer",
    tipoServicioProveedor: "Desarrollo web",
    direccionProveedor: "Jr. Lima 123",
    direccionUsuario: "Jr. Lima 123",
    referenciasProveedor: "Cerca del centro comercial",
    referencias: "Cerca del centro comercial",
    telefonoProveedor: "987654324",
    telefonoUsuario: "987654324",
    contactoProveedor: "Ricardo Almeira",
    placaVehiculo: "JKL-012",
    tipoVehiculo: "Van",
    nSerieVehiculo: "SN654123098",
    soatVehiculo: "SOAT2024",
    vigenciasDesdeVehiculo: "2024-04-01",
    vigenciaHastaVehiculo: "2025-03-31",
    ultRevisionVehiculo: "2024-09-20",
    vencimientoSoatVehiculo: "2025-04-01",
    tarjetaPropiedadVehiculo: "TARJ321654",
    validoVehiculo: true,
    claveUsuario: "clave123",
    DNIUsuario: "12345678901",
    biografiaUsuario:
      "Soy una apasionada del diseño UX/UI. Me encanta crear interfaces intuitivas y atractivas.",
    twitterUsuario: "@mariafdez",
    facebookUsuario: "maria.fernanda.lopez",
    instagramUsuario: "maria_fdez_design",
    emailCorporativoUsuario: "maria.fernanda@mfd.com",
  },
  {
    id: 43435,
    fotoUsuario: ImgUser,
    nombreUsuario: "Roberth Anres",
    apellidosUsuario: "Torres Torres",
    representanteProveedor: "Roberth Torres",
    areaUsuario: "Back-End Developer",
    cargoUsuario: "Trabajador",
    emailUsuario: "roberthtorres@gmail.com",
    emailProveedor: "roberthtorres@gmail.com",
    fechaUsuario: "2024-12-31",
    departamentoUsuario: "Lima",
    provinciaUsuario: "Lima",
    distritoUsuario: "San Borja",
    departamentoProveedor: "Lima",
    provinciaProveedor: "Lima",
    distritoProveedor: "San Borja",
    DNIRUCProveedor: "67483921",
    razonSocialProveedor: "Torres Innovations",
    claveProveedor: "clave654",
    tipoProveedor: "Empresa",
    tipoServicioProveedor: "Servicios backend",
    direccionProveedor: "Jr. Las Flores 456",
    direccionUsuario: "Jr. Las Flores 456",
    referenciasProveedor: "Detrás del hospital",
    referencias: "Detrás del hospital",
    telefonoProveedor: "987654325",
    telefonoUsuario: "987654325",
    contactoProveedor: "Pedro Torres",
    placaVehiculo: "GHI-345",
    tipoVehiculo: "Camión",
    nSerieVehiculo: "SN987321654",
    soatVehiculo: "SOAT2024",
    vigenciasDesdeVehiculo: "2024-03-01",
    vigenciaHastaVehiculo: "2025-02-28",
    ultRevisionVehiculo: "2024-08-10",
    vencimientoSoatVehiculo: "2025-03-01",
    tarjetaPropiedadVehiculo: "TARJ987321",
    validoVehiculo: false,
    claveUsuario: "clave123",
    DNIUsuario: "12345678901",
    biografiaUsuario:
      "Soy una apasionada del diseño UX/UI. Me encanta crear interfaces intuitivas y atractivas.",
    twitterUsuario: "@mariafdez",
    facebookUsuario: "maria.fernanda.lopez",
    instagramUsuario: "maria_fdez_design",
    emailCorporativoUsuario: "maria.fernanda@mfd.com",
  },
  {
    id: 43436,
    fotoUsuario: ImgUser,
    nombreUsuario: "Misael Frank",
    apellidosUsuario: "Berrospi Berrospi",
    representanteProveedor: "Misael Berrospi",
    areaUsuario: "Front-End Developer",
    cargoUsuario: "Usuario",
    emailUsuario: "misaelberrospi@gmail.com",
    emailProveedor: "misaelberrospi@gmail.com",
    fechaUsuario: "2025-01-31",
    departamentoUsuario: "Lima",
    provinciaUsuario: "Lima",
    distritoUsuario: "San Isidro",
    departamentoProveedor: "Lima",
    provinciaProveedor: "Lima",
    distritoProveedor: "San Isidro",
    DNIRUCProveedor: "93847561",
    razonSocialProveedor: "Berrospi Web Services",
    claveProveedor: "clave987",
    tipoProveedor: "Freelancer",
    tipoServicioProveedor: "Desarrollo frontend",
    direccionProveedor: "Av. Primavera 987",
    direccionUsuario: "Av. Primavera 987",
    referenciasProveedor: "Frente a la universidad",
    referencias: "Frente a la universidad",
    telefonoProveedor: "987654326",
    telefonoUsuario: "987654326",
    contactoProveedor: "María Berrospi",
    placaVehiculo: "DEF-678",
    tipoVehiculo: "SUV",
    nSerieVehiculo: "SN456789123",
    soatVehiculo: "SOAT2024",
    vigenciasDesdeVehiculo: "2024-06-02",
    vigenciaHastaVehiculo: "2025-05-31",
    ultRevisionVehiculo: "2024-10-15",
    vencimientoSoatVehiculo: "2025-06-02",
    tarjetaPropiedadVehiculo: "TARJ654987",
    validoVehiculo: false,
    claveUsuario: "clave123",
    DNIUsuario: "12345678901",
    biografiaUsuario:
      "Soy una apasionada del diseño UX/UI. Me encanta crear interfaces intuitivas y atractivas.",
    twitterUsuario: "@mariafdez",
    facebookUsuario: "maria.fernanda.lopez",
    instagramUsuario: "maria_fdez_design",
    emailCorporativoUsuario: "maria.fernanda@mfd.com",
  },
];

export interface TProveedor {
  id: number;
  name: string;
}

export interface Cargo extends TProveedor {
  idAsociado: number;
}

export const TipProveedores: TProveedor[] = [
  { id: 1, name: "Ventas al por Mayor" },
  { id: 2, name: "Ventas al por Menor" },
];

export const TipServicios: TProveedor[] = [
  { id: 1, name: "Terrestre" },
  { id: 2, name: "Aereo" },
];

export const Areas: TProveedor[] = [
  { id: 1, name: "Operaciones" },
  { id: 2, name: "Sistemas" },
  { id: 3, name: "DEVOPS" },
  { id: 4, name: "Operaciones" },
];

export const Cargos: Cargo[] = [
  { id: 1, name: "Auxiliar", idAsociado: 4 },
  { id: 2, name: "Supervisor", idAsociado: 4 },
  { id: 3, idAsociado: 2, name: "Administrador de Sistema" },
  { id: 4, idAsociado: 2, name: "Desarrollador" },
  { id: 5, idAsociado: 1, name: "Desarrollador" },
  { id: 6, idAsociado: 1, name: "Supervisor" },
  { id: 7, idAsociado: 1, name: "Auxiliar" },
];
