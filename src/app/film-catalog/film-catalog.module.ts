import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
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
    MainComponent,
    FilmsListComponent,
    DetailsComponent,
    FilmItemComponent
  ]
})
export class FilmCatalogModule { }
