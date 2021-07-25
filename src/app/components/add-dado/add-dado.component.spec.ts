import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDadoComponent } from './add-dado.component';

describe('AddDadoComponent', () => {
  let component: AddDadoComponent;
  let fixture: ComponentFixture<AddDadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
