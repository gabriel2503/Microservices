import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSellComponent } from './element-sell.component';

describe('ElementSellComponent', () => {
  let component: ElementSellComponent;
  let fixture: ComponentFixture<ElementSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
