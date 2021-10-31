import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUpPgComponent } from './sign-in-up-pg.component';

describe('SignInUpPgComponent', () => {
  let component: SignInUpPgComponent;
  let fixture: ComponentFixture<SignInUpPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInUpPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInUpPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
