import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsAdminComponent } from './travels-admin.component';

describe('TravelsAdminComponent', () => {
  let component: TravelsAdminComponent;
  let fixture: ComponentFixture<TravelsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelsAdminComponent]
    });
    fixture = TestBed.createComponent(TravelsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
