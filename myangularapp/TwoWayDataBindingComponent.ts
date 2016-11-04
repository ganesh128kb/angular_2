import {Component} from '@angular/core';
import {SimpleChange} from '@angular/core';

@Component({
    selector:'twowaydatabinding-component',
    template:`
        <div class='container-fluid'>
            <div class="panel panel-danger">
                <div class='panel-heading'>
                    <h4 align='center'>TWO WAY DATA BINDING COMPONENT</h4>
                </div>

                <div class='panel-body'>
                    <input type='text' [(ngModel)]="text"/>
                    <h4>{{text}}</h4>

                    <button class='btn btn-primary' [disabled]="!isenabled">Sample Button</button>
                    Enable/Disable button: <input type='checkbox' [(ngModel)]="isenabled"/>
                    
                    <h4>Button state:
                        <span *ngIf="isenabled">ENABLED</span> 
                        <span *ngIf="!isenabled">DISABLED</span>
                    </h4>
                </div>
            </div>
        </div>
    `
})
export class TwoWayDataBindingComponent
{
    public text:string = "Hello";
    public isenabled:boolean = true;
}