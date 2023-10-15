import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos : any[] = [];
  constructor(private todoService: TodoService){
    
  }
// quando il valore cambia all'interno del valueChanges all'interno della collection la callback function () di valuechanges sarà invocata -> subscribe
// Utilizziamo il servizio "TodoService" per ottenere i dati dei "todos" dalla collezione Firestore.
// Quando i dati nella collezione cambiano, la funzione di callback viene invocata.
// Qui assegniamo i dati ottenuti dalla collezione Firestore alla variabile "todos".
  ngOnInit(){
    // per cambiare lo status dobbiamo prendere l'id identificativo dell'item quindi in valueChanges specifichiamo l'idField
    this.todoService.firestoreCollection.valueChanges({idField:'id'})
    .subscribe(item=>{
      
      // console.log(item) per vedere l'array
    this.todos = item.sort((a:any,b:any) => 
    {return a.isDone ,-b.isDone});        //prende la lista dei "todos" e li riorganizza in modo che prima siano visualizzati quelli non completati e poi quelli completati. 
    })
    // La funzione sort sta usando una funzione di confronto che calcola la differenza tra a.isDone e b.isDone. 
    // Quando isDone è false, la differenza è negativa, il che significa che gli elementi con isDone uguale a false vengono posizionati prima di quelli con isDone uguale a true.
    //TRUE: 1 , FALSE: 0
  }
// Ora posso accedere al valore dell'input utilizzando titleValue.
  onClick(titleInput : HTMLInputElement){
    if(titleInput.value){
      // Utilizziamo il servizio "TodoService" per aggiungere un nuovo "todo" utilizzando il valore dell'input.
    this.todoService.addTodo(titleInput.value)
    titleInput.value = "";
  }
}

// qui possiamo utilizzare l'id
onStatusChange(id:string, newStatus:boolean){
  this.todoService.updateToDoStatus(id,newStatus)

}

deleteToDoItem(id:string){
  this.todoService.deleteToDo(id)

}

}
