import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TentangAwanPage } from './tentang-awan.page';

describe('TentangAwanPage', () => {
  let component: TentangAwanPage;
  let fixture: ComponentFixture<TentangAwanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TentangAwanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
