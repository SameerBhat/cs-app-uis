import {Component, Input} from '@angular/core';
import {BaseFormComponent} from '../_base/base-form.component';


export interface SelectFieldOption{
  id: string| number;
  label: string;
  disabled?: boolean;
}
@Component({
  selector: 'cs-app-uis-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
})
export class SelectFieldComponent extends BaseFormComponent {

  @Input() options: SelectFieldOption[] = []

  constructor() {
    super();
  }
}
