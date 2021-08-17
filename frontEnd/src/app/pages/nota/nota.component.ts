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
import {NotaItem} from "../../shared/interfaces/notaItem.interface";


var URL = "http://localhost:8080/nota";
var URL2 = "http://localhost:8080/notaItem";

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss']
})
export class NotaComponent implements OnInit{



  lista: Notas [] = [];
  nota!: Notas;



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
      .subscribe((nota: Notas[]) => {
        this.lista = nota;
      });

  }

  public buscaNotaId(id: any): void {
      this.notaService.listarId(id)
      .subscribe((nota: Notas) => {
        this.nota = nota;
        console.log(this.nota);
      });

  }

  public criar(nota: Notas): void {
    this.notaService.criar(nota)
      .subscribe(d => this.lista.push(nota));
    console.log(this.lista);
  }

  public atualizar(nota: Notas): void {
    this.notaService.atualizar(nota)
      .subscribe(n => {
        this.lista.forEach(item => {
          if (item.id == n.id) {
            item = n;
            return;
          }
          console.log(this.lista);
        })
      })
  }

  public deletar(id: any): void {
    this.notaService.deletar(id)
      .subscribe(() => {
        this.buscaNotas();
        console.log(this.lista);
      });
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
