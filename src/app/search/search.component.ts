import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchValue: string = "";
  icon: string = "search"
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  doSearch() {
    this.icon = "cancel";
    this.searchValue.length > 3 ?
      this.search.emit(this.searchValue) : this.search.emit('');
  }

  activateIcon() {
    if(this.icon === 'search' && this.searchValue!='') {
      this.doSearch();
    } else if(this.icon === 'cancel') {
      this.searchValue = "";
      this.icon = "search";
      this.search.emit('');
    }
  }

}
