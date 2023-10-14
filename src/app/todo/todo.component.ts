import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService){

  }

  ngOnInit(): void{

  }
// Ora posso accedere al valore dell'input utilizzando titleValue.
  onClick(titleInput : HTMLInputElement){
    if(titleInput.value){
    this.todoService.addTodo(titleInput.value)
    titleInput.value = "";
  }
}

}
