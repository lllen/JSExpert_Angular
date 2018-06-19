import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { Actor } from '../../actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors : Actor[] = [];

  constructor(public actorService: ActorService) { }

  ngOnInit() {
    this.actorService.getActors().subscribe(
      (actorsList: any) => {
        this.initActors(actorsList);
      },
      err => {
        console.log("error");
      })
  }

  initActors(actorsList){
    console.log(actorsList);
    actorsList.results.forEach(actor => {
      this.actors.push({
        name: actor.name,
        popularity: actor.popularity,
        image: `${this.actorService.smallImgPath}${actor.profile_path}`
      });
    });
    console.log(this.actors[1]);
  }

}
