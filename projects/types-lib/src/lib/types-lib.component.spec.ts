import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesLibComponent } from './types-lib.component';

describe('TypesLibComponent', () => {
  let component: TypesLibComponent;
  let fixture: ComponentFixture<TypesLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
