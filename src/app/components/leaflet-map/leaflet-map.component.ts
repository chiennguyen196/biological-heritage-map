import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { tileLayer, latLng, Layer, geoJSON } from 'leaflet';
import { DataWrapper } from '../../domains/data-wrapper';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnChanges {

  @Input()
  dataList: DataWrapper[] = [];

  layers: Layer[] = [];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
    ],
    zoom: 5,
    center: latLng(16.474901, 105.8425937)
  };

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.layers = [];
    console.log(this.dataList.length);
    for (const data of this.dataList) {
      this.layers.push(geoJSON(data.data));
    }
  }

}
