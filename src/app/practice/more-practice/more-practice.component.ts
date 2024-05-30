import { Component } from '@angular/core';
import { delay, filter, interval, map, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-more-practice',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './more-practice.component.html',
  styleUrl: './more-practice.component.scss'
})
export class MorePracticeComponent {
  evenNumbers$: Observable<number>;

  loading: boolean = false;
  loadingResponse$: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.evenNumbers$ = interval(1000).pipe(
    );

    this.loadingResponse$.asObservable().pipe(
      tap(() => this.loading = true),
      switchMap(() => of(24).pipe(delay(1000))),
      tap((val) => console.log(`val`, val))
    ).subscribe();
  }

  successClicked() {
    this.loadingResponse$.next(true);
  }

  errorClicked() {
    this.loadingResponse$.next(false);
  }
}
