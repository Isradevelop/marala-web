import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbadilloComponent } from './barbadillo.component';

describe('BarbadilloComponent', () => {
  let component: BarbadilloComponent;
  let fixture: ComponentFixture<BarbadilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarbadilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbadilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
