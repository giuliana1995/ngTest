import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from '../enum/enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  titolo = new FormControl('', [Validators.required, Validators.minLength(1)]);
  surname = new FormControl('', [Validators.required, Validators.minLength(1)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  telephoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  isDisabled = true;
  loading = false;
  theme = Theme;
  formTheme: string = '';
  form: FormGroup;

  constructor(private themeService: ThemeService) {
    this.form = new FormGroup({
      titolo: this.titolo,
      surname: this.surname,
      email: this.email,
      telephoneNumber: this.telephoneNumber,
    });
  }

  ngOnInit(): void {
    this.themeService.tema.subscribe((tema) => (this.formTheme = tema))
  }

  checkForDisabled() {
    if (this.titolo.valid && this.surname.valid && this.email.valid && this.telephoneNumber.valid) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }
  postMyForm() {
    this.loading = true;
  }

  setDarkTheme() {
    this.themeService.onChangeTheme(this.theme.Dark);
  }
  setLightTheme() {
    this.themeService.onChangeTheme(this.theme.Light);
  }
}
