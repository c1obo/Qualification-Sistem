import { EstudianteComponent } from './estudiante/estudiante.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteComponent } from './docente/docente.component';
import { MateriaComponent } from './materia/materia.component';

const routes: Routes = [
  {path: 'home',component:HomepageComponent},
  {path: 'login',component:LoginpageComponent},
  {path: 'sign-in',component:SignUppageComponent},
  {path: 'docente',component:DocenteComponent},
  {path: 'estudiante',component:EstudianteComponent},
  {path: 'materia',component:MateriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
