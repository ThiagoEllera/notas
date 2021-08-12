import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import CustomStore from "devextreme/data/custom_store";
import {BrowserModule} from "@angular/platform-browser";
import {DxDataGridModule, DxDateBoxModule, DxListModule} from "devextreme-angular";
import {Produtos} from "../../shared/interfaces/produto.interface";
import {ClienteService} from "../../shared/services/cliente.service";
import {Clientes} from "../../shared/interfaces/cliente.interface";

var URL = "http://localhost:8080/nota";

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss']
})
export class NotaComponent implements OnInit{

  dataSource: any;
  clientes: any;




  constructor(
    private http: HttpClient,
    private clienteService:ClienteService

  ) {
    this.dataSource = new CustomStore({
      key: "id",

      load: () => this.sendRequest(URL),
      insert: (values) => this.sendRequest(URL , "POST", values),
      update: (key, values) => this.sendRequest(URL , "PUT", {
        key,
        values
      }),
      remove: (key) => this.sendRequest(URL, "DELETE", {
        key
      })
    });

  }
  sendRequest(url: string, method: string = "GET", data: any = {}): any {

    let result: any;

    switch(method) {
      case "GET":
        result = this.http.get( url);
        break;
      case "PUT":
        result = this.http.put(`${url}/${data.key}`, data.values);
        break;
      case "POST":
        result = this.http.post(url, data);
        console.log(result);
        break;
      case "DELETE":
        result = this.http.delete(`${url}/${data.key}`);
        break;
    }


    return result
      .toPromise()
      .then((data: any) => {
        console.log(data);
        return data;
      })

  }
  ngOnInit(): void {
    this.popularClientes();

  }
  popularClientes(){
    this.clienteService.lista().subscribe((clientes: Clientes[]) =>{
      this.clientes = clientes;
      console.log(clientes);
    })
  }


}


@NgModule({
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxListModule,
    HttpClientModule,
    DxDateBoxModule
  ],
  declarations: [NotaComponent],
  bootstrap: [NotaComponent]
})
export class NotaModule { }
