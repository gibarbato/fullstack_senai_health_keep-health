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

  // cadastrar() {
  //   if (this.form.value.senha === this.form.value.confirmarSenha) {
  //     const users = JSON.parse(localStorage.getItem('ususarioLogado') || '{}');
  //     const usuario = {
  //       nome: this.form.value.nome,
  //       dtNascimento: this.form.value.dtNascimento,
  //       emailUsuario: this.form.value.emailUsuario,
  //       senha: this.form.value.senha
  //     }
  //     users.push(usuario);
  //     localStorage.setItem("usuarioLogado", JSON.stringify(users));
  //     console.log(users.nome)
  //   }
  // }

  cadastrar() {
    if (this.form.value.senha === this.form.value.confirmarSenha) {
      // Inicializa 'users' como um array vazio se 'usuarioLogado' não existir ou não for um array
      let users = JSON.parse(localStorage.getItem('usuarioLogado')) || [];

      // Verifica se 'users' é realmente um array
      if (!Array.isArray(users)) {
        users = [];
      }

      const usuario = {
        nome: this.form.value.nome,
        dtNascimento: this.form.value.dtNascimento,
        emailUsuario: this.form.value.emailUsuario,
        senha: this.form.value.senha
      };

      // Adiciona o novo usuário ao array
      users.push(usuario);

      // Salva o array atualizado no localStorage
      localStorage.setItem('usuarioLogado', JSON.stringify(users));

      // Removido o console.log pois 'users' é um array e não tem uma propriedade 'nome'
    }
  }

 voltar() {
    this.router.navigate(['login']);
  }
}
