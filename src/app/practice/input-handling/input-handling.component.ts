import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

interface TestForm {
  text: FormControl<string>;
}

@Component({
  selector: 'app-input-handling',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './input-handling.component.html',
  styleUrl: './input-handling.component.scss'
})
export class InputHandlingComponent {
  form: FormGroup<TestForm>;

  output$: Observable<string>;

  constructor() {
    this.form = new FormGroup<TestForm>({
      text: new FormControl<string>('') as FormControl<string>,
    });

    this.output$ = this.form.controls.text.valueChanges.pipe(
      // TODO
    );
  }
}
