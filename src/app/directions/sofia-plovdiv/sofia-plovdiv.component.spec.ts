/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SofiaPlovdivComponent } from './sofia-plovdiv.component';

describe('SofiaPlovdivComponent', () => {
  let component: SofiaPlovdivComponent;
  let fixture: ComponentFixture<SofiaPlovdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofiaPlovdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofiaPlovdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
