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
  @Output() favorite = new EventEmitter<number>();
  @Output() unFavorite = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  setAsFavorite(){
    if(!this.value){
      this.favorite.emit();
      this.value = true;
      this.isPressed = true;
    } else{
      this.unFavorite.emit();
      this.value = false;
      this.isPressed = false;
    }
  }

}
