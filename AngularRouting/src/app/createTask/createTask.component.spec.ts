import { Router, ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {async, TestBed, ComponentFixture} from "@angular/core/testing";
import {By}           from '@angular/platform-browser';
import {DebugElement} from "@angular/core";
import {AppService} from "../app.service";
import {HttpModule} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {CreateTaskComponent} from "./createTask.component";
import {NULL_TYPE} from "@angular/compiler/src/output/output_ast";

describe('CreateTaskComponent', function () {
    let de: DebugElement;
    let comp: CreateTaskComponent;
    let fixture: ComponentFixture<CreateTaskComponent>;
    let service: AppService;
    let router: Router;
    let route:ActivatedRoute;

    class MockRouter {
        navigate():Promise<boolean>{
            return Promise.resolve(true)
        }
    }
    class MockActivatedRoute {
        params = Observable.of<any>({'indexSent':'1'})
    }


    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [CreateTaskComponent],
                providers: [{provide: Router, useClass: MockRouter},
                    {provide: ActivatedRoute, useClass: MockActivatedRoute}, AppService],
                imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateTaskComponent);
        comp = fixture.componentInstance;
        comp.task = {
            date: '12-12-1993',
            title: 'D.O.B',
            description: 'Welcome',
            priority: 'high',
            _id: '004'
        }
        de = fixture.debugElement.query(By.css('h1'));
        service = fixture.debugElement.injector.get(AppService);
        router = fixture.debugElement.injector.get(Router);
        route=fixture.debugElement.injector.get(ActivatedRoute);
    });

    it('should create CreateTaskComponent', () => expect(comp).toBeDefined());


    it('should be able to get data from service', () => {
        spyOn(service, 'getData').and.returnValue(
            Observable.of<any>(
                [{
                    date: '12-12-12',
                    title: '',
                    description: '',
                    priority: ''
                }]
            )
        );
        comp.ngOnInit();
        expect(comp.newTask).toEqual([{
            date: '12-12-12',
            title: '',
            description: '',
            priority: ''
        }])

    });
    it('should be able to generate error in case of error', () => {
        spyOn(console, 'error');
        spyOn(service, 'getData').and.returnValue(
            Observable.throw(Error('Some Error Occured.....'))
        );
        comp.ngOnInit();
        expect(console.error).toHaveBeenCalledWith(Error('Some Error Occured'));
    });

    it('it should be able to update data in case of getting router parameter', () => {
        comp.index = '0';
        spyOn(window,'alert');
        spyOn(service, 'updateData').and.returnValue(
            Observable.of<any>(
                [{
                    date: 'aa',
                    title: '',
                    description: '',
                    priority: ''
                }]
            )
        );
        comp.addTask();
        expect(window.alert).toHaveBeenCalledWith('Task Updated');
        router.navigate([]).then(data => {
            expect(data).toBe(true);
        })

    });

    it('it should be able to generate error in case of on data to update', () => {
        comp.index = '0';
        spyOn(console,'error');
        spyOn(service, 'updateTask').and.returnValue(
            Observable.throw(Error('Observable Error Occurs'))
        );
        comp.addTask();
        expect(console.error).toHaveBeenCalled();

    });

    it('it should be able to add data in case of router parameter is not there', () => {
        comp.index= null;
        spyOn(window,'alert');
        spyOn(service, 'addTask').and.returnValue(
            Observable.of<any>(
                [{
                    date: 'aa',
                    title: '',
                    description: '',
                    priority: ''
                }]
            )
        );
        comp.addTask();
        expect(window.alert).toHaveBeenCalledWith('Task Added');
        router.navigate([]).then(data => {
            expect(data).toBe(true);
        })

    });

    it('it should be able to generate error in case of router parameter is not there', () => {
        comp.index= null;
        spyOn(console,'error');
        spyOn(service, 'addTask').and.returnValue(
            Observable.throw(Error('Observable Error Occurs'))
        );
        comp.addTask();
        expect(console.error).toHaveBeenCalled();

    });



});

