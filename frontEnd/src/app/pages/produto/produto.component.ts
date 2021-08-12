import {Component, NgModule, OnInit} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';
import CustomStore from "devextreme/data/custom_store";
import {DxListModule} from "devextreme-angular";



var URL = "http://localhost:8080/produto";



@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  preserveWhitespaces: true
})
export class ProdutoComponent {


  dataSource: any;




    constructor(
    private http: HttpClient,

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

        return data;

      })

  }


}


@NgModule({
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxListModule,
    HttpClientModule
  ],
  declarations: [ProdutoComponent],
  bootstrap: [ProdutoComponent]
})
export class ProdutoModule { }
