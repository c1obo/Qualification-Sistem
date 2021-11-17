import { EmailComponentComponent } from './email-component/email-component.component';

import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponentComponent } from './profile-component/profile-component.component';

const routes: Routes = [
  {path: 'home',component:HomepageComponent},
  {path: 'login',component:LoginpageComponent},
  {path: 'sign-in',component:SignUppageComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'email-login', component: EmailComponentComponent },
  { path: 'signup', component: SignUppageComponent },
  { path: 'profile', component: ProfileComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
