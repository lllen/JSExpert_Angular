import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FilmsListComponent } from './film-catalog/films-list/films-list.component';
import { ActorsComponent } from './actor-catalog/actors/actors.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "main" }, 
  { path: "main", component: MainComponent },
  { path: "films", component: FilmsListComponent},
  { path: "actors", component:  ActorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
