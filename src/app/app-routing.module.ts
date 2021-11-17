import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';

import { MostrarComponent } from '../app/componentes/canasta/mostrar/mostrar.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [


{path: 'mostrar', component: MostrarComponent},
{ path: 'login'   , component: LoginComponent },
{ path: '**', redirectTo: 'login' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
