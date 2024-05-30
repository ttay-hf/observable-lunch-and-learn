import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-completion',
  standalone: true,
  imports: [],
  templateUrl: './observable-completion.component.html',
  styleUrl: './observable-completion.component.scss'
})
export class ObservableCompletionComponent implements OnInit {
  public subscription: Subscription;
  public testSubject$: Observable<void>;
  private testSubject: Subject<void> = new Subject<void>();

  constructor() {
    this.testSubject$ = this.testSubject.asObservable();
    this.subscription = this.testSubject$.subscribe();
  }

  ngOnInit(): void {
  }
}
