import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from '../enum/enum';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {
  
  theme = Theme;
  footerTheme: string = '';

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.tema.subscribe((tema) => (this.footerTheme = tema))
  }

  setDarkTheme() {
    this.themeService.onChangeTheme(this.theme.Dark);
  }

  setLightTheme() {
    this.themeService.onChangeTheme(this.theme.Light);
  }

}
