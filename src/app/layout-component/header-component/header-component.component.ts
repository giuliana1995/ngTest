import {
  Component,
  OnInit,
} from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from '../enum/enum';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
})
export class HeaderComponentComponent implements OnInit {
  
  theme = Theme;
  headerTheme: string = '';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.tema.subscribe((tema) => (this.headerTheme = tema));
  }

  setDarkTheme() {
    this.themeService.onChangeTheme(this.theme.Dark)
  }

  setLightTheme() {
    this.themeService.onChangeTheme(this.theme.Light)
  }

}
