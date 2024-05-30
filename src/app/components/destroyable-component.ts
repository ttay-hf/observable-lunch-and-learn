import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-base-destroy',
  template: ``
})
export class DestroyableComponent implements OnDestroy {
    protected destroyed$: Subject<void> = new Subject<void>();

    ngOnDestroy(): void {
      this.destroyed$.next();
      this.destroyed$.complete();
    }
}
