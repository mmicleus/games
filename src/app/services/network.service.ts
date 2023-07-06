import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiResponse, Game, Publisher } from '../models';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  fetchData(
    sortingCriteria: string,
    search?: string
  ): Observable<ApiResponse<Game>> {
    let params!: HttpParams;
    if (!search) {
      params = new HttpParams().set('ordering', sortingCriteria);
    } else {
      params = new HttpParams()
        .set('ordering', sortingCriteria)
        .set('search', search);
    }

    return this.http.get<ApiResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }

  getPlatformData(id: number): Observable<{
    description_raw: string;
    publishers: Publisher[];
    website: string;
  }> {
    // httpParams.append('id', '1');

    return this.http.get<{
      description_raw: string;
      publishers: Publisher[];
      website: string;
    }>(`${env.BASE_URL}/games/${id}`);
  }
}
