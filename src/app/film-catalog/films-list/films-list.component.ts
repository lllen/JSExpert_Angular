import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: '.films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  value: string = '';
  n: number = 0;
  description: string;
  films : object;
  selection: string;

  constructor(public filmsService: FilmService) { 
  }
  
  ngOnInit() { 
    this.films = this.filmsService.getFilms();
  }

  setFavoriteNumber(){
    this.n++;
  }

  unsetFavorite(){
    this.n--;
  }

  sortASC(){
    for (let i = 0; i < this.films.length - 1; i++){
      for (let j = 0; j < this.films.length - i - 1; j++) {
        if (this.films[j].name.toUpperCase() > this.films[j+1].name.toUpperCase()) {
            let temp = this.films[j];
            this.films[j] = this.films[j+1];
            this.films[j+1] = temp;
        }
      }
    }
  }

  sortDESC(){
    for (let i = 0; i < this.films.length - 1; i++){
      for (let j = 0; j < this.films.length - i - 1; j++) {
        if (this.films[j].name.toUpperCase() < this.films[j+1].name.toUpperCase()) {
            let temp = this.films[j];
            this.films[j] = this.films[j+1];
            this.films[j+1] = temp;
        }
      }
    }
  }


}
