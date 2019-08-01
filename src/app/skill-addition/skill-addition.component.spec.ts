import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAdditionComponent } from './skill-addition.component';

describe('SkillAdditionComponent', () => {
  let component: SkillAdditionComponent;
  let fixture: ComponentFixture<SkillAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
