import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchService } from '../../services/search.service';
import { Feature } from 'geojson';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {


  @ViewChild(SearchFormComponent)
  searchFormComponent: SearchFormComponent;

  searchResult = null;

  // public selectFeature = new EventEmitter<Feature>();

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchResult = this.searchService.latestSearchResult;
  }

  search() {
    // console.log('Search!');
    const searchFormValues = this.searchFormComponent.getValues();
    this.searchService.search(searchFormValues.types, searchFormValues.searchObject).subscribe(data => {
      // console.log(Array.isArray(data));
      this.searchResult = data;
    });
  }

  goBackSearchForm() {
    this.searchService.clearLatestSearchResult();
    this.searchResult = null;
  }

  onSelectRow(feature: Feature) {
    // console.log(feature);
    this.searchService.selectFeature(feature);
  }
}
