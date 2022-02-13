import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskaComponent } from './riska.component';

describe('RiskaComponent', () => {
  let component: RiskaComponent;
  let fixture: ComponentFixture<RiskaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
