import { Component } from '@angular/core';
import { Dialog } from './dialog';
import { CalculatorService } from "./calculator.service";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `
          <div *ngFor="let dialog of dialogs; let i = index">
            <div *ngIf="i!=0">
              <p> $ </p> 
              {{dialog.getCommand()}}<br>
              <div *ngIf="dialog.isError()">
                <div style="color: red">
                    {{dialog.getResult()}} <br>
                </div>
              </div>
              <div *ngIf="!dialog.isError()">
                {{dialog.getResult()}} <br>
               </div>
            </div>
          </div>
       
      <div *ngIf="dialogs.length !=0">
          <p>$</p> 
          {{currentCommand}}<br>
          <div [style.color] = "statusToColor(currentStatus)">
            {{currentResult}} <br>
          </div>

      </div>
       
      <div width=15% style="float: left">
        <p> $ </p>
      </div>
      
      <div width=80%>
          <textarea autofocus (keyup)="doneTyping($event)" id="inText"></textarea>
      </div>
      
      <div clear: left;>
    `,
    styleUrls: ['app/app.component.css'],

    providers: [CalculatorService]
})

export class AppComponent {
  dialogs: Array<Dialog>

  currentResult: string
  currentStatus: string
  currentCommand: string

  constructor(private calculatorService: CalculatorService) {
    this.dialogs = new Array<Dialog>();
  }

  addTodo(input) {

    this.currentCommand = input.value

    let expression = input.value
    let str: string

    console.log("expression=" + expression)
    this.calculatorService.evaluateExpression(input.value)
        .subscribe(
            data => {
              this.currentResult = data.result,
                this.currentStatus = data.status
            },
            error => {
              console.error(error)
              this.currentStatus = 'error'
              this.currentResult = 'Input error'
            }
        );

    console.log("result = " + this.currentResult)
    console.log("status = " + this.currentStatus)
    // this.createTransitionToTheNewLine(str)

    input.value = ''

  }

  doneTyping($event) {
    if ($event.which === 13) {
      this.dialogs.push(new Dialog(this.currentCommand, this.currentResult, this.currentStatus))

      this.addTodo($event.target);
    }
  }

  statusToColor(status: string): string {
    if(status == 'ok') {
      return 'white'
    } else {
      return 'red'
    }
  }

}