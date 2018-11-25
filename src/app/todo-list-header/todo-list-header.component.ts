import {Component, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})
export class TodoListHeaderComponent implements OnChanges {
  @Input()
  todos: Todo[];

  newTodo: Todo = new Todo();
  allTimeSpend = 0;

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.allTimeSpend = 0;
    this.todos.forEach(val => this.allTimeSpend +=  val.timeSpend);
  }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
