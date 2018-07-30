import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film-catalog/film.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  pageName: string = "Film Catalog Dashboard";

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getNewFilms();
   }



}
