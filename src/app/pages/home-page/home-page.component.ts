import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { DataWrapper } from '../../domains/data-wrapper';
import { DataService } from '../../services/data.service';
import { DataType } from '../../domains/data-type.enum';
import { zip } from 'rxjs';
import { LeafletMapWrapper } from '../../components/leaflet-map/leaflet-map-wrapper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends LeafletMapWrapper implements OnInit {

  constructor(
    private dataService: DataService,
  ) {
    super();
  }

  ngOnInit() {
    // this.dataService.getData(DataType.TINH).subscribe(data => {
    //   // do not use push, use equal instead
    //   this.dataWrappers = [data];
    // });
    zip(
      this.dataService.getData(DataType.TINH),
      this.dataService.getData(DataType.KHU_BAO_TON),
      this.dataService.getData(DataType.KHU_DI_SAN),
      this.dataService.getData(DataType.KHU_DU_TRU_SINH_QUYEN),
      this.dataService.getData(DataType.VUON_QUOC_GIA)
    ).subscribe(val => this.dataWrappers = val);
  }

}
