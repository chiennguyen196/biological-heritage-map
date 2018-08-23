import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatDialog } from '@angular/material';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  objectKeys = Object.keys;
  regionUrls = environment.region.urls;
  regionPrefix = environment.region.prefix;
  constructor(
    private dialog: MatDialog,
  ) { }

  onClickSearchButton() {
    this.dialog.open(SearchDialogComponent);
  }

}
