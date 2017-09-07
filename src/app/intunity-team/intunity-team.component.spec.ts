import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntunityTeamComponent } from './intunity-team.component';

describe('IntunityTeamComponent', () => {
  let component: IntunityTeamComponent;
  let fixture: ComponentFixture<IntunityTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntunityTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntunityTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
