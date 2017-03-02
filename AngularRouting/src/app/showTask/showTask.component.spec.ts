import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule}           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, RouterOutletMap } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppService} from "../app.service";
import {RouterTestingModule} from '@angular/router/testing'
import {ShowTaskComponent} from "./showTask.component";
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs/Observable";

describe('AppComponent', function () {
    let de:DebugElement;
    let comp:ShowTaskComponent;
    let fixture:ComponentFixture<ShowTaskComponent>;
    let service:AppService;
    let router:Router;

    class MockRouter {
        navigate():Promise<boolean> {
            return Promise.resolve(true)
        }

    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [ShowTaskComponent],
                providers: [{provide: Router, useClass: MockRouter}, RouterOutletMap, AppService],
                imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShowTaskComponent);
        comp = fixture.componentInstance;
        comp.newTask = [{
            date: '12-12-1993',
            title: 'Any',
            description: 'Nona',
            priority: 'high',
            _id: '006'
        }]

        de = fixture.debugElement.query(By.css('h1'));
        service = fixture.debugElement.injector.get(AppService);
        router = fixture.debugElement.injector.get(Router);

    });

    it('should create ShowTaskComponent', () => expect(comp).toBeDefined());

    it('it should be able to edit data from service', () => {
        comp.editTask(0)
        router.navigate([]).then(data => {
            expect(data).toBe(true);
        })

    });

    it('it should be able to generate error in case of error for ngOnInit', () => {
        spyOn(window, 'alert');
        spyOn(service, 'getData').and.returnValue(
            Observable.throw(Error('Observable Error Occurs'))
        );
        comp.ngOnInit();
        expect(window.alert).toHaveBeenCalledWith(Error('Observable Error Occurs'));
    });

    it('it should be able to get data from service', () => {
        spyOn(service, 'getData').and.returnValue(
            Observable.of<any>(
                [{
                    date: '',
                    title: '',
                    description: '',
                    priority: '',
                    _id: ''
                }]
            )
        );
        comp.ngOnInit();
        expect(comp.newTask).toEqual([{
            date: '',
            title: '',
            description: '',
            priority: '',
            _id: ''
        }])
    });

});
