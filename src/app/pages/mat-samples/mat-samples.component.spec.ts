import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSamplesComponent } from './mat-samples.component';

describe('MatSamplesComponent', () => {
  let component: MatSamplesComponent;
  let fixture: ComponentFixture<MatSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
