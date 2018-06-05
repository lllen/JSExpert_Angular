import { Component, OnInit, Output, Input } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'details-inner',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],

})
export class DetailsComponent implements OnInit {

  @Input('filmDescription') description: string;

  constructor() { 
  }

  ngOnInit() {
  }

}
