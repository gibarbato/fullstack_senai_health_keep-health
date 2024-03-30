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

  cadastrar() {
    if (this.form.value.senha === this.form.value.confirmarSenha) {
      const usuario = {
        nome: this.form.value.nome,
        dtNascimento: this.form.value.dtNascimento,
        emailUsuario: this.form.value.emailUsuario,
        senha: this.form.value.senha
      };
      // Salva o array atualizado no localStorage
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

      // Removido o console.log pois 'users' é um array e não tem uma propriedade 'nome'
    }
  }

 voltar() {
    this.router.navigate(['login']);
  }
}
