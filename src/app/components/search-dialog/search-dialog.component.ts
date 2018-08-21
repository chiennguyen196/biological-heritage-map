import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchFormComponent } from './search-form/search-form.component';
import { DataService } from '../../services/data.service';
import { concat } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {


  @ViewChild(SearchFormComponent)
  searchFormComponent: SearchFormComponent;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  search() {
    console.log('Search!');
    const searchFormValues = this.searchFormComponent.getValues();
    const arrayOfObservables = [];

    this.searchService.search(searchFormValues.type, {
      'NameUTF8': searchFormValues.name,
      'Tinh': searchFormValues.province,
      'Vung': searchFormValues.region
    }).subscribe(data => console.log(data));
  }
}
