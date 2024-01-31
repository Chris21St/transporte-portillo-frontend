import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverAdminComponent } from './driver-admin.component';

describe('DriverAdminComponent', () => {
  let component: DriverAdminComponent;
  let fixture: ComponentFixture<DriverAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverAdminComponent]
    });
    fixture = TestBed.createComponent(DriverAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
