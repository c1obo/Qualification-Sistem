
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthFirebaseService } from '../auth/auth-firebase.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private authService: AuthFirebaseService) { }

  ngOnInit() {}

  loginGoogle() {
    this.authService.googleLogin();
  }


}
