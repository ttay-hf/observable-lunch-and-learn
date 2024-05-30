import { Component } from '@angular/core';
import { BehaviorSubject, finalize, tap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

const codeExample =
`<h2>Async Pipe Example</h2>
<div class="top-bar">
  <div>
    <!-- Note: only using the subject directly here so that the console logs are easily readable with less subscriptions -->
    Main Feature Flag: {{mainFeatureFlag.value}}<br/>
    <button (click)="toggleMainFlag()">Toggle Main Flag</button>
  </div>
  <div>
    <!-- Note: only using the subject directly here so that the console logs are easily readable with less subscriptions -->
    Nested Feature Flag: {{nestedFeatureFlag.value}}<br/>
    <button (click)="toggleNestedFlag()">Toggle Nested Flag</button>
  </div>
</div>
<div *ngIf="mainFeatureFlag$ | async" class="component-container">
  This is a component!

  <div *ngIf="nestedFeatureFlag$ | async" class="nested-component-container">
    inner test component
  </div>
</div>`;

@Component({
  selector: 'app-async-pipe-example',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './async-pipe-example.component.html',
  styleUrl: './async-pipe-example.component.scss'
})
export class AsyncPipeExampleComponent {
  public codeExample = codeExample;

  public mainFeatureFlag = new BehaviorSubject<boolean>(true);
  public mainFeatureFlag$ = this.mainFeatureFlag.asObservable().pipe(
    tap((flag) => console.log(`main feature flag updated: ${flag}`)),
    finalize(() => console.log('main feature flag observable completed!'))
  );

  public nestedFeatureFlag = new BehaviorSubject<boolean>(true);
  public nestedFeatureFlag$ = this.nestedFeatureFlag.asObservable().pipe(
    tap((flag) => console.log(`nested feature flag updated: ${flag}`)),
    finalize(() => console.log('nested feature flag observable completed!'))
  );

  toggleMainFlag() {
    this.mainFeatureFlag.next(!this.mainFeatureFlag.value);
  }

  toggleNestedFlag() {
    this.nestedFeatureFlag.next(!this.nestedFeatureFlag.value);
  }
}
