import {Component, Input, AfterViewInit, NgModule, OnInit} from '@angular/core';
import {NotaItemService} from "../../../shared/services/nota-item.service";
import DataSource from "devextreme/data/data_source";
import ArrayStore from "devextreme/data/array_store";
import {BrowserModule} from "@angular/platform-browser";
import {DxButtonModule, DxDataGridModule, DxDateBoxModule, DxListModule, DxTemplateModule} from "devextreme-angular";
import {HttpClientModule} from "@angular/common/http";
import {NotaComponent} from "../nota.component";
import {Produtos} from "../../../shared/interfaces/produto.interface";

@Component({
  selector: 'app-nota-detalhes',
  templateUrl: './nota-detalhes.component.html',
  styleUrls: ['./nota-detalhes.component.scss']
})
export class NotaDetalhesComponent implements AfterViewInit,OnInit {



  @Input() key!: number;
  tasksDataSource!: DataSource
  itens: any;
  tasks!: [];

  constructor(private notaItemservice: NotaItemService) {


  }
  ngOnInit(): void {
    this.popularitens();
  }
  ngAfterViewInit() {
    this.tasksDataSource = new DataSource({
      store: new ArrayStore({
        data: this.tasks,
        key: "id"
      }),
      filter: ["nota_id", "=", this.key]
    })
  }
  popularitens(){
    this.notaItemservice.lista().subscribe((itens) =>{
      itens = itens;
      this.tasks = itens;
      console.log(this.tasks);
    })

  }
}

NgModule({
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxListModule,
    HttpClientModule,
    DxDateBoxModule,
    DxTemplateModule,
    DxButtonModule
  ],
  declarations: [NotaDetalhesComponent],
  bootstrap: [NotaDetalhesComponent]
})
export class NotaDetalhesModule { }
