import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptConfigurationComponent } from './opt-configuration.component';

describe('OptConfigurationComponent', () => {
  let component: OptConfigurationComponent;
  let fixture: ComponentFixture<OptConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
