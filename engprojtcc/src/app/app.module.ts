import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule, } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DummyComponent } from './dummy/dummy.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { OrientandosComponent } from './orientandos/orientandos.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from './login/auth.service';
import { BancaComponent } from './banca/banca.component';
import {MatTableModule} from '@angular/material/table';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    CronogramaComponent,
    OrientandosComponent,
    CalendarComponent,
    LoginComponent,
    BancaComponent,
    ListaProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FullCalendarModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    MatInputModule,
    FormsModule,
    MatTooltipModule,
    MatTableModule

  ],
  
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
