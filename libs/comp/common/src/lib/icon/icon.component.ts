import { Component, Input, OnInit } from '@angular/core';
import { CommonIcons } from './COMMON_ICONS';
import { BaseCommonComponent } from '../_base/base-common-component';

@Component({
  selector: 'cs-app-uis-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent extends BaseCommonComponent {
  @Input() variant: 'outline' | 'fill' | 'twotone' = 'outline';

  @Input() icon!: CommonIcons;

  constructor() {
    super();
  }
}
