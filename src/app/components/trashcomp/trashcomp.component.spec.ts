import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashcompComponent } from './trashcomp.component';

describe('TrashcompComponent', () => {
  let component: TrashcompComponent;
  let fixture: ComponentFixture<TrashcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashcompComponent]
    });
    fixture = TestBed.createComponent(TrashcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
