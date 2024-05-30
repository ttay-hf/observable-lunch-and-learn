import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestExampleComponent } from './combine-latest-example.component';

describe('CombineLatestExampleComponent', () => {
  let component: CombineLatestExampleComponent;
  let fixture: ComponentFixture<CombineLatestExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombineLatestExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
