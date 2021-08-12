import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Estado} from "../interfaces/estado.interface";
import {Produtos} from "../interfaces/produto.interface";
import {take} from "rxjs/operators";
import {Notas} from "../interfaces/nota.interface";
import {Clientes} from "../interfaces/cliente.interface";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = 'http://localhost:8080/cliente';
  constructor(private httpClient: HttpClient) {}

  lista(){
    return this.httpClient.get<Clientes[]>(this.API);
  }


}
