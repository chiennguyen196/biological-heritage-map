import { ViewChild } from '@angular/core';
import { LeafletMapComponent } from './leaflet-map.component';
import { EventWrapper } from '../../domains/event-wrapper';

export class LeafletMapWrapper {

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
}
