System.register(['@angular/core', './Module1_Component1'], function(exports_1, context_1) {
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
    var core_1, Module1_Component1_1;
    var Module1_RootModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Module1_Component1_1_1) {
                Module1_Component1_1 = Module1_Component1_1_1;
            }],
        execute: function() {
            Module1_RootModule = (function () {
                function Module1_RootModule() {
                    console.log("Module1 loaded");
                }
                Module1_RootModule = __decorate([
                    core_1.NgModule({
                        declarations: [Module1_Component1_1.Module1_Component1],
                        exports: [Module1_Component1_1.Module1_Component1]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Module1_RootModule);
                return Module1_RootModule;
            }());
            exports_1("Module1_RootModule", Module1_RootModule);
        }
    }
});
