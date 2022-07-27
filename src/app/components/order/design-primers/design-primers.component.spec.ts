import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPrimersComponent } from './design-primers.component';

describe('DesignPrimersComponent', () => {
  let component: DesignPrimersComponent;
  let fixture: ComponentFixture<DesignPrimersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignPrimersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignPrimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
