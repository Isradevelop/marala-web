import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolanDeCabrasComponent } from './solan-de-cabras.component';

describe('SolanDeCabrasComponent', () => {
  let component: SolanDeCabrasComponent;
  let fixture: ComponentFixture<SolanDeCabrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolanDeCabrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolanDeCabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
