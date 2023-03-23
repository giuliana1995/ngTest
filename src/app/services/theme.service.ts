import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Theme } from '../layout-component/enum/enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  tema = new BehaviorSubject<string>(Theme.Light);

  constructor() {}

  onChangeTheme(tema: string) {   
    this.tema.next(tema);
  }

}