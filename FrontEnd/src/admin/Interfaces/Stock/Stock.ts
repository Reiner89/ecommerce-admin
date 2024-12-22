export interface Recepcion {
  recepId: number;
  recepcionDocumento: string;
  recepTipo: string;
  recepMarca: string;
  recepProd: string;
  recepColor: string;
  recepNumDoc: string;
  recepUMedida: string;
  recepCantIng: number;
  recepCostUnit: number;
  recepComment: string;
  tipoSereal: number;
}

export interface Consumo {
  idConsumido: number;
  consumoTipo: string;
  consumoNroDocumento: string;
  consumoProd: string;
  consumoUMProd: string;
  consumoCant: number;
  consumoNota: string;
  consumoTipoSereal: number;
  consumoLote: string;
  consumoFechaVigencia: string;
}

export interface Unidad {
  unidadId: number;
  unidadNombre: string;
}

// Unidades de medida
export const Unidades: Unidad[] = [
  { unidadId: 1, unidadNombre: "Unidad" },
  { unidadId: 2, unidadNombre: "Kilogramo" },
  { unidadId: 3, unidadNombre: "Litro" },
  { unidadId: 4, unidadNombre: "Kilometro" },
  { unidadId: 5, unidadNombre: "Metro" },
  { unidadId: 6, unidadNombre: "Milímetro" },
];

export interface HMovimiento {
  HMId: number;
  HMProducto: string;
  HMEstado: string;
  HMTipoDocumento: string;
  HMTipoConsumo: string;
  HMUnidadMedida: string;
  HMCantidad: string;
  HMConsumoDesde: string;
  HMConsumoHasta: string;
}
