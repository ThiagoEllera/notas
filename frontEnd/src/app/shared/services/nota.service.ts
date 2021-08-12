import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Estado} from "../interfaces/estado.interface";
import {Produtos} from "../interfaces/produto.interface";
import {take} from "rxjs/operators";
import {Notas} from "../interfaces/nota.interface";

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  private readonly API = 'http://localhost:8080/nota';
  constructor(private httpClient: HttpClient) {}

  lista(){
    return this.httpClient.get<Notas[]>(this.API);
  }


}
