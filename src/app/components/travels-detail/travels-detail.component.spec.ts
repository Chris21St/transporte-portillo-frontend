import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsDetailComponent } from './travels-detail.component';

describe('TravelsDetailComponent', () => {
  let component: TravelsDetailComponent;
  let fixture: ComponentFixture<TravelsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelsDetailComponent]
    });
    fixture = TestBed.createComponent(TravelsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
