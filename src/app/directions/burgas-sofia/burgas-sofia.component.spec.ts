/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BurgasSofiaComponent } from './burgas-sofia.component';

describe('BurgasSofiaComponent', () => {
  let component: BurgasSofiaComponent;
  let fixture: ComponentFixture<BurgasSofiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgasSofiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgasSofiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
