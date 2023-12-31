import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCompComponent } from './icon-comp.component';

describe('IconCompComponent', () => {
  let component: IconCompComponent;
  let fixture: ComponentFixture<IconCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconCompComponent]
    });
    fixture = TestBed.createComponent(IconCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
