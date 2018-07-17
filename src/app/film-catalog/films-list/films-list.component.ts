import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, ViewChildren, QueryList, Input, SimpleChanges, Inject } from '@angular/core';
//import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../../film';
import { element } from 'protractor';
import { Router }  from '@angular/router';
import { Options } from 'selenium-webdriver/safari';
import { SearchComponent } from '../../search/search.component';
import { FavoriteService } from '../favorite.service';
import { Favorite } from '../../favorite';
import { Config } from '../../config';
import { API_CONFIG } from '../../api.config';

@Component({
  selector: 'films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})

export class FilmsListComponent implements OnInit {

  searchedValue: string;
  @ViewChild(SearchComponent) searchComp: SearchComponent;
  currentPage : number = 1;
  films : Film[] = [];
  activeSpinner : boolean = true;
  selectedOption: any = "Фильмы";
  favoriteList;

  Options = [
    { description: 'Фильмы' },
    { description: 'Актеры' }
  ];

  constructor(
    public filmsService: FilmService,  
    public router: Router, 
    private favoriteService: FavoriteService,
    @Inject(API_CONFIG) public apiConfig: Config) { 
  }

  ngOnInit() { 
    this.getDataFromService();
  }

  getDataFromService() {
    this.filmsService.getPopularFilms(this.currentPage).subscribe(
      (filmList: any) => {
        this.initFilms(filmList); 
      },
      err => {
        console.log("error");
      })
  }

  initFilms(films):void {
    let releaseDateTemp : [string, string, string];
    films.results.forEach(film => {
      releaseDateTemp = film.release_date.split('-');
      this.films.push({
        id: film.id,
        title: film.title,
        releaseDate: {"year": releaseDateTemp[0],"month": releaseDateTemp[1], "day": releaseDateTemp[2]},
        voteAverage: film.vote_average,
        overview: film.overview,
        poster: `${this.apiConfig.midImgPath}${film['poster_path']}`,
        isFavorite: false
      });
    });
    this.buildFavorites();
    this.activeSpinner = false;
  }

  getCards():void {
    if(this.selectedOption === "Фильмы") {
      this.changeLinkFilms();
    }else if(this.selectedOption === "Актеры") {
      this.changeLinkActors();
    }
  }

  changeLinkFilms():void {
    this.router.navigate(['/films']);
  }

  changeLinkActors():void {
    this.router.navigate(['/actors']);
  }

  getNextPage():void {
    this.currentPage++;
    this.getDataFromService();
  }

  checkSearchValue(searchValue) {
    this.searchedValue = searchValue;
    if(this.router.url === '/films' && searchValue!='') {
      this.findFilm(searchValue);
    } else if(searchValue === '') {
      console.log("searchValue empty");
      this.films = [];
       this.currentPage = 1;
      this.getDataFromService();
    }
  }

  findFilm(searchValue: string) {
    this.filmsService.searchFilm(this.searchedValue).subscribe(
      (filmList: any) => {
        console.log(filmList);
        this.films = [];
        this.initFilms(filmList); 
      },
      err => {
        console.log("error");
      });
  }

  buildFavorites() {
    this.favoriteService.getFavorites(this.films.map(film => film.id)).subscribe((favorites: Array<Favorite>) => {
      const favoriteList = favorites.map(favorite => favorite._id);
      this.films.map(film => {
        film.isFavorite = favoriteList.includes(film.id);
      })
    });
  }

  setFavoriteFilm($event){
    if($event['isFavorite']) {
      this.favoriteService.addToFavorites($event['filmId'])
    .subscribe(() => {
        this.buildFavorites();
    });
  } 
  
  else {
    this.favoriteService.deleteFromFavorites($event['filmId'])
    .subscribe(() => {
      console.log("delete");
      this.buildFavorites();
    });
  } 
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
