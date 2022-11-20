import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBuyComponent } from './element-buy.component';

describe('ElementDialogComponent', () => {
  let component: ElementBuyComponent;
  let fixture: ComponentFixture<ElementBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
