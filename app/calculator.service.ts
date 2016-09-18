import { Injectable }     from '@angular/core';
import {Http } from '@angular/http';
import { Headers} from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class CalculatorService {
    constructor (private http: Http) {}

    private calclatorApiUrl = 'http://localhost:9000/calculate';

    result: string;

    evaluateExpression(expression: string) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'expression': expression
        })

        console.log(expression);

        return this.http.get(this.calclatorApiUrl + "?expression=" + encodeURIComponent(expression)).map(res => res.json());
    }

}