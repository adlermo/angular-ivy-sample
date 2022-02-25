import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [WeatherCardComponent, FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent],
})
export class SharedModule {}
