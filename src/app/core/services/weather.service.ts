import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Current } from '../../shared/interfaces/current';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiURL =
    'https://api.openweathermap.org/data/2.5/weather?id=3448439&appid=d21dd0e334529048170784d3f77b3f74&units=metric&lang=pt_br';

  constructor(private readonly http: HttpClient) {}

  getCurrentWeather(): Observable<Current> {
    return this.http.get<Current>(this.apiURL);
  }
}
