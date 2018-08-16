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

  public static stringToColour(str: string) {
    str = str ? str : ' ';
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }
}
