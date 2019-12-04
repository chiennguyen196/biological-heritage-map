import { RegionType } from '../app/domains/region-type.enum';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  data_url: {
    khu_bao_ton: 'assets/data/KhuBaoTon.json',
    khu_di_san: 'assets/data/KhuDiSan.json',
    khu_du_tru_sinh_quyen: 'assets/data/KhuDuTruSinhQuyen.json',
    tinh: 'assets/data/Tinh.json',
    vuon_quoc_gia: 'assets/data/VQG.json',
    vung: 'assets/data/Vung.json',
  },

  region: {
    urls: {
      'tay-bac': {
        type: RegionType.TAY_BAC,
        detailUrl: 'assets/html/vung/taybac.html'
      },
      'dong-bac': {
        type : RegionType.DONG_BAC,
        detailUrl: 'assets/html/vung/dongbac.html'
      },
      'dong-bang-song-hong': {
        type: RegionType.DONG_BANG_SONG_HONG,
        detailUrl: 'assets/html/vung/dongbangsonghong.html',
        short_name: 'ĐB S.Hồng'
      },
      'bac-trung-bo': {
        type: RegionType.BAC_TRUNG_BO,
        detailUrl: 'assets/html/vung/bactrungbo.html'
      },
      'tay-nguyen': {
        type: RegionType.TAY_NGUYEN,
        detailUrl: 'assets/html/vung/taynguyen.html'
      },
      'dong-nam-bo': {
        type: RegionType.DONG_NAM_BO,
        detailUrl: 'assets/html/vung/dongnambo.html'
      },
      'dong-bang-song-cuu-long': {
        type: RegionType.DONG_BANG_SONG_CUU_LONG,
        detailUrl: 'assets/html/vung/dongbangsongcuulong.html',
        short_name: 'ĐB S.Cửu Long'
      },
      'nam-trung-bo': {
        type: RegionType.NAM_TRUNG_BO,
        detailUrl: 'assets/html/vung/namtrungbo.html'
      },
    },
    prefix: 'vung'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
