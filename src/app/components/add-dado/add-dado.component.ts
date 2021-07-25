import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-add-dado',
  templateUrl: './add-dado.component.html',
  styleUrls: ['./add-dado.component.css']
})

export class AddDadoComponent implements OnInit{
  dado = {
    nome: '',
    email: '',
    telefone: ''
  };
  submitted = false;

  constructor(private dadosService: DadosService){ }

  ngOnInit(): void { 
  }

  saveDado(): void{
    const data = {
      nome: this.dado.nome,
      email: this.dado.email,
      telefone: this.dado.telefone
    };

    this.dadosService.create(data)
    .subscribe(response => {
     console.log(response);
      this.submitted = true;
    },
    error => {
      console.log(error);
    });
  }

  newDado(): void{
    this.submitted = false;
    this.dado = {
      nome: '',
      email: '',
      telefone: ''
    };
  }
}
