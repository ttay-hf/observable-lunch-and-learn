import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkJoinExampleComponent } from './fork-join-example.component';

describe('ForkJoinExampleComponent', () => {
  let component: ForkJoinExampleComponent;
  let fixture: ComponentFixture<ForkJoinExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForkJoinExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForkJoinExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
