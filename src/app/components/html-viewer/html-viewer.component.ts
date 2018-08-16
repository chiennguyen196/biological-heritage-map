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
    if (this.url) {
      this.htmlString = null;
      this.http.get<string>(this.url).subscribe(
        val => {
          this.htmlString = val;
          // console.log(val);
        },
        err => {
          this.htmlString = err.error;
          // console.log(err);
        });
    }
  }

}