import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { tileLayer, latLng, Layer, geoJSON, Control, DomUtil, Map, GeoJSON, LeafletEvent, Bounds, LatLngBounds } from 'leaflet';
import { DataWrapper } from '../../domains/data-wrapper';
import { EventWrapper } from '../../domains/event-wrapper';
import { Feature } from 'geojson';
import { MyUltis } from '../../ultis/MyUltis';
import { DataType } from '../../domains/data-type.enum';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnChanges {

  @Input()
  dataWrappers: DataWrapper[] = [];

  layers: Layer[] = [];
  fitBounds: LatLngBounds;
  private shortInfoDiv: HTMLElement;
  private map: Map;

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

  layersControl = new Control.Layers({}, {}, { position: 'bottomleft' });

  constructor() {
    this.shortInfoDiv = DomUtil.create('div', 'info');
    this.clearShortInfo();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.layers = [];
    // console.log(this.dataWrappers.length);
    for (const wrapper of this.dataWrappers) {
      const geoLayer = this._createGeoJSONLayer(wrapper);
      this.layers.push(geoLayer);
      if (wrapper.type === DataType.TINH) {
        continue;
      }
      this.layersControl.addOverlay(geoLayer, wrapper.type);
    }
  }

  private _createGeoJSONLayer(dataWrapper: DataWrapper): GeoJSON {

    let geojson: GeoJSON;

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
    };

    const mouseoutFeature = (e: LeafletEvent) => {
      geojson.resetStyle(e.target);
      this.mouseoutLayer.emit();
    };

    const clickFeature = (e: LeafletEvent) => {
      console.log(e.target);
      this.clickLayer.emit(new EventWrapper(dataWrapper.type, e.target.feature as Feature));
    };

    geojson = geoJSON(dataWrapper.featureCollection, {
      onEachFeature: (_featureGroup, layer) => {
        layer.on({
          mouseover: mouseoverFeature,
          mouseout: mouseoutFeature,
          click: clickFeature
        });
      },
      style: (feature: Feature) => {
        return {
          weight: 1,
          fillOpacity: 0.4,
          fillColor: MyUltis.getColorOfFeature(dataWrapper.type, feature)
        };
      }
    });
    return geojson;
  }

  public updateShortInfo(title: string, content: string) {
    this.shortInfoDiv.innerHTML = `
    <h4>${title}</h4>
    <div>${content}<div>
    `;
  }

  public clearShortInfo() {
    this.shortInfoDiv.innerHTML = `
    <h4>Hover để xem</h4>`;
  }

  onMapReady(map: Map) {
    this.map = map;

    // create short info controller
    const shortInfoControl = new Control();
    shortInfoControl.onAdd = () => this.shortInfoDiv;
    shortInfoControl.addTo(map);

    this.layersControl.addTo(map);

    map.invalidateSize();
  }


}
