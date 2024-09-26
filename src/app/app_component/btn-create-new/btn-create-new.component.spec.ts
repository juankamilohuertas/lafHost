import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtncreateNewComponent } from './btn-create-new.component';

describe('BtncreateNewComponent', () => {
  let component: BtncreateNewComponent;
  let fixture: ComponentFixture<BtncreateNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtncreateNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtncreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
