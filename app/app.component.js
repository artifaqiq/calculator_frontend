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
var todoItem_1 = require('./todoItem');
var calculator_service_1 = require("./calculator.service");
require('rxjs/Rx');
require('rxjs/add/operator/map');
var AppComponent = (function () {
    function AppComponent(calculatorService) {
        this.calculatorService = calculatorService;
        this.todos = new Array();
    }
    AppComponent.prototype.addTodo = function (input) {
        var expression = input.value;
        // input.value = ">" + input.value;
        // this.createTransitionToTheNewLine(input.value);
        var str;
        console.log("expression=" + expression);
        this.calculatorService.evaluateExpression(input.value)
            .subscribe(function (data) { return input.value = data.result; }, function (error) { return alert(error); });
        console.log("result = " + this.result);
        str = ">" + input.value;
        // this.createTransitionToTheNewLine();
    };
    AppComponent.prototype.createTransitionToTheNewLine = function (input_value, result) {
        var num = 1;
        while (input_value.length > 40 * num) {
            this.todos.push(new todoItem_1.TodoItem(input_value.substring(40 * (num - 1), 40 * num), result));
            num++;
        }
        this.todos.push(new todoItem_1.TodoItem(input_value.substring(40 * (num - 1)), result));
    };
    AppComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div which = \"40px\" *ngFor=\"let todo of todos\">\n        {{todo.getText()}}<br>\n        {{todo.getResult()}}\n    </div>\n    <b>></b><input class=\"inputClass\" #todotext (keyup)=\"doneTyping($event)\">\n    ",
            styleUrls: ['app/app.component.css'],
            providers: [calculator_service_1.CalculatorService]
        }), 
        __metadata('design:paramtypes', [calculator_service_1.CalculatorService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map