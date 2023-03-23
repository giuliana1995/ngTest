import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.scss'],
})
export class ContentComponentComponent implements OnInit {

  contentTheme: string = '';

  constructor(private themeService: ThemeService) {
  }
  ngOnInit(): void {
    this.themeService.tema.subscribe((tema) => (this.contentTheme = tema));
  }
}
