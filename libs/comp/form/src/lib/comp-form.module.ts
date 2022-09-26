import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponentComponent } from './text-field-component/text-field-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SearchFieldComponent } from './search-field/search-field.component';
import { CompCommonModule } from '@cs-app-uis/comp/common';
import { SelectFieldComponent } from './select-field/select-field.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, NzInputModule, CompCommonModule, NzSelectModule, NzToolTipModule],
  declarations: [
    TextFieldComponentComponent,
    SearchFieldComponent,
    SelectFieldComponent,
  ],
  exports: [TextFieldComponentComponent, SearchFieldComponent, SelectFieldComponent],
})
export class CompFormModule {}
