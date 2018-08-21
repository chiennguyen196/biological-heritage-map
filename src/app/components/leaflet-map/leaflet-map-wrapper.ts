import { ViewChild, NgZone } from '@angular/core';
import { LeafletMapComponent } from './leaflet-map.component';
import { EventWrapper } from '../../domains/event-wrapper';
import { DataWrapper } from '../../domains/data-wrapper';
import { FeatureCollection, Feature } from 'geojson';
import { geoJSON, LatLngBounds } from 'leaflet';
import { DataType } from '../../domains/data-type.enum';

export class LeafletMapWrapper {

    dataWrappers: DataWrapper[] = [];

    @ViewChild(LeafletMapComponent) leafletMapComponent: LeafletMapComponent;

    constructor(private ngZone: NgZone) { }

    onClickLayer(event: EventWrapper) {
        if (event.type === DataType.TINH) {
            this.ngZone.run(() => {
                this.fitBounds(event.data);
            });
        }
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

    fitBounds(geojson: FeatureCollection | Feature) {
        const bounds: LatLngBounds = geoJSON(geojson).getBounds();
        if (bounds.isValid()) {
            this.leafletMapComponent.fitBounds = bounds;
        }
    }
}
