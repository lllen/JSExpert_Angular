import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FilmsListComponent } from './film-catalog/films-list/films-list.component';
import { ActorsComponent } from './actor-catalog/actors/actors.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { FilmCatalogComponent } from './film-catalog/film-catalog.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "main" }, 
  { path: "main", component: MainComponent },

  { path: "actors",
    component:  ActorsComponent,
    canActivate: [AuthGuard] 
  },
  { path: "login", component: LoginComponent },
  { path: "register", component:RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
