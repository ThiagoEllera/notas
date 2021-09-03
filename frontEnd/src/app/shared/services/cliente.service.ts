import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Cliente} from "../../model/cliente";


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = 'http://localhost:8080/cliente';
  constructor(private httpClient: HttpClient) {}

  lista(){
    return this.httpClient.get<Cliente[]>(this.API);
  }


}
