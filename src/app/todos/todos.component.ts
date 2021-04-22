import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/ToDo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ToDo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: "test todo",
        completed: true
      },
      {
        id: 2,
        title: "test todo 2",
        completed: false
      }
    ]
  }

}
