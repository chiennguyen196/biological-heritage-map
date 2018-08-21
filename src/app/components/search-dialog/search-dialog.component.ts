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

  public selectFeature = new EventEmitter<Feature>();

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchResult = this.searchService.latestSearchResult;
  }

  search() {
    console.log('Search!');
    const searchFormValues = this.searchFormComponent.getValues();

    this.searchService.search(searchFormValues.type, {
      'NameUTF8': searchFormValues.name,
      'Tinh': searchFormValues.province,
      'Vung': searchFormValues.region
    }).subscribe(data => {
      console.log(Array.isArray(data));
      this.searchResult = data;
    });
  }

  goBackSearchForm() {
    this.searchService.clearLatestSearchResult();
    this.searchResult = null;
  }

  onSelectRow(feature: Feature) {
    this.selectFeature.emit(feature);
  }
}
