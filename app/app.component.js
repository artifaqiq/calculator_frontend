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
// import {httpFactory} from "@angular/http/src/http_module";
var AppComponent = (function () {
    // public static readonly CALC_API_URL = "http://localhost:9000/calculate";
    function AppComponent() {
        this.todos = new Array();
    }
    AppComponent.prototype.addTodo = function (input) {
        /* http.get(url: string, options?: RequestOptionsArgs)
         .map(response => response.json());*/
        input.value = ">" + input.value;
        this.createTransitionToTheNewLine(input.value);
        var str;
        str = "fromGet";
        str = ">" + str;
        this.createTransitionToTheNewLine(str);
        input.value = '';
    };
    AppComponent.prototype.createTransitionToTheNewLine = function (input_value) {
        var num = 1;
        while (input_value.length > 40 * num) {
            this.todos.push(new todoItem_1.TodoItem(input_value.substring(40 * (num - 1), 40 * num)));
            num++;
        }
        this.todos.push(new todoItem_1.TodoItem(input_value.substring(40 * (num - 1))));
    };
    AppComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div which = \"40px\" *ngFor=\"let todo of todos\">\n        {{todo.getText()}}<br>\n    </div>\n    <b>></b><input class=\"inputClass\" #todotext (keyup)=\"doneTyping($event)\">\n    ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map