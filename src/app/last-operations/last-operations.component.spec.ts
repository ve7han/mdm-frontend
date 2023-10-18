import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastOperationsComponent } from './last-operations.component';

describe('LastOperationsComponent', () => {
  let component: LastOperationsComponent;
  let fixture: ComponentFixture<LastOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
