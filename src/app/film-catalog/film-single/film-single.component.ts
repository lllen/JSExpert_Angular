import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FilmService } from '../../shared/services/film.service';
import { Film } from '../../shared/models/film';

@Component({
  selector: 'app-film-single',
  templateUrl: './film-single.component.html',
  styleUrls: ['./film-single.component.css']
})
export class FilmSingleComponent implements OnInit {

  film: Film;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params : ParamMap) => {
      const id = +params.get('id');
      this.filmService.getFilmById(id).subscribe(
        film => 
          this.film = this.initFilm(film)
      )
    })
  }

  initFilm(film) {
    let releaseDateTemp : [string, string, string];
    releaseDateTemp = film.release_date.split('-');
    return {
      id: film.id,
      title: film.title,
      releaseDate: {"year": releaseDateTemp[0],"month": releaseDateTemp[1], "day": releaseDateTemp[2]},
      voteAverage: film.vote_average,
      overview: film.overview,
      poster: `${this.filmService.apiConfig.midImgPath}${film['poster_path']}`,
      isFavorite: false
    }
  }
}
