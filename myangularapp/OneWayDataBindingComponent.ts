import {Component} from '@angular/core';

@Component({
    selector:'onewaydatabinding-component',
    template:`
        <div class='container-fluid'>
            <div class="panel panel-danger">
                <div class='panel-heading'>
                    <h4 align='center'>ONE WAY DATA BINDING COMPONENT</h4>
                </div>

                <div class='panel-body'>
                    <!--INTERPOLATION SYNTAX-->
                    <h3>{{text}}</h3>
                     
                    <!--PROPERTY BINDING SYNTAX-->
                    <h3 [innerHTML]="text" [style.color]="textcolor"></h3>
                </div>
            </div>
        </div>
    `
})
export class OneWayDataBindingComponent
{
    public text:string = "Welcome to Angular2";
    public textcolor:string = "orange";
}