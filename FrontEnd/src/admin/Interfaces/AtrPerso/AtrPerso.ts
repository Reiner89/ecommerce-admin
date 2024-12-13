export interface TipoProd {
  nameTipoProd: string;
  atrList: AtrPerso[];
}

export interface AtrPerso {
  id: number;
  nameAtr: string;
  genNameVariante: boolean;
  isColor: boolean;
  whiOpciones: boolean;
}
