import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyControllerComponent } from './my-controller.component';

describe('MyControllerComponent', () => {
  let component: MyControllerComponent;
  let fixture: ComponentFixture<MyControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
