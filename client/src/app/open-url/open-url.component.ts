import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { UrlService, Url } from '../url.service';

@Component({template: ''})
export class OpenUrlComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private urlService: UrlService,
    private title: Title,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const code = param.get('code');
      if (code){
        this.urlService.getUrlByCode(code)
          .then((url: Url) => {
            this.title.setTitle(url.location);
            this.document.location.href = url.location;
          })
          .catch(err => this.router.navigate(['/']));
      }
    });
  }
}
