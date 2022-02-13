import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganzonesComponent } from './veganzones.component';

describe('VeganzonesComponent', () => {
  let component: VeganzonesComponent;
  let fixture: ComponentFixture<VeganzonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeganzonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeganzonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
