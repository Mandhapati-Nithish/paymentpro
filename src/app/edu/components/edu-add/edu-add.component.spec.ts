import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduAddComponent } from './edu-add.component';

describe('EduAddComponent', () => {
  let component: EduAddComponent;
  let fixture: ComponentFixture<EduAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
