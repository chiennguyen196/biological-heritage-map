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
        detailUrl: 'assets/html/vung/taybac.html',
        children: {
            'vqg-hoang-lien': { name: "VQG. Hoàng Liên", NameUTF8: "Hoàng Liên"}, 
            'vqg-xuan-son': {name: "VQG. Xuân Sơn", NameUTF8: "Xuân Sơn"},
            'vqg-cuc-phuong': {name: "VQG. Cúc Phương", NameUTF8: "Cúc Phương"},
          }
      },
      'dong-bac': {
        type : RegionType.DONG_BAC,
        detailUrl: 'assets/html/vung/dongbac.html',
        children: {
          'vgg-dong-van':{ name: "VQG. Du Già Cao nguyên đá Đồng Văn", NameUTF8: "Du Già"},
          'vgg-ba-be':{ name: "VQG. Ba Bể", NameUTF8: "Ba Bể"},
          'vgg-bai-tu-long':{ name: "VQG. Bái Tử Long", NameUTF8: "Bái Tử Long"},
          'vgg-cat-ba':{ name: "VQG. Cát Bà", NameUTF8: "Cát Bà"},
          'vgg-phia-oac-phia-den':{ name: "VQG. Phia Oắc - Phia Đén", NameUTF8: "Phia Oắc"},
          'vgg-xuan-son':{ name: "VQG. Xuân Sơn", NameUTF8: "Xuân Sơn"},
          'khu-dtsq-quan-dao-cat-ba':{ name: "Khu DTSQ Quần đảo Cát Bà", NameUTF8: "DTSQ Cát Bà"},
          'di-san-tn-vinh-ha-long':{ name: "Di sản TN Vịnh Hạ Long", NameUTF8: "DS Vịnh Hạ Long"},
        }
      },
      'dong-bang-song-hong': {
        type: RegionType.DONG_BANG_SONG_HONG,
        detailUrl: 'assets/html/vung/dongbangsonghong.html',
        short_name: 'ĐB S.Hồng',
        children: {
          "vqg-ba-vi": { name: "VQG. Ba Vì", NameUTF8: "Ba Vì"},
          "vqg-cuc-phuong": { name: "VQG. Cúc Phương", NameUTF8: "Cúc Phương"},
          "vqg-tam-dao": { name: "VQG. Tam Đảo", NameUTF8: "Tam Đảo"},
          "vqg-xuan-thuy": { name: "VQG. Xuân Thuỷ", NameUTF8: "Xuân Thuỷ"},
          "khu-dtsq-chau-tho-song-hong": { name: "Khu DTSQ châu thổ sông Hồng", NameUTF8: "Châu thổ sông Hồng"},
          "di-san-hon-hop-trang-an": { name: "Quần thể danh thắng Tràng An (Di sản hỗn hợp)", NameUTF8: "DS Tràng An"},
        }
      },
      'bac-trung-bo': {
        type: RegionType.BAC_TRUNG_BO,
        detailUrl: 'assets/html/vung/bactrungbo.html',
        children: {
          'vqg-ben-en': { name: "VQG. Bến En", NameUTF8: "Bến En"},
          'vqg-cuc-phuong': { name: "VQG. Cúc Phương", NameUTF8: "Cúc Phương"},
          'vqg-phong-nha-ke-bang': { name: "VQG. Phong Nha Kẻ Bàng", NameUTF8: "Phong Nha Ke Bang"},
          'vqg-pu-mat': { name: "VQG. Pù Mát", NameUTF8: "Pù Mát"},
          'vqg-vung-quang': { name: "VQG. Vũ Quang", NameUTF8: "Vũ Quang"},
          'khu-dtsq-mien-tay-nghe-an': { name: "Khu DTSQ Miền tây Nghệ An", NameUTF8: "Tây Nghệ An"},
          'di-san-tn-phong-nha-ke-bang': { name: "Di sản TN Phong Nha Kẻ Bàng", NameUTF8: "DS Phong Nha Kẻ Bàng"},
        }
      },
      'tay-nguyen': {
        type: RegionType.TAY_NGUYEN,
        detailUrl: 'assets/html/vung/taynguyen.html',
        children: {
          'vqg-bidoup-nui-ba': { name: "VQG. Bidoup Núi Bà", NameUTF8: "Bi Đúp Núi Bà"},
          'vqg-chu-mon-ray': { name: "VQG. Chư Mom Ray", NameUTF8: "Chư Mom Ray"},
          'vqg-chu-yang-sin': { name: "VQG. Chư Yang Sin", NameUTF8: "Chư Yang Sin"},
          'vqg-kon-ka-kinh': { name: "VQG. Kon Ka Kinh", NameUTF8: "Kon Ka Kinh"},
          'vqg-yok-don': { name: "VQG. Yok Đôn", NameUTF8: "Yok Đôn"},
          'vqg-ta-dung': { name: "VQG. Tà Đùng", NameUTF8: "Tà Đùng"},
          'khu-dtsq-lang-biang': { name: "Khu DTSQ Lang Biang", NameUTF8: "Lang Biang"},
        }
      },
      'dong-nam-bo': {
        type: RegionType.DONG_NAM_BO,
        detailUrl: 'assets/html/vung/dongnambo.html',
        children: {
          'vqg-bu-gia-map':{ name: "VQG. Bù Gia Mập", NameUTF8: "Bù Gia Mập"},
          'vqg-cat-tien':{ name: "VQG. Cát Tiên", NameUTF8: "Cát Tiên"},
          'vqg-con-dao':{ name: "VQG. Côn Đảo", NameUTF8: "Côn Đảo"},
          'vqg-lo-go-xa-mat':{ name: "VQG. Lò Gò-Xa Mát", NameUTF8: "Lò Gò Sa Mát"},
          'khu-dtsq-cat-tien':{ name: "Khu DTSQ  Cát Tiên", NameUTF8: "Cát Tiên"},
          
        }
      },
      'dong-bang-song-cuu-long': {
        type: RegionType.DONG_BANG_SONG_CUU_LONG,
        detailUrl: 'assets/html/vung/dongbangsongcuulong.html',
        short_name: 'ĐB S.Cửu Long',
        children: {
          'vqg-mui-ca-mau': { name: "VQG. Mũi Cà Mau", NameUTF8: "Mũi Cà Mau"},
          'vqg-phu-quoc': { name: "VQG. Phú Quốc", NameUTF8: "Phú Quốc"},
          'vqg-tram-chim-tam-nong': { name: "VQG. Tràm Chim Tam Nông", NameUTF8: "Tràm Chim Tam Nông"},
          'vqg-u-minh-thuong': { name: "VQG. U Minh Thượng", NameUTF8: "U Minh Thượng"},
          'vqg-u-minh-ha': { name: "VQG. U Minh Hạ (Vồ Dơi)", NameUTF8: "Vồ Dơi"},
          'khu-dtsq-can-gio': { name: "Khu DTSQ rừng ngập mặn Cần Giờ", NameUTF8: "Cần Giờ"},
          'khu-dtsq-kien-giang': { name: "Khu DTSQ ven biển và biển đảo Kiên Giang", NameUTF8: "Kiên Giang"},
          'khu-dtsq-mui-ca-mau': { name: "Khu DTSQ Mũi Cà Mau", NameUTF8: "Mũi Cà Mau"},

        }
      },
      'nam-trung-bo': {
        type: RegionType.NAM_TRUNG_BO,
        detailUrl: 'assets/html/vung/namtrungbo.html',
        children: {
          'vqg-bach-ma':{ name: "VQG. Bach Mã", NameUTF8: "Bach Mã"},
          'vqg-nui-chua':{ name: "VQG. Núi Chúa", NameUTF8: "Nui Chua"},
          'vqg-phuoc-binh':{ name: "VQG. Phước Bình", NameUTF8: "Phước Bình"},
          'khu-dtsq-cu-lao-cham':{ name: "Khu DTSQ Cù lao Chàm - Hội An", NameUTF8: "Cù Lao Chàm - Hội An"},
        }
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
