import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Feature } from 'geojson';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

  @Input() data: Array<Feature>;
  @Output() selectRow = new EventEmitter<Feature>();

  displayConfig = {
    // 'AREA': 'AREA',
    'type': 'Loại',
    'Vung': 'Vùng',
    'Tinh': 'Tỉnh',
    'NameUTF8': 'Tên',
  };

  objectkeys = Object.keys;

  constructor() { }

  onSelectedRow(feature: Feature) {
    this.selectRow.emit(feature);
  }

}
