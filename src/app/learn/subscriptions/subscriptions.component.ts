import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, finalize, interval, map, mergeMap, Observable, Subject, switchMap, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

const badNestedExample =
`something$.subscribe(() => {
  // this will never get cleaned up
  anotherObservable$.subscribe();
});`;

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.scss'
})
export class SubscriptionsComponent implements OnInit {
  public example = '{{ someObservable$ | async }}';

  public badNestedExample = badNestedExample;

  public test: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public innerSub: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public test$: Observable<number> = this.test.asObservable().pipe(
    tap(() => console.log('main sub')),
    /*switchMap(() =>
      this.innerSub.asObservable().pipe(
        tap(() => console.log('calling inner switch')),
        finalize(() => console.log('finlized inner sub'))
      )
    )*/
    mergeMap(() =>
      interval(1000).pipe(
        tap(() => console.log('calling inner switch')),
        finalize(() => console.log('finlized inner sub'))
      )
    )
  );

  ngOnInit() {
    setInterval(() => {
      //this.test.next(this.test.value + 1);
    }, 2000);
  }

}
