import { Component, OnInit } from '@angular/core';

import { WeatherService } from './../../core/services/weather.service';

import { Current } from './../../shared/interfaces/current';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  public current: Current;

  constructor(private readonly service: WeatherService) {}

  ngOnInit() {
    this.service.getCurrentWeather().subscribe((res) => {
      this.current = { ...res };
    });
  }

  formatTimestamp(timestamp: number): string {
    let date = new Date(timestamp);

    return date.toLocaleTimeString('pt-BR');
  }
}
