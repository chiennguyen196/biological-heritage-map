import { Component, OnInit, ViewChild } from '@angular/core';
import { DataWrapper } from '../../domains/data-wrapper';
import { EventWrapper } from '../../domains/event-wrapper';
import { LeafletMapComponent } from '../../components/leaflet-map/leaflet-map.component';
import { DataService } from '../../services/data.service';
import { LeafletMapWrapper } from '../../components/leaflet-map/leaflet-map-wrapper';

@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
  styleUrls: ['./region-page.component.scss']
})
export class RegionPageComponent extends LeafletMapWrapper implements OnInit {

  @ViewChild(LeafletMapComponent) leafletMapComponent: LeafletMapComponent;

  dataWrappers: DataWrapper[] = [];

  constructor(
    private dataService: DataService
  ) {
    super();
   }

  ngOnInit() {
  }

}
