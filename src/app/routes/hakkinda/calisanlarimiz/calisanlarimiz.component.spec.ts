import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalisanlarimizComponent } from './calisanlarimiz.component';

describe('CalisanlarimizComponent', () => {
  let component: CalisanlarimizComponent;
  let fixture: ComponentFixture<CalisanlarimizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalisanlarimizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalisanlarimizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
