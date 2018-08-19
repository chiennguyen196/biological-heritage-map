import { DataType } from '../domains/data-type.enum';
import { Feature } from '../../../node_modules/@types/geojson';

export class MyUltis {
  public static copyObject<T extends Object>(obj: T): T {
    const _copyObj: T = <T>{};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        _copyObj[key] = obj[key];
      }
    }
    return _copyObj;
  }

  public static stringToColour(str: string): string {
    str = str ? str : ' ';
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      // tslint:disable-next-line:no-bitwise
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      // tslint:disable-next-line:no-bitwise
      const value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

  public static getColorOfFeature(type: DataType, feature: Feature): string {
    if ([DataType.KHU_BAO_TON, DataType.KHU_DI_SAN, DataType.KHU_DU_TRU_SINH_QUYEN, DataType.VUON_QUOC_GIA].find((ele) => ele === type)) {
      return MyUltis.stringToColour(type + 'ABC');
    }
    return null;
  }
}
