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
  apiUrl = environment.apiUrl;


  constructor(private httpClient: HttpClient) {}

  lista(){
    return this.httpClient.get<Notas[]>(this.apiUrl + 'nota/');
  }

  public listarId(id: string) {
    return this.httpClient.get<Notas>(`${this.apiUrl} + nota/${id}`);
  }

  criar(nota : Notas){
    return this.httpClient.post<Notas>(this.apiUrl + 'nota/', nota);
  }

  public atualizar(nota : Notas) {
    return this.httpClient.put<Notas>(this.apiUrl + 'nota/', nota);
  }
   public deletar(id: string) {
     return this.httpClient.delete<Notas>(`${this.apiUrl} + nota/${id}`);
   }

}
