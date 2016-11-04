System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var OneWayDataBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OneWayDataBindingComponent = (function () {
                function OneWayDataBindingComponent() {
                    this.text = "Welcome to Angular2";
                    this.textcolor = "orange";
                }
                OneWayDataBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'onewaydatabinding-component',
                        template: "\n        <div class='container-fluid'>\n            <div class=\"panel panel-danger\">\n                <div class='panel-heading'>\n                    <h4 align='center'>ONE WAY DATA BINDING COMPONENT</h4>\n                </div>\n\n                <div class='panel-body'>\n                    <!--INTERPOLATION SYNTAX-->\n                    <h3>{{text}}</h3>\n                     \n                    <!--PROPERTY BINDING SYNTAX-->\n                    <h3 [innerHTML]=\"text\" [style.color]=\"textcolor\"></h3>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], OneWayDataBindingComponent);
                return OneWayDataBindingComponent;
            }());
            exports_1("OneWayDataBindingComponent", OneWayDataBindingComponent);
        }
    }
});
