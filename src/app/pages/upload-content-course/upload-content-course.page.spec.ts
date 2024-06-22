import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadContentCoursePage } from './upload-content-course.page';

describe('UploadContentCoursePage', () => {
  let component: UploadContentCoursePage;
  let fixture: ComponentFixture<UploadContentCoursePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UploadContentCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
