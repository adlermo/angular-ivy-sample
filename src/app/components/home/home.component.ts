import { Component } from '@angular/core';

interface Language {
  quality: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public textInput: string;
  public language: Language;

  public languageList: Language[] = [
    { quality: 'fácil', name: 'JavaScript' },
    { quality: 'massa', name: 'Java' },
    { quality: 'moda', name: 'Python' },
    { quality: 'bom', name: 'Ruby' },
    { quality: 'old-fashion', name: 'Cobol' },
    { quality: 'coisa séria', name: 'C/C++' },
    { quality: 'desafiador', name: 'Matlab' },
    { quality: 'divertido', name: 'Angular' },
  ];

  constructor() {}

  public chooseLanguage(e): void {
    let find = this.languageList.find((x) => x?.name === e.target.value);

    this.language = find;
  }
}
