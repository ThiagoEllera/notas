import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estado } from '../interfaces/estado.interface';

@Injectable({
  providedIn: 'root',
})
export class CidadeEstadoService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getEstados(): Observable<Estado[]> {
    return this.httpClient.get<Estado[]>(this.apiUrl + 'v1/localidades/estados');
  }

  getCidadePorEstado(uf: string) {
    return this.httpClient.get<any>(
      `${this.apiUrl}v1/localidades/estados/${uf}/municipios`
    );
  }
}
