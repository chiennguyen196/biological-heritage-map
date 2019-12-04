import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataType } from '../../../domains/data-type.enum';
import { RegionType } from '../../../domains/region-type.enum';
import { merge, Observable } from 'rxjs';
import { SearchService } from '../../../services/search.service';
import { map, tap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnChanges {

  @Input() regionType: RegionType;

  nameCtrl = new FormControl('');
  typeCtrl = new FormControl([]);
  regionCtrl = new FormControl([]);
  provinceCtrl = new FormControl([]);

  subGourp = new FormGroup({
    'typeCtrl': this.typeCtrl,
    'regionCtrl': this.regionCtrl
  });

  typeOptions: DataType[] = [
    DataType.KHU_DI_SAN, DataType.KHU_DU_TRU_SINH_QUYEN, DataType.VUON_QUOC_GIA
  ];

  regionOptions: string[] = Object.keys(RegionType).map(key => RegionType[key]);

  provinceOptions = [];
  nameOptions = [];

  filteredNameOptions: Observable<string[]>;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.regionCtrl.setValue(this.regionType ? [this.regionType] : []);
    this.subGourp.valueChanges.pipe(
      tap(_ => {
        const searchObject = {
          'Vung': this.regionCtrl.value
        };
        this.searchService.suggest('NameUTF8', this.typeCtrl.value, searchObject)
          .subscribe(val => {
            this.nameOptions = val;
            this.nameCtrl.setValue(this.nameCtrl.value);
          });
        this.searchService.suggest('Tinh', this.typeCtrl.value, searchObject)
          .subscribe(val => this.provinceOptions = val);
      })
    ).subscribe(val => console.log(val));

    this.filteredNameOptions = this.nameCtrl.valueChanges.pipe(
      startWith(null),
      map(item => {
        if (item) {
          item = item.toLowerCase();
          return this.nameOptions.filter(option => option.toLowerCase().includes(item));
        } else {
          return this.nameOptions;
        }
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.regionType);
    this.regionCtrl.setValue(this.regionType ? [this.regionType] : []);
  }



  public getValues() {
    return {
      'types': this.typeCtrl.value,
      'searchObject': {
        'NameUTF8': this.nameCtrl.value,
        'Vung': this.regionCtrl.value,
        'Tinh': this.provinceCtrl.value,
      }
    };
  }

  // private _filterNames(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.nameOptions.filter(option => option.toLowerCase().includes(filterValue));
  // }



}
