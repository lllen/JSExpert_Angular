import { Injectable, Inject } from '@angular/core'; 
import { Observable, Subject, interval, from } from 'rxjs';
import {map, take, filter} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../api.config';
import { Favorite } from '../favorite';
import { Config } from '../config';

export class FilmService {
   constructor( 
    private http: HttpClient,
    @Inject(API_CONFIG) public apiConfig: Config
  ) {}

  ngOnInit() {
  }

  getAllFilms() {
   return this.http.get(`${this.apiConfig.movieUrl}/popular?page=${this.apiConfig.params}`);
  }

  getPopularFilms(page?: number) {
   return this.http.get(`${this.apiConfig.movieUrl}/popular?page=${page}&${this.apiConfig.params}`);
  }

  searchFilm(searchedFilm: string) {
    return this.http.get(`${this.apiConfig.seacrhMovieUrl}?${this.apiConfig.params}&query=${searchedFilm}&page=1&include_adult=false`);
  }

  getNewFilms() {
    console.log(this.getPopularFilms(1));
    (this.getPopularFilms(1))
    .pipe( 
      //???????
    )
    .subscribe(film => console.log(film));
  }


  
  // sort(arr, direct) {
  //   return arr.sort((a,b) => {
  //     let x = a.name.toLowerCase();
  //     let y = b.name.toLowerCase();
  //     if (x < y) { return -1 * direct; }
  //     if (x > y) { return 1 * direct; }
  //     return 0;
  //   })
  // }

}
