import { Component, OnInit, ViewChild, OnDestroy, NgZone } from '@angular/core';
import { DataWrapper } from '../../domains/data-wrapper';
import { DataService } from '../../services/data.service';
import { LeafletMapWrapper } from '../../components/leaflet-map/leaflet-map-wrapper';
import { ActivatedRoute, Route, Router, ParamMap } from '@angular/router';
import { RegionType } from '../../domains/region-type.enum';
import { environment } from '../../../environments/environment';
import { Subscription, zip } from 'rxjs';
import { DataType } from '../../domains/data-type.enum';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
  styleUrls: ['./region-page.component.scss']
})
export class RegionPageComponent extends LeafletMapWrapper implements OnInit, OnDestroy {

  private routeSubscription: Subscription;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private _ngZone: NgZone,
    private _searchService: SearchService
  ) {
    super(_ngZone, _searchService);
  }

  ngOnInit() {
    super.ngOnInit();

    this.routeSubscription = this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      let regionType: RegionType;
      regionType = environment.region.urls[id].type;
      if (regionType) {
        this.loadDataIntoMap(regionType);
      } else {
        this.router.navigateByUrl('/not-found');
      }
    });
  }

  private loadDataIntoMap(regionType: RegionType) {
    const searchObj = {
      'Vung': regionType
    };
    zip(
      this.dataService.search(DataType.TINH, searchObj),
      // this.dataService.search(DataType.KHU_BAO_TON, searchObj),
      this.dataService.search(DataType.KHU_DI_SAN, searchObj),
      this.dataService.search(DataType.KHU_DU_TRU_SINH_QUYEN, searchObj),
      this.dataService.search(DataType.VUON_QUOC_GIA, searchObj)
    ).subscribe(vals => {
      this.dataWrappers = vals;
      this.fitBounds(vals[0].featureCollection);
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.routeSubscription.unsubscribe();
  }

}
