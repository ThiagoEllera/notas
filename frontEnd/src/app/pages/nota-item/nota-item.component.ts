import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import CustomStore from "devextreme/data/custom_store";
import {BrowserModule} from "@angular/platform-browser";
import {DxDataGridModule, DxDateBoxModule, DxListModule} from "devextreme-angular";
import {ProdutoService} from "../../shared/services/produto.service";
import {Produtos} from "../../shared/interfaces/produto.interface";
import {NotaService} from "../../shared/services/nota.service";
import {Notas} from "../../shared/interfaces/nota.interface";


var URL = "http://localhost:8080/notaItem";

@Component({
  selector: 'app-nota-item',
  templateUrl: './nota-item.component.html',
  styleUrls: ['./nota-item.component.scss']
})
export class NotaItemComponent implements OnInit{

  dataSource: any;
  produtos: any;
  notas: any

  constructor(
    private http: HttpClient,
    private produtoService:ProdutoService,
    private notaService:NotaService

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
    this.popularProdutos();
    this.popularNotas();
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
    DxDateBoxModule
  ],
  declarations: [NotaItemComponent],
  bootstrap: [NotaItemComponent]
})
export class NotaItemModule { }
