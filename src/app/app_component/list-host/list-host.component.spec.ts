import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHostComponent } from './list-host.component';

describe('ListHostComponent', () => {
  let component: ListHostComponent;
  let fixture: ComponentFixture<ListHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
