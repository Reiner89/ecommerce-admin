export const Paises: Pais[] = [
  { id: 1, name: "Perú" },
  { id: 2, name: "Colombia" },
  { id: 3, name: "Venezuela" },
  { id: 4, name: "Brasil" },
];

export const Ciudades: Ciudad[] = [
  { id: 1, idPais: 1, name: "Lima" },
  { id: 2, idPais: 1, name: "Cusco" },
  { id: 3, idPais: 1, name: "Arequipa" },
  { id: 4, idPais: 2, name: "Bogotá" },
  { id: 5, idPais: 2, name: "Medellín" },
  { id: 6, idPais: 2, name: "Cali" },
  { id: 7, idPais: 3, name: "Caracas" },
  { id: 8, idPais: 3, name: "San Martin" },
  { id: 9, idPais: 3, name: "Maracaibo" },
  { id: 10, idPais: 4, name: "Brasília" },
  { id: 11, idPais: 4, name: "Cundinamarca" },
  { id: 12, idPais: 4, name: "Sao Paulo" },
];

export const Departamentos: Departamento[] = [
  { id: 1, name: "Amazonas" },
  { id: 2, name: "Ancash" },
  { id: 3, name: "Apurimac" },
  { id: 4, name: "Arequipa" },
  { id: 5, name: "Ayacucho" },
  { id: 6, name: "Cajamarca" },
  { id: 7, name: "Callao" },
  { id: 8, name: "Cusco" },
];

export const Provincias: Provincia[] = [
  { idDep: 1, id: 1, name: "Chachapoyas" },
  { idDep: 1, id: 2, name: "Bagua" },
  { idDep: 1, id: 3, name: "Bongara" },
  { idDep: 1, id: 4, name: "Condorcanqui" },
  { idDep: 1, id: 5, name: "Luya" },
  { idDep: 1, id: 6, name: "Rodriguez de Mendoza" },
  { idDep: 1, id: 7, name: "Utcubamba" },
  { idDep: 2, id: 8, name: "Huaraz" },
  { idDep: 2, id: 9, name: "Aija" },
  { idDep: 2, id: 10, name: "Antonio Raymondi" },
  { idDep: 2, id: 11, name: "Asunción" },
  { idDep: 2, id: 12, name: "Bolognesi" },
  { idDep: 2, id: 13, name: "Caraparo" },
  { idDep: 2, id: 14, name: "Caraz" },
  { idDep: 2, id: 15, name: "Carhuaz" },
  { idDep: 2, id: 16, name: "Casma" },
  { idDep: 2, id: 17, name: "Corongo" },
  { idDep: 2, id: 18, name: "Huari" },
  { idDep: 2, id: 19, name: "Huarmey" },
  { idDep: 2, id: 20, name: "Huaylas" },
  { idDep: 2, id: 21, name: "Mariscal Luzuriaga" },
  { idDep: 2, id: 22, name: "Ocros" },
  { idDep: 2, id: 23, name: "Pallasca" },
  { idDep: 2, id: 24, name: "Pomabamba" },
  { idDep: 2, id: 25, name: "Recuay" },
];

export const Distritos: Distrito[] = [
  { idProv: 1, id: 1, name: "Chachapoyas" },
  { idProv: 1, id: 2, name: "Asunción" },
  { idProv: 1, id: 3, name: "Balsas" },
  { idProv: 1, id: 4, name: "Cheto" },
  { idProv: 1, id: 5, name: "Chiliquin" },
  { idProv: 1, id: 6, name: "Chuquibamba" },
  { idProv: 1, id: 7, name: "Granada" },
  { idProv: 1, id: 8, name: "Huancas" },
  { idProv: 1, id: 9, name: "La Jalca" },
  { idProv: 2, id: 10, name: "Leimebamba" },
  { idProv: 2, id: 11, name: "Llapo" },
  { idProv: 2, id: 12, name: "Moyobamba" },
  { idProv: 2, id: 13, name: "Parameri" },
  { idProv: 2, id: 14, name: "Pozuzo" },
  { idProv: 2, id: 15, name: "Quimbaya" },
  { idProv: 2, id: 16, name: "Quillacollo" },
  { idProv: 2, id: 17, name: "Sapallanga" },
  { idProv: 2, id: 18, name: "Sicaya" },
];

export interface Departamento {
  id: number;
  name: string;
}

export interface Provincia {
  idDep: number;
  id: number;
  name: string;
}

export interface Distrito {
  idProv: number;
  id: number;
  name: string;
}

export interface Pais {
  id: number;
  name: string;
}

export interface Ciudad {
  id: number;
  idPais: number;
  name: string;
}
