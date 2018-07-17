import { Injectable, Inject } from '@angular/core'; 
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../api.config';
import { Favorite } from '../favorite';
import { Config } from '../config';

export class FilmService {
   constructor( 
    private http: HttpClient,
    @Inject(API_CONFIG) public apiConfig: Config
  ) {}

  getAllFilms(){
   return this.http.get(`${this.apiConfig.movieUrl}/popular?page=${this.apiConfig.params}`);
  }

  getPopularFilms(page?: number) {
   return this.http.get(`${this.apiConfig.movieUrl}/popular?page=${page}&${this.apiConfig.params}`);
  }

  searchFilm(searchedFilm: string) {
    return this.http.get(`${this.apiConfig.seacrhUrl}?${this.apiConfig.params}&query=${searchedFilm}&page=1&include_adult=false`);
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
