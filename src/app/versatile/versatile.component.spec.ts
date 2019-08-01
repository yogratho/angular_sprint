import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersatileComponent } from './versatile.component';

describe('VersatileComponent', () => {
  let component: VersatileComponent;
  let fixture: ComponentFixture<VersatileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersatileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersatileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
