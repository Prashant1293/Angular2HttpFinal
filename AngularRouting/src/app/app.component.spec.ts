<<<<<<< HEAD
/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, Router, RouterOutletMap } from '@angular/router';
=======
import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule}           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, RouterOutletMap } from '@angular/router';
import {routes} from "./app.router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppService} from "./app.service";
import {RouterTestingModule} from '@angular/router/testing'
>>>>>>> Final Commit

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

<<<<<<< HEAD
  class MockRouter {

  }

  beforeEach(async(() => {
    console.log('--------------------------------------------------------------------------------------')
    TestBed.configureTestingModule({
        declarations: [ AppComponent ],
        providers: [{provide: Router, useClass: MockRouter}, RouterOutletMap],
        imports: [RouterModule]

      })
      .compileComponents();
=======


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ RouterOutletMap,AppService],
      imports: [RouterTestingModule,BrowserModule,FormsModule,HttpModule]

    })
        .compileComponents();
>>>>>>> Final Commit
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

<<<<<<< HEAD
  it('should create component on createTask', () => expect(comp).toBeDefined() );

});
=======
  it('should create component', () => expect(comp).toBeDefined() );

});
>>>>>>> Final Commit