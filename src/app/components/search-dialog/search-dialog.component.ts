import { Component, OnInit, ViewChild, EventEmitter, Inject } from '@angular/core';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchService } from '../../services/search.service';
import { Feature } from 'geojson';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PrintService } from 'src/app/services/print.service';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {


  @ViewChild(SearchFormComponent)
  searchFormComponent: SearchFormComponent;

  searchResult = null;
  private mapping =  {
    // 'AREA': 'AREA',
    'type': 'Loại',
    'Vung': 'Vùng',
    'Tinh': 'Tỉnh',
    'NameUTF8': 'Tên',
  };
  // public selectFeature = new EventEmitter<Feature>();

  constructor(
    private searchService: SearchService,
    private printService: PrintService,
    @Inject(MAT_DIALOG_DATA) public data: any
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

  printDirectly() {
    this.printService.printDirectly(this.searchResult, this.mapping);
  }

  exportAsExcelFile() {
    this.printService.exportAsExcelFile(this.searchResult, this.mapping, 'export');
  }
}
