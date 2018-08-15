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
}
