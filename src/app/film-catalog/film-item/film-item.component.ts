import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../../film';

@Component({
  selector: 'film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  isPressed: boolean;
  icon: string = "favorite_border";
  value: boolean;
  @Input('filmInfo') film: Film;
  @Output() favorite = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  isFavorite(){
    return this.film['isFavorite'] ? true : false;
  }

  setAsFavorite(){
    let status;
    if(!this.film['isFavorite']){
      this.film['isFavorite'] = true;
      this.icon = "favorite"
      status = {"filmId": this.film.id, "isFavorite":  this.film['isFavorite']};
      this.favorite.emit(status);
    } else{
      this.film['isFavorite'] = false;
      this.icon = "favorite_border"
      status = {"filmId": this.film.id, "isFavorite":  this.film['isFavorite']};
      this.favorite.emit(status);
    }
  }

 

}
