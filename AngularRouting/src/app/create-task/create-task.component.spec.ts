/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { FormsModule } from '@angular/forms';
import { CreateTaskComponent } from './create-task.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, Router, RouterOutletMap } from '@angular/router';
import {HttpModule} from '@angular/http';
import {AppService} from "../app.service";

describe('CreateTaskComponent', function () {
  let de: DebugElement;
  let comp: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;

  class MockRouter {

  }

  beforeEach(async(() => {
    console.log('--------------------------------------------------------------------------------------')
    TestBed.configureTestingModule({
        declarations: [ CreateTaskComponent ],
        providers: [{provide: Router, useClass: MockRouter}, RouterOutletMap,AppService],
        imports: [RouterModule,FormsModule,HttpModule]

      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

});
