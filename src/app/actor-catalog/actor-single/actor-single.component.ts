import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-single',
  templateUrl: './actor-single.component.html',
  styleUrls: ['./actor-single.component.css']
})
export class ActorSingleComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
