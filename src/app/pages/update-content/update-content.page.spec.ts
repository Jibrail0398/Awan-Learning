import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateContentPage } from './update-content.page';

describe('UpdateContentPage', () => {
  let component: UpdateContentPage;
  let fixture: ComponentFixture<UpdateContentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
