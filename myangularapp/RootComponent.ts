import {Component} from '@angular/core';

@Component({
    selector:'root-component',
    template:`
        <div class='container-fluid'>
            <div class="panel panel-danger">
                <div class='panel-heading'>
                    <h3 align='center'>ROOT COMPONENT</h3>
                </div>

                <div class='panel-body'>

                <nav>
                    <a routerLink="">Home Component</a> |
                    <a routerLink="/onewaydb">One Way DataBinding Demo</a> |
                    <a routerLink="/twowaydb">Two Way DataBinding Demo</a>
                </nav>
                <hr/>
                <router-outlet></router-outlet>
                
                    <!--
                    <module1-component1></module1-component1>
                    <module2-component1></module2-component1>
                    -->
                    

                    <!--<onewaydatabinding-component></onewaydatabinding-component>-->
                    <!--<twowaydatabinding-component></twowaydatabinding-component>-->
                    <!--<ngfor-component></ngfor-component>-->
                    <!--<datepipecomponent></datepipecomponent>-->
                    <!--<currencypipecomponent></currencypipecomponent>-->
                    <!--<decimalpipecomponent></decimalpipecomponent>-->
                    <!--<percentpipecomponent></percentpipecomponent>-->

                    <!--
                    <p>
                        Enter some value:
                        <input type='text' [(ngModel)]="somevalue"/>
                    </p>

                    <h4>Value entered is: {{somevalue}}</h4>
                    <h4>Square is: {{somevalue | square}}</h4>
                    -->
                    <!--<employeecomponent></employeecomponent>-->

                    <!--
                    <table class='table'>
                        <tr>
                            <td>
                                <usecounterservice-component></usecounterservice-component>
                            </td>
                            <td>
                                <usecounterservice-component1></usecounterservice-component1>
                            </td>
                        </tr>
                    </table>
                    -->
                </div>
            </div>
        </div>
    `
})
export class RootComponent
{
    public somevalue:number;
}