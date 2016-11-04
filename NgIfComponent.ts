import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector:'ngif-component',
    template:`
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 align="center">NgIf</h3>
                </div>
            <div class="panel-body">
                <p>
                    Password: <input type="password" [(ngModel)]="password"/>
                </p>
                
                <span *ngIf="password.length==0">Password not entered</span>
                <span *ngIf="password.length>0 && password.length<=5">Weak length</span>
                <span *ngIf="password.length>5">Quite Strong</span>
            </div>
        </div>  
    `
})
export class NgIfComponent
{
    public password:string = "";
}

bootstrap(NgIfComponent);