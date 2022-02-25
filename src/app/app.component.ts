import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  path: string;
  action: string;

  constructor(private readonly router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) this.changeUrl(e.url);
    });
  }

  changeUrl(url: string) {
    switch (url) {
      case '/current':
        this.path = '';
        this.action = 'Voltar';
        break;
      default:
        this.path = 'current';
        this.action = 'Clima agora';
        break;
    }
  }
}
