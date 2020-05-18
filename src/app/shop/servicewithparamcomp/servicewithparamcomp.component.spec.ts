import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicewithparamcompComponent } from './servicewithparamcomp.component';

describe('ServicewithparamcompComponent', () => {
  let component: ServicewithparamcompComponent;
  let fixture: ComponentFixture<ServicewithparamcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicewithparamcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicewithparamcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
