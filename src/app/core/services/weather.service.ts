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

  // id=2643743   London, GB
  // id=2988507   Paris, FR
  // id=1819729   Hong Kong, CH
  // id=1850147   Tokyo, JP
  // id=292968    Abu Dhabi, AE
  // id=703448    Kiev, UA

  constructor(private readonly http: HttpClient) {}

  getCurrentWeather(): Observable<Current> {
    return this.http.get<Current>(this.apiURL);
  }
}
