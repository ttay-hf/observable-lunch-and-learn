import { Component } from '@angular/core';
import {
  concatMap,
  delay,
  finalize,
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap
} from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DestroyableComponent } from '../../components/destroyable-component';

@Component({
  selector: 'app-fork-join-example',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './fork-join-example.component.html',
  styleUrl: './fork-join-example.component.scss'
})
export class ForkJoinExampleComponent extends DestroyableComponent {
  public forkJoinResponse = '';
  public mergeMapResponse = '';
  public concatMapResponse = '';

  clickedForkJoin() {
    this.forkJoinResponse = '';
    forkJoin([
      of(2000).pipe(switchMap(val => of(val).pipe(delay(val)))),
      of(1000).pipe(switchMap(val => of(val).pipe(delay(val)))),
    ]).pipe(
      takeUntil(this.destroyed$),
      tap((result) => console.log('result', result)),
      tap((result) => this.forkJoinResponse = JSON.stringify(result)),
    ).subscribe();
  }

  clickedMergeMap() {
    this.mergeMapResponse = '';
    of(2000, 1000).pipe(
      mergeMap((val) => of(`Delayed by ${val}ms`).pipe(delay(val))),
      tap((result) => console.log('result', result)),
      tap((result) => this.mergeMapResponse += `${result}\n`),
    ).subscribe();
  }

  clickedConcatMap() {
    this.concatMapResponse = '';
    of(2000, 1000).pipe(
      concatMap((val) => of(`Delayed by ${val}ms`).pipe(delay(val))),
      tap((result) => console.log('result', result)),
      tap((result) => this.concatMapResponse += `${result}\n`),
    ).subscribe();
  }
}
