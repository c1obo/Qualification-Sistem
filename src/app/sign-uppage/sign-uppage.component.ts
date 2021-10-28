import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";


@Component({
  selector: 'app-sign-uppage',
  templateUrl: './sign-uppage.component.html',
  styleUrls: ['./sign-uppage.component.css']
})
export class SignUppageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signIn(usuario:string,clave:string){
    const auth = getAuth();
signInWithEmailAndPassword(auth, usuario, clave)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

}
