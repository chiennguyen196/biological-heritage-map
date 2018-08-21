import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DataType } from '../domains/data-type.enum';
import { Observable, concat, zip } from 'rxjs';
import { GeoJsonProperties, Feature } from 'geojson';
import { map, tap } from 'rxjs/operators';
import { DataWrapper } from '../domains/data-wrapper';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _latestSearchResult: Feature[] = null;

  constructor(
    private dataService: DataService
  ) { }

  public search(types: DataType[], searchObj: { [key: string]: string | string[] }): Observable<Feature[]> {
    const arrayOfObservables: Observable<Feature[]>[] = [];
    for (const type of types) {
      arrayOfObservables.push(
        this.dataService.search(type, searchObj).pipe(
          map(data => {
            // const propertiesList: Feature[] = data.featureCollection.features.map(feature => feature.properties);
            // propertiesList.forEach(item => item['type'] = type);
            // return propertiesList;
            return data.featureCollection.features.map(item => {
              item.properties['type'] = type; return item;
            });
          })
        )
      );
    }
    // zip(...arrayOfObservables).subscribe(val => console.log(val));
    // return null;
    return zip(...arrayOfObservables).pipe(
      map(data => {
        const merged: Feature[] = data.reduce(function (prev, next) {
          return prev.concat(next);
        });
        return merged;
      }),
      tap(_ => this._latestSearchResult = _)
    );
  }

  get latestSearchResult(): GeoJsonProperties[] {
    return this._latestSearchResult;
  }

  public clearLatestSearchResult() {
    this._latestSearchResult = null;
  }
}
