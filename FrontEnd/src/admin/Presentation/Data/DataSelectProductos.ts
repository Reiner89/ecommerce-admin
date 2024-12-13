export interface TipoProducto {
  id: number;
  tipo: string;
}

export interface MarcaProducto {
  id: number;
  marca: string;
}

export interface VarianteD {
  id: number;
  variante: string;
}

export interface Asociado {
  id: number;
  asociado: string;
}

export const dataAsociadosPor: Asociado[] = [
  { id: 1, asociado: "Producto" },
  { id: 2, asociado: "Variante" },
];

export const Variantes: Record<number, VarianteD[]> = {
  1: [
    { id: 1, variante: "Variante A1" },
    { id: 2, variante: "Variante B1" },
  ],
  2: [
    { id: 1, variante: "Variante A2" },
    { id: 2, variante: "Variante B2" },
  ],
  3: [
    { id: 1, variante: "Variante A3" },
    { id: 1, variante: "Variante B3" },
  ],
};

export const Tipos = [
  {
    id: 1,
    name: "Electrónica",
  },
  {
    id: 2,
    name: "Ropa",
  },
];

export const Marca = [
  {
    id: 1,
    name: "Sin Marca",
  },
  {
    id: 2,
    name: "Samsung",
  },
];

export const colores = [
  {
    id: 1,
    color: "rgb(255,255,255)",
    nombre: "Blanco",
  },
  {
    id: 2,
    color: "rgb(0,0,0)",
    nombre: "Negro",
  },
  {
    id: 3,
    color: "rgb(253,25,25)",
    nombre: "Rojo",
  },
  {
    id: 4,
    color: "rgb(215,215,168)",
    nombre: "Beige",
  },
  {
    id: 5,
    color: "rgb(12_28_140)",
    nombre: "Azul",
  },
];

export interface Opcion {
  id: number;
  name: string;
}

export interface Variantes {
  id: number;
}

export const cereales = [
  { id: 1, name: "1" },
  { id: 2, name: "2 " },
  { id: 3, name: "3" },
];
