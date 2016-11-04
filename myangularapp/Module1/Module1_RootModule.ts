import {NgModule} from '@angular/core';
import {Module1_Component1} from './Module1_Component1';

@NgModule({
    declarations:[Module1_Component1],
    exports:[Module1_Component1]
})
export class Module1_RootModule
{
    constructor()
    {
        console.log("Module1 loaded");
    }
}
