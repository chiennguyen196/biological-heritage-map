import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';

@Component({
  selector: 'app-html-viewer',
  templateUrl: './html-viewer.component.html',
  styleUrls: ['./html-viewer.component.scss']
})
export class HtmlViewerComponent implements OnChanges {

  @Input()
  url: string;
  safeUrl: SafeResourceUrl;

  htmlString: string;

  constructor(
    private http: HttpClient,
    public sanitizer: DomSanitizer
  ) { }

  ngOnChanges() {
    console.log(this.url);
    if (this.url) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
  }

}
