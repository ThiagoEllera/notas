import {AfterViewInit, Component, NgModule, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import CustomStore from "devextreme/data/custom_store";
import {BrowserModule} from "@angular/platform-browser";
import {
  DxButtonModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxListModule,
  DxTemplateHost,
  DxTemplateModule
} from "devextreme-angular";
import {Produtos} from "../../shared/interfaces/produto.interface";
import {ClienteService} from "../../shared/services/cliente.service";
import {Clientes} from "../../shared/interfaces/cliente.interface";
import {ProdutoService} from "../../shared/services/produto.service";
import {Notas} from "../../shared/interfaces/nota.interface";
import {NotaService} from "../../shared/services/nota.service";
import {NotaDetalhesComponent} from "./nota-detalhes/nota-detalhes.component";


var URL = "http://localhost:8080/nota";
var URL2 = "http://localhost:8080/notaItem";

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss']
})
export class NotaComponent implements OnInit,AfterViewInit{

  dataSource: Notas[] = [];
  dataSource2: any;
  clientes: any;
  produtos: any;
  notas: any;



  constructor(
    private http: HttpClient,
    private clienteService:ClienteService,
    private produtoService:ProdutoService,
    private notaService:NotaService

  ) {

/*
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
*/

  }

  sendRequest(url: string, method: string = "GET", data: any = {}): any {

    let result: any;


    switch (method) {
      case "GET":
        result = this.http.get(url);
        break;
      case "PUT":
        result = this.http.put(`${url}/${data.key}`, data.values);
        break;
      case "POST":
        result = this.http.post(url, data);
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
    this.popularProdutos();
    this.popularNotas();


  }

  ngAfterViewInit() {
    this.popularClientes();
    this.popularProdutos();
    this.popularNotas();
  }
  popularClientes(){
    this.clienteService.lista().subscribe((clientes: Clientes[]) =>{
      this.clientes = clientes;
      console.log(clientes);
    })
  }
  popularProdutos(){
    this.produtoService.lista().subscribe((produtos: Produtos[]) =>{
      this.produtos = produtos;
      console.log(produtos);
    })

  }

  popularNotas(){
    this.notaService.lista().subscribe((notas: Notas[]) =>{
      this.notas = notas;
      console.log(notas);
    })
  }




}


@NgModule({
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxListModule,
    HttpClientModule,
    DxDateBoxModule,
    DxTemplateModule,
    DxButtonModule
  ],
  declarations: [NotaComponent, NotaDetalhesComponent],
  bootstrap: [NotaComponent]
})
export class NotaModule { }
