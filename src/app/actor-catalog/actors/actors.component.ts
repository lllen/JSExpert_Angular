import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { Actor } from '../../actor';
import { Router } from '@angular/router';

@Component({
  selector: 'actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  currentPage : number = 1;
  actors : Actor[] = [];
  selectedOption: any = "Актеры";

  Options = [
    { description: 'Фильмы' },
    { description: 'Актеры' }
  ];

  constructor(public actorService: ActorService, public router: Router) { }

  ngOnInit() {
    this.actorService.getActors(this.currentPage).subscribe(
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

  getNextPage(){
    this.actorService.getActors(++this.currentPage).subscribe(
      (actorsList: any) => {
        this.initActors(actorsList);
      },
      err => {
        console.log("error");
      })
  }

  getCards(){
    if(this.selectedOption === "Фильмы"){
      this.changeLinkFilms();
    }else if(this.selectedOption === "Актеры"){
      this.changeLinkActors();
    }
  }

  changeLinkFilms(){
    this.router.navigate(['/films']);
  }

  changeLinkActors(){
    this.router.navigate(['/actors']);
  }

}
