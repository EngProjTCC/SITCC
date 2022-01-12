import { Component, OnInit } from '@angular/core';
import { Projetos } from '../model/projetos';

@Component({
  selector: 'app-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {

  projetos: Projetos[] = [
    { _id: '1', tituloProjeto: 'Inteligência Artificial', nameAluno: 'João Souza', nameOrientador: 'Joabe Jesus', download: "Download"},
    { _id: '2', tituloProjeto: 'IoT', nameAluno: 'Pedro Faria',nameOrientador: 'Jairo Silva', download: "Download"},
    { _id: '3', tituloProjeto: 'Jogos Digitais', nameAluno: 'Mariane Lima',nameOrientador: 'Joabe Jesus', download: "Download"},
    { _id: '4', tituloProjeto: 'Projeto 4', nameAluno: 'Fulano 4',nameOrientador: 'Orientador 4', download: "Download"},
    { _id: '5', tituloProjeto: 'Projeto 5', nameAluno: 'Fulano 5',nameOrientador: 'Orientador 5', download: "Download"},
    { _id: '6', tituloProjeto: 'Projeto 6', nameAluno: 'Fulano 6',nameOrientador: 'Orientador 6', download: "Download"},
    { _id: '7', tituloProjeto: 'Projeto 7', nameAluno: 'Fulano 7',nameOrientador: 'Orientador 7', download: "Download"},
    { _id: '8', tituloProjeto: 'Projeto 8', nameAluno: 'Fulano 8',nameOrientador: 'Orientador 8', download: "Download"},

  ];
  displayedColumns = ['tituloProjeto', 'nameAluno', 'nameOrientador', 'download']

  constructor() { 

  }

  ngOnInit(): void {
  }

}
