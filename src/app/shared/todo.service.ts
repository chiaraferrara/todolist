import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})

// sta dichiarando un parametro chiamato firestore di tipo AngularFirestore. 
export class TodoService {
  firestoreCollection : AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore) { 
    this.firestoreCollection = firestore.collection('todos');
  }

  addTodo(title : string){
    // passiamo un oggetto title che salverà la stringa
    this.firestoreCollection.add({
      title,
      isDone : false
    })
  }
}
