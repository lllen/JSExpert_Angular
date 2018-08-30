import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsListComponent } from './films-list/films-list.component';
import { DetailsComponent } from './details/details.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from '../search/search.component';
import { FilmSingleComponent } from './film-single/film-single.component';
import { FilmCatalogComponent } from './film-catalog.component';
import { FilmCatalogRoutingModule } from './film-catalog-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FilmCatalogRoutingModule
 ],
  declarations: [
    FilmsListComponent,
    DetailsComponent,
    FilmItemComponent,
    FilmSingleComponent,
    FilmCatalogComponent
  ]
})
export class FilmCatalogModule { }
