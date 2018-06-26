import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';
//import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../../film';
import { element } from 'protractor';
import { Router }  from '@angular/router';
import { Options } from 'selenium-webdriver/safari';
import { SearchComponent } from '../../search/search.component';



@Component({
  selector: 'films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  currentPage : number = 1;
  films : Film[] = [];
  searchedValue: string;
  activeSpinner : boolean = true;
  selectedOption: any = "Фильмы";
  // @Input() searchValue: string;
  searchValue:string; 
  
  Options = [
    { description: 'Фильмы' },
    { description: 'Актеры' }
  ];

  constructor(public filmsService: FilmService,  public router: Router) { 
  }

  ngOnInit() { 
    console.log("ngOnInit");
    this.filmsService.getPopularFilms(this.currentPage).subscribe(
      (filmList: any) => {
        this.initFilms(filmList); 
      },
      err => {
        console.log("error");
      })
    }

  ngOnChanges(){
    console.log(this.searchValue);
  }

  initFilms(films):void{
    films.results.forEach(film => {
      this.films.push({
        title: film.title,
        releaseDate: film.release_date,
        voteAverage: film.vote_average,
        overview: film.overview,
        poster: `${this.filmsService.midImgPath}${film['poster_path']}`
      });
    });
    this.activeSpinner = false;
    console.log(this.films);
  }

  getCards():void{
    if(this.selectedOption === "Фильмы"){
      this.changeLinkFilms();
    }else if(this.selectedOption === "Актеры"){
      this.changeLinkActors();
    }
  }

  changeLinkFilms():void{
    this.router.navigate(['/films']);
  }

  changeLinkActors():void{
    this.router.navigate(['/actors']);
  }

  getNextPage():void{
    this.currentPage++;
    this.filmsService.getPopularFilms(this.currentPage).subscribe(
      (filmList: any) => {
        this.initFilms(filmList);
      },
      err => {
        console.log("error");
      })
  }

  // checkInput($event) {
    //   if($event.length > 3) {
    //    this.films = this.filmsService.findFilm(this.searchedValue);
    //   } else if($event.length < 3) {
    //     // do red
    //   } else {
    //     this.films = this.filmsService.getPage(1, this.selection);
    //   }
    // }

   // setFavoriteNumber($event){
  //   if($event){
  //     this.n = this.filmsService.countFavorites();
  //   }
  // }

  // getNextPage(){
  //   if(this.currentPage*3 < this.filmsService.films.length){
  //     this.films = this.filmsService.getPage(++this.currentPage, this.selection);
  //   }
  // }

   // findSortMethod(){
  //   if(this.selection === "ASC"){
  //     this.films = this.filmsService.sort(this.films, 1);
  //   }else{
  //     this.films = this.filmsService.sort(this.films, -1);
  //   }
  // }

  // sortASC(){
  //   for (let i = 0; i < this.films.length - 1; i++){
  //     for (let j = 0; j < this.films.length  - i - 1; j++) {
  //       if (this.films[j].name.toUpperCase() > this.films[j+1].name.toUpperCase()) {
  //           let temp = this.films[j];
  //           this.films[j] = this.films[j+1];
  //           this.films[j+1] = temp;
  //       }
  //     }
  //   }
  // }

}
