import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArtikelPage } from './detail-artikel.page';

describe('DetailArtikelPage', () => {
  let component: DetailArtikelPage;
  let fixture: ComponentFixture<DetailArtikelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailArtikelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArtikelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
