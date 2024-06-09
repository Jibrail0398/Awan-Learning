import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailCoursePage } from './detail-course.page';

describe('DetailCoursePage', () => {
  let component: DetailCoursePage;
  let fixture: ComponentFixture<DetailCoursePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
