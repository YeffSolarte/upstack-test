import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Todo } from '../todo';
import { interval } from 'rxjs';

@Component({
  selector: 'app-todo-timer',
  templateUrl: './todo-timer.component.html',
  styleUrls: ['./todo-timer.component.scss']
})
export class TodoTimerComponent implements OnChanges {

  @Input() todo: Todo;

  @Output()
  edit: EventEmitter<Todo> = new EventEmitter();

  private loader;
  private blocker = false;
  private border;
  private pi =  Math.PI;
  private time = 10;
  private ov = 0;
  public actionButton = 0;
  public myTimer;

  constructor() {}

  ngOnChanges() {
    if (!this.todo) { return; }
    const a = 'loader-pin' + this.todo.id;
    const b = 'loader-pin' + this.todo.id;
    setTimeout(() => {
      this.loader = document.getElementById(a);
      this.border = document.getElementById(b);
      this.draw();
      // this.drawFrist();
    }, 100);
    // this.draw();
  }

  draw() {
    this.ov ++;
    this.ov %= 360;
    const r = ( this.ov * this.pi / 180 )
      , x = Math.sin( r ) * 125
      , y = Math.cos( r ) * - 125
      , mid = ( this.ov > 180 ) ? 1 : 0
      , anim = 'M 0 0 v -125 A 125 125 1 '
      + mid + ' 1 '
      +  x  + ' '
      +  y  + ' z';

    this.loader.setAttribute( 'd', anim );
    this.border.setAttribute( 'd', anim );
    setTimeout(() => {
      this.draw();
    }, this.time);
  }

  redraw() {
    this.ov ++;
    this.ov %= 360;
    const r = ( this.ov * this.pi / 180 )
      , x = Math.sin( r ) * 125
      , y = Math.cos( r ) * - 125
      , mid = ( this.ov > 180 ) ? 1 : 0
      , anim = 'M 0 0 v -125 A 125 125 1 '
      + mid + ' 1 '
      +  x  + ' '
      +  y  + ' z';

    this.loader.setAttribute( 'd', anim );
    this.border.setAttribute( 'd', anim );
  }

  onActionButton() {
    let counter = 0;
    if (this.actionButton) {
      this.actionButton = 0;
      clearInterval(this.myTimer);
      this.edit.emit(this.todo);
    } else {
      this.actionButton = 1;
      this.myTimer = setInterval(() => {
        counter++;
        this.todo.timeSpend++;
        if (this.todo.timeSpend === this.todo.allTime) {
          this.todo.allTime += 600;
          this.edit.emit(this.todo);
        }
      }, 1000);
    }
  }

}
