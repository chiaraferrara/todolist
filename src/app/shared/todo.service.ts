import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'


// servizio chiamato "TodoService" che gestirà le operazioni sui "todos".


@Injectable({
  providedIn: 'root'
})

// // Dichiarazione di una variabile che rappresenterà la collezione Firestore.
export class TodoService {
  // collection è il database, prende il metodo dal module importato. 
  firestoreCollection : AngularFirestoreCollection;

// Il costruttore accetta un'istanza di AngularFirestore come parametro.
// Inizializziamo la variabile "firestoreCollection" con una collezione Firestore chiamata 'todos'.
  constructor(private firestore: AngularFirestore) { 
    this.firestoreCollection = firestore.collection('todos');
  }
 
// -------------------- Questo metodo consente di aggiungere un nuovo "todo" alla collezione Firestore.--------------------------

  addTodo(title : string){
    // // Creiamo un oggetto che contiene il titolo del "todo" e lo segnala come non completato (isDone: false).
    this.firestoreCollection.add({
      title,
      // non è completata (item in to do)
      isDone : false
    })
  }

  updateToDoStatus(id:string, newStatus:boolean){
    this.firestoreCollection.doc(id).update({isDone:newStatus});

  }
  deleteToDo(id:string){
    this.firestoreCollection.doc(id).delete();
  }
}

