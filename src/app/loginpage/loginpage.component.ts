import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  async login(user:string, pass:string){
    try{
      await this.auth.login(user,pass);
    } catch(e:any){
      alert(e.message)
    }
  }

}
