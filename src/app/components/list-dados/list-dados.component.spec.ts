import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDadosComponent } from './list-dados.component';

describe('ListDadosComponent', () => {
  let component: ListDadosComponent;
  let fixture: ComponentFixture<ListDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
