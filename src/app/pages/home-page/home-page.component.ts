import { Component, OnInit, NgZone } from '@angular/core';
import { DataWrapper } from '../../domains/data-wrapper';
import { DataService } from '../../services/data.service';
import { DataType } from '../../domains/data-type.enum';
import { EventWrapper } from '../../domains/event-wrapper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  dataWrappers: DataWrapper[] = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getData(DataType.TINH).subscribe(data => {
      // do not use push, use equal instead
      this.dataWrappers = [data];
    });
  }

  onClickLayer(event: EventWrapper) {
    console.log(JSON.stringify(event.data.properties));
  }

}
