import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, concat, defer, map, Observable, of, takeUntil } from 'rxjs';
import { DestroyableComponent } from '../../components/destroyable-component';
import { AsyncPipe } from '@angular/common';

interface TestForm {
  leftText: FormControl<string | null>;
  rightText: FormControl<string | null>;
}

@Component({
  selector: 'app-combine-latest-example',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './combine-latest-example.component.html',
  styleUrl: './combine-latest-example.component.scss'
})
export class CombineLatestExampleComponent {
  form: FormGroup<TestForm>;
  combined$: Observable<string>;

  public defer = false;

  constructor() {
    this.form = new FormGroup<TestForm>({
      leftText: new FormControl<string>('left'),
      rightText: new FormControl<string>('right'),
    });

    // note: we are only assigned this observable to a variable, NOT subscribing. If we were subscribing, then we should
    // have a way to unsubscribe (takeUntil, .unsubscribe(), etc)
    this.combined$ = this.combined().pipe(this.customConcatenatePipe);
  }

  private customConcatenatePipe(source$: Observable<any>): Observable<any> {
    return source$.pipe(
      // map the combined observable so that it's easier to deal with in next operators
      map(([left, right]) => ({ left, right })),
      // take our left/right form values and combine it into a single string
      map(({ left, right }) => {
        return `${left} ${right}`;
      }),
    );
  }

  toggleCombinedObservable() {
    this.defer = !this.defer;
    this.form.setValue({ leftText: 'left', rightText: 'right' });
    if (this.defer) {
      this.combined$ = this.combinedWithStartWith().pipe(this.customConcatenatePipe);
    }
    else {
      this.combined$ = this.combined().pipe(this.customConcatenatePipe);
    }
  }

  combined() {
    return combineLatest([
      this.form.controls.leftText.valueChanges,
      this.form.controls.rightText.valueChanges,
    ]);
  }

  combinedWithStartWith() {
    return combineLatest([
      this.form.controls.leftText.valueChanges,
      concat(
        defer(() => of(this.form.value.rightText)),
        this.form.controls.rightText.valueChanges
      )
    ]);
  }
}
