import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})

// sta dichiarando un parametro chiamato firestore di tipo AngularFirestore. 
export class TodoService {
  // collection è il database, prende il metodo dal module importato. 
  firestoreCollection : AngularFirestoreCollection;
// metodo all'interno dell'import.
  constructor(private firestore: AngularFirestore) { 
    this.firestoreCollection = firestore.collection('todos');
  }

  addTodo(title : string){
    // passiamo un oggetto title che salverà la stringa
    this.firestoreCollection.add({
      title,
      // non è completata (item in to do)
      isDone : false
    })
  }
}
