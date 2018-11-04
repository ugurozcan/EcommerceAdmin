import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_CHARMS_CATEGORY_URL, API_CHARMS } from './../../constants/enpoints';
import { CharmObject } from 'app/models/charm.interface';

@Injectable()
export class CharmService {
  private token = '';

  constructor(private http: HttpClient,
    private authService: AuthService) {
    this.token = this.authService.getToken();
  }

  public getCharms(id: number): Observable<any> {
    const options = this.setupOptions();
    const url = `${API_CHARMS_CATEGORY_URL}/${id}${API_CHARMS}`;

    return this.http.get(url, options);
  }

  public addCharm(charm: CharmObject): Observable<any> {
    const options = this.setupOptions();
    const url = `/api/${API_CHARMS}`;

    return this.http.post(url, charm, options);
  }

  public updateCharm(charm: CharmObject): Observable<any> {
    const options = this.setupOptions();
    const url = `/api/${API_CHARMS}`;

    return this.http.put(url, charm, options);
  }

  private setupOptions(): any {
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      })
    };

    return options;
  }
}