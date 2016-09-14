import {Component, Injectable} from '@angular/core';
import { TodoItem } from './todoItem';
import { Http, Response, Request, RequestOptionsArgs } from '@angular/http';
// import {httpFactory} from "@angular/http/src/http_module";

@Component({
  selector: 'my-app',
  template:`
    <div which = "40px" *ngFor="let todo of todos">
        {{todo.getText()}}<br>
    </div>
    <b>></b><input class="inputClass" #todotext (keyup)="doneTyping($event)">
    `,
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
  todos: Array<TodoItem>;
  // public static readonly CALC_API_URL = "http://localhost:9000/calculate";

  constructor(){
    this.todos = new Array<TodoItem>();

  }

  addTodo(input){
   /* http.get(url: string, options?: RequestOptionsArgs)
    .map(response => response.json());*/

    input.value = ">" + input.value;
    this.createTransitionToTheNewLine(input.value)

    let str: String;
    str = "fromGet";
    str = ">" + str;
    this.createTransitionToTheNewLine(str);

    input.value = '';
  }

  createTransitionToTheNewLine(input_value){
    let num = 1;
    while(input_value.length > 40*num){
        this.todos.push(new TodoItem(input_value.substring(40*(num-1),40*num)));
        num++;
    }    
    this.todos.push(new TodoItem(input_value.substring(40*(num-1))));
  }


  doneTyping($event){
    if($event.which===13){
      this.addTodo($event.target);
    }
  }


 /* authenticate(username, password) {
    var body = `username=${username}&password=${password}`;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    this.http
      .post('http://localhost:3001/sessions/create', body, { headers: headers })
      .map(response => response.json())
      .subscribe(
        response => this.storeToken(response.id_token),
        this.logError,
        () => console.log('Authentication Complete')
      );
  }

  constructor(private http: Http) { }
  
  getPeople() {
    return http.get('api/people.json')
      .map(response => response.json());
  }*/

  

 

}