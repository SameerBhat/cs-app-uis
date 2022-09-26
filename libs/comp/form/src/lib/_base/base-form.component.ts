import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BaseCommonComponent } from '../../../../common/src/lib/_base/base-common-component';

@Component({
  selector: 'cs-app-uis-base-form',
  template: '',
})
export abstract class BaseFormComponent {
  @Input() control!: AbstractControl;

  @Input() placeholder = '';

  @Input() type: 'text' | 'number' | 'email' = 'text';

  @Input() value: any = '';
  @Output() valueChange = new EventEmitter<any>();

  showError(): boolean {
    if (this.control) {
      const { dirty } = this.control;
      return dirty && this.control.invalid;
    }
    return false;
  }

  getErrorMessage(): string {
    if (this.control.hasError('required')) {
      return 'This field is required';
    } else if (this.control.hasError('min')) {
      const errors: any = this.control.errors;
      return `Min value should be ${errors.min.min}, you have entered ${errors.min.actual}`;
    } else {
      return 'Some different error';
    }
  }
}
