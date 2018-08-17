import { ViewChild } from '@angular/core';
import { LeafletMapComponent } from './leaflet-map.component';
import { EventWrapper } from '../../domains/event-wrapper';
import { DataWrapper } from '../../domains/data-wrapper';
import { FeatureCollection } from 'geojson';
import { geoJSON, LatLngBounds } from 'leaflet';

export class LeafletMapWrapper {

    dataWrappers: DataWrapper[] = [];

    @ViewChild(LeafletMapComponent) leafletMapComponent: LeafletMapComponent;

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

    fitBounds(geojson: FeatureCollection) {
        const bounds: LatLngBounds = geoJSON(geojson).getBounds();
        if (bounds.isValid()) {
            this.leafletMapComponent.fitBounds = bounds;
        }
    }
}
