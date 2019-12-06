import { DataType } from './data-type.enum';
import { GeoJsonObject, FeatureCollection } from 'geojson';

export class DataWrapper {
    type: DataType;
    featureCollection: FeatureCollection;
    constructor(type: DataType, featureCollection: FeatureCollection) {
        this.type = type;
        this.featureCollection = featureCollection;
    }
}
