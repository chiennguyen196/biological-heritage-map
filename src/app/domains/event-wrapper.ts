import { DataType } from "./data-type.enum";
import { Feature } from "geojson";

export class EventWrapper {
    type: DataType;
    data: Feature
    constructor(type: DataType, data: Feature) {
        this.type = type; this.data = data;
    }
}
