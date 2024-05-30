import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHandlingComponent } from './input-handling.component';

describe('InputHandlingComponent', () => {
  let component: InputHandlingComponent;
  let fixture: ComponentFixture<InputHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputHandlingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
