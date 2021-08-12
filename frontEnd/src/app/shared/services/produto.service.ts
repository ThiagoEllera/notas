import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Estado} from "../interfaces/estado.interface";
import {Produtos} from "../interfaces/produto.interface";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = 'http://localhost:8080/produto';
  constructor(private httpClient: HttpClient) {}

  lista(){
    return this.httpClient.get<Produtos[]>(this.API);
  }


}
