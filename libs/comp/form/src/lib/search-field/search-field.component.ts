import {Component} from '@angular/core';
import {TextFieldComponentComponent} from "../text-field-component/text-field-component.component";

@Component({
  selector: 'cs-app-uis-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent extends TextFieldComponentComponent{


  constructor() {
    super();
  }

}
