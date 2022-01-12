import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientandosComponent } from './orientandos.component';

describe('OrientandosComponent', () => {
  let component: OrientandosComponent;
  let fixture: ComponentFixture<OrientandosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrientandosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
