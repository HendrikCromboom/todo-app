import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: ToDo;

  constructor() { }

  ngOnInit(): void {
  }

  setClass(){
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }
    return classes;
  }
  onToggle(todo: ToDo){

  }
  onDelete(todo: ToDo){

  }

}
