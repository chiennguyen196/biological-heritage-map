import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { tileLayer, latLng, Layer, geoJSON, Control, DomUtil, Map, GeoJSON, featureGroup, LeafletEvent } from 'leaflet';
import { DataWrapper } from '../../domains/data-wrapper';
import { DataService } from '../../services/data.service';
import { EventWrapper } from '../../domains/event-wrapper';
import { Feature } from 'geojson';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnChanges {

  @Input()
  dataWrappers: DataWrapper[] = [];

  layers: Layer[] = [];
  private shortInfoDiv: HTMLElement;
  private map: Map

  @Output()
  mouseoverLayer: EventEmitter<EventWrapper> = new EventEmitter();
  @Output()
  mouseoutLayer: EventEmitter<any> = new EventEmitter();
  @Output()
  clickLayer: EventEmitter<EventWrapper> = new EventEmitter();


  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
    ],
    zoom: 5,
    center: latLng(16.474901, 105.8425937)
  };

  constructor() {
    this.shortInfoDiv = DomUtil.create('div', 'info');
    this.updateShortInfo('Test', 'test');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.layers = [];
    // console.log(this.dataWrappers.length);
    for (const data of this.dataWrappers) {
      this.layers.push(this._createGeoJSONLayer(data));
    }
  }

  private _createGeoJSONLayer(dataWrapper: DataWrapper): GeoJSON {

    const mouseoverFeature = (e: LeafletEvent) => {
      const layer = e.target;
      layer.setStyle({
        weight: 1,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7,
        fillColor: '#666'
      });
      this.mouseoverLayer.emit(new EventWrapper(dataWrapper.type, layer.feature as Feature));
    }

    const mouseoutFeature = (e: LeafletEvent) => {
      geojson.resetStyle(e.target);
      this.mouseoutLayer.emit();
    }

    const clickFeature = (e: LeafletEvent) => {
      console.log(e.target);
      this.clickLayer.emit(new EventWrapper(dataWrapper.type, e.target.feature as Feature))
    }

    const geojson: GeoJSON = geoJSON(dataWrapper.data, {
      onEachFeature: (featureGroup, layer) => {
        layer.on({
          mouseover: mouseoverFeature,
          mouseout: mouseoutFeature,
          click: clickFeature
        })
      },
      style: () => {
        return {
          weight: 1,
          fillOpacity: 0.4
        }
      }
    })
    return geojson;
  }

  public updateShortInfo(title: string, content: string) {
    this.shortInfoDiv.innerHTML = `
    <h4>${title}</h4>
    <div>${content}<div>
    `;

  }

  onMapReady(map: Map) {
    this.map = map;

    // create short info controller
    const shortInfoControl = new Control();
    shortInfoControl.onAdd = () => this.shortInfoDiv;
    shortInfoControl.addTo(map);

    map.invalidateSize();
  }

}
