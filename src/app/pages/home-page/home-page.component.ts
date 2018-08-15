import { Component, OnInit, NgZone } from '@angular/core';
import { DataWrapper } from '../../domains/data-wrapper';
import { DataService } from '../../services/data.service';
import { DataType } from '../../domains/data-type.enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  dataList: DataWrapper[] = [];

  constructor(
    private dataService: DataService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.dataService.getData(DataType.TINH).subscribe(data => {
      // console.log(JSON.stringify(data.data));
      this.ngZone.run(() => this.dataList.push(data));
  });
}

}
