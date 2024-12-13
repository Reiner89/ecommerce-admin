// Tipos será el select principal
export const tipos = [
  { id: 1, nombre: "Tecnología" },
  { id: 2, nombre: "ElectroHogar" },
  { id: 3, nombre: "Calzado" },
  { id: 4, nombre: "Relojes" },
  { id: 5, nombre: "DermoCosmética" },
  { id: 6, nombre: "Juguetes" },
  { id: 7, nombre: "Celulares" },
];

// Segun el tipo elegido se filtrarán las marcas
export const marcas: IMarcas[] = [
  { id: 1, nombre: "Apple", tipo: 1 },
  { id: 2, nombre: "Samsung", tipo: 1 },
  { id: 3, nombre: "Sony", tipo: 1 },
  { id: 4, nombre: "LG", tipo: 1 },
  { id: 5, nombre: "Philips", tipo: 2 },
  { id: 6, nombre: "Whirlpool", tipo: 2 },
  { id: 7, nombre: "Bosch", tipo: 2 },
  { id: 8, nombre: "Nike", tipo: 3 },
  { id: 9, nombre: "Adidas", tipo: 3 },
  { id: 10, nombre: "Reebok", tipo: 3 },
  { id: 11, nombre: "Fossil", tipo: 4 },
];

export interface IMarcas {
  id: number;
  nombre: string;
  tipo: number;
}

export interface ITipos {
  id: number;
  nombre: string;
}
