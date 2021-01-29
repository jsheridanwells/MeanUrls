import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UrlService, Url } from '../url.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-list-urls',
  templateUrl: './list-urls.component.html',
  styleUrls: ['./list-urls.component.scss']
})
export class ListUrlsComponent implements OnInit {
  host: string = this.resolveHost();
  urls: Url[] = [];
  newUrl: { location:string } = { location: '' };
  toggleInvalidUrlMessage: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private urlService: UrlService
  ) { }

  ngOnInit(): void {
    this.urlService.loadUrls().subscribe(urls => this.urls = urls);
  }

  shorten(): void {
    if (this.validateUrl(this.newUrl.location)) {
      this.toggleInvalidUrlMessage = false;
      this.urlService.addUrl({ location: this.newUrl.location })
        .then((url: Url) => this.addUrl(url));
    } else {
      this.toggleInvalidUrlMessage = true;
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.shorten();
    }
  }

  private addUrl(url: Url): void {
    this.urls.push(url);
  }

  private resolveHost(): string {
    if (!environment.production && this.document.location.port) {
      return `${ this.document.location.hostname }:${ this.document.location.port }`;
    } else {
      return this.document.location.hostname;
    }
  }

  private validateUrl(url: string): boolean {
    const URL_PATTERN = /^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&%\$#_]*)?$/;
    console.log('test?', URL_PATTERN.test(url));
    return URL_PATTERN.test(url);
  }
}
