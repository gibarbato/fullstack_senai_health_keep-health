import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dietas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dietas.component.html',
  styleUrl: './dietas.component.css'
})
export class DietasComponent {
  router: any;


  redirectToDetail(id: string){
    this.router.navigate("detail");
  }
}
