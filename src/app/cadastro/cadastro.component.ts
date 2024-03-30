import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], //Importação do Modulo de Reative Forms
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl(''),
    dtNascimento: new FormControl(''),
    emailUsuario: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit() {
    localStorage.setItem("usuarioLogado",JSON.stringify({
        nome: "Almir",
        dtNascimento: "10/10/2020",
        emailUsuario: "almir@gmail.com",
        senha:"123"
    }))

  }

  getUsers(){

    const users = JSON.parse(localStorage.getItem('ususarioLogado') || '{}');
    if(!!users) {
       return console.log(JSON.parse(users));
    } else {
      localStorage.setItem("usuarioLogado", JSON.stringify([]));
      return [];
    }
  }

  cadastrar() {
    if (this.form.value.senha === this.form.value.confirmarSenha) {
      const usuario = {
        nome: this.form.value.nome,
        dtNascimento: this.form.value.dtNascimento,
        emailUsuario: this.form.value.emailUsuario,
        senha: this.form.value.senha
      }
      console.log(usuario.nome)
    }
  }



 voltar() {
    this.router.navigate(['login']);
  }
}
