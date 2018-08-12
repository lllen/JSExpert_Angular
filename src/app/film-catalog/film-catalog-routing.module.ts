import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmCatalogComponent } from './film-catalog.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';

const routes: Routes = [
    { path: 'films', component: FilmCatalogComponent,
    canActivate: [AuthGuard],
      children: [
       { path: '', component: FilmsListComponent}
    ]}
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

  export class FilmCatalogRoutingModule {
  }