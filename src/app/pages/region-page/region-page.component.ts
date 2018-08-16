import { Component, OnInit, ViewChild } from '@angular/core';
import { DataWrapper } from '../../domains/data-wrapper';
import { EventWrapper } from '../../domains/event-wrapper';
import { LeafletMapComponent } from '../../components/leaflet-map/leaflet-map.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
  styleUrls: ['./region-page.component.scss']
})
export class RegionPageComponent implements OnInit {

  @ViewChild(LeafletMapComponent) leafletMapComponent: LeafletMapComponent;

  dataWrappers: DataWrapper[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  onClickLayer(event: EventWrapper) {
    // console.log(JSON.stringify(event.data.properties));
  }

  onMouseOverLayer(event: EventWrapper) {
    // console.log('Move over');
    this.leafletMapComponent.updateShortInfo(
      event.type, event.data.properties['NameUTF8'] ||
      event.data.properties['TEN_HC'] ||
      event.data.properties['Vung']);
  }

  onMouseOutLayer() {
    this.leafletMapComponent.clearShortInfo();
  }

}
