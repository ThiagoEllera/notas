import {Nota} from "./nota";
import {Produto} from "./produto";


export class NotaItem{

  id !: number;
  nota!: Nota;
  numero!: number;
  produto!: Produto;
  quantidade!: number;
}
