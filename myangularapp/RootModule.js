System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', './RootComponent', './Module1/Module1_RootModule', './Module2/Module2_RootModule', './OneWayDataBindingComponent', './TwoWayDataBindingComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, forms_1, RootComponent_1, Module1_RootModule_1, Module2_RootModule_1, OneWayDataBindingComponent_1, TwoWayDataBindingComponent_1;
    var RootModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (RootComponent_1_1) {
                RootComponent_1 = RootComponent_1_1;
            },
            function (Module1_RootModule_1_1) {
                Module1_RootModule_1 = Module1_RootModule_1_1;
            },
            function (Module2_RootModule_1_1) {
                Module2_RootModule_1 = Module2_RootModule_1_1;
            },
            function (OneWayDataBindingComponent_1_1) {
                OneWayDataBindingComponent_1 = OneWayDataBindingComponent_1_1;
            },
            function (TwoWayDataBindingComponent_1_1) {
                TwoWayDataBindingComponent_1 = TwoWayDataBindingComponent_1_1;
            }],
        execute: function() {
            RootModule = (function () {
                function RootModule() {
                }
                RootModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, Module1_RootModule_1.Module1_RootModule, Module2_RootModule_1.Module2_RootModule, forms_1.FormsModule],
                        declarations: [RootComponent_1.RootComponent, OneWayDataBindingComponent_1.OneWayDataBindingComponent, TwoWayDataBindingComponent_1.TwoWayDataBindingComponent],
                        bootstrap: [RootComponent_1.RootComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RootModule);
                return RootModule;
            }());
            exports_1("RootModule", RootModule);
        }
    }
});
