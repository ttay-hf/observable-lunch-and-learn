import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapExampleComponent } from './switch-map-example.component';

describe('SwitchMapExampleComponent', () => {
  let component: SwitchMapExampleComponent;
  let fixture: ComponentFixture<SwitchMapExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchMapExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchMapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
