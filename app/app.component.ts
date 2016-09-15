import {Component} from '@angular/core';
import { TodoItem } from './todoItem';
import {CalculatorService} from "./calculator.service";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template:`
    <div which = "40px" *ngFor="let todo of todos">
        {{todo.getText()}}<br>
        {{todo.getResult()}}
    </div>
    <b>></b><input class="inputClass" #todotext (keyup)="doneTyping($event)">
    `,
    styleUrls: ['app/app.component.css'],
    providers: [CalculatorService]
})

export class AppComponent {
  todos: Array<TodoItem>;
  result: string;

  constructor(private calculatorService: CalculatorService) {
    this.todos = new Array<TodoItem>();

  }

  addTodo(input) {

    let expression = input.value;
    // input.value = ">" + input.value;
    // this.createTransitionToTheNewLine(input.value);

    let str: String;

    console.log("expression=" + expression)
    this.calculatorService.evaluateExpression(input.value)
        .subscribe(
            data => input.value = data.result,
            error => alert(error)
        );

    console.log("result = " + this.result)

    str = ">" + input.value;
    // this.createTransitionToTheNewLine();


  }

  createTransitionToTheNewLine(input_value, result) {
    let num = 1;
    while (input_value.length > 40 * num) {
      this.todos.push(new TodoItem(input_value.substring(40 * (num - 1), 40 * num), result));
      num++;
    }
    this.todos.push(new TodoItem(input_value.substring(40 * (num - 1)), result));
  }


  doneTyping($event) {
    if ($event.which === 13) {
      this.addTodo($event.target);
    }
  }

}