import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMng } from './user-mng';

describe('UserMng', () => {
  let component: UserMng;
  let fixture: ComponentFixture<UserMng>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMng]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMng);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
