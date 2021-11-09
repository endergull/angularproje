import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorselComponent } from './gorsel.component';

describe('GorselComponent', () => {
  let component: GorselComponent;
  let fixture: ComponentFixture<GorselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GorselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GorselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
