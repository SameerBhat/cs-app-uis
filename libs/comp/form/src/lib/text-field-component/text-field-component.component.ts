import {Component, Input} from '@angular/core';
import {BaseFormComponent} from "../_base/base-form.component";

@Component({
  selector: 'cs-app-uis-text-field-component',
  templateUrl: './text-field-component.component.html',
  styleUrls: ['./text-field-component.component.scss'],
})
export class TextFieldComponentComponent extends BaseFormComponent{


  @Input() rows = 1;




}
