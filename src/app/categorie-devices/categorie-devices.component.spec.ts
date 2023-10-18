import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieDevicesComponent } from './categorie-devices.component';

describe('CategorieDevicesComponent', () => {
  let component: CategorieDevicesComponent;
  let fixture: ComponentFixture<CategorieDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
