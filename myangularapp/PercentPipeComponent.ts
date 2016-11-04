import {Component} from '@angular/core';

@Component({
    selector:'percentpipecomponent',
    template:`
        <div class="container-fluid">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 align='center'>Percent Pipe</h3>
                </div>
                <div class="panel-body">
                    <h4>{{e|percent}}</h4>
                </div>
            </div>
        </div>
    `

})
export class PercentPipeComponent
{
    public e: number = 0.50;
}
