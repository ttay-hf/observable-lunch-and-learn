import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapAndDebounceExampleComponent } from './switch-map-and-debounce-example.component';

describe('SwitchMapAndDebounceExampleComponent', () => {
  let component: SwitchMapAndDebounceExampleComponent;
  let fixture: ComponentFixture<SwitchMapAndDebounceExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchMapAndDebounceExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchMapAndDebounceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
