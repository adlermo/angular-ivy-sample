import { Component } from '@angular/core';

import { WeatherService } from './../../core/services/weather.service';

import { Current } from './../../shared/interfaces/current';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
  current: Current;

  constructor(private readonly service: WeatherService) {
    service.getCurrentWeather().subscribe((res) => {
      this.current = { ...res };
    });
  }
}
