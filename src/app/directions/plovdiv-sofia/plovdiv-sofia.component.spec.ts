/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlovdivSofiaComponent } from './plovdiv-sofia.component';

describe('PlovdivSofiaComponent', () => {
  let component: PlovdivSofiaComponent;
  let fixture: ComponentFixture<PlovdivSofiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlovdivSofiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlovdivSofiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
