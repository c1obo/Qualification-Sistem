
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home',component:HomepageComponent},
  {path: 'login',component:LoginpageComponent},
  {path: 'sign-in',component:SignUppageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
