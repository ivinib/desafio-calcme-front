import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/services/dados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-dados',
  templateUrl: './list-dados.component.html',
  styleUrls: ['./list-dados.component.css']
})
export class ListDadosComponent implements OnInit {

  dados: any;
  dadoAtual = null;
  indiceAtual = -1;
  nome = '';
  mensagem= '';

  constructor(private dadosService: DadosService ) { }

  ngOnInit(): void {
    this.dadoRecuperado();
  }

  dadoRecuperado(): void {
    this.dadosService.getAll()
      .subscribe( data => {
        this.dados = data;
        console.log(data);
      }, 
      error => {
        console.log(error);
      });
  }
  
  atualizarLista(): void{
    this.dadoRecuperado();
    this.dadoAtual = null;
    this.indiceAtual = -1;
  }

  setDadoAtivo(dado: any, index: any): void{
    this.dadoAtual = dado;
    this.indiceAtual = index;
  }

}
