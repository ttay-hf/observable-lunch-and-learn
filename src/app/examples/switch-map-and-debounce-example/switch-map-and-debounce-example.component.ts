import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounce, debounceTime, delay, finalize, first, Observable, of, Subscription, switchMap, tap } from 'rxjs';

interface TestForm {
  search: FormControl<string | null>;
}

interface ExampleSet {
  form: FormGroup<TestForm>;
  sub?: Subscription;
  outstandingCalls: number;
  canceledCalls: number;
}

@Component({
  selector: 'app-switch-map-and-debounce-example',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './switch-map-and-debounce-example.component.html',
  styleUrl: './switch-map-and-debounce-example.component.scss'
})
export class SwitchMapAndDebounceExampleComponent implements OnInit, OnDestroy {
  public nestedEx: ExampleSet;
  public switchMapEx: ExampleSet;
  public switchAndDebounceEx: ExampleSet;

  constructor() {
    this.nestedEx = {
      form: new FormGroup<TestForm>({
        search: new FormControl<string>(''),
      }),
      outstandingCalls: 0,
      canceledCalls: 0,
    };

    this.switchMapEx = {
      form: new FormGroup<TestForm>({
        search: new FormControl<string>(''),
      }),
      outstandingCalls: 0,
      canceledCalls: 0,
    };

    this.switchAndDebounceEx = {
      form: new FormGroup<TestForm>({
        search: new FormControl<string>(''),
      }),
      outstandingCalls: 0,
      canceledCalls: 0,
    };
  }

  ngOnInit(): void {
    // nested subscription -- bad example
    this.nestedEx.sub = this.nestedEx.form.valueChanges.subscribe(val => {
      console.log(val);

      this.testApiCall('nested', (i: number) => this.nestedEx.outstandingCalls += i)
        .subscribe();
    });

    // switchMap example -- good example
    this.switchMapEx.sub = this.switchMapEx.form.valueChanges.pipe(
      switchMap(() => {
        return this.testApiCall(
          'switchMap',
          (i: number) => this.switchMapEx.outstandingCalls += i,
          (i: number) => this.switchMapEx.canceledCalls += i
        );
      })
    ).subscribe((val) => {
      console.log(val);
    });

    // switchMap + debounce example -- better example
    this.switchAndDebounceEx.sub = this.switchAndDebounceEx.form.valueChanges.pipe(
      debounceTime(300),
      switchMap(() => {
        return this.testApiCall(
          'switchMap + debounce',
          (i: number) => this.switchAndDebounceEx.outstandingCalls += i,
          (i: number) => this.switchAndDebounceEx.canceledCalls += i);
      })
    ).subscribe((val) => {
      console.log(val);
    });
  }

  ngOnDestroy() {
    this.nestedEx?.sub?.unsubscribe();
    this.switchMapEx?.sub?.unsubscribe();
    this.switchAndDebounceEx?.sub?.unsubscribe();
  }

  private testApiCall(src: string, outstandingCallUpdateFn: (i: number) => void,
                      cancelledCallUpdateFn?: (i: number) => void): Observable<any> {
    console.log('increment');
    let finishedCallingService = false;
    outstandingCallUpdateFn(1);
    // simulate an api call that takes 2 seconds to come back
    return of({ message: 'test' }).pipe(
      delay(2000),
      first(),
      // update the status to done calling; we can use this in finalize to know this wasn't canceled
      tap(() => finishedCallingService = true),
      finalize(() => {
        console.log('finalize!');
        outstandingCallUpdateFn(-1);
        console.log('finishedCallingService', finishedCallingService);

        // if this is false, then it was a canceled call
        if (!finishedCallingService && cancelledCallUpdateFn) {
          cancelledCallUpdateFn(1);
          setTimeout(() => {
            cancelledCallUpdateFn(-1);
          }, 2000);
        }
      }),
    );
  }
}
