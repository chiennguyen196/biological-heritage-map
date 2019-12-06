import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataType } from '../../domains/data-type.enum';
import { zip } from 'rxjs';
import { LeafletMapWrapper } from '../../components/leaflet-map/leaflet-map-wrapper';
import { MatDialog } from '@angular/material/dialog';
import { SearchDialogComponent } from '../../components/search-dialog/search-dialog.component';
import { SearchService } from '../../services/search.service';
import { EventWrapper } from 'src/app/domains/event-wrapper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends LeafletMapWrapper implements OnInit {

  urlDetail: String;

  constructor(
    private dataService: DataService,
    private _ngZone: NgZone,
    private _searchService: SearchService
  ) {
    super(_ngZone, _searchService);
  }

  ngOnInit() {
    super.ngOnInit();
    zip(
      this.dataService.getData(DataType.TINH),
      // this.dataService.getData(DataType.KHU_BAO_TON),
      this.dataService.getData(DataType.KHU_DI_SAN),
      this.dataService.getData(DataType.KHU_DU_TRU_SINH_QUYEN),
      this.dataService.getData(DataType.VUON_QUOC_GIA)
    ).subscribe(val => this.dataWrappers = val);
  }

  onClickLayer(event: EventWrapper) {
    super.onClickLayer(event);
    console.log(event.data.properties.Link_Mota);
    let detailUrl = "assets/404.html"
    if (event.data.properties.Link_Mota) {
      detailUrl = event.data.properties.Link_Mota;
    }
    this._ngZone.run(() => {
      this.urlDetail = detailUrl;
    });
  }
}
