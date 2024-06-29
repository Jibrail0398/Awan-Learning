import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadContentPage } from './upload-content.page';

describe('UploadContentPage', () => {
  let component: UploadContentPage;
  let fixture: ComponentFixture<UploadContentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UploadContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
