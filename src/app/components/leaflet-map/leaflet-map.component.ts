import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { tileLayer, latLng, Layer, geoJSON, Control, DomUtil, Map } from 'leaflet';
import { DataWrapper } from '../../domains/data-wrapper';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnChanges {

  @Input()
  dataWrappers: DataWrapper[] = [];

  layers: Layer[] = [];
  shortInfo: Control = new Control();
  private shortInfoDiv: HTMLElement;
  private map: Map

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
    ],
    zoom: 5,
    center: latLng(16.474901, 105.8425937)
  };

  constructor() {
    this.shortInfoDiv = DomUtil.create('div', 'info');
    this.shortInfo.onAdd = () => {
      return this.shortInfoDiv;
    }
    this.updateShortInfo('Test', 'test');
   }

  ngOnChanges(changes: SimpleChanges) {
    this.layers = [];
    // console.log(this.dataWrappers.length);
    for (const data of this.dataWrappers) {
      this.layers.push(geoJSON(data.data));
    }
  }

  public updateShortInfo(title: string, content: string) {
    this.shortInfoDiv.innerHTML = `
    <h4>${title}</h4>
    <span>${content}<span>
    `;

  }

  onMapReady(map: Map) {
    this.map = map;
    this.shortInfo.addTo(map);
    map.invalidateSize();
 }

}
