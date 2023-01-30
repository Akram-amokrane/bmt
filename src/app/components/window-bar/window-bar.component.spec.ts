import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowBarComponent } from './window-bar.component';

describe('WindowBarComponent', () => {
  let component: WindowBarComponent;
  let fixture: ComponentFixture<WindowBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
