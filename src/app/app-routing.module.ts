import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { ContenidoComponent } from './components/contenido/contenido.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate : [AuthGuard]},
  {path:'login', component:LoginComponent },
  {path:'registro', component:RegistroComponent},
  { path: 'contenido', component:ContenidoComponent},
  {path:'**', pathMatch:'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
