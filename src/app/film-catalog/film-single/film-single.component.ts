import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-single',
  templateUrl: './film-single.component.html',
  styleUrls: ['./film-single.component.css']
})
export class FilmSingleComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
