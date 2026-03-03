import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProducts } from './main-products';

describe('MainProducts', () => {
  let component: MainProducts;
  let fixture: ComponentFixture<MainProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
