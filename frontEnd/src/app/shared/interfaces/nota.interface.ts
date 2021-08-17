import {NotaItem} from "./notaItem.interface";

export interface Notas{
  id : number;
  "dataCompra": Date,
  "numero": number,
  "nomeCliente": string
  "notaItems": NotaItem [];

}

