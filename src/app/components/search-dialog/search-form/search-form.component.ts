import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataType } from '../../../domains/data-type.enum';
import { RegionType } from '../../../domains/region-type.enum';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  name: string;
  type: DataType[] = [];
  region: RegionType[] = [];
  province: string[] = [];

  typeOptions: string[] = [
    DataType.KHU_BAO_TON, DataType.KHU_DI_SAN, DataType.KHU_DU_TRU_SINH_QUYEN, DataType.VUON_QUOC_GIA
  ];

  regionOptions: string[] = Object.keys(RegionType).map(key => RegionType[key]);
  constructor() { }
  public getValues() {
    return {
      'name': this.name,
      'type': this.type,
      'region': this.region,
      'province': this.province
    };
  }

}
