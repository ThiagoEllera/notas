import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Nota} from "../../model/nota";


@Injectable({
  providedIn: 'root'
})
export class NotaService {
  apiUrl = environment.apiUrl;


  constructor(private httpClient: HttpClient) {}

  lista(){
    return this.httpClient.get<Nota[]>(this.apiUrl + 'nota/');
  }

  public listarId(id: string) {
    return this.httpClient.get<Nota>(`${this.apiUrl} + nota/${id}`);
  }

  criar(nota : Nota){
    return this.httpClient.post<Nota>(this.apiUrl + 'nota/', nota);
  }

  public atualizar(nota : Nota) {
    return this.httpClient.put<Nota>(this.apiUrl + 'nota/', nota);
  }
   public deletar(id: string) {
     return this.httpClient.delete<Nota>(`${this.apiUrl} + nota/${id}`);
   }


  salvar(nota: Nota): Observable<Nota>{
    let naoTemId = nota.id==null || typeof nota.id==='undefined';
    if(naoTemId){
      return this.criar(nota);
    }
    else{
      return this.atualizar(nota);
    }
  }

}
