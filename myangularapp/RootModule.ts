import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {RootComponent} from './RootComponent';

import {Module1_RootModule} from './Module1/Module1_RootModule';
import {Module2_RootModule} from './Module2/Module2_RootModule';

import {OneWayDataBindingComponent} from './OneWayDataBindingComponent';
import {TwoWayDataBindingComponent} from './TwoWayDataBindingComponent';

@NgModule({
    imports:[BrowserModule,Module1_RootModule,Module2_RootModule,FormsModule],
    declarations:[RootComponent,OneWayDataBindingComponent,TwoWayDataBindingComponent],
    bootstrap:[RootComponent]
})
export class RootModule
{
}

