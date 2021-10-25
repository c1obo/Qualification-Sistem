import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSjqQJSRHGyDAc1D1yAW3V0Q5WhhCAC2E",
  authDomain: "holamundo-c5321.firebaseapp.com",
  projectId: "holamundo-c5321",
  storageBucket: "holamundo-c5321.appspot.com",
  messagingSenderId: "4961436979",
  appId: "1:4961436979:web:d4a937a126e8e6f7ecaa46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    SignUppageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
