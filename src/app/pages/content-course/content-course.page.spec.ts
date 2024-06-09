import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentCoursePage } from './content-course.page';

describe('ContentCoursePage', () => {
  let component: ContentCoursePage;
  let fixture: ComponentFixture<ContentCoursePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContentCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
