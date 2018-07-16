import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable ({
    providedIn: 'root'
})

export class FavoriteService {
    apiUrl: string = "http://localhost:3000";
    favoriteFilmsApiUrl: string = `${this.apiUrl}/films/favorites`;

    constructor(private http: HttpClient) {}

    getFavorites(filmIds: Array<number>){
        return this.http.get(`${this.favoriteFilmsApiUrl}?filmIds=${filmIds.join(',')}`);
    }

    addToFavorites(id: number){
        return this.http.post(`${this.apiUrl}/films/favorites`, {filmId: id});
    }

    deleteFromFavorites(id: number){
        return this.http.delete(`${this.apiUrl}/films/favorites/${id}`);
    }
}