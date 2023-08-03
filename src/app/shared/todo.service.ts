import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  firestoreCollection: AngularFirestoreCollection

  constructor(private firestore: AngularFirestore) {
    this.firestoreCollection = this.firestore.collection('todos')
   }

   addTask(title: string) {
    this.firestoreCollection.add({
      title: title,
      isDone: false
    })
   }

   updateStatus(id: string, newStatus: boolean) {
    debugger
    this.firestoreCollection.doc(id).update({isDone:newStatus})
   }

   updateTask(id: string, newTitle: string) {
    debugger
    this.firestoreCollection.doc(id).update({title:newTitle})
   }

   deleteTask(id: string) {
    this.firestoreCollection.doc(id).delete()
   }
}
