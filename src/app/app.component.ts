import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'My Tasks';
  todos=[
    {
      label: 'Bring Milk', 
      done: false, 
      priority: 3
    },
    {
      label: 'Pay Mobile Bill', 
      done: true, 
      priority: 1
    },
    {
      label: 'Clean the House', 
      done: false, 
      priority: 4
    },
    {
      label: 'Out of Town', 
      done: false, 
      priority: 5
    }
  ];

  addTodo(newTodoLabel: any) {
    var newTodo = {
      Label: newTodoLabel,
      Priority: 1,
      done:false
    };
    this.todos.push(newTodoLabel);
  }
  deleteTodo(todo: { label: string; }){
    this.todos = this.todos.filter( t => t.label !== todo.label );
  }
}

