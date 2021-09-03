import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {DxButtonModule, DxDataGridModule, DxDateBoxModule, DxListModule, DxTemplateModule} from "devextreme-angular";

import {NotaService} from "../../shared/services/nota.service";

import {Nota} from "../../model/nota";
import {NotaItem} from "../../model/notaItem";
import {FirstKeysToConsoleModule} from "../../shared/pipe/first.keys.to.console.pipe";


@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss']
})
export class NotaComponent implements OnInit {


  lista: Nota [] = [];
  nota: Nota = new Nota();
  notaItem: NotaItem = new NotaItem()
  listaItens: NotaItem[] = [];


  constructor(private notaService: NotaService) {

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
/*
    event.data;
    console.log(event.data);
    this.notaService.salvar(event.data);
*/
  }

  setaDataItem(value: any) {
    if (!value) {
      value = new Array<NotaItem>();
    }
    return value;
  }

  onInitNewRowItens(event: any, data: any) {
    debugger
  }

  onInitNewRowGrid(event: any) {
    if (!event.value) {
      event.value = new Nota();
      event.value.itens = [];
    }
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
    DxButtonModule,
    FirstKeysToConsoleModule
  ],
  declarations: [NotaComponent],
  bootstrap: [NotaComponent]
})
export class NotaModule {
}
