import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { UserLogin } from '../Model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin ()

  constructor() { }
  private auth: AuthService
  private route: Router

  ngOnInit(){
    window.scroll(0,0)
      }

      entrar () {
        this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
        this.userLogin= resp
        this.route.navigate(['/inicio'])
      })
    
    }
      

}
