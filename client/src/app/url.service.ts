import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Url {
  location: string;
  code?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  api = `${ environment.api }/urls`;

  constructor(
    private http: HttpClient
  ) { }

  loadUrls(): Observable<Url[]> {
    return this.http.get<Url[]>(this.api);
  }

  getUrlByCode(code: string): Promise<any>{
    return this.http.get<Url>(`${ this.api }/${ code }`)
      .toPromise();
  }

  addUrl(url: Url): Promise<any> {
    return this.http.post<Url>(this.api, url)
      .toPromise();
  }
}
