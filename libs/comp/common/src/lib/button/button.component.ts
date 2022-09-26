import {Component, Input} from '@angular/core';
import {ButtonVariant} from "../../index";
import {BaseCommonComponent} from "../_base/base-common-component";



@Component({
  selector: 'cs-app-uis-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends BaseCommonComponent  {


  @Input() variant: ButtonVariant = 'primary';


  constructor() {
    super();
  }

}
