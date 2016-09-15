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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/map');
var CalculatorService = (function () {
    function CalculatorService(http) {
        this.http = http;
        this.calclatorApiUrl = 'http://localhost:9000/calculate';
    }
    CalculatorService.prototype.evaluateExpression = function (expression) {
        var headers = new http_2.Headers({
            'Content-Type': 'application/json',
            // "Access-Control-Allow-Origin": "*",
            'expression': expression
        });
        var options = new http_2.RequestOptions({
            headers: headers,
            method: http_1.RequestMethod.Get,
        });
        console.log(expression);
        return this.http.get(this.calclatorApiUrl + "?expression=" + encodeURIComponent(expression)).map(function (res) { return res.json(); });
    };
    CalculatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CalculatorService);
    return CalculatorService;
}());
exports.CalculatorService = CalculatorService;
//# sourceMappingURL=calculator.service.js.map