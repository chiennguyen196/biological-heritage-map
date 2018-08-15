import { DataType } from './data-type.enum';
import { GeoJsonObject, FeatureCollection } from 'geojson';

export class DataWrapper {
    type: DataType;
    data: FeatureCollection;
    constructor(type: DataType, data: FeatureCollection) {
        this.type = type;
        this.data = data;
    }
}
