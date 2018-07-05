import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../../actor';
import { ConstantPool } from '@angular/compiler/src/constant_pool';

@Component({
  selector: 'actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  icon: string = "favorite_border";
  @Input("actorInfo") actor : Actor;

  constructor() { }

  ngOnInit() {
  }

  isFavorite(){
    return this.actor['isFavorite'] ? true : false;
  }

  setAsFavorite(){
    if(!this.actor['isFavorite']){
      this.actor['isFavorite'] = true;
      this.icon = "favorite"
    } else{
      this.actor['isFavorite'] = false;
      this.icon = "favorite_border"
    }
  }


}
