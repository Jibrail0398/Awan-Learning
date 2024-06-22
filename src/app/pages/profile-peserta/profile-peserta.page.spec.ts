import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilePesertaPage } from './profile-peserta.page';

describe('ProfilePesertaPage', () => {
  let component: ProfilePesertaPage;
  let fixture: ComponentFixture<ProfilePesertaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilePesertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
