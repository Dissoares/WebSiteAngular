import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlersComponent } from './controlers.component';

describe('ControlersComponent', () => {
  let component: ControlersComponent;
  let fixture: ComponentFixture<ControlersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
