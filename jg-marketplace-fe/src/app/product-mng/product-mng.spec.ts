import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMng } from './product-mng';

describe('ProductMng', () => {
  let component: ProductMng;
  let fixture: ComponentFixture<ProductMng>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMng]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMng);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
