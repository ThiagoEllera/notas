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

import {NotaService} from "../../shared/services/nota.service";

import {Nota} from "../../model/nota";
import {NotaItem} from "../../model/notaItem";






@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss']
})
export class NotaComponent implements OnInit{



  lista: Nota [] = [];
  nota: Nota = new Nota();
  notaItem: NotaItem = new NotaItem()
  listaItens: NotaItem[] = [];



  constructor(

    private notaService:NotaService

  ) {
  }

  ngOnInit(): void {
    this.buscaNotas();


  }


  public buscaNotas(): void {
    this.lista = [];
    this.notaService.lista()
      .subscribe((nota: Nota[]) => {
        this.lista = nota;
      });

  }


  onSaved(event: any) {
    event.data;
    console.log(event.data);
    this.notaService.salvar(event.data);
  }

  setaDataItem(value :any) {
    if(!value){
      value = new NotaItem();
    }
    return value;
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
  declarations: [NotaComponent],
  bootstrap: [NotaComponent]
})
export class NotaModule { }
