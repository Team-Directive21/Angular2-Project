/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopDriversComponent } from './top-drivers.component';

describe('TopDriversComponent', () => {
  let component: TopDriversComponent;
  let fixture: ComponentFixture<TopDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
