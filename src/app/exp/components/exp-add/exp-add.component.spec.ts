import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAddComponent } from './exp-add.component';

describe('ExpAddComponent', () => {
  let component: ExpAddComponent;
  let fixture: ComponentFixture<ExpAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
