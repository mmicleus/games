import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  fetchData() {
    return this.http.get<any>(
      'https://rawg-video-games-database.p.rapidapi.com/games',
      {
        headers: new HttpHeaders({
          'X-RapidAPI-Key':
            '37256c6cb7msh9b684b1ec1f3258p178571jsnc1f57c4545a6',
          'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
        }),
        params: new HttpParams().set('key', '1238c3c8003e4de5a51e09bd25e213c3'),
      }
    );
  }

  getPlatformData(id: number) {
    let httpParams = new HttpParams();

    httpParams = httpParams.append('key', '1238c3c8003e4de5a51e09bd25e213c3');
    // httpParams.append('id', '1');

    return this.http.get<any>(
      `https://rawg-video-games-database.p.rapidapi.com/games/${id}`,
      {
        headers: new HttpHeaders({
          'X-RapidAPI-Key':
            '37256c6cb7msh9b684b1ec1f3258p178571jsnc1f57c4545a6',
          'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
        }),
        params: httpParams,
      }
    );
  }
}
