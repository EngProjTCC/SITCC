import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancaComponent } from './banca/banca.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { DummyComponent } from './dummy/dummy.component';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { LoginComponent } from './login/login.component';
import { OrientandosComponent } from './orientandos/orientandos.component';

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Cronograma', component: CronogramaComponent},
  {path: 'Orientando', component: OrientandosComponent},
  {path: 'Banca', component: BancaComponent},
  {path: 'Projetos', component: ListaProjetosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
