import { Component } from '@angular/core';
import { finalize, first, Observable, of, Subject, takeUntil, tap } from 'rxjs';
import { DestroyableComponent } from '../destroyable-component';

@Component({
  selector: 'app-switch-map-example',
  standalone: true,
  imports: [],
  templateUrl: './switch-map-example.component.html',
  styleUrl: './switch-map-example.component.scss'
})
export class SwitchMapExampleComponent extends DestroyableComponent {
  public status: string = 'ready';

  switchMapped$!: Observable<number>;

  constructor() {
    super();

    this.setObservable();
  }

  setObservable() {
    const test = new Subject<number>();
    this.switchMapped$ = test.asObservable().pipe(
      //first(),
      takeUntil(this.destroyed$),
      tap((val) => {
        this.status = `value: ${val}`;
      }),
      finalize(() => {
        console.log('finalized!');
        this.status = "finalized";
      })
    );

    setTimeout(() => {
      test.next(24);
    }, 3000);
  }

  clickStart() {
    console.log(this.switchMapped$);
    this.switchMapped$.subscribe();
    console.log(this.switchMapped$);
  }

  clickStop() {

  }
}
