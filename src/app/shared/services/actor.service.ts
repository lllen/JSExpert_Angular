import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../models/api.config';
import { Config } from '../models/config';


export class ActorService {
  constructor( 
   private http: HttpClient,
   @Inject(API_CONFIG) public apiConfig: Config
 ) {}

  getActors (page?: number) {
    return this.http.get(`${this.apiConfig.personUrl}/popular?page=${page}&${this.apiConfig.params}`);
  }

  searchActor(searchActor: string) {
    return this.http.get(`${this.apiConfig.searchPersonUrl}?${this.apiConfig.params}&query=${searchActor}&page=1&include_adult=false`);
  }
}
