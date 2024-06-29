import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherAccountPage } from './teacher-account.page';

describe('TeacherAccountPage', () => {
  let component: TeacherAccountPage;
  let fixture: ComponentFixture<TeacherAccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeacherAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
