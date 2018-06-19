import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../../actor';

@Component({
  selector: 'actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  @Input("actorInfo") actor : Actor;

  constructor() { }

  ngOnInit() {
  }

}
