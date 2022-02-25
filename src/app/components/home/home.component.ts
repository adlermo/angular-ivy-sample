import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public language: string;

  public languageList = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'R' },
    { id: 5, name: 'TypeScript' },
    { id: 5, name: 'Cobol' },
    { id: 5, name: 'C/C++' },
    { id: 5, name: 'Matlab' },
    { id: 5, name: 'Angular' },
  ];

  constructor() {}

  public chooseLanguage(e): void {
    let find = this.languageList.find((x) => x?.name === e.target.value);

    this.language = find.name;
  }
}
