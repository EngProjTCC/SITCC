import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario:Usuario){

    if(usuario.nome == 'jj@ecomp.poli.br' &&
        usuario.senha == '123456'){

          this.usuarioAutenticado = true;

          this.mostrarMenuEmitter.emit(true);

          this.router.navigate(['Orientando']);

        } else {
          this.usuarioAutenticado = false;

          this.mostrarMenuEmitter.emit(false);
        }

  }
}
