import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrMockupComponent } from './hr-mockup.component';

describe('HrMockupComponent', () => {
  let component: HrMockupComponent;
  let fixture: ComponentFixture<HrMockupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrMockupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
