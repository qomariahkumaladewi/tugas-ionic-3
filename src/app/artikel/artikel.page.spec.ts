import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelPage } from './artikel.page';

describe('ArtikelPage', () => {
  let component: ArtikelPage;
  let fixture: ComponentFixture<ArtikelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
