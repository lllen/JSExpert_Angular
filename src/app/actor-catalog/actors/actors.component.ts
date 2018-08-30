import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../shared/services/actor.service';
import { Actor } from '../../shared/models/actor';
import { Router } from '@angular/router';

@Component({
  selector: 'actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  searchedValue: any;
  currentPage : number = 1;
  actors : Actor[] = [];
  activeSpinner: boolean = true;

  constructor(public actorService: ActorService, public router: Router) { }

  ngOnInit() {
    this.getDataFromService();
  }

  getDataFromService(){
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
        id: actor.id,
        name: actor.name,
        popularity: actor.popularity.toFixed(1),
        image: `${this.actorService.apiConfig.smallImgPath}${actor.profile_path}`
      });
    });
    this.activeSpinner = false;
    console.log(this.actors[1]);
  }

  getNextPage(){
    this.currentPage++;
    this.getDataFromService();
  }

  checkSearchValue(searchValue){
    this.searchedValue = searchValue;
    if(searchValue!=''){
      this.findActor(searchValue);
    } else if(searchValue === ''){
      console.log("searchValue empty");
      this.actors = [];
      this.currentPage = 1;
      this.getDataFromService();
    }
  }

  findActor(searchValue: string){
    this.actorService.searchActor(this.searchedValue)
    .subscribe(actors => {
      this.actors = [];
      this.initActors(actors);
    });
  }
  
}
