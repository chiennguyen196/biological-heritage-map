import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { DataType } from '../domains/data-type.enum';
import { FeatureCollection } from 'geojson';
import { DataWrapper } from '../domains/data-wrapper';
import { catchError, map, tap } from 'rxjs/operators';
import { RegionType } from '../domains/region-type.enum';
import { MyUltis } from '../ultis/MyUltis';

const DATA_URL = environment.data_url;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private _cache: { [url: string]: FeatureCollection } = {};

  constructor(
    private http: HttpClient,
  ) { }

  private _getUrl(type: DataType): string {
    if (type === DataType.KHU_BAO_TON) { return DATA_URL.khu_bao_ton; }
    if (type === DataType.KHU_DI_SAN) { return DATA_URL.khu_di_san; }
    if (type === DataType.KHU_DU_TRU_SINH_QUYEN) { return DATA_URL.khu_du_tru_sinh_quyen; }
    if (type === DataType.TINH) { return DATA_URL.tinh; }
    if (type === DataType.VUNG) { return DATA_URL.vung; }
    if (type === DataType.VUON_QUOC_GIA) { return DATA_URL.vuon_quoc_gia; }
    return undefined;
  }


  public getData(type: DataType): Observable<DataWrapper> {
    const url = this._getUrl(type);
    if (url === undefined) { return null; }

    return this.http.get<FeatureCollection>(url).pipe(
      map(featureCollection => new DataWrapper(type, featureCollection)),
      catchError((err) => {
        alert(err.message);
        throw err;
      })
    );
  }

  public search(type: DataType, searchObj: { [key: string]: string }): Observable<DataWrapper> {
    return this.getData(type).pipe(
      map(wrapper => {
        const features = wrapper.featureCollection.features;
        wrapper.featureCollection.features = features.filter(item => {
          for (const key of Object.keys(searchObj)) {
            if (searchObj[key] !== item.properties[key]) {
              return false;
            }
          }
          return true;
        });
        return wrapper;
      }),
    );
  }
}
