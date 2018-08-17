import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-html-viewer',
  templateUrl: './html-viewer.component.html',
  styleUrls: ['./html-viewer.component.scss']
})
export class HtmlViewerComponent implements OnChanges {

  @Input()
  url: string;

  htmlString: string;

  constructor(
    private http: HttpClient
  ) { }

  ngOnChanges() {
    // console.log('ng changes');
    if (this.url) {
      this.htmlString = null;
      this.http.get(this.url, { responseType: 'text' }).subscribe(
        val => {
          this.htmlString = val;
        },
        err => {
          this.htmlString = err.message;
        });
    } else {
      this.htmlString = `Không có dữ liệu`;
    }
  }

}
