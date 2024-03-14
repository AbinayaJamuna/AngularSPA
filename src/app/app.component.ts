import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-spa';
  values: any[] = [];
  result!: FormArray;

  form = new FormGroup({
    inputField: new FormArray([]),
  });

  get inputField(): FormArray {
    return this.form.get('inputField') as FormArray;
  }

  addInputField() {
    this.inputField.push(new FormGroup({
      type: new FormControl(''),
      input: new FormControl('')
    }))

  }
  onSubmit() {
    // Result as for FormArray
    this.result = this.form.get('inputField') as FormArray
  }

}



