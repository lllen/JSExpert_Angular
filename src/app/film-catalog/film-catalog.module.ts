import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsListComponent } from './films-list/films-list.component';
import { DetailsComponent } from './details/details.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from '../search/search.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
 ],
  declarations: [
    FilmsListComponent,
    DetailsComponent,
    FilmItemComponent
  ]
})
export class FilmCatalogModule { }
