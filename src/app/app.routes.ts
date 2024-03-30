import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DietasComponent } from './dietas/dietas.component';
import { DietDetailComponent } from './diet-detail/diet-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'dietas',
    children: [
      {path: '', component: DietasComponent},
      {path: 'detail', component: DietDetailComponent},
    ]
  },

];
