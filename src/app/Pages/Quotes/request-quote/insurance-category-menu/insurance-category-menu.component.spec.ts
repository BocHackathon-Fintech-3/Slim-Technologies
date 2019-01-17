import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCategoryMenuComponent } from './insurance-category-menu.component';

describe('InsuranceCategoryMenuComponent', () => {
  let component: InsuranceCategoryMenuComponent;
  let fixture: ComponentFixture<InsuranceCategoryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceCategoryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
