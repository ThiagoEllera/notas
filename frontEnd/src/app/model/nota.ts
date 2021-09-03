import {Cliente} from "./cliente";
import {NotaItem} from "./notaItem";

export class Nota{

  id!: number;
  dataCompra!: Date;
  cliente!: Cliente;
  numero!: number;
  itens!: NotaItem [];
}
