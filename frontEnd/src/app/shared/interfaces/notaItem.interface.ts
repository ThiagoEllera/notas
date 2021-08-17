import {Notas} from "./nota.interface";
import {Produtos} from "./produto.interface";

export interface NotaItem{
  id : number;
  "nota": Notas,
  "numero": number,
  "produto": Produtos,
  "quantidade": number;

}

