/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTimerComponent } from './todo-timer.component';
import { Todo } from '../todo';

describe('TodoTimerComponent', () => {
  let component: TodoTimerComponent;
  let fixture: ComponentFixture<TodoTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTimerComponent);
    component = fixture.componentInstance;
    component.todos = [
      new Todo({ id: 1, title: 'Test', complete: false })
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
