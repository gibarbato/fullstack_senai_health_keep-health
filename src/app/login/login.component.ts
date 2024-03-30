import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login = {
    emailUsuario: '',
    senha: '',
  };

  user: any = {};

  constructor(private router: Router) {
    // this.localStorage = document.defaultView?.localStorage; // workaround para utilizar DOM com SSR ativado
  }

  signIn() {
    if (!this.login.emailUsuario) {
      alert('digite seu email');
    } else if (!this.login.senha) {
      alert('digite sua senha');
    } else {
      this.router.navigate(['']);
    }
  }

  forgotSenha() {
    const forgotSenha = JSON.parse(
      localStorage.getItem('usuarioLogado') || '{}'
    );
    forgotSenha.senha = 'a1b2c4d4';
    localStorage.setItem('usuarioLogado', JSON.stringify(forgotSenha));
    alert(
      'Sua senha foi alterada para a senha padrão: a1b2c4d4. Por favor, prossiga utilizando essa senha.'
    );
  }
}
