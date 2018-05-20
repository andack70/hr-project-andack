
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrNavComponent } from './hr-nav.component';

describe('HrNavComponent', () => {
  let component: HrNavComponent;
  let fixture: ComponentFixture<HrNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HrNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
