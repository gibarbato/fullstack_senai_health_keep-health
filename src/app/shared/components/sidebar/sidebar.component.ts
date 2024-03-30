import { Component } from '@angular/core';
import { HomeComponent } from '../../../home/home.component';
import { DietasComponent } from '../../../dietas/dietas.component';
import { PerfilComponent } from '../../../perfil/perfil.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [HomeComponent, DietasComponent, PerfilComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}

