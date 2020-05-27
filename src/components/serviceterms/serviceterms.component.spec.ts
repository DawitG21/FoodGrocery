import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicetermsComponent } from './serviceterms.component';

describe('ServicetermsComponent', () => {
  let component: ServicetermsComponent;
  let fixture: ComponentFixture<ServicetermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicetermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicetermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
