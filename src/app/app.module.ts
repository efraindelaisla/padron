import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';            //<---
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  //<---



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MostrarComponent } from './componentes/canasta/mostrar/mostrar.component';
import { FiltroBusquedaPipe } from '../app/componentes/canasta/pipes/filtro-busqueda.pipe';
import { FiltroBusquedamPipe } from '../app/componentes/canasta/pipes/filtro-busquedam.pipe';
import { AngularMaterialModule } from './angular-material.module.component';
import { LoginComponent } from './componentes/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    FiltroBusquedaPipe,
    FiltroBusquedamPipe,
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,     //<---
    ReactiveFormsModule,  //<---
    FormsModule,          //<---
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
