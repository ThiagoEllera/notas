import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Produto} from "../../model/produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = 'http://localhost:8080/produto';
  constructor(private httpClient: HttpClient) {}

  lista(){
    return this.httpClient.get<Produto[]>(this.API);
  }


}
