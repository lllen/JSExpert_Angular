import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../../shared/models/film';
import { stat } from 'fs';

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
    this.film.isFavorite ? this.icon = "favorite" : this.icon = "favorite_border";
    return this.film.isFavorite;
  }

  setAsFavorite(){
    let status;
    this.film.isFavorite = !this.film.isFavorite;
    status = {"filmId": this.film.id, "isFavorite":  this.film.isFavorite};
    this.favorite.emit(status);
  }
}
