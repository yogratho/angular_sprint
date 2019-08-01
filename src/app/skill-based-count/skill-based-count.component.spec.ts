import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBasedCountComponent } from './skill-based-count.component';

describe('SkillBasedCountComponent', () => {
  let component: SkillBasedCountComponent;
  let fixture: ComponentFixture<SkillBasedCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillBasedCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBasedCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
