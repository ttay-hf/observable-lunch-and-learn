import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePracticeComponent } from './more-practice.component';

describe('MorePracticeComponent', () => {
  let component: MorePracticeComponent;
  let fixture: ComponentFixture<MorePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorePracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MorePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
