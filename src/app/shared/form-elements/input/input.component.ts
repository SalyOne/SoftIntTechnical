import {Component, forwardRef, Input} from '@angular/core';
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => InputComponent
      ),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor{
  public value: string | undefined;
  public isDisabled: boolean | undefined;


  @Input()
  public parentForm: FormGroup|undefined;
  @Input()
  public fieldName: string|undefined;
  @Input()
  public label: string|undefined;

  private onChangeFn: (value: string) => void = () => {};
  private onTouchedFn: () => void = () => {};

get formField():FormControl |undefined{
  return this.parentForm?.get(this.fieldName!) as FormControl
}
  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChange(event: Event): void {
    const value: string = (event.target as HTMLInputElement).value;
    this.onChangeFn(value);
  }
  isTouched=false
  onTouched(): void {
    this.isTouched = true
    this.onTouchedFn();
  }
}
