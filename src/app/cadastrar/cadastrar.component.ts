import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../Model/Usuario';
import { UsuarioLogin } from '../Model/UsuarioLogin';




@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

Usuario: Usuario = new Usuario
UsuarioLogin: UsuarioLogin = new UsuarioLogin
confirmSenha: string
tipoUsuario: string

  constructor(
private authService: AuthService,
private router: Router
) { }
  ngOnInit() {
    window.scroll(0,0)

     }

     confirmaSenha(event: any) {
       this.confirmSenha = event.target.value
     }

     tipoUser(event: any){
      this.tipoUsuario = event.target.value

     }

     cadastrar() {
      this.Usuario.Tipo = this.tipoUsuario
    if (this.Usuario.senha != this.confirmSenha) {
      alert('As senhas não são iguais!')
    } else {
      this.authService.cadastrar(this.Usuario).subscribe((resp: Usuario) => {
        this.Usuario = resp
       this.router.navigate(['/entrar'])

        alert('Usuário cadastrado com sucesso!')
      })
    }

  }

}

     
    

    