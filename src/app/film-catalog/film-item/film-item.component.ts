import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  isPressed: boolean;
  value: boolean;
  @Input('filmInfo') film: object;
  @Output() favorite = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  isFavorite(){
    return this.film['isFavorite'] ? true : false;
  }

  setAsFavorite(){
    if(!this.film['isFavorite']){
      this.film['isFavorite'] = true;
      this.favorite.emit(true);
    } else{
      this.film['isFavorite'] = false;
      this.favorite.emit(true);
    }
  }

 

}
