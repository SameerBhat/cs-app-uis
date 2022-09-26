import {Component, Input} from "@angular/core";

@Component({
  selector: 'cs-app-uis-common',
  template: ''

})
export abstract class BaseCommonComponent  {
  @Input() tooltip?: string;
}



