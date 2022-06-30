import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../Model/Usuario';
import { UsuarioLogin } from '../Model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  UsuarioLogin: UsuarioLogin = new UsuarioLogin ()

  
  constructor(
    private auth: AuthService,
    private router: Router
 
    ) { }
 

  ngOnInit(){
    window.scroll(0,0)
      }

      entrar() {
        this.auth.entrar(this.UsuarioLogin).subscribe({
          next: (resp: UsuarioLogin) => {
            this.UsuarioLogin = resp
    
            environment.token = this.UsuarioLogin.token
            environment.nome = this.UsuarioLogin.nome
            environment.foto = this.UsuarioLogin.foto
            environment.id = this.UsuarioLogin.id
    
            console.log(environment.token);
            console.log(environment.nome);
            console.log(environment.foto);
            console.log(environment.id);
    
            this.router.navigate(["/inicio"])
            alert('Bem vindo(a)!')
          }, error: erro => {
            if (erro.status == 500 || erro.status == 401) {
              alert('ERRO! Usuário ou senha inválidos!')
            }
          },
        });
      }
    }