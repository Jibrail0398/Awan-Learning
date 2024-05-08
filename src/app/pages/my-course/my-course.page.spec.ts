import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCoursePage } from './my-course.page';

describe('MyCoursePage', () => {
  let component: MyCoursePage;
  let fixture: ComponentFixture<MyCoursePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
