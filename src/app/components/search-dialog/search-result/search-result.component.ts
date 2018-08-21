import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GeoJsonObject, GeoJsonProperties, Feature } from 'geojson';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

  @Input() data: Array<Feature>;
  @Output() selectRow = new EventEmitter<Feature>();

  displayConfig = {
    'AREA': 'AREA',
    'NameUTF8': 'Tên',
    'Tinh': 'Tỉnh',
    'Vung': 'Vùng',
    'type': 'Loại'
  };

  objectkeys = Object.keys;

  constructor() { }

  onSelectedRow(feature: Feature) {
    this.selectRow.emit(feature);
  }

}
