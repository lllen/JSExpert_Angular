import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchValue: string;
  @Output() search = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  doSearch(){
    console.log("Im search method");
    this.search.emit(this.searchValue);
  }

}
