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
      'bac-trung-bo': {
        type: RegionType.BAC_TRUNG_BO,
      },
      'dong-bac': {
        type : RegionType.DONG_BAC,
      },
      'dong-bang-song-cuu-long': {
        type: RegionType.DONG_BANG_SONG_CUU_LONG,
        short_name: 'ĐB S.Cửu Long'
      },
      'dong-bang-song-hong': {
        type: RegionType.DONG_BANG_SONG_HONG,
        short_name: 'ĐB S.Hồng'
      },
      'dong-nam-bo': {
        type: RegionType.DONG_NAM_BO
      },
      'nam-trung-bo': {
        type: RegionType.NAM_TRUNG_BO
      },
      'tay-bac': {
        type: RegionType.TAY_BAC
      },
      'tay-nguyen': {
        type: RegionType.TAY_NGUYEN
      }
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
