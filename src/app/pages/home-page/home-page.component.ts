import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { DataWrapper } from '../../domains/data-wrapper';
import { DataService } from '../../services/data.service';
import { DataType } from '../../domains/data-type.enum';
import { EventWrapper } from '../../domains/event-wrapper';
import { zip } from 'rxjs';
import { LeafletMapComponent } from '../../components/leaflet-map/leaflet-map.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @ViewChild(LeafletMapComponent) leafletMapComponent: LeafletMapComponent;

  dataWrappers: DataWrapper[] = [];

  constructor(
    private dataService: DataService,
  ) { }

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

  onClickLayer(event: EventWrapper) {
    // console.log(JSON.stringify(event.data.properties));
  }

  onMouseOverLayer(event: EventWrapper) {
    // console.log('Move over');
    this.leafletMapComponent.updateShortInfo(event.type, event.data.properties['NameUTF8'] || event.data.properties['TEN_HC'] || event.data.properties['Vung']);
  }

  onMouseOutLayer() {
    this.leafletMapComponent.updateShortInfo('', '')
  }

}
