import { Component } from '@angular/core';
import { ButtonVariant, COMMON_ICONS } from '@cs-app-uis/comp/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SelectFieldOption} from "../../../../libs/comp/form/src/lib/select-field/select-field.component";

@Component({
  selector: 'cs-app-uis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ui-demo';
  buttonVariant: ButtonVariant = 'primary';

  icons = COMMON_ICONS;

  form: FormGroup = new FormGroup<any>({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    search: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.min(1), Validators.max(5)]),
    select: new FormControl(2),
  });

  value = 'Cyber Spark';


  options: SelectFieldOption[] = [
    {
      label: 'Apple',
      id: 1
    },

    {
      label: 'Mango',
      id: 2
    },
    {
      label: 'Orange',
      id: 3
    },

    {
      label: 'Banana',
      id: 4,
      disabled: true
    },

  ]
}
