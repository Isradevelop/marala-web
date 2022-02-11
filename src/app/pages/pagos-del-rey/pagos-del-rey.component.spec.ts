import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosDelReyComponent } from './pagos-del-rey.component';

describe('PagosDelReyComponent', () => {
  let component: PagosDelReyComponent;
  let fixture: ComponentFixture<PagosDelReyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosDelReyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosDelReyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
