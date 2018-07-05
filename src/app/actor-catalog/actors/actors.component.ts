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

  searchedValue: any;
  currentPage : number = 1;
  actors : Actor[] = [];
  selectedOption: any = "Актеры";
  activeSpinner: boolean = true;
  Options = [
    { description: 'Фильмы' },
    { description: 'Актеры' }
  ];

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
        name: actor.name,
        popularity: actor.popularity.toFixed(1),
        image: `${this.actorService.smallImgPath}${actor.profile_path}`
      });
    });
    this.activeSpinner = false;
    console.log(this.actors[1]);
  }

  getNextPage(){
    this.currentPage++;
    this.getDataFromService();
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

  checkSearchValue(searchValue){
    this.searchedValue = searchValue;
    if(this.router.url === '/actors' && searchValue!=''){
      this.findActor(searchValue);
    } else if(searchValue === ''){
      console.log("searchValue empty");
      this.actors = [];
      this.currentPage = 1;
      this.getDataFromService();
    }
  }

  findActor(searchValue: string){
    let pattern = new RegExp('^' + searchValue);
    let found =  this.actors.filter((actor)=>{
      return (pattern.test(actor['name']));
    });
    if(found){
      this.actors = found;
    }
  }
  
}
