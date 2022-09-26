import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconComponent } from './icon/icon.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {HttpClientModule} from "@angular/common/http";


import {
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline
} from '@ant-design/icons-angular/icons';
import {IconDefinition} from "@ant-design/icons-angular";

const icons: IconDefinition[] = [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline
];

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';



@NgModule({
  imports: [CommonModule, NzButtonModule, NzIconModule, HttpClientModule, NzIconModule.forChild(icons), NzToolTipModule],
  declarations: [ButtonComponent, IconComponent],
  exports: [ButtonComponent, IconComponent],
})
export class CompCommonModule {}
