import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatDialog } from '@angular/material';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegionType } from '../../domains/region-type.enum';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  private routerSubscription: Subscription;
  objectKeys = Object.keys;
  regionUrls = environment.region.urls;
  regionPrefix = environment.region.prefix;
  private regionType: RegionType;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const regionId = event.urlAfterRedirects.split('/').reverse()[0];
        this.regionType = this.regionUrls[regionId] ? this.regionUrls[regionId].type : null;
        this.searchService.clearLatestSearchResult();
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  onClickSearchButton() {
    this.dialog.open(SearchDialogComponent, {
      data: {
        regionType: this.regionType
      }
    });
  }

}
