import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimersFromDatabaseComponent } from './primers-from-database.component';

describe('PrimersFromDatabaseComponent', () => {
  let component: PrimersFromDatabaseComponent;
  let fixture: ComponentFixture<PrimersFromDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimersFromDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimersFromDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
