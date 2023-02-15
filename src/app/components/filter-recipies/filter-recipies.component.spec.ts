import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRecipiesComponent } from './filter-recipies.component';

describe('FilterRecipiesComponent', () => {
  let component: FilterRecipiesComponent;
  let fixture: ComponentFixture<FilterRecipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRecipiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
