import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  listaProdutos = [
    {
      id: 1,
      name: 'Banana',
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: '',
    },
    {
      id: 2,
      name: 'Abacate',
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: '',
    },
    {
      id: 3,
      descricao: 'Maça',
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: '',
    },
    {
      id: 4,
      descricao: 'Mamão',
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: '',
    },
    {
      id: 5,
      descricao: 'Pera',
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: '',
      },
    {
      id: 6,
      descricao: 'Uva',
      description: "...",
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: '',
      }
  ];

  constructor(private router: Router) {

  }

  ngOnInit(){
    localStorage.setItem('produtos', JSON.stringify(this.listaProdutos));
  }

  login() {
    this.router.navigate(['login'])
  }
}
