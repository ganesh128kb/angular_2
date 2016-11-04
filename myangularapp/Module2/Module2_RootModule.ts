import {NgModule} from '@angular/core';
import {Module2_Component1} from './Module2_Component1';

@NgModule({
    declarations:[Module2_Component1],
    exports:[Module2_Component1]
})
export class Module2_RootModule
{
    constructor()
    {
        console.log("Module2 loaded");
    }
}
