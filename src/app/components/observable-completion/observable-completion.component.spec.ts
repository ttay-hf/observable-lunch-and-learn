import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCompletionComponent } from './observable-completion.component';

describe('ObservableCompletionComponent', () => {
  let component: ObservableCompletionComponent;
  let fixture: ComponentFixture<ObservableCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableCompletionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
