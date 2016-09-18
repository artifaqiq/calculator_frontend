"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dialog_1 = require('./dialog');
var calculator_service_1 = require("./calculator.service");
require('rxjs/Rx');
require('rxjs/add/operator/map');
var AppComponent = (function () {
    function AppComponent(calculatorService) {
        this.calculatorService = calculatorService;
        this.dialogs = new Array();
    }
    AppComponent.prototype.addTodo = function (input) {
        var _this = this;
        this.currentCommand = input.value;
        var expression = input.value;
        var str;
        console.log("expression=" + expression);
        this.calculatorService.evaluateExpression(input.value)
            .subscribe(function (data) {
            _this.currentResult = data.result,
                _this.currentStatus = data.status;
        }, function (error) {
            console.error(error);
            _this.currentStatus = 'error';
            _this.currentResult = 'Input error';
        });
        console.log("result = " + this.currentResult);
        console.log("status = " + this.currentStatus);
        // this.createTransitionToTheNewLine(str)
        input.value = '';
    };
    AppComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.dialogs.push(new dialog_1.Dialog(this.currentCommand, this.currentResult, this.currentStatus));
            this.addTodo($event.target);
        }
    };
    AppComponent.prototype.statusToColor = function (status) {
        if (status == 'ok') {
            return 'white';
        }
        else {
            return 'red';
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n          <div *ngFor=\"let dialog of dialogs; let i = index\">\n            <div *ngIf=\"i!=0\">\n              <p> $ </p> \n              {{dialog.getCommand()}}<br>\n              <div *ngIf=\"dialog.isError()\">\n                <div style=\"color: red\">\n                    {{dialog.getResult()}} <br>\n                </div>\n              </div>\n              <div *ngIf=\"!dialog.isError()\">\n                {{dialog.getResult()}} <br>\n               </div>\n            </div>\n          </div>\n       \n      <div *ngIf=\"dialogs.length !=0\">\n          <p>$</p> \n          {{currentCommand}}<br>\n          <div [style.color] = \"statusToColor(currentStatus)\">\n            {{currentResult}} <br>\n          </div>\n\n      </div>\n       \n      <div width=15% style=\"float: left\">\n        <p> $ </p>\n      </div>\n      \n      <div width=80%>\n          <textarea autofocus (keyup)=\"doneTyping($event)\" id=\"inText\"></textarea>\n      </div>\n      \n      <div clear: left;>\n    ",
            styleUrls: ['app/app.component.css'],
            providers: [calculator_service_1.CalculatorService]
        }), 
        __metadata('design:paramtypes', [calculator_service_1.CalculatorService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map