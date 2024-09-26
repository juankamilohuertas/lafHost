import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCloseOrOpenComponent } from './btn-close-or-open.component';

describe('BtnCloseOrOpenComponent', () => {
  let component: BtnCloseOrOpenComponent;
  let fixture: ComponentFixture<BtnCloseOrOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnCloseOrOpenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCloseOrOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
